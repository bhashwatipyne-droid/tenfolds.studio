# tenfolds.studio

Marketing site for **tenfolds**, a studio that builds compliant, custom websites for mutual fund distributors in India.

Built with Next.js 15 (App Router) + TypeScript, plain CSS, and self-hosted fonts (Geist, Geist Mono, Instrument Serif).

## Develop

```bash
npm install
npm run dev   # http://localhost:3000
npm run build && npm start
```

## Structure

- `src/app/page.tsx`: all page sections (hero, work, calculator, process, compare, services, compliance, pricing, FAQ, contact)
- `src/components/Header.tsx`: sticky header + mobile drawer
- `src/components/Interactive.tsx`: SIP calculator, process steps, services explorer, FAQ, audit form, scroll reveal
- `src/lib/content.ts`: all copy and data (edit text here)
- `src/app/api/audit/route.ts`: receives free-audit requests

## Environment variables (optional)

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata |
| `NEXT_PUBLIC_HERO_VIDEO` / `NEXT_PUBLIC_HERO_IMAGE` | Replace the hero illustration with your own media |
| `AUDIT_WEBHOOK_URL` | Forward each audit request (JSON `{url, receivedAt, source}`) to n8n / Zapier / Slack / Apps Script |

Without a webhook, audit requests are only written to the Vercel function logs.
