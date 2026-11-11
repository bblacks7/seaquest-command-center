/* SeaQuest Freight Desk — pure calculation module.
   No DOM, no network. Loaded by freight.html AND freight_tests.html.
   Every function is pure so the math can be unit-tested. */
(function(root){
  'use strict';

  function num(v){ const n = typeof v === 'number' ? v : parseFloat(v); return isFinite(n) ? n : 0; }

  // Sum of a quote's line items: [{label, amount}, ...]
  function lineItemsTotal(quote){
    const items = (quote && quote.line_items) || [];
    return items.reduce(function(s, li){ return s + num(li.amount); }, 0);
  }

  // Effective freight total for a quote. If an explicit total is set (>0) use it;
  // otherwise fall back to the sum of line items.
  function quoteTotal(quote){
    if(!quote) return 0;
    const t = num(quote.total);
    if(t > 0) return t;
    return lineItemsTotal(quote);
  }

  // Product (cargo) value for an RFQ = units * FOB cost per unit.
  function productValue(rfq){
    if(!rfq) return 0;
    return num(rfq.unit_count) * num(rfq.product_unit_cost);
  }

  // US import duty amount. For US entries, duty is assessed on the customs/transaction
  // (FOB) value and EXCLUDES international freight & insurance — unlike the CIF basis most
  // other countries use. So duty = productValue(FOB) * duty%. (Best-practice verified.)
  function dutyAmount(rfq){
    return productValue(rfq) * (num(rfq && rfq.duty_pct) / 100);
  }

  // US entry fees that apply to virtually every formal ocean entry, on top of duty:
  //   MPF (Merchandise Processing Fee): ad valorem on cargo value, with a min and max per entry.
  //   HMF (Harbor Maintenance Fee): flat ad valorem on cargo value (ocean imports only).
  // Rates below are indicative — VERIFY against CBP annually (they adjust ~each October).
  // Set rfq.us_entry_fees === false to exclude (e.g. informal entry, or fees quoted elsewhere).
  const US_FEES = { MPF_RATE:0.003464, MPF_MIN:32.71, MPF_MAX:634.62, HMF_RATE:0.00125 };
  function entryFees(rfq){
    if(!rfq || rfq.us_entry_fees === false) return { mpf:0, hmf:0, total:0 };
    const val = productValue(rfq);
    if(val <= 0) return { mpf:0, hmf:0, total:0 };
    let mpf = val * US_FEES.MPF_RATE;
    if(mpf < US_FEES.MPF_MIN) mpf = US_FEES.MPF_MIN;
    if(mpf > US_FEES.MPF_MAX) mpf = US_FEES.MPF_MAX;
    const hmf = val * US_FEES.HMF_RATE;
    return { mpf: round2(mpf), hmf: round2(hmf), total: round2(mpf + hmf) };
  }

  // Full landed cost of a shipment for a given RFQ + one quote.
  // landedTotal = productValue + duty + US entry fees (MPF+HMF) + freight.  perUnit = landedTotal / units.
  function landedCost(rfq, quote){
    const freight = quoteTotal(quote);
    const prod = productValue(rfq);
    const duty = dutyAmount(rfq);
    const fees = entryFees(rfq);
    const total = prod + duty + fees.total + freight;
    const units = num(rfq && rfq.unit_count);
    const perUnit = units > 0 ? total / units : 0;
    return {
      freight: round2(freight),
      productValue: round2(prod),
      duty: round2(duty),
      mpf: fees.mpf,
      hmf: fees.hmf,
      entryFees: fees.total,
      total: round2(total),
      perUnit: round4(perUnit),
      units: units
    };
  }

  // Quote expiry status relative to `today` (Date or 'YYYY-MM-DD').
  // Returns {daysLeft, status}. status: 'none' (no date), 'expired', 'expiring' (<= thresholdDays), 'valid'.
  function quoteExpiry(quote, today, thresholdDays){
    const thr = (thresholdDays == null) ? 7 : thresholdDays;
    if(!quote || !quote.valid_until) return { daysLeft: null, status: 'none' };
    const vu = toDate(quote.valid_until);
    const t = toDate(today) || new Date();
    if(!vu) return { daysLeft: null, status: 'none' };
    const MS = 24*60*60*1000;
    const daysLeft = Math.floor((stripTime(vu) - stripTime(t)) / MS);
    let status;
    if(daysLeft < 0) status = 'expired';
    else if(daysLeft <= thr) status = 'expiring';
    else status = 'valid';
    return { daysLeft: daysLeft, status: status };
  }

  // Rank quotes for an RFQ by landed per-unit cost (ascending; cheapest first).
  // Returns array of {quote, landed, expiry, isCheapest}. Quotes with 0 freight sort last.
  function rankByLanded(rfq, quotes, today){
    const rows = (quotes || []).map(function(q){
      return { quote: q, landed: landedCost(rfq, q), expiry: quoteExpiry(q, today) };
    });
    rows.sort(function(a, b){
      const af = a.landed.freight, bf = b.landed.freight;
      if(af === 0 && bf === 0) return 0;
      if(af === 0) return 1;      // no freight quoted -> bottom
      if(bf === 0) return -1;
      return a.landed.perUnit - b.landed.perUnit;
    });
    let cheapestIdx = rows.findIndex(function(r){ return r.landed.freight > 0; });
    rows.forEach(function(r, i){ r.isCheapest = (i === cheapestIdx); });
    return rows;
  }

  // Build a side-by-side comparison matrix for one RFQ across several quotes.
  // Returns { labels:[all distinct line-item labels], columns:[ {quote, cells:{label:amount}, landed, expiry} ] }
  function cmpMatrix(rfq, quotes, today){
    const labelSet = [];
    (quotes || []).forEach(function(q){
      ((q.line_items)||[]).forEach(function(li){
        if(li.label && labelSet.indexOf(li.label) === -1) labelSet.push(li.label);
      });
    });
    const columns = (quotes || []).map(function(q){
      const cells = {};
      ((q.line_items)||[]).forEach(function(li){ cells[li.label] = num(li.amount); });
      return { quote: q, cells: cells, landed: landedCost(rfq, q), expiry: quoteExpiry(q, today) };
    });
    return { labels: labelSet, columns: columns };
  }

  // ---- helpers ----
  function round2(n){ return Math.round(num(n) * 100) / 100; }
  function round4(n){ return Math.round(num(n) * 10000) / 10000; }
  function toDate(d){
    if(!d) return null;
    if(d instanceof Date) return isNaN(d) ? null : d;
    const s = String(d);
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if(m) return new Date(Number(m[1]), Number(m[2])-1, Number(m[3]));
    const dd = new Date(s); return isNaN(dd) ? null : dd;
  }
  function stripTime(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(); }

  const API = {
    num: num, round2: round2,
    lineItemsTotal: lineItemsTotal, quoteTotal: quoteTotal,
    productValue: productValue, dutyAmount: dutyAmount, entryFees: entryFees,
    landedCost: landedCost, quoteExpiry: quoteExpiry,
    rankByLanded: rankByLanded, cmpMatrix: cmpMatrix
  };
  if(typeof module !== 'undefined' && module.exports) module.exports = API;
  root.FreightCalc = API;
})(typeof window !== 'undefined' ? window : this);
