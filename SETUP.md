# SeaQuest Command Center — Setup

Your own installable app (CRM + Global Domination game), no Airtable fees. Static files + Supabase (free) for login and database. Claude reads/writes it live via the Supabase API.

## What you do (about 10 minutes)

### 1. Create a free Supabase project
1. Go to **supabase.com** → sign up (free) → **New project**.
2. Name it `seaquest`, set a database password (save it), pick the closest region → **Create**.
3. Wait ~2 min for it to provision.

### 2. Set up the database
1. Left sidebar → **SQL Editor** → **New query**.
2. Open `schema.sql` (in this folder), paste it in, click **Run**. That creates the tables.

### 3. Get your keys
1. Left sidebar → **Project Settings** → **API**.
2. Copy the **Project URL** and the **anon / public** key.
3. Open `config.js` and paste them into the two `PASTE_...` slots. Save.

### 4. Create logins for your team
1. Left sidebar → **Authentication** → **Users** → **Add user** → create one for you and each rep (email + password).
2. They'll use those to sign in to the app.

### 5. Give Claude the service key (so Claude can migrate your Airtable data + keep adding live)
1. Project Settings → API → copy the **service_role** key (the secret one).
2. Paste it to Claude in chat. Claude uses it to migrate your 54 companies from Airtable and to add/update data going forward.
   - This key is powerful; keep it private. It is NOT put in config.js or the app.

## What Claude does
- Migrates your Airtable companies into Supabase.
- Wires up and tests login + data.
- Helps you deploy (Cloudflare Pages or Vercel, both free) so it has a real URL you can install on your phone.

## Installing it as an app
Once it's deployed to a URL, open that URL on your phone → browser menu → **Add to Home Screen**. It installs like a real app (own icon, full screen). Same on desktop Chrome/Edge (install icon in the address bar).

## Files in this folder
- `index.html` — the app
- `config.js` — your Supabase URL + anon key (+ market-size numbers for the game)
- `schema.sql` — database tables (run once in Supabase)
- `manifest.webmanifest`, `sw.js`, `icon-*.png` — makes it installable/offline-capable
