// SeaQuest Academy - slide-based courses. Overrides the placeholder in config.js.
// Each module: slides [{t, b:[points], ex:{good,bad,script,note}}] then a quiz. Edit/extend freely.
window.SEAQUEST_ACADEMY = [
/* ================= FUNDAMENTALS ================= */
{ id:"who", icon:"\u{1F3ED}", title:"Who We Are", xp:70, badge:{i:"\u{1F3ED}",t:"Insider"}, track:"Fundamentals",
  slides:[
    { t:"The one-line pitch", b:[
        "SeaQuest Global is the US sales arm for our own paper factories overseas. We are veteran-owned.",
        "We make custom paper packaging: shopping bags, boxes, multiwall sacks, and printed packaging.",
        "You are direct sales for the factory, not a middleman or a broker."],
      ex:{script:"Hi, I'm [you] with SeaQuest Global. We're a veteran-owned company with our own paper factories overseas, and I help brands source custom bags, boxes and printed packaging.",
        good:["US sales arm for our factories worldwide"], bad:["We represent the factory","We're factory-direct","We're a broker"]}},
    { t:"How we actually operate", b:[
        "Our factories print everything in-house: full-color art, regulated labels, foil, emboss, barcodes and track-and-trace.",
        "Minimum orders start around 20,000 units, so we focus on real volume.",
        "We earn on markup, not commission. When you win, the company makes money on the product itself."],
      ex:{note:"Because printing is in-house, 'our art is too complex' or 'we need special labels' is never a reason we can't help."}},
    { t:"Your lane", b:[
        "Reps never quote prices. You gather specs and send them to Brandon for a sharp, consistent quote.",
        "This protects margins and keeps every quote unified.",
        "Your job: find the buyer, build the relationship, and get complete specs."],
      ex:{good:["Let me put a quick quote together for you"], bad:["It'll run about X per unit (never quote on your own)"]}},
    { t:"Case in point", b:[
        "Sarah runs purchasing for a 40-location burger chain. She says 'we already have a bag supplier.'",
        "The rep stays on message: veteran-owned, our own factories, in-house printing, and asks who handles packaging.",
        "No pitch, no price. Just credibility and a question."],
      ex:{note:"Result: Sarah gave her direct line and agreed to compare a quote. On message, in our lane, moved forward."}}
  ],
  quiz:[
    { q:"How should you describe SeaQuest?", a:["A packaging broker","A reseller","The US sales arm for our own factories"], correct:2 },
    { q:"Who prepares the price quote?", a:["The rep on the call","Brandon / the quotes team","The factory directly"], correct:1 }]},

{ id:"talk", icon:"\u{1F5E3}️", title:"How We Talk About Ourselves", xp:70, badge:{i:"\u{1F5E3}️",t:"On Message"}, track:"Fundamentals",
  slides:[
    { t:"Words that win", b:[
        "Say we are the US sales arm for our factories worldwide.",
        "Lead with veteran-owned and our own sustainable paper manufacturing when it helps.",
        "Keep it human and short. No em-dashes. Two or three sentences in a cold email."],
      ex:{good:["US sales arm for our factories worldwide","Veteran-owned paper packaging company","We run our own factories"],
        bad:["We represent...","We broker...","We're factory-direct"]}},
    { t:"Words that lose", b:[
        "Never say we 'represent', 'broker', or are 'factory-direct'. It sounds like a middleman.",
        "Do not overstate our accounts, and never name our factory.",
        "Don't oversell. Confidence is quiet."],
      ex:{note:"If asked who the factory is: 'We produce through our own manufacturing partners overseas.' Keep it simple, don't name them."}},
    { t:"The standard cold email", b:[
        "Two to three sentences: who you are, what we do, and ask for the right person.",
        "Friendly, human, and specific to them.",
        "No em-dashes, no walls of text."],
      ex:{script:"Hi [Name], I'm [you], owner of SeaQuest Global, a veteran-owned company with our own sustainable paper factories overseas. Could you point me to whoever handles packaging or vendor purchasing? Happy to put a quick quote together."}},
    { t:"Case in point", b:[
        "A rep's first email opened with 'We represent a factory in Asia...' and got no reply.",
        "Rewritten: 'veteran-owned, our own factories, who handles your packaging?' - a reply came the next day.",
        "Same offer, different words. Language changed the outcome."],
      ex:{good:["Our own factories, veteran-owned, who handles packaging?"], bad:["We represent a factory overseas"]}}
  ],
  quiz:[
    { q:"Which phrase is NOT allowed?", a:["US sales arm for our factories","We represent the factory","Veteran-owned paper company"], correct:1 },
    { q:"Ideal cold email length?", a:["2 to 3 sentences","3 full paragraphs","One word"], correct:0 }]},

{ id:"contact", icon:"\u{1F4DE}", title:"Making Contact", xp:70, badge:{i:"\u{1F4DE}",t:"First Contact"}, track:"Fundamentals",
  slides:[
    { t:"The goal of the first touch", b:[
        "Your only goal on a cold reach is to find whoever handles packaging or vendor purchasing.",
        "You are not selling yet. You are finding the right door.",
        "Use every channel: call, email, and LinkedIn."],
      ex:{script:"Hi, quick question - who on your team handles packaging or vendor purchasing? I'd love to get them a quick quote."}},
    { t:"Working the channels", b:[
        "Call first when they're open, email as backup, LinkedIn to find names and titles.",
        "Keep intros to two or three sentences.",
        "Use the app's email templates and Ask Claude to draft fast."],
      ex:{good:["Call during their local business hours","Send a short follow-up email the same day"], bad:["Leave a 60-second rambling voicemail","Send three paragraphs"]}},
    { t:"Never lose the thread", b:[
        "Log every touch in the app and set a next step with a date.",
        "No next step means the lead goes cold.",
        "Persistence beats brilliance. Most deals take several touches."],
      ex:{note:"After every call or email, set a follow-up date. The app resurfaces it in Needs Attention."}},
    { t:"Case in point", b:[
        "Touch 1: a call, buyer unavailable, got the name from reception.",
        "Touch 2: a two-sentence email that afternoon. No reply.",
        "Touch 3: a short LinkedIn note referencing the email. The buyer replied and booked a call."],
      ex:{note:"Most wins come on touch 3 to 5. The rep who logs and follows up is the rep who lands the meeting."}}
  ],
  quiz:[
    { q:"What is the goal of a first cold reach?", a:["Close the sale","Find who handles packaging or purchasing","Quote a price"], correct:1 },
    { q:"Best practice after every touch?", a:["Forget it","Log it and set a next step","Only email"], correct:1 }]},

{ id:"gate", icon:"\u{1F6AA}", title:"Getting Past the Gatekeeper", xp:70, badge:{i:"\u{1F6AA}",t:"Door Opener"}, track:"Fundamentals",
  slides:[
    { t:"Gatekeepers are allies", b:[
        "Receptionists and assistants decide who gets through. Treat them as partners, not obstacles.",
        "Be warm, brief, and confident.",
        "Never lie or bulldoze. It burns the account."],
      ex:{good:["Warm, brief, ask by role","Thank them by name"], bad:["Push past them","Be vague or evasive"]}},
    { t:"Ask by role, give a reason", b:[
        "Ask by role: 'Who handles your packaging or vendor purchasing?'",
        "Give a one-line reason: 'We supply custom paper packaging from our own factories.'",
        "Ask for a name, a direct line, and an email."],
      ex:{script:"Hi, I'm [you] with SeaQuest Global. We make custom paper packaging. Who handles your packaging purchasing, and what's the best way to reach them?"}},
    { t:"If you're blocked", b:[
        "Still get a name. A name lets you follow up by email and LinkedIn.",
        "Ask when is a good time to reach the buyer directly.",
        "Leave a short, friendly message and follow up."],
      ex:{note:"'No problem - what's their name so I can send a quick note?' gets you further than pushing."}},
    { t:"Case in point", b:[
        "The gatekeeper wouldn't transfer the rep to purchasing.",
        "The rep stayed friendly, got the buyer's name and email, and thanked her by name.",
        "A short email the same day, referencing the call, landed the meeting."],
      ex:{good:["Thanks so much - what's her name and email so I can send a quick note?"], bad:["Just put me through to whoever buys stuff"]}}
  ],
  quiz:[
    { q:"How do you treat a gatekeeper?", a:["Push past them","Warm and brief, ask for the right person by role","Hang up"], correct:1 },
    { q:"What should you leave the call with?", a:["A name, direct line and email","Nothing","A signed order"], correct:0 }]},

{ id:"convo", icon:"\u{1F91D}", title:"The Conversation", xp:70, badge:{i:"\u{1F91D}",t:"Closer's Ear"}, track:"Fundamentals",
  slides:[
    { t:"Lead with value", b:[
        "Open with how we help: custom packaging from our own factories, printed in-house.",
        "Make it about their brand and their problem, not our company story.",
        "Sustainability and quality are strong hooks."],
      ex:{script:"We help brands like yours source custom bags and boxes from our own paper factories, with in-house printing. Are you happy with your current packaging and supplier?"}},
    { t:"Listen and dig", b:[
        "Ask about sizes, volumes, current supplier, and any pain.",
        "Listen more than you talk. Take notes in the account.",
        "Their pain is your opening."],
      ex:{good:["What sizes and volumes are you running?","What do you wish your current bags did better?"], bad:["Talking over them","Pitching before you understand their need"]}},
    { t:"Never quote, always advance", b:[
        "Do not quote a price. Offer to put a quick quote together.",
        "Get the specs: dimensions, gsm, quantity, and artwork.",
        "End with a next step and a date."],
      ex:{good:["Let me put a quick quote together - can you share your sizes and volumes?"], bad:["It'll be about X per unit"]}},
    { t:"Case in point", b:[
        "The buyer mentioned their current bags tear at the handle.",
        "The rep asked two more questions, then positioned a heavier gsm and reinforced handle.",
        "That one pain point became the whole reason to switch. The rep captured specs and set a quote date."],
      ex:{note:"Find the pain, connect our strength to it, then get the specs. That's the conversation working."}}
  ],
  quiz:[
    { q:"When they ask for a price, you...", a:["Quote a number on the spot","Offer to put a quick quote together and get specs","End the call"], correct:1 },
    { q:"Which specs matter most?", a:["Size, gsm, quantity, artwork","Only their name","Their favorite color"], correct:0 }]},

{ id:"rules", icon:"✅", title:"Do's and Don'ts", xp:70, badge:{i:"✅",t:"By the Book"}, track:"Fundamentals",
  slides:[
    { t:"The Do's", b:[
        "Do keep it short and human.",
        "Do ask for the buyer and follow up fast.",
        "Do log every touch and set the next step."],
      ex:{good:["Follow up within 1-2 days","Log the call and set a follow-up date","Ask who handles packaging"]}},
    { t:"The Don'ts", b:[
        "Don't quote prices - that goes through Brandon.",
        "Don't say broker, represent, or factory-direct.",
        "Don't overstate accounts or name our factory. Don't pitch cannabis product packaging."],
      ex:{bad:["Quoting a price on the spot","'We represent the factory'","Naming the factory","Cannabis product packaging"]}},
    { t:"Why it matters", b:[
        "Consistent language protects our brand and our margins.",
        "Quotes through Brandon keep pricing sharp and unified.",
        "These guardrails keep every rep credible."],
      ex:{note:"When in doubt, gather the info and check with Brandon. Never freelance on price."}},
    { t:"Case in point", b:[
        "A buyer pushed hard for a number. The rep almost blurted 'about nine cents a bag.'",
        "Instead the rep said 'let me get you a sharp quote' and gathered specs.",
        "Brandon quoted lower than the guess - and the rep would have left money on the table."],
      ex:{note:"Guessing a price on the spot either kills margin or scares the buyer. Gather specs, quote through Brandon."}}
  ],
  quiz:[
    { q:"Which is a DON'T?", a:["Follow up","Quote a price yourself","Log the call"], correct:1 },
    { q:"Naming our factory to a prospect is...", a:["Fine","Not allowed","Required"], correct:1 }]},

{ id:"facts", icon:"\u{1F9E0}", title:"Info to Remember", xp:70, badge:{i:"\u{1F9E0}",t:"Sharp Mind"}, track:"Fundamentals",
  slides:[
    { t:"The numbers", b:[
        "Minimum orders start around 20,000 units.",
        "We sell across the US, Mexico, and Poland/EU, with a rep per market.",
        "Pricing always goes through Brandon."],
      ex:{note:"If they're well under 20k units, note it and nurture. It may grow."}},
    { t:"Sourcing and duties", b:[
        "China paper bags carry heavy anti-dumping duties, so we source from non-covered origins.",
        "We handle the sourcing math so the customer doesn't have to.",
        "This is a strength: we deliver value without the duty hit."],
      ex:{script:"We source smartly around trade duties so you get a strong price without the headaches."}},
    { t:"Capabilities to name-drop", b:[
        "Our factories handle compliance labels, barcodes, and track-and-trace in-house.",
        "Full-color, foil, emboss, and specialty finishes are all on the table.",
        "Sustainable paper is a core part of our story."],
      ex:{good:["We can do FDA warnings, multi-language, foil and emboss in-house","We can add GS1 barcodes and QR track-and-trace"]}},
    { t:"Case in point", b:[
        "A buyer worried an overseas supplier meant surprise import duties on paper bags.",
        "The rep explained we source from non-covered origins, so no anti-dumping hit.",
        "The concern that was almost a dealbreaker became a reason to trust us."],
      ex:{note:"Knowing the duty story turns a scary objection into proof we know our business."}}
  ],
  quiz:[
    { q:"Roughly where does our minimum order start?", a:["20,000 units","10 units","1 million units"], correct:0 },
    { q:"Where do prices come from?", a:["The rep","Brandon / quotes","The prospect"], correct:1 }]},

/* ================= CLOSING MASTERCLASS ================= */
{ id:"close-mindset", track:"Closing Masterclass", icon:"\u{1F3AF}", title:"1. The Closer's Mindset", xp:80, badge:{i:"\u{1F3AF}",t:"Closer Mentality"},
  slides:[
    { t:"Closing is a habit, not a moment", b:[
        "Closing starts at hello. Every touch moves the deal forward or lets it stall.",
        "Assume the sale. Speak as if working together is the natural next step.",
        "Your energy sets the tone. Certainty is contagious."],
      ex:{good:["When we set up your first run...","Once you approve the artwork..."], bad:["If you maybe want to possibly try us..."]}},
    { t:"Help them buy", b:[
        "You're not pressuring, you're solving a packaging problem.",
        "People buy to fix a pain or reach a goal. Find theirs.",
        "The best close feels like help, not a pitch."],
      ex:{script:"My job is to make this easy for you - get you a sharp quote and packaging that makes your brand look great."}},
    { t:"Qualify hard, disqualify fast", b:[
        "Our sweet spot is real volume, around 20,000+ units.",
        "A dragging 'maybe' is a 'no' in disguise. Push for a clear next step.",
        "Spend your time where there is pain, budget, and timing."],
      ex:{good:["What volumes are you running today?","When's your next reorder or launch?"], bad:["Chasing a tire-kicker for weeks with no timeline"]}},
    { t:"Prep breeds confidence", b:[
        "Know their brand, their current packaging, and one clear reason we fit before you call.",
        "Confidence comes from preparation, not hype.",
        "Walk in expecting to help them decide."],
      ex:{note:"Two minutes on their website before a call changes the whole conversation."}},
    { t:"Case in point", b:[
        "A nervous new rep hedged: 'if you ever maybe want to try us sometime.' The buyer shrugged.",
        "Next call, the rep used assumptive language: 'when we run your first order...'.",
        "Same buyer, more certainty, and this time they leaned in and asked about timing."],
      ex:{good:["When we run your first order...","Once you approve the art..."], bad:["If you ever maybe want to try us..."]}}
  ],
  quiz:[
    { q:"Closing begins...", a:["only at the very end","at hello, on every touch","after the quote is sent"], correct:1 },
    { q:"A deal that keeps stalling with no next step is...", a:["a strong lead","basically a no","already won"], correct:1 },
    { q:"Our sweet spot is...", a:["any size order","real volume around 20,000+ units","one-off samples"], correct:1 }]},

{ id:"close-discovery", track:"Closing Masterclass", icon:"\u{1F50E}", title:"2. Qualifying & Discovery", xp:80, badge:{i:"\u{1F50E}",t:"Deal Detective"},
  slides:[
    { t:"Talk to the right person", b:[
        "Confirm you're with the decision-maker or a real influencer.",
        "If not, be warm and ask for an intro to them.",
        "Selling hard to someone who can't buy wastes everyone's time."],
      ex:{script:"Are you the person who signs off on packaging, or should we loop someone else in?"}},
    { t:"Find the pain", b:[
        "Ask what they dislike about their current packaging or supplier.",
        "Cost, quality, lead time, minimums, service - dig for the sore spot.",
        "No pain, no urgency."],
      ex:{good:["What would you change about your current bags?","How's your current supplier on lead times?"], bad:["So... do you want to buy packaging?"]}},
    { t:"Get the numbers and timing", b:[
        "Sizes, monthly or annual volume, and how they reorder.",
        "Their next reorder or product launch is your window.",
        "Timing tells you how hard to push right now."],
      ex:{script:"What sizes and volumes are you running, and when's your next reorder?"}},
    { t:"Score the deal", b:[
        "Pain plus timing plus volume equals a real opportunity.",
        "Missing one? Nurture and set a follow-up date.",
        "Write the compelling reason to change in the account notes."],
      ex:{note:"No pain and no timeline isn't dead - it's a follow-up. Set the date."}},
    { t:"Case in point", b:[
        "In discovery, the rep learned the buyer was launching a new product line in eight weeks.",
        "That launch was the timing window - a hard deadline the buyer couldn't miss.",
        "The rep flagged it as hot, prioritized specs, and worked backward from the launch date."],
      ex:{note:"A launch or reorder date is gold. It creates natural urgency you don't have to manufacture."}}
  ],
  quiz:[
    { q:"Before investing time, confirm they are...", a:["a decision-maker or influencer","a competitor","just browsing"], correct:0 },
    { q:"Your best timing window is...", a:["never","their next reorder or launch","a random Tuesday"], correct:1 },
    { q:"No pain and no timeline means...", a:["close immediately","likely not ready, set a follow-up","raise the price"], correct:1 }]},

{ id:"close-specs", track:"Closing Masterclass", icon:"\u{1F4D0}", title:"3. Getting the Specs", xp:90, badge:{i:"\u{1F4D0}",t:"Spec Master"},
  slides:[
    { t:"For us, specs ARE the close", b:[
        "The moment you have complete specs, Brandon can quote and the deal is real.",
        "A full spec sheet is a hot lead. Missing specs stall everything.",
        "Make gathering specs feel easy and collaborative."],
      ex:{script:"Let's get you a sharp quote. I just need a few quick details."}},
    { t:"The spec checklist, part 1", b:[
        "Item: bag, box, or sack.",
        "Dimensions and paper weight (gsm).",
        "Material: kraft or white, FSC if they need it."],
      ex:{good:["'Roughly what size, and do you know the paper weight?'","'Kraft or white?'"]}},
    { t:"The spec checklist, part 2", b:[
        "Quantity, print (colors and artwork), handles or finish.",
        "Ship-to city and the deadline.",
        "Ask for their current artwork or a sample."],
      ex:{note:"In-house printing means complex art and regulated labels are never a blocker. Say so."}},
    { t:"Hand it off clean", b:[
        "Reps don't price. Send the complete specs to Brandon for the quote.",
        "A complete, tidy spec sheet gets a faster, sharper quote.",
        "Set expectations: 'I'll get this to our team and come back with a quote.'"],
      ex:{good:["I'll put these specs together and get you a quote"], bad:["That'll be about X per unit"]}},
    { t:"Case in point", b:[
        "On the call, the rep calmly walked the spec checklist: item, size, gsm, quantity, art, ship-to, deadline.",
        "By the end, the spec sheet was complete. The rep sent it to Brandon that afternoon.",
        "Brandon quoted the same day - and a same-day quote feels premium to the buyer."],
      ex:{note:"Complete specs in, fast quote out. Speed and completeness are how you look like a pro."}}
  ],
  quiz:[
    { q:"For SeaQuest, the real close is...", a:["quoting a price yourself","getting complete specs to Brandon","sending a brochure"], correct:1 },
    { q:"Which is NOT a spec you need?", a:["dimensions and gsm","quantity and artwork","their CEO's birthday"], correct:2 },
    { q:"Who prepares the price?", a:["the rep","Brandon / quotes","the factory"], correct:1 }]},

{ id:"close-objections", track:"Closing Masterclass", icon:"\u{1F6E1}️", title:"4. Handling Objections", xp:100, badge:{i:"\u{1F6E1}️",t:"Objection Slayer"},
  slides:[
    { t:"Objections are green lights", b:[
        "An objection means they're seriously considering it.",
        "Stay calm and curious, never defensive.",
        "Use feel, felt, found: I understand how you feel, others felt the same, here's what they found."],
      ex:{script:"I hear you. A lot of our best customers felt the same at first, and here's what they found..."}},
    { t:"Objection: 'Your price / just cheaper elsewhere'", b:[
        "Never quote on the spot. Anchor on value, not a number.",
        "Our own factories and smart sourcing mean real value, and a quote is free to compare.",
        "Ask what 'good' looks like for them so the quote hits."],
      ex:{good:["Let me get you a sharp quote to compare, no obligation - what price range are you working with?"], bad:["We're cheaper (you can't quote, so don't claim it)"]}},
    { t:"Objection: 'We already have a supplier'", b:[
        "Great - that means they buy this and value it. You're in the right place.",
        "Ask for a side-by-side quote. It costs them nothing and keeps their supplier honest.",
        "Look for a gap: lead time, minimums, quality, or service."],
      ex:{script:"Makes sense. Most of our customers had a supplier too. What would have to be better for you to consider a switch?"}},
    { t:"Objection: 'Minimum too high' / 'You're overseas'", b:[
        "Minimum: bundle their SKUs or set an annual program to reach the 20k volume.",
        "Overseas: we run our own factories, print in-house including compliance labels, and source around duties.",
        "Turn each concern into a reason we're actually the better fit."],
      ex:{script:"We can combine your sizes into one run to hit the minimum, and everything - including labels - is printed in our own factories."}},
    { t:"Objection: 'Just send me info'", b:[
        "That's usually a polite stall.",
        "Pin a specific next step and a date instead of emailing a PDF into the void.",
        "Give them a concrete reason to talk again."],
      ex:{good:["Happy to - can we grab 10 minutes Thursday to walk through a quote?"], bad:["Emailing a brochure and hoping"]}},
    { t:"Case in point", b:[
        "The buyer said 'we're a little nervous about overseas suppliers.'",
        "The rep didn't get defensive. Feel, felt, found: acknowledged it, then explained our own factories and in-house compliance labels.",
        "The concern flipped into confidence, and the buyer asked for a quote."],
      ex:{note:"Every objection is a door. Acknowledge, reframe with a real SeaQuest strength, then advance."}}
  ],
  quiz:[
    { q:"An objection usually means...", a:["they hate you","they're considering it","the call is over"], correct:1 },
    { q:"When they push on price, you...", a:["quote a number fast","offer a sharp quote and lead with value","hang up"], correct:1 },
    { q:"'Just send me info' is best handled by...", a:["emailing a PDF and waiting","pinning a specific next step and date","giving up"], correct:1 }]},

{ id:"close-ask", track:"Closing Masterclass", icon:"\u{1F91D}", title:"5. Trial Closes & Asking", xp:90, badge:{i:"\u{1F91D}",t:"The Ask"},
  slides:[
    { t:"Trial closes", b:[
        "Test the temperature before the big ask.",
        "A trial close reveals objections early, while you can still handle them.",
        "Keep it light and hypothetical."],
      ex:{script:"If the quote lands where you'd like, any reason we couldn't do a first run?"}},
    { t:"Assume it's happening", b:[
        "Use assumptive language: the first order, artwork approval, timing.",
        "Talk about 'when', not 'if'.",
        "This gently moves them toward yes."],
      ex:{good:["When we run your first order...","Once you approve the artwork..."], bad:["If you ever decide to maybe try..."]}},
    { t:"Make the ask", b:[
        "For us, the quote request is the ask. Get them to commit to reviewing it and deciding by a date.",
        "Be direct and warm. Then stop talking.",
        "Silence after the ask is powerful. Let them answer."],
      ex:{script:"I'll get you the quote by Thursday. If it looks good, can we aim to lock a first run next week?"}},
    { t:"Lock the next step", b:[
        "Every conversation ends with a next step tied to a date.",
        "Summarize the agreement out loud so you're both clear.",
        "Never leave it at 'I'll follow up sometime'."],
      ex:{good:["So I'll send the quote Thursday, you'll review by Monday, and we'll talk Tuesday. Sound good?"]}},
    { t:"Case in point", b:[
        "The rep floated a trial close: 'any reason we couldn't do a first run if the quote's right?'",
        "The buyer named one worry about lead time. The rep handled it, then asked and went quiet.",
        "The buyer agreed to review the quote and decide by Friday. A soft ask, a firm date."],
      ex:{note:"The trial close surfaced the last objection. Handling it, then asking, sealed the next step."}}
  ],
  quiz:[
    { q:"A trial close...", a:["ends the relationship","tests how ready they are to buy","quotes a price"], correct:1 },
    { q:"Right after you ask for the business, you should...", a:["keep talking","stay silent and let them answer","change the subject"], correct:1 },
    { q:"Every call should end with...", a:["a vague maybe","a next step tied to a date","a price"], correct:1 }]},

{ id:"close-handoff", track:"Closing Masterclass", icon:"\u{1F3C6}", title:"6. Quote Handoff & Sealing It", xp:100, badge:{i:"\u{1F3C6}",t:"Deal Closer"},
  slides:[
    { t:"Speed wins", b:[
        "Follow up within 1 to 2 days of any inbound reply or quote.",
        "Use the Needs Attention list - inbound replies go to the top.",
        "The fastest, most helpful rep usually wins the order."],
      ex:{note:"Mark inbound replies with the Reply button. The app sets a next-day deadline for you."}},
    { t:"Honest urgency", b:[
        "Create real urgency: lead times, one-time plate and setup costs, quote validity windows.",
        "Never fake scarcity. Use the true reasons to act now.",
        "A launch date or reorder deadline is your best urgency."],
      ex:{script:"Plates and setup are a one-time cost, so it makes sense to lock the run before your reorder date."}},
    { t:"Seal it", b:[
        "Confirm the details on the quote, then ask for the PO and final artwork approval.",
        "Once you have a yes, lock the PO, confirm artwork, and hand off to production.",
        "Don't leave the yes hanging - nail down the paperwork."],
      ex:{good:["Great - can you send over a PO and sign off on the artwork so we can schedule production?"]}},
    { t:"Close the loop in the app", b:[
        "Mark it Won and enter the order value. That grows your P&L and forecast.",
        "Log every step so the next reorder is easy.",
        "Set a follow-up for the reorder. Won accounts become repeat revenue."],
      ex:{note:"Entering the deal value is how your Booked number and the team forecast go up."}},
    { t:"Case in point", b:[
        "An inbound reply came in at 4pm. The rep replied by 8am next morning, first thing.",
        "They tied urgency to the buyer's real reorder date and asked for the PO and artwork.",
        "PO in hand, marked Won with the order value. Then set a reorder follow-up for 90 days out."],
      ex:{note:"Fast follow-up plus honest urgency plus clean paperwork equals a closed deal and a repeat customer."}}
  ],
  quiz:[
    { q:"How fast should you follow up on an inbound reply?", a:["within 1 to 2 days","within a month","whenever you get to it"], correct:0 },
    { q:"To seal it, confirm the quote and then get...", a:["nothing","the PO and artwork approval","a brand new lead"], correct:1 },
    { q:"After you win, in the app you...", a:["do nothing","mark Won and enter the order value","delete the account"], correct:1 }]},

/* ================= CAPSTONE: DEAL WALKTHROUGH ================= */
{ id:"deal-walkthrough", track:"Capstone", icon:"\u{1F3AC}", title:"Deal Walkthrough: Coastal Coffee Co", xp:150, badge:{i:"\u{1F3AC}",t:"Full-Cycle Closer"},
  slides:[
    { t:"The target", b:[
        "Coastal Coffee Co: a 60-location regional coffee chain, growing fast.",
        "They use paper hot cups, sleeves, and retail bean bags - real, repeat volume.",
        "Why them: volume, a clear packaging need, and room to grow."],
      ex:{note:"Pick targets with real volume and a clear need. Coastal checks both boxes."}},
    { t:"Research", b:[
        "The rep used Research with Claude to pull Coastal and a few peers with contacts.",
        "Imported them, and the account showed a procurement lead: 'Dana Ruiz, Purchasing'.",
        "Two minutes on their site: new stores opening, sustainability messaging."],
      ex:{script:"[Claude prompt] Find real coffee chains in the Southeast that buy paper cups and bags at volume, with a procurement contact."}},
    { t:"The gatekeeper", b:[
        "First call, reception picked up. The rep stayed warm and asked by role.",
        "Got Dana's direct line and email. Thanked reception by name.",
        "Sent a two-sentence email the same afternoon."],
      ex:{script:"Hi, who handles your packaging purchasing, and what's the best way to reach them? We make custom paper cups and bags."}},
    { t:"First call opener", b:[
        "Reached Dana. Two-sentence intro, then a question, not a pitch.",
        "Veteran-owned, our own factories, in-house printing.",
        "Asked if she was happy with her current cups and supplier."],
      ex:{script:"Hi Dana, I'm [you] with SeaQuest Global. We make custom paper cups and bags from our own factories. Are you happy with your current packaging and supplier?"}},
    { t:"Discovery: the pain", b:[
        "Dana's cups were fine, but lead times from her supplier were slipping as stores opened.",
        "She also wanted better sustainability messaging on the cups for the brand refresh.",
        "The rep dug: sizes, volumes, and the timing of the refresh."],
      ex:{good:["What's your current supplier like on lead times?","What would you change about the cups?"]}},
    { t:"Discovery: numbers and timing", b:[
        "About 900,000 cups a year across three sizes, plus retail bean bags.",
        "A brand refresh launches in 10 weeks - a hard deadline.",
        "The rep flagged the account hot and worked backward from the launch."],
      ex:{note:"Volume well over our minimum, real pain (lead times), and a deadline. This is a real deal."}},
    { t:"Getting the specs", b:[
        "The rep walked the checklist: cup sizes, paper weight, quantities, print colors, and the new artwork.",
        "Plus the retail bags: dimensions, kraft, handles, quantity, ship-to, and the launch deadline.",
        "Asked Dana to send the refreshed artwork."],
      ex:{script:"Let's get you a sharp quote. Can you send the new artwork, and confirm the three cup sizes and annual volumes?"}},
    { t:"The objection", b:[
        "Dana paused: 'You're overseas - I'm nervous about lead times and duties.'",
        "The rep used feel, felt, found: acknowledged it, then explained our own factories, in-house printing, and smart sourcing around duties.",
        "Reframed lead time as a strength: we plan production around her launch date."],
      ex:{script:"I understand. Others felt the same, and what they found is our own factories and planning around their date actually made lead times more reliable."}},
    { t:"Trial close and the ask", b:[
        "Rep: 'If the quote lands where you'd like, any reason we couldn't run the cups and bags together?'",
        "Dana's only worry was hitting the launch. The rep committed to a timeline that clears it.",
        "The rep asked for a decision date, then went quiet."],
      ex:{good:["I'll get you the quote by Thursday. If it works, can we lock production Monday to clear your launch?"]}},
    { t:"Quote handoff", b:[
        "Reps don't price. The rep packaged the complete specs and sent them to Brandon.",
        "Set expectations with Dana: quote by Thursday.",
        "Logged everything and set a follow-up date."],
      ex:{note:"Complete specs to Brandon on the same day means a fast, sharp quote back."}},
    { t:"Follow up fast", b:[
        "Dana replied Thursday night with a question about the bag handles.",
        "The app flagged it inbound. The rep answered first thing Friday, within the 1-2 day rule.",
        "Tied urgency to her launch: lock production now to clear the date."],
      ex:{note:"Speed on the inbound reply kept the deal warm and showed Dana we're reliable."}},
    { t:"Sealing it and the reorder", b:[
        "Dana approved the artwork and sent a PO for the cups and bags.",
        "The rep confirmed the PO, locked artwork, and handed off to production.",
        "Marked Won in the app with the order value, then set a 90-day reorder follow-up."],
      ex:{note:"One good deal became a repeat customer. That reorder follow-up is future revenue on autopilot."}}
  ],
  quiz:[
    { q:"What made Coastal a strong target?", a:["low volume, no need","real volume, clear need, room to grow","they were nearby"], correct:1 },
    { q:"When Dana worried about overseas lead times, the rep...", a:["quoted a low price","used feel-felt-found and reframed our factories as a strength","gave up"], correct:1 },
    { q:"After the PO came in, the rep...", a:["did nothing","marked Won, entered the value, set a reorder follow-up","deleted the account"], correct:1 }]}
];
