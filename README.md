# Park City Incline

A civic campaign site for a Manitou-class outdoor staircase at the base of **Park City Mountain**, on land owned by **Vail Resorts**.

The site is built to walk into two rooms:

- **Park City Council** — a mandate, a packet, and a scoped ask (study + convene, not a blank check).
- **Vail Resorts / Park City Mountain** — a year-round product on terrain they already operate, with community goodwill attached.

This is a citizen proposal. It is not an official City or Vail project.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

```bash
npm run build
npm start
```

## What’s on the site

- Home: vision, location, Council / Vail arguments, operations, Manitou comparison
- `/the-case` — longer briefing
- `/brief` — printable Council packet
- `/endorse` — name, letter to Council, email to the campaign
- `/faq` — traffic, land, cost, winter ops

Concept images live in `public/images/`. They are visualizations, not photos of an existing trail.

## Framer or Render?

**Ship this Next.js site on Render (or Vercel). Do not rebuild it in Framer first.**

| | **This codebase + Render** | **Framer** |
|---|---|---|
| Launch this week | Yes. The site is already built. | You would redesign every page by hand. |
| Edits with Cursor | Native. Copy, pages, forms, print styles. | Poor. Framer is a closed visual canvas. |
| Custom domain | Point DNS at Render when you buy it. | Also easy, after you recreate the site. |
| Non-designer editing | You change copy in files, or we do it together. | Better if a marketer wants to drag boxes weekly. |
| Cost | Render free/starter web service is enough. | Framer Site plan, plus you still need hosting. |
| Campaign tools | Endorsement letter, printable packet, SEO. | Possible, slower to customize. |

Framer is a good **later** tool if a designer wants a fully visual CMS and nobody is touching the repo. It is a worse **now** tool: we would throw away a working civic site to rebuild it in a closed editor you cannot iterate on from this project.

**Recommended launch path**

1. Keep developing here.
2. Create a public GitHub repo (the Create repo control in the agent view).
3. Connect that repo to Render as a **Web Service**:
   - Build: `npm install && npm run build`
   - Start: `npm run start`
   - Bind is already `0.0.0.0` via Next.js
4. When you have a domain (`parkcityincline.com`, `pcincline.org`, etc.), add it in Render → Custom Domains.

A `render.yaml` is in the repo for that step.

## Contact

Jamie Murray · jamescmurray33@gmail.com · 847-736-1954
