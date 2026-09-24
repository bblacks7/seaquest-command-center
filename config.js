// SeaQuest Command Center - configuration & strategy-game data.
// Safe to edit these numbers; they drive the "territory conquest" math.

// ---- Supabase (used only when you sign in for live cloud sync) ----
window.SEAQUEST_CONFIG = {
  url: "https://cznfungtwxmtzykemgls.supabase.co",
  anonKey: "sb_publishable_777hUvvUTV-0GistG6c0LQ_UduEW6mt" // publishable key - safe in a frontend
};

// ---- Industry sectors we sell into (share of a territory's target pool) ----
window.SEAQUEST_INDUSTRIES = [
  { key: "QSR / Restaurant",        weight: 0.24, color: "#ff7a45", icon: "\u{1F354}" },
  { key: "Foodservice Distributor", weight: 0.14, color: "#36cfc9", icon: "\u{1F69A}" },
  { key: "Packaging Channel",       weight: 0.13, color: "#9254de", icon: "\u{1F4E6}" },
  { key: "Coffee / Beverage",       weight: 0.10, color: "#b37feb", icon: "☕" },
  { key: "Industrial & Ag Sacks",   weight: 0.12, color: "#c08457", icon: "\u{1F9F1}" },
  { key: "Nicotine / Tobacco",      weight: 0.08, color: "#ffc53d", icon: "\u{1F6AC}" },
  { key: "Ammunition",              weight: 0.06, color: "#ff4d4f", icon: "\u{1F3AF}" },
  { key: "Enterprise / Logistics",  weight: 0.05, color: "#40a9ff", icon: "\u{1F3E2}" },
  { key: "Prospecting / Other",     weight: 0.08, color: "#8c8c8c", icon: "\u{1F9ED}" }
];

// ---- Pipeline stages: a company (your "unit") advances left to right; rejected = red ----
window.SEAQUEST_STAGES = [
  { key: "prospect",   label: "Prospect",        short: "Scouted",  color: "#5b6b7a", pct: 0.06 },
  { key: "researched", label: "Researched",      short: "Ready",    color: "#2f80ed", pct: 0.32 },
  { key: "reached",    label: "Reached Out",     short: "Contacted",color: "#22c58b", pct: 0.58 },
  { key: "convo",      label: "In Conversation", short: "Engaged",  color: "#00e0a4", pct: 0.82 },
  { key: "won",        label: "Won",             short: "Conquered",color: "#ffd23f", pct: 1.00 }
];
window.SEAQUEST_REJECTED = { key: "rejected", label: "Rejected", short: "Resisted", color: "#ff4d4f", pct: 1.00 };

// ---- Target pools (estimated prospectable companies in OUR verticals) ----
window.SEAQUEST_US_POOL = 4000;          // est. US prospectable targets across our sectors
window.SEAQUEST_FRONTIER = [
  { key: "Canada",         pool: 1600, flag: "\u{1F1E8}\u{1F1E6}", note: "Toronto, Vancouver, Montreal" },
  { key: "Mexico",         pool: 1400, flag: "\u{1F1F2}\u{1F1FD}", note: "CDMX, Monterrey, Guadalajara" },
  { key: "European Union", pool: 5200, flag: "\u{1F1EA}\u{1F1FA}", note: "27 member states" },
  { key: "United Kingdom", pool: 1500, flag: "\u{1F1EC}\u{1F1E7}", note: "London & beyond" },
  { key: "Rest of World",  pool: 3000, flag: "\u{1F30D}", note: "MENA, Africa, APAC, LatAm" }
];

// ---- Your squad: you + reps. Each levels up from the accounts they own. ----
// Rename freely (or tap a name in the app to rename). id must stay unique & stable.
window.SEAQUEST_REPS = [
  { id:"brandon", name:"Brandon", role:"Commander",  market:"US / National",      emoji:"⭐", color:"#ffd23f" },
  { id:"xiaoke",  name:"Xiaoke",  role:"Field Rep",  market:"APAC / Sourcing",    emoji:"\u{1F409}", color:"#ff7a45" },
  { id:"mx",      name:"Mexico Rep", role:"Field Rep", market:"Mexico / LatAm",   emoji:"\u{1F32E}", color:"#22c58b" },
  { id:"eu",      name:"EU Rep",   role:"Field Rep", market:"EU / UK",            emoji:"\u{1F1EA}\u{1F1FA}", color:"#2f80ed" }
];

