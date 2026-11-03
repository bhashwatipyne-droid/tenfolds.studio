import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let url = "";
  try {
    const body = await req.json();
    url = String(body?.url ?? "").trim();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  try {
    const parsed = new URL(url);
    if (!/^https?:$/.test(parsed.protocol) || url.length > 500) throw new Error();
  } catch {
    return NextResponse.json({ ok: false, error: "Please enter a valid link" }, { status: 400 });
  }

  const lead = { url, receivedAt: new Date().toISOString(), source: "tenfolds.studio" };

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
