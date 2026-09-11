# Parth Nirmal — Portfolio

A single-page portfolio site for Parth Bipinchandra Nirmal, built as an
editorial print piece: warm paper stock, heavy grotesk headlines, hairline
rules, and numbered sections (`00`–`07`) like a printed report.

## Stack

- **Next.js 16** (App Router, static prerender)
- **TypeScript** (strict)
- **Tailwind CSS 3**
- **lucide-react** for icons

No animation library and no component library. Scroll reveals and the
count-up metrics use `IntersectionObserver` plus CSS transitions, so the
page ships almost no runtime JavaScript.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run type-check  # tsc --noEmit
npm run lint
```

## Editing the content

**Everything on the page comes from one file: `src/lib/content.ts`.** There is
no CMS and no markdown — change the data there and the whole site updates.

| What to change | Where in `src/lib/content.ts` |
| --- | --- |
| Name, email, phone, LinkedIn, headline | `profile` |
| Scrolling ticker strip under the hero | `tickerItems` |
| Big numbers in section 02 | `impactMetrics` |
| Jobs in section 03 | `experience` |
| Projects in section 04 | `projects` |
| Skills in section 05 | `skillGroups` |
| Degrees in section 06 | `education` |
| Section names and numbering in the nav | `sections` |

A few notes:

- In `impactMetrics`, `value` must be a plain number — the count-up animation
  needs it. Put the `$` in `prefix` and the `M`/`%`/`+` in `suffix`, and set
  `decimals` to match (`33.9` needs `decimals: 1`).
- Exactly one metric should have `featured: true`; it renders larger and in
  the accent colour.
- `experience` bullets are split into `lead` (rendered bold) and `rest`, which
  is what creates the "bold claim, then the detail" rhythm.

### Swapping the resume PDF

Replace `public/resume/Parth-Nirmal-Resume.pdf`, keeping the same filename, and
every download link picks it up automatically.

## Design system

Tokens live in `tailwind.config.ts`; the reusable classes are in
`src/app/globals.css`.

| Token | Value | Used for |
| --- | --- | --- |
| `paper` | `#F3EFE7` | Page background (warm bone) |
| `paper-deep` | `#E9E3D7` | Alternating section bands |
| `ink` | `#15120E` | Text, rules, inverted panels |
| `rust` | `#BE4218` | Accent on light backgrounds |
| `rust-glow` | `#E8683C` | Accent on the dark `ink` panels |
| `rule` | `#D6CEBF` | Hairline dividers |

Type is Archivo (display, 600–900), Inter (body), and IBM Plex Mono (labels
and figures), all loaded via `next/font`.

Notable utility classes:

- `.print-block` — hard-edged card with a 6px offset black shadow
- `.paper-grain` — fixed SVG noise overlay, applied to `<body>`
- `.ledger-lines`, `.column-rules` — ruled-paper backdrops
- `.reveal` / `.reveal-rule` — scroll-in animation targets used by `<Reveal>`
- `.label`, `.stamp` — mono microtype and the outlined accent badge

The site is intentionally **light-only**; there is no dark mode toggle, since
the paper-and-ink aesthetic depends on the light ground.

## Structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, metadata, chrome
│   ├── page.tsx              # section order + JSON-LD Person schema
│   ├── globals.css           # design system
│   ├── opengraph-image.tsx   # generated social card
│   ├── icon.svg              # favicon
│   ├── not-found.tsx, robots.ts, sitemap.ts
├── components/
│   ├── top-bar.tsx           # nav, scroll progress, mobile overlay
│   ├── index-rail.tsx        # fixed left 00–07 index (>=1280px)
│   ├── section.tsx           # Section + SectionHead primitives
│   ├── reveal.tsx            # IntersectionObserver reveal wrapper
│   ├── counter.tsx           # count-up numbers
│   ├── ticker.tsx, footer.tsx, copy-email.tsx
│   └── sections/             # one file per numbered section
└── lib/
    ├── content.ts            # all copy and data
    ├── use-active-section.ts # scroll spy + progress
    └── utils.ts
```

Accessibility and polish already handled: skip link, keyboard-dismissible
mobile menu, focus-visible states, `prefers-reduced-motion` disabling all
animation and count-ups, and a print stylesheet.

## Deploying

The site is fully static. Push to GitHub and import the repo on
[Vercel](https://vercel.com) — no environment variables or build settings
needed.

### Pointing a domain at it

The canonical URL lives in exactly one place — `siteUrl` at the top of
`src/lib/content.ts`. Change that one line and the metadata, Open Graph tags,
JSON-LD, `sitemap.xml`, and `robots.txt` all follow. It currently reads
`https://parthnirmal.com`.

Then add the domain in the Vercel project under **Settings → Domains** and
create the DNS records Vercel shows you at your registrar (an `A` record for
the apex and a `CNAME` for `www`). TLS is issued automatically.