// ---- US states: population (M, for target weighting) + tile-map [row,col] ----
window.SEAQUEST_STATES = [
  { ab:"AL", name:"Alabama",        pop:5.07, rc:[6,6] },
  { ab:"AK", name:"Alaska",         pop:0.73, rc:[0,0] },
  { ab:"AZ", name:"Arizona",        pop:7.36, rc:[5,1] },
  { ab:"AR", name:"Arkansas",       pop:3.05, rc:[5,4] },
  { ab:"CA", name:"California",     pop:39.0, rc:[4,0] },
  { ab:"CO", name:"Colorado",       pop:5.84, rc:[4,2] },
  { ab:"CT", name:"Connecticut",    pop:3.61, rc:[3,9] },
  { ab:"DE", name:"Delaware",       pop:1.02, rc:[4,9] },
  { ab:"DC", name:"Washington DC",  pop:0.67, rc:[5,8] },
  { ab:"FL", name:"Florida",        pop:22.6, rc:[7,8] },
  { ab:"GA", name:"Georgia",        pop:11.0, rc:[6,7] },
  { ab:"HI", name:"Hawaii",         pop:1.44, rc:[7,0] },
  { ab:"ID", name:"Idaho",          pop:1.96, rc:[2,1] },
  { ab:"IL", name:"Illinois",       pop:12.6, rc:[2,5] },
  { ab:"IN", name:"Indiana",        pop:6.86, rc:[3,5] },
  { ab:"IA", name:"Iowa",           pop:3.21, rc:[3,4] },
  { ab:"KS", name:"Kansas",         pop:2.94, rc:[5,3] },
  { ab:"KY", name:"Kentucky",       pop:4.51, rc:[4,5] },
  { ab:"LA", name:"Louisiana",      pop:4.59, rc:[6,4] },
  { ab:"ME", name:"Maine",          pop:1.39, rc:[0,10] },
  { ab:"MD", name:"Maryland",       pop:6.16, rc:[4,8] },
  { ab:"MA", name:"Massachusetts",  pop:6.98, rc:[2,10] },
  { ab:"MI", name:"Michigan",       pop:10.03,rc:[2,7] },
  { ab:"MN", name:"Minnesota",      pop:5.72, rc:[2,4] },
  { ab:"MS", name:"Mississippi",    pop:2.94, rc:[6,5] },
  { ab:"MO", name:"Missouri",       pop:6.18, rc:[4,4] },
  { ab:"MT", name:"Montana",        pop:1.12, rc:[2,2] },
  { ab:"NE", name:"Nebraska",       pop:1.97, rc:[4,3] },
  { ab:"NV", name:"Nevada",         pop:3.18, rc:[3,1] },
  { ab:"NH", name:"New Hampshire",  pop:1.39, rc:[1,10] },
  { ab:"NJ", name:"New Jersey",     pop:9.29, rc:[3,8] },
  { ab:"NM", name:"New Mexico",     pop:2.11, rc:[5,2] },
  { ab:"NY", name:"New York",       pop:19.6, rc:[2,9] },
  { ab:"NC", name:"North Carolina", pop:10.7, rc:[5,6] },
  { ab:"ND", name:"North Dakota",   pop:0.78, rc:[2,3] },
  { ab:"OH", name:"Ohio",           pop:11.8, rc:[3,6] },
  { ab:"OK", name:"Oklahoma",       pop:4.02, rc:[6,3] },
  { ab:"OR", name:"Oregon",         pop:4.24, rc:[3,0] },
  { ab:"PA", name:"Pennsylvania",   pop:12.97,rc:[3,7] },
  { ab:"RI", name:"Rhode Island",   pop:1.10, rc:[3,10] },
  { ab:"SC", name:"South Carolina", pop:5.28, rc:[5,7] },
  { ab:"SD", name:"South Dakota",   pop:0.91, rc:[3,3] },
  { ab:"TN", name:"Tennessee",      pop:7.05, rc:[5,5] },
  { ab:"TX", name:"Texas",          pop:30.5, rc:[7,3] },
  { ab:"UT", name:"Utah",           pop:3.38, rc:[4,1] },
  { ab:"VT", name:"Vermont",        pop:0.65, rc:[1,9] },
  { ab:"VA", name:"Virginia",       pop:8.68, rc:[4,7] },
  { ab:"WA", name:"Washington",     pop:7.79, rc:[2,0] },
  { ab:"WV", name:"West Virginia",  pop:1.77, rc:[4,6] },
  { ab:"WI", name:"Wisconsin",      pop:5.89, rc:[2,6] },
  { ab:"WY", name:"Wyoming",        pop:0.58, rc:[3,2] }
];

