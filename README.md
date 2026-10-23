# Portfolio — Oussama Bedoui

Personal portfolio site built with Next.js 16 (App Router) and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `src/lib/profile.ts` — all CV content (experience, skills, education, contact). Edit this to update the site.
- `src/components/` — page sections (hero, about, experience, skills, contact).
- `src/app/actions.ts` — contact form server action. It validates input and currently only logs
  messages on the server; hook up email delivery (e.g. Resend) there.
