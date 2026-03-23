# Somatic Exercise Forms Agent Guide

## Product rules
- Keep the tone calm, grounded, supportive, and educational.
- Prefer verbs such as "notice," "observe," "support," and "reset."
- Avoid medical claims and avoid the words diagnose, treat, heal, and cure in user-facing copy.
- Design for mobile first while preserving a polished desktop layout.
- Persist user-entered form data locally in the browser with clear draft and completed states.
- Treat demo data as a seeded preview experience, not as real user progress.

## Engineering rules
- Use reusable components for cards, fields, sections, buttons, and progress indicators.
- Keep validation schemas in `lib/validation.ts` and shared types in `types/forms.ts`.
- Use sample data from `data/demo.ts` to populate the progress and print experience when users have no saved entries yet.
- Ensure every page includes the footer disclaimer: `Education only. Not medical advice.`
- Prefer accessible labels, fieldsets, legends, clear focus states, and readable spacing on mobile.
- Keep Vercel deployment simple: localStorage-first, no backend required unless explicitly requested.
