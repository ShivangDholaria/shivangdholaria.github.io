# Shivang Dholaria — Portfolio

Personal portfolio for a backend-leaning full-stack engineer — a single-page site
covering my work across software engineering, game development, and cybersecurity.

**Live:** https://shivangdholaria.github.io

## Built with

- **React 18** + **Vite**
- **Tailwind CSS** — dark base with two light "bands" (Now, Contact/Footer), Geist + Geist Mono
- **Framer Motion** — scroll reveals, active-section nav, respects `prefers-reduced-motion`
- **EmailJS** — contact form (no backend)
- **GitHub Actions → GitHub Pages** — auto-deploy on push to `main`

## Sections

Hero (+ metrics) · Now · About · Stack · Experience · Education · Selected Work · Contact

## Getting started

Requires Node 18+.

```bash
git clone https://github.com/ShivangDholaria/shivangdholaria.github.io.git
cd shivangdholaria.github.io
npm install
```

The contact form needs EmailJS credentials — copy the example env file and fill in
your keys from the [EmailJS dashboard](https://dashboard.emailjs.com):

```bash
cp .env.example .env
```

```bash
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run lint     # run eslint
```

## Editing content

- **Most content** — profile, socials, about, skills, experience, education, projects —
  lives in [`src/constants/index.js`](src/constants/index.js).
- **Hero metrics** — the `metrics` array at the top of [`src/components/Hero.jsx`](src/components/Hero.jsx).
- **"Now" band copy** — [`src/components/Now.jsx`](src/components/Now.jsx).
- **Résumé** — drop `resume.pdf` into [`public/`](public/) (the Résumé button links to `/resume.pdf`).

## Project structure

```
src/
  main.jsx             # entry point
  App.jsx              # section composition
  index.css            # base styles + Tailwind layers
  constants/index.js   # all site content/data
  assets/              # images + icon barrel (only used assets are bundled)
  components/          # Navbar, Hero, Now, About, Tech, Experience,
                       # Education, Works, Contact, Footer, Reveal, Icons
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy_site.yml`](.github/workflows/deploy_site.yml),
which runs `npm run build` and publishes `dist/` to GitHub Pages. No manual step.
