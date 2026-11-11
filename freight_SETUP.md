# Freight Desk — setup & how it works

A private logistics workspace for requesting and comparing ocean-freight quotes. Lives in the
Command Center app, behind the same Supabase login. **Not linked from the public site; contact
data lives only in Supabase behind Row Level Security — never in this repo.**

Branch: `freight-module`. Files: `freight.html`, `freight_calc.js`, `freight_tests.html`,
`freight_schema.sql`. (`freight_seed.sql` is generated locally and **gitignored**.)

---

## 1. Apply the database (one time)

In the Supabase dashboard → **SQL Editor**, run in this order:

1. **`freight_schema.sql`** — creates the 5 tables (providers, contacts, rfqs, rfq_sends, quotes),
   turns on RLS, and gates every table to approved CRM users via `is_approved()`.
2. **`freight_seed.sql`** — loads the **50 researched providers + 38 contacts**. This file is on
   your machine only (gitignored because it holds contact emails/phones). Run it once.

Then run the **SECURITY VERIFICATION** block at the bottom of `freight_schema.sql` (6 checks) to
confirm RLS is on and an unapproved user sees nothing.

> I could not apply these for you — it needs the Supabase **service_role**/management token, which
> is intentionally not in this repo. Pasting the two files into the SQL editor is the whole job.

## 2. Open it

`freight.html` sits next to `index.html`, so once the app is deployed it's at
`…/freight.html`. Sign in with your Command Center account (must be **approved**). Add a link from
the CRM nav if you want, or just bookmark it. It reuses `config.js` (public anon key only).

---

## 3. What it does (the 4 parts)

- **Directory** — all providers (forwarder / NVOCC / customs broker / drayage / 3PL) with contacts.
  Filter by type, **lane** (China→US West Coast, Oman→US), and status
  (new / contacted / quoted / preferred / do-not-use). Full add/edit for providers and contacts.
- **New RFQ** — fill the spec sheet **once**. Origin ports are locked (Xiamen/Shenzhen/Ningbo/
  Shanghai/Sohar/Salalah); **final delivery is editable per deal** (default San Diego). It generates
  a **standardized spec sheet** you send to every shipper so quotes come back comparable, then lets
  you **Draft in Gmail** to each picked provider — opens a prefilled Gmail compose that auto-saves as
  a **draft. Nothing is ever sent automatically.** (Also "Copy spec sheet" / "Print / PDF".)
- **Compare** — log each quote (line items, total, transit, validity, terms) as shippers reply. See
  them **side by side**, with **expiring/expired flags** and **landed cost per unit**
  (cargo + duty + US entry fees + freight). The cheapest landed option is starred.

## 4. Landed-cost model (verified against freight best practices)

`landed total = FOB cargo value + duty + US entry fees (MPF+HMF) + freight`, then ÷ units.
- **Duty** is on the **FOB/customs value** and **excludes international freight** — correct US basis.
- **MPF/HMF** are included by default (toggle off per-RFQ). Rates are in `freight_calc.js`
  (`US_FEES`) — **verify against CBP annually**, they adjust ~each October.
- Math is covered by **45 passing tests** — open `freight_tests.html` (served over http) to run them.

## 5. Part-2 research — important caveats before you email anyone

The 50 providers were researched from company sites, FMC/CBP references, and trade directories on
2026-11-11. **Every contact is marked `unverified` and carries a source URL + date.**
- **License numbers are mostly blank** — only 2 FMC OTI numbers were verifiable (OEC Group 016023,
  All TransportDepot 021693N). Fill the rest from CBP's permitted-broker lists (ports 2704/2501) or
  the FMC OTI search if you need them.
- Many contacts are **general inboxes** (info@/sales@), not named people. Strongest **named** leads:
  OIA Global (Jacqueline Lopez), Western Overseas (Pat Vangtan), ITC-Diligence (David Harlow),
  AIT Tahipo (Ivo Adamu), IAB (Carolyn Goding), DSV Oman (Elie Beaino).
- A few phones come from third-party directories (flagged by their source URL) — confirm before use.
- A couple of firms (Weber, Precision, Unisco) appear under two categories because they genuinely do
  both (e.g. drayage **and** warehousing).

> **Next step (future):** Apollo is wired for *confirming/enriching* these contacts before outreach —
> that automation isn't part of this build, per your note.

## 6. Security model (one thing to internalize)

`freight.html` is a **public file** and the anon key is **meant to be public**. The only thing
protecting your contacts is **RLS in Supabase**. So: never hide data in the page, never put the
service_role key anywhere client-side, and keep `is_approved()` correct. The verification block in
the schema is how you confirm it.
