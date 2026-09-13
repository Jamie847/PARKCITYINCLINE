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
5. Create Mailchimp list `PCI Launch` and a GoFundMe named **Build the Park City Incline** ($50,000 seed). Drop keys into `.env` from `.env.example`.

## What’s on the site

- Work-order homepage: hero, stats, Manitou, design, Payday location, partners, email + donate
- `/brief` — Manitou evidence and the PCMR / Canyons / UOP siting memo
- Concept images in `public/images/` (swap with Nano Banana Pro anytime)

No personal names appear on the public site.
