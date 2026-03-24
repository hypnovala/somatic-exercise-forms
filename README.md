# Brock Somatic Exercise Forms

Brock Somatic Exercise Forms is a production-ready Next.js website with calm, interactive forms for nurses, educators, caregivers, healthcare workers, and other people navigating high-stress roles.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- react-hook-form
- zod
- `@hookform/resolvers`
- localStorage persistence
- Vercel-ready deployment

## Features

- Ten reusable somatic exercise forms with validation
- Draft saving and completed states stored in `localStorage`
- Progress tracker with explicit sample-data demo mode fallback
- Printable summary pages that pull from the current device
- Sticky mobile bottom navigation
- Accessible labels, fieldsets, focus states, and clear empty states
- Reusable UI primitives for cards, buttons, fields, sections, and progress indicators

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
app/
  page.tsx
  forms/page.tsx
  forms/[slug]/page.tsx
  progress/page.tsx
  about/page.tsx
  print/[slug]/page.tsx
components/
  layout/
  ui/
  forms/
  progress/
data/
lib/
types/
```

## Deployment to Vercel

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Framework preset: `Next.js`.
4. Install command: `npm install`.
5. Build command: `npm run build`.
6. Output setting: keep the default Next.js value.
7. Deploy.

No environment variables are required for v1 because all form persistence is handled in browser `localStorage`.

## Data behavior

- User entries are stored locally in the browser with `localStorage`.
- If no local entries exist yet, the app shows sample data in demo mode so the progress and print experiences never feel empty.
- Demo data now includes all ten forms so the seeded experience better matches the full app.
- Saved entries stay on the current device and browser profile.

## Product note

This project is for educational self-awareness only.

> Education only. Not medical advice.
