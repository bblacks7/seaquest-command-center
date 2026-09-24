import webpush from "npm:web-push@3.6.7";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (req) => {
  try {
    const body = await req.json().catch(() => ({}));
    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { data: cfg } = await supa.from("push_config").select("*").eq("id", 1).single();
    if (!cfg || (cfg.cron_secret && body.secret !== cfg.cron_secret)) {
      return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
    }
    webpush.setVapidDetails(
      cfg.subject || "mailto:brandon@seaquest-global.com",
      cfg.vapid_public,
      cfg.vapid_private,
    );
    const { data: subs } = await supa.from("push_subscriptions").select("*");
    const payload = JSON.stringify({
      title: body.title || "SeaQuest",
      body: body.body || "Good morning. Time to work your list - tap to open.",
      url: "./",
    });
    let sent = 0;
    const dead: string[] = [];
    for (const s of (subs || [])) {
      try {
        await webpush.sendNotification(
          { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
          payload,
        );
        sent++;
      } catch (e: any) {
        const sc = e?.statusCode;
        if (sc === 404 || sc === 410) dead.push(s.endpoint);
      }
    }
    if (dead.length) await supa.from("push_subscriptions").delete().in("endpoint", dead);
    return new Response(JSON.stringify({ sent, cleaned: dead.length }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500 });
  }
});
