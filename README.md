# Portfolio revamp — 2b (dark base, light bands) React/Vite port

Drop-in replacement for your existing frontend. Your **data layer stays untouched** —
every component still reads from `src/constants/index.js` and `src/assets`. Only
presentation, Tailwind tokens, and the font changed.

## What's here

```
index.html                     → Geist font swap (was Inter)
tailwind.config.js             → new color tokens + Geist font family
src/index.css                  → body now bg-ink / text-fg on the new tokens
src/App.jsx                    → adds <Now /> band; drops the old fixed radial bg
src/components/
  Navbar.jsx                   → mono 01_about … nav, purple square mark
  Hero.jsx                     → split-free hero + 3-up metrics strip ($1M+ / Legacy→modern / 3 domains)
  Now.jsx      (NEW)           → light "impact" band — current work at Surya
  About.jsx                    → numbered two-column (01 / ABOUT) + service cards
  Tech.jsx                     → numbered two-column (02 / STACK) + logo chips
  Experience.jsx               → 03 / EXPERIENCE, date-left hairline rows
  Education.jsx                → 04 / EDUCATION, two-column
  Works.jsx                    → 05 / SELECTED WORK, 3-card grid
  Contact.jsx                  → light band, 06 / CONTACT — KEEPS your EmailJS form
  Footer.jsx                   → light bottom bar
  Reveal.jsx / Icons.jsx       → unchanged (copied for completeness)
```

`Section.jsx` is no longer used (each section owns its header now) — you can delete it.

## Install

1. Copy these files over the matching paths in your repo (back up first / commit).
2. No new dependencies. You already have `framer-motion` and `@emailjs/browser`.
3. `npm run dev` and check it out.

## Notes

- **Fonts:** switched Inter → **Geist + Geist Mono** (loaded in `index.html`).
- **Theme:** dark base (`ink #0c0c0e`) with two **light bands** — the "Now" impact
  section and the Contact/Footer — for the section-contrast rhythm you liked in 2b.
  Purple accent kept (`#7c5cff`; `#6a46e8` on light).
- **Metrics** live at the top of `Hero.jsx` (`const metrics`). Edit the copy there,
  or move the array into `src/constants/index.js` if you prefer.
- **"Now" band copy** is in `Now.jsx`.
- **EmailJS** contact form is preserved and restyled for the light band — your
  `VITE_APP_EMAILJS_*` env vars work exactly as before.
- The old 3D/planet hero is already gone in your current code; this keeps the
  ambient purple glow only.