// ---- Research Tree: paper-packaging niches inside each sector (edit/add freely) ----
window.SEAQUEST_TREE = {
  "QSR / Restaurant": [
    { id:"qsr-carryout-bags", name:"Takeout & carryout bags",  note:"Kraft SOS and handled shopping bags" },
    { id:"qsr-food-boxes",    name:"Food boxes & clamshells",  note:"Kraft meal boxes, burger clamshells" },
    { id:"qsr-cup-carriers",  name:"Drink carriers & trays",   note:"Molded paper cup carriers" },
    { id:"qsr-deli-wrap",     name:"Deli & sandwich wrap",     note:"Greaseproof paper, basket liners" },
    { id:"qsr-pizza",         name:"Pizza & flat boxes",       note:"Corrugated pizza boxes" },
    { id:"qsr-fry-cartons",   name:"Fry & snack cartons",      note:"Paperboard scoops and cartons" }
  ],
  "Coffee / Beverage": [
    { id:"cof-hot-cups",   name:"Paper hot cups & sleeves",  note:"Single/double wall cups, ripple sleeves" },
    { id:"cof-retail-bags",name:"Retail coffee bags",        note:"Kraft bags with degassing valve" },
    { id:"cof-carry-trays",name:"Carry-out drink trays",     note:"Paper 2 and 4 cup trays" },
    { id:"cof-gift",       name:"Gift & subscription boxes", note:"Sampler and subscription cartons" }
  ],
  "Foodservice Distributor": [
    { id:"fsd-case-boxes",  name:"Case & shipper boxes",   note:"Corrugated shippers, RSC cases" },
    { id:"fsd-butcher",     name:"Kraft butcher rolls",    note:"Butcher and freezer paper rolls" },
    { id:"fsd-catering",    name:"Catering & delivery",    note:"Insulated catering boxes" },
    { id:"fsd-bakery",      name:"Bakery & portion boxes", note:"Window bakery boxes, portion cups" }
  ],
  "Packaging Channel": [
    { id:"pkg-shoppers",  name:"Custom printed shoppers", note:"Branded retail bags" },
    { id:"pkg-rigid",     name:"Rigid gift boxes",        note:"Set-up rigid boxes, luxury" },
    { id:"pkg-mailers",   name:"E-commerce mailers",      note:"Corrugated mailers, book wraps" },
    { id:"pkg-cartons",   name:"Folding cartons",         note:"Printed folding carton runs" }
  ],
  "Industrial & Ag Sacks": [
    { id:"ind-concrete",  name:"Concrete & cement sacks", note:"Multiwall paper sacks, 40-94 lb" },
    { id:"ind-flour",     name:"Flour, sugar & grain",    note:"Food-grade multiwall bags" },
    { id:"ind-petfood",   name:"Pet food & animal feed",  note:"Multiwall pet and feed bags" },
    { id:"ind-charcoal",  name:"Charcoal & wood pellets", note:"Kraft charcoal and pellet bags" },
    { id:"ind-seed",      name:"Seed & fertilizer",       note:"Ag seed and fertilizer sacks" },
    { id:"ind-minerals",  name:"Minerals & chemicals",    note:"Valve bags for powders" }
  ],
  "Nicotine / Tobacco": [
    { id:"nic-cartons",   name:"Paperboard cartons",   note:"Cig and vape carton sleeves" },
    { id:"nic-rigid",     name:"Rigid boxes",          note:"Premium rigid packs" },
    { id:"nic-pouch",     name:"Pouch & tin outers",   note:"Printed outer packaging" },
    { id:"nic-shippers",  name:"Printed shipper cases",note:"Retail-ready shipper cases" }
  ],
  "Ammunition": [
    { id:"ammo-cartons",  name:"Ammo cartons",         note:"Paperboard ammunition boxes" },
    { id:"ammo-trays",    name:"Shell trays & inserts",note:"Molded paper trays" },
    { id:"ammo-cases",    name:"Bulk shipper cases",   note:"Corrugated bulk cases" },
    { id:"ammo-hang",     name:"Retail hang boxes",    note:"Peg/hang retail boxes" }
  ],
  "Enterprise / Logistics": [
    { id:"ent-mailers",   name:"Branded mailers",      note:"Custom shipping mailers" },
    { id:"ent-boxes",     name:"Custom shipping boxes",note:"Corrugated at scale" },
    { id:"ent-voidfill",  name:"Paper void fill & wrap",note:"Kraft void fill, wrap rolls" },
    { id:"ent-returns",   name:"Returns packaging",    note:"Resealable returns mailers" }
  ],
  "Prospecting / Other": [
    { id:"oth-specialty", name:"Retail & specialty bags", note:"Boutique and specialty retail" },
    { id:"oth-subbox",    name:"Subscription box brands", note:"DTC subscription packaging" },
    { id:"oth-farmers",   name:"Farmers market & CSA",    note:"Produce and CSA paper bags" }
  ]
};

