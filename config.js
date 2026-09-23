// SeaQuest Command Center - configuration & strategy-game data.
// Safe to edit these numbers; they drive the "territory conquest" math.

// ---- Supabase (used only when you sign in for live cloud sync) ----
window.SEAQUEST_CONFIG = {
  url: "https://cznfungtwxmtzykemgls.supabase.co",
  anonKey: "sb_publishable_777hUvvUTV-0GistG6c0LQ_UduEW6mt" // publishable key - safe in a frontend
};

// ---- Industry sectors we sell into (share of a territory's target pool) ----
window.SEAQUEST_INDUSTRIES = [
  { key: "QSR / Restaurant",        weight: 0.30, color: "#ff7a45", icon: "\u{1F354}" },
  { key: "Foodservice Distributor", weight: 0.15, color: "#36cfc9", icon: "\u{1F69A}" },
  { key: "Packaging Channel",       weight: 0.15, color: "#9254de", icon: "\u{1F4E6}" },
  { key: "Coffee / Beverage",       weight: 0.12, color: "#b37feb", icon: "☕" },
  { key: "Nicotine / Tobacco",      weight: 0.10, color: "#ffc53d", icon: "\u{1F6AC}" },
  { key: "Ammunition",              weight: 0.06, color: "#ff4d4f", icon: "\u{1F3AF}" },
  { key: "Enterprise / Logistics",  weight: 0.05, color: "#40a9ff", icon: "\u{1F3E2}" },
  { key: "Prospecting / Other",     weight: 0.07, color: "#8c8c8c", icon: "\u{1F9ED}" }
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
