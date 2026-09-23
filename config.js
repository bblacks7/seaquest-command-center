// SeaQuest Command Center — Supabase config
// Paste your project values here (from Supabase → Project Settings → API).
// The anon key is safe to expose in a frontend app; NEVER put the service_role key here.
window.SEAQUEST_CONFIG = {
  url: "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE",       // e.g. https://abcdxyz.supabase.co
  anonKey: "PASTE_YOUR_SUPABASE_ANON_PUBLIC_KEY_HERE" // the "anon" / "public" key
};

// Total Addressable Market denominators (sourced) for the Global Domination game.
window.SEAQUEST_TAM = {
  "Global":                 50000000, // est. businesses worldwide that buy packaging (50-150M)
  "QSR / Restaurant":       750000,   // US restaurants (Nat'l Restaurant Assoc.)
  "Coffee / Beverage":      40000,    // US coffee shops
  "Nicotine / Tobacco":     500,      // major nicotine/tobacco brands & manufacturers (est)
  "Ammunition":             772,      // US commercial gun & ammo manufacturers (IBISWorld)
  "Foodservice Distributor":17580,    // US foodservice distribution centers (IFDA)
  "Packaging Channel":      5000,     // US packaging distributors/converters (est)
  "Enterprise / Logistics": 50,       // FedEx-scale enterprise buyers (est)
  "Prospecting / Other":    100000    // placeholder
};

// Demo data (only used before Supabase is connected, so you can see the app work).
window.SEAQUEST_DEMO = [
  {name:"Zaxby's", industry:"QSR / Restaurant", location:"Athens, GA", status:"Message sent", priority:true},
  {name:"Chipotle Mexican Grill", industry:"QSR / Restaurant", location:"Newport Beach, CA", status:"Invite sent", priority:true},
  {name:"Inspire Brands", industry:"QSR / Restaurant", location:"Atlanta, GA", status:"Invite sent", priority:true},
  {name:"Cracker Barrel", industry:"QSR / Restaurant", location:"Lebanon, TN", status:"Invite sent", priority:true},
  {name:"In-N-Out Burger", industry:"QSR / Restaurant", location:"Irvine, CA", status:"To research"},
  {name:"7 Brew Coffee", industry:"Coffee / Beverage", location:"Springdale, AR", status:"Invite sent", priority:true},
  {name:"Better Buzz Coffee", industry:"Coffee / Beverage", location:"San Diego, CA", status:"Emailed"},
  {name:"The Kinetic Group", industry:"Ammunition", location:"Anoka, MN", status:"To call", priority:true},
  {name:"Hornady", industry:"Ammunition", location:"Grand Island, NE", status:"To call", priority:true},
  {name:"Winchester (Olin)", industry:"Ammunition", location:"East Alton, IL", status:"To call"},
  {name:"Vuse (Reynolds American)", industry:"Nicotine / Tobacco", location:"Winston-Salem, NC", status:"To call", priority:true},
  {name:"NJOY (Altria)", industry:"Nicotine / Tobacco", location:"Richmond, VA", status:"To call"},
  {name:"FedEx", industry:"Enterprise / Logistics", location:"Memphis, TN", status:"Emailed", priority:true},
  {name:"Imperial Dade", industry:"Foodservice Distributor", location:"Jersey City, NJ", status:"Emailed"},
  {name:"Dizpot", industry:"Packaging Channel", location:"Phoenix, AZ", status:"Emailed", priority:true}
];
