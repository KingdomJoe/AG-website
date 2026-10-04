# Faith Chapel AG, McCarthy Hill — Website Prototype

A modern, single-page prototype for **Faith Chapel AG, McCarthy Hill**, a local assembly of the
Assemblies of God, Ghana. Structured after [agghana.org](https://www.agghana.org) (navigation,
Verse of the Day, Locate-a-church, Give, footer) with a whitespace-first design system.

> This is a prototype, not the official church website.

## Stack
- Vite + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/index.css` via `@theme`)
- `motion` (Framer Motion) — restrained fade-up reveals, dropdown/drawer transitions
- `lucide-react` icons · self-hosted fonts via `@fontsource`

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Design system
| Token | Role | Value |
|---|---|---|
| `blue-700` | **Primary** — AG deep blue (buttons, links, service block) | `#1C2A6C` |
| `gold-400` | **Secondary / accent** — AG yellow (CTAs, highlights) | `#FFDD1F` |
| `wine-800/900` | **Header utility bar, Verse of the Day, footer** — complements the theme artwork | `#360B24 / #230717` |
| `brown-*` | Supporting warmth around the annual-theme artwork | `#8A5A3B` |
| `white / cream` | Text on dark, surfaces, whitespace | `#FFFFFF / #FBF8F3` |

Typography: **Manrope** (display/headings) · **Inter** (body) · **Instrument Serif** (scripture & vision quote).

## Replacing the placeholder images
Drop your real files into `public/images/` using these exact names — no code changes needed:

| File | Used for |
|---|---|
| `faith-of-the-fathers.jpg` | Hero background + Annual Theme section (focal image) |
| `ag-logo.png` | Navbar, footer, favicon (AG shield) |
| `worship.jpg`, `church-building.jpg` | About section |
| `youth.jpg`, `outreach.jpg` | News/Events, Missions |
| `pastor.jpg` | Senior Pastor message |

Branch copy (service times, address, phone, socials, nav links, ministries, events, verses) lives in
`src/data/site.ts`.