// ---- Finance model for the HQ Profit & Loss line (edit these) ----
window.SEAQUEST_FINANCE = {
  markup: 0.22,        // SeaQuest gross margin on a customer order
  overhead: 8000,      // baseline operating costs (net profit starts negative until wins cover this)
  default: 15000,      // fallback order value if none set/estimated
  avgDeal: {           // estimated customer order value per sector
    "QSR / Restaurant": 15000, "Foodservice Distributor": 40000, "Packaging Channel": 25000,
    "Coffee / Beverage": 12000, "Industrial & Ag Sacks": 60000, "Nicotine / Tobacco": 30000,
    "Ammunition": 20000, "Enterprise / Logistics": 80000, "Prospecting / Other": 15000
  }
};

// ---- Academy: training modules. Finish the check to earn XP + a badge. (edit freely) ----
window.SEAQUEST_ACADEMY = [
  { id:"who", icon:"\u{1F3ED}", title:"Who We Are", xp:60, badge:{i:"\u{1F3ED}",t:"Insider"},
    points:[
      "SeaQuest Global is the US sales arm for our own paper factories overseas. We are veteran-owned.",
      "We make custom paper packaging: shopping bags, boxes, multiwall sacks, and printed packaging.",
      "Our factories do all printing in-house, including regulated labels, barcodes (GS1/UPC) and track-and-trace.",
      "We earn on markup, not commission. You are direct sales, not a middleman.",
      "Reps never quote prices. You gather specs and Brandon prepares the quote."
    ],
    quiz:[
      { q:"How should you describe SeaQuest?", a:["A packaging broker","A reseller","The US sales arm for our own factories"], correct:2 },
      { q:"Who prepares the price quote?", a:["The rep on the call","Brandon / the quotes team","The factory directly"], correct:1 }
    ] },
  { id:"talk", icon:"\u{1F5E3}️", title:"How We Talk About Ourselves", xp:60, badge:{i:"\u{1F5E3}️",t:"On Message"},
    points:[
      "Say: we are the US sales arm for our factories worldwide.",
      "Never say we 'represent', 'broker', or are 'factory-direct'.",
      "Keep it human and short. No em-dashes. 2 to 3 sentences in emails.",
      "Do not overstate our accounts, and never name our factory.",
      "Lead with our own paper manufacturing and sustainability when it helps."
    ],
    quiz:[
      { q:"Which phrase is NOT allowed?", a:["US sales arm for our factories","We represent the factory","Veteran-owned paper company"], correct:1 },
      { q:"Ideal cold email length?", a:["2 to 3 sentences","3 full paragraphs","One word"], correct:0 }
    ] },
  { id:"contact", icon:"\u{1F4DE}", title:"Making Contact", xp:60, badge:{i:"\u{1F4DE}",t:"First Contact"},
    points:[
      "The goal of a first cold reach is to find whoever handles packaging or vendor purchasing.",
      "Use every channel: call, email, and LinkedIn.",
      "Keep intros short: who you are, what we do, and ask for the right person.",
      "Use the Email templates and the Ask Claude button to draft fast.",
      "Always log the touch and set a next step."
    ],
    quiz:[
      { q:"What is the goal of a first cold reach?", a:["Close the sale","Find who handles packaging or purchasing","Quote a price"], correct:1 },
      { q:"Best practice after every touch?", a:["Forget it","Log it and set a next step","Only email"], correct:1 }
    ] },
  { id:"gate", icon:"\u{1F6AA}", title:"Getting Past the Gatekeeper", xp:60, badge:{i:"\u{1F6AA}",t:"Door Opener"},
    points:[
      "Receptionists and assistants are allies. Be warm, brief, and confident.",
      "Ask by role: 'Who handles your packaging or vendor purchasing?'",
      "Give a one-line reason: we supply custom paper packaging from our own factories.",
      "Ask for a name, a direct line, and an email.",
      "If you are blocked, still get a name and follow up by email and LinkedIn."
    ],
    quiz:[
      { q:"How do you treat a gatekeeper?", a:["Push past them","Warm and brief, ask for the right person by role","Hang up"], correct:1 },
      { q:"What should you leave the call with?", a:["A name, direct line and email","Nothing","A signed order"], correct:0 }
    ] },
  { id:"convo", icon:"\u{1F91D}", title:"The Conversation", xp:60, badge:{i:"\u{1F91D}",t:"Closer's Ear"},
    points:[
      "Lead with how we help: custom packaging from our own factories, printed in-house.",
      "Ask about their sizes, volumes, current supplier, and any pain points.",
      "Listen more than you talk, and take notes in the account.",
      "Do not quote a price. Offer to 'put a quick quote together'.",
      "Get the specs: dimensions, paper weight (gsm), quantity, and artwork."
    ],
    quiz:[
      { q:"When they ask for a price, you...", a:["Quote a number on the spot","Offer to put a quick quote together and get specs","End the call"], correct:1 },
      { q:"Which specs matter most?", a:["Size, gsm, quantity, artwork","Only their name","Their favorite color"], correct:0 }
    ] },
  { id:"rules", icon:"✅", title:"Do's and Don'ts", xp:60, badge:{i:"✅",t:"By the Book"},
    points:[
      "DO keep it short and human, ask for the buyer, follow up, and log everything.",
      "DON'T quote prices, that goes through Brandon.",
      "DON'T say broker, represent, or factory-direct.",
      "DON'T overstate accounts or name our factory.",
      "DON'T pitch cannabis product packaging."
    ],
    quiz:[
      { q:"Which is a DON'T?", a:["Follow up","Quote a price yourself","Log the call"], correct:1 },
      { q:"Naming our factory to a prospect is...", a:["Fine","Not allowed","Required"], correct:1 }
    ] },
  { id:"facts", icon:"\u{1F9E0}", title:"Info to Remember", xp:60, badge:{i:"\u{1F9E0}",t:"Sharp Mind"},
    points:[
      "Our sweet spot starts around 20,000 units (minimum order).",
      "China paper bags carry heavy anti-dumping duties, so we source from non-covered origins.",
      "Our factories handle compliance labels, barcodes, and track-and-trace in-house.",
      "We sell across the US, Mexico, and Poland/EU, with a rep per market.",
      "Pricing always goes through Brandon (quotes)."
    ],
    quiz:[
      { q:"Roughly where does our minimum order start?", a:["20,000 units","10 units","1 million units"], correct:0 },
      { q:"Where do prices come from?", a:["The rep","Brandon / quotes","The prospect"], correct:1 }
    ] }
];

