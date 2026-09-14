# Park City Incline

Single-page civic campaign for a free, purpose-built step trail at Park City Mountain — with a stakeholder briefing at `/brief`.

This is a community initiative. It is not an official City of Park City or Vail Resorts project.

## Run

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Should you buy a domain?

**Yes. Buy `parkcityincline.com` now.** `.org` is a fine redirect, not the primary. Council and Vail will forward a link; a GoDaddy parking page or a random `.vercel.app` undercuts the “serious civic infrastructure” brief. Register it this week even if DNS waits a few days.

## Framer or Render?

Stay on this Next.js site. The work order suggested Framer for a no-dev launch. You already have a spec-built page, email capture, a printable briefing, and a GitHub repo (`Jamie847/PARKCITYINCLINE`). Recreating it in Framer costs time you do not have.

**Launch path**

1. Buy `parkcityincline.com`.
2. Push this build to `https://github.com/Jamie847/PARKCITYINCLINE` (this cloud session cannot write to GitHub until you add a token or reconnect GitHub).
3. Connect that repo to **Render** (web service: `npm run build` / `npm run start`) or Vercel.
4. Point the domain at the host.
5. Connect the email form to the Google Sheet (free). See **Collecting emails** below. Mailchimp and GoFundMe can wait.

## What’s on the site

- Work-order homepage: hero, stats, Manitou, design, Payday location, partners, email + donate
- `/brief` — Manitou evidence and the PCMR / Canyons / UOP siting memo
- Concept images in `public/images/` (swap with Nano Banana Pro anytime)

No personal names appear on the public site.

## Collecting emails

You do **not** need Resend. Resend sends mail. This form only needs a place to **store** addresses.

The free path is a Google Sheet on Jamie’s Drive:

[PCI Launch — email list](https://docs.google.com/spreadsheets/d/1okWQQgeDYmYguXmtYCsDjNHlI3gj-9K-9Jv-2BzD5GI/edit)

1. Open that sheet → **Extensions → Apps Script**.
2. Delete the stub and paste `scripts/pci-launch-sheet.gs`.
3. **Deploy → New deployment → Web app**. Execute as **Me**. Who has access: **Anyone**.
4. Copy the web-app URL.
5. On the Render service, add env var `GOOGLE_SHEETS_WEBHOOK_URL` with that URL. Redeploy.
6. Locally, put the same URL in `.env.local`.

After that, “Count me in” appends a row: timestamp, email, list (`PCI Launch`), source. Duplicates are skipped.

Mailchimp is optional later if you want broadcast campaigns. Confirmation emails (Resend, etc.) are a separate step.
