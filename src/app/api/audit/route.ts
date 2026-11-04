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
