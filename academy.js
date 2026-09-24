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
      ex:{good:["Let me put a quick quote together for you"], bad:["It'll run about X per unit (never quote on your own)"]}}
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
      ex:{script:"Hi [Name], I'm [you], owner of SeaQuest Global, a veteran-owned company with our own sustainable paper factories overseas. Could you point me to whoever handles packaging or vendor purchasing? Happy to put a quick quote together."}}
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
      ex:{note:"After every call or email, set a follow-up date. The app resurfaces it in Needs Attention."}}
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
      ex:{note:"'No problem - what's their name so I can send a quick note?' gets you further than pushing."}}
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
      ex:{good:["Let me put a quick quote together - can you share your sizes and volumes?"], bad:["It'll be about X per unit"]}}
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
      ex:{note:"When in doubt, gather the info and check with Brandon. Never freelance on price."}}
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
      ex:{good:["We can do FDA warnings, multi-language, foil and emboss in-house","We can add GS1 barcodes and QR track-and-trace"]}}
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
      ex:{note:"Two minutes on their website before a call changes the whole conversation."}}
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
      ex:{note:"No pain and no timeline isn't dead - it's a follow-up. Set the date."}}
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
      ex:{good:["I'll put these specs together and get you a quote"], bad:["That'll be about X per unit"]}}
  ],
  quiz:[
    { q:"For SeaQuest, the real close is...", a:["quoting a price yourself","getting complete specs to Brandon","sending a brochure"], correct:1 },
    { q:"Which is NOT a spec you need?", a:["dimensions and gsm","quantity and artwork","their CEO's birthday"], correct:2 },
    { q:"Who prepares the price?", a:["the rep","Brandon / quotes","the factory"], correct:1 }]},

{ id:"close-objections", track:"Closing Masterclass", icon:"\u{1F6E1}️", title:"4. Handling Objections", xp:90, badge:{i:"\u{1F6E1}️",t:"Objection Slayer"},
  slides:[
    { t:"Objections are green lights", b:[
        "An objection means they're seriously considering it.",
        "Stay calm and curious, never defensive.",
        "Use feel, felt, found: I understand how you feel, others felt the same, here's what they found."],
      ex:{script:"I hear you. A lot of our best customers felt the same at first, and here's what they found..."}},
    { t:"Price and 'we have a supplier'", b:[
        "Price: never quote on the spot. Offer a sharp quote and lead with value from our own factories.",
        "'We already have a supplier': it costs nothing to compare. Ask for a side-by-side quote.",
        "Position a quote as low-risk and easy."],
      ex:{good:["Let me get you a sharp quote to compare - no obligation"], bad:["We're cheaper (you can't quote, so don't claim it)"]}},
    { t:"Minimums and 'you're overseas'", b:[
        "'Your minimum is too high': bundle SKUs or set up an annual program to reach volume.",
        "'You're overseas': we run our own factories, print in-house including compliance labels, and source around duties.",
        "Turn each objection into a reason we're a fit."],
      ex:{script:"We can combine your sizes into one run to hit the minimum, and everything - including labels - is printed in our own factories."}},
    { t:"The stall: 'just send info'", b:[
        "'Just send me info' is usually a polite stall.",
        "Pin a specific next step and a date instead of emailing a PDF into the void.",
        "Give them a reason to talk again."],
      ex:{good:["Happy to - can we grab 10 minutes Thursday to go over a quote?"], bad:["Emailing a brochure and hoping"]}}
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
      ex:{good:["So I'll send the quote Thursday, you'll review by Monday, and we'll talk Tuesday. Sound good?"]}}
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
      ex:{note:"Entering the deal value is how your Booked number and the team forecast go up."}}
  ],
  quiz:[
    { q:"How fast should you follow up on an inbound reply?", a:["within 1 to 2 days","within a month","whenever you get to it"], correct:0 },
    { q:"To seal it, confirm the quote and then get...", a:["nothing","the PO and artwork approval","a brand new lead"], correct:1 },
    { q:"After you win, in the app you...", a:["do nothing","mark Won and enter the order value","delete the account"], correct:1 }]}
];