// ---- Calls: route through RingCentral so they record (for future AI transcription) ----
// dialTemplate builds the call link; {num} is the phone number (digits only, may start with +).
// "tel:{num}" = phone default. Set to a RingCentral click-to-dial link so calls are recorded, e.g.
// "rcmobile://call?number={num}" (RingCentral mobile app) or your RingOut URL template.
window.SEAQUEST_RINGCENTRAL = { dialTemplate: "tel:{num}", label: "RingCentral" };

// ---- Sales forecast: probability a deal closes at each stage ----
window.SEAQUEST_STAGE_PROB = { prospect:0.05, researched:0.12, reached:0.30, convo:0.60, won:1.0 };

// ---- Links & Tools page (edit freely; url opens externally, view jumps in-app, blank = add later) ----
window.SEAQUEST_LINKS = [
  { group:"Get set up", items:[
    { label:"Get the Claude app", url:"https://claude.ai/download", note:"Free - used for research" },
    { label:"Claude on the web", url:"https://claude.ai", note:"Or just use the browser" }
  ]},
  { group:"SeaQuest", items:[
    { label:"SeaQuest website", url:"https://seaquest-global.com", note:"Our public site" },
    { label:"Request a quote", url:"", note:"Add your quotes email in config.js" },
    { label:"Capability statement", url:"", note:"Add the PDF link in config.js" }
  ]},
  { group:"In the app", items:[
    { label:"Academy - training", view:"academy", note:"Earn badges and XP" },
    { label:"Research companies", view:"research", note:"Find and import leads" },
    { label:"War Map", view:"map", note:"Territories and business hours" }
  ]}
];
