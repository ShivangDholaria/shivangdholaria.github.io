# Shivang Dholaria

Personal site of Shivang Dholaria, a backend engineer in New York who modernizes the systems insurance and healthcare companies run on.

**Live:** https://shivangdholaria.github.io

The site is a single page: a hero with what I'm building now, selected case studies, experience, an about section with my stack and education, and a contact form. The resume is generated as a PDF in the browser from the same data, so the site and the resume never drift apart.

## Stack

| | |
|---|---|
| Framework | React 18, Vite 8 |
| Styling | Tailwind CSS v4, design tokens in [`src/index.css`](src/index.css) |
| Type | Instrument Serif for headlines, Inter Tight for text (Google Fonts) |
| Resume | [`@react-pdf/renderer`](https://react-pdf.org), loaded only when someone asks for the resume |
| Contact form | [EmailJS](https://www.emailjs.com), no backend |
| Hosting | GitHub Pages, deployed by GitHub Actions on every push to `main` |

There is no animation library. The hero entrance, hover states and the pipeline pulse are plain CSS, and all of it switches off when the visitor has reduced motion turned on.

## Run it locally

You need Node 20.19+ or 22.12+ (Vite 8's requirement).

```bash
git clone https://github.com/ShivangDholaria/shivangdholaria.github.io.git
cd shivangdholaria.github.io
npm install
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint (fails on any warning) |

### Contact form

The form sends through EmailJS and needs three values. Copy the example file and fill them in from the [EmailJS dashboard](https://dashboard.emailjs.com):

```bash
cp .env.example .env
```

```
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

These are public by design: Vite puts them into the browser bundle, so never put a real secret in `.env`. Without them the form shows an error that points people to the email address instead.

## Editing content

Every word on the site lives in [`src/constants/index.js`](src/constants/index.js). Change it there and both the site and the resume update.

| To change | Edit |
|---|---|
| Name, headline, tagline, email, availability | `profile` |
| The two numbers beside the hero | `metrics` (the first two are shown) |
| The "Building now" pipeline | `pipeline` |
| Case studies in Selected work | `caseStudies`, plus `sideProjects` for the "Also built" links |
| Jobs | `experiences` |
| About text, principles, stack, education | `about`, `stack`, `education` |
| GitHub and LinkedIn links | `socials` |

**Adding a photo.** Put a square portrait in `public/` (for example `me.jpg`) and set `photo: \`${base}me.jpg\`` in `profile`. The photo replaces the pipeline in the hero, and the pipeline moves into the Selected work section.

**Colours and fonts.** The palette is a set of CSS variables at the top of [`src/index.css`](src/index.css). The fonts are loaded in [`index.html`](index.html) and named in the `@theme` block of `src/index.css`.

## The resume

Every resume button on the site builds a one-page US Letter PDF in the browser and downloads it as `Shivang_Dholaria_Resume.pdf`. Nothing is stored in the repository.

- [`src/resume/ResumeDocument.jsx`](src/resume/ResumeDocument.jsx) is the layout: header, summary, experience, skills, projects, education. It uses built-in Helvetica, so the text stays selectable and readable by applicant tracking systems.
- [`src/resume/download.js`](src/resume/download.js) builds the file and starts the download.
- [`src/components/ResumeButton.jsx`](src/components/ResumeButton.jsx) is the button. It shows "Preparing…" while it works and "Try again" if something fails.

The PDF library is about 560 kB gzipped, so it is split into its own file. It starts loading when someone hovers over or focuses a resume button, and the rest of the site never waits for it.

After changing the content, check that the resume still fits on one page: click a resume button in `npm run dev` and open the file.

## Project structure

```
index.html               page shell, fonts, meta and share tags
public/                  favicons and logo
src/
  main.jsx               entry point
  App.jsx                puts the sections in order
  index.css              design tokens, base styles, buttons, cards, motion
  constants/index.js     all site content
  components/
    Navbar.jsx           sticky nav, active-section highlight, full-screen phone menu
    Hero.jsx             headline, buttons, pipeline or photo, numbers
    Pipeline.jsx         the "Building now" flow diagram
    Works.jsx            case studies and side projects
    Experience.jsx       timeline of roles
    About.jsx            about text, stack, education, principles
    Contact.jsx          email, links and the EmailJS form
    Footer.jsx
    Section.jsx          shared section wrapper and title
    ResumeButton.jsx     generates and downloads the resume
    Logo.jsx, Icons.jsx  inline SVG logo and icons
  resume/
    ResumeDocument.jsx   resume PDF layout
    download.js          builds and downloads the PDF
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy_site.yml`](.github/workflows/deploy_site.yml), which installs dependencies, runs `npm run build` and publishes `dist/` to GitHub Pages.

The workflow does not yet pass the EmailJS values to the build, so the contact form on the live site needs them added: store the three values as repository secrets (Settings → Secrets and variables → Actions) and pass them as `env` on the "Build React App" step.
