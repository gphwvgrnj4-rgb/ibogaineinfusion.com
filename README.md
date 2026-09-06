# Ibogaine Infusion (ibogaineinfusion.com)

Marketing site for **Ibogaine Infusion** — medical screening and IV-guided ibogaine infusion inquiry.
Tone: clinical-luxury, screening-first, serious. Educational/inquiry only — no cure claims.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Bun (or Node package manager) for installs

## Quick start

```bash
cd ibogaineinfusion.com
bun install
bun run dev
```

Open http://localhost:3000

```bash
bun run build
bun run start
```

Equivalent scripts work with a Node package manager if preferred (`install`, `run dev`, `run build`).

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Required | Purpose |
| --- | --- | --- |
| `FORM_WEBHOOK_URL` | No | If set, `POST /api/lead` forwards JSON leads to this URL. If unset, API returns success in **demo mode** and logs the payload. |

## Lead form

Fields: name, email, phone, optional message, consent checkbox → `POST /api/lead`.

## Routes

- `/` — Homepage
- `/ibogaine-for-addiction`
- `/ibogaine-for-depression`
- `/ibogaine-for-ptsd`
- `/what-is-ibogaine-infusion`
- `/how-it-works`
- `/safety-and-screening`
- `/faq` (includes FAQ JSON-LD)
- `/apply`
- `/blog` + article slugs
- `/privacy`, `/terms` (stubs)
- `/sitemap.xml`, `/robots.txt`

## Deploy on Vercel + custom domain

1. Import the project into Vercel (Git integration or CLI).
2. Set env vars in the Vercel project settings (`FORM_WEBHOOK_URL` for production leads).
3. Deploy the production branch.
4. Add domain `ibogaineinfusion.com` (and `www` if desired) under **Project → Settings → Domains**.
5. Point DNS (A/ALIAS/CNAME) as Vercel instructs; wait for SSL issuance.
6. Confirm `metadataBase` / canonical domain match the live URL.

## Legal review note

**Required before public marketing launch:** have qualified counsel review medical claims posture, disclaimers, privacy/terms stubs, lead-handling, and jurisdictional advertising rules for ibogaine-related content. This repository intentionally uses educational/inquiry language and safety disclaimers; it is not a substitute for legal or clinical review.

## Brand

- Colors: `#0F3D2E`, `#1A4D3A`, `#C5D4C8`, `#F4F1EC`, `#1C1C1C`, accent `#B08D57`
- Differentiator: IV / infusion framing (clinic-style), not retreat tourism
