import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let contact = "";
  try {
    const body = await req.json();
    // `url` kept for backwards compatibility with older clients
    contact = String(body?.contact ?? body?.url ?? "").trim();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (!contact || contact.length > 500) {
    return NextResponse.json({ ok: false, error: "Please enter a website or phone number" }, { status: 400 });
  }

  // Accept either a phone number (7-15 digits, optional +, spaces, dashes, brackets) or a website link
  let type: "phone" | "website" | null = null;
  if (/^\+?[\d\s\-().]{7,20}$/.test(contact) && /^\D*(\d\D*){7,15}$/.test(contact)) {
    type = "phone";
  } else {
    try {
      const parsed = new URL(/^https?:\/\//i.test(contact) ? contact : `https://${contact}`);
      if (/^https?:$/.test(parsed.protocol) && parsed.hostname.includes(".")) type = "website";
    } catch {
      /* fall through */
    }
  }
  if (!type) {
    return NextResponse.json({ ok: false, error: "Please enter a valid website or phone number" }, { status: 400 });
  }

  const lead = {
    contact,
    type,
    // legacy field so existing webhook consumers keep working
    url: type === "website" ? contact : "",
    receivedAt: new Date().toISOString(),
    source: "tenfolds.studio",
  };

  // Save to Supabase (table: public.tenfolds_leads). The anon key can only INSERT (RLS), never read.
  const sbUrl = process.env.SUPABASE_URL;
  const sbKey = process.env.SUPABASE_ANON_KEY;
  if (sbUrl && sbKey) {
    try {
      const res = await fetch(`${sbUrl.replace(/\/$/, "")}/rest/v1/tenfolds_leads`, {
        method: "POST",
        headers: {
          apikey: sbKey,
          Authorization: `Bearer ${sbKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ contact, contact_type: type, source: lead.source }),
      });
      if (!res.ok) {
        console.error("Supabase insert failed", res.status, await res.text());
        return NextResponse.json({ ok: false, error: "Could not save your details. Please try again." }, { status: 502 });
      }
    } catch (e) {
      console.error("Supabase insert error", e);
      return NextResponse.json({ ok: false, error: "Could not save your details. Please try again." }, { status: 502 });
    }
  } else {
    console.warn("SUPABASE_URL / SUPABASE_ANON_KEY not set; lead not saved to database");
  }

  // Optional: forward leads to any webhook (n8n, Zapier, Slack, Google Apps Script…)
  const webhook = process.env.AUDIT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    } catch (e) {
      console.error("Audit webhook failed", e);
    }
  }
  console.log("Audit request", lead);
  return NextResponse.json({ ok: true });
}
