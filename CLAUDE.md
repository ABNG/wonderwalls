# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for WonderWalls, a construction / painting / stone-wall company in Kyrenia (Girne), Cyprus. Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, with shadcn/ui primitives. There is no backend, API routes, or test suite.

## Commands

- `npm run dev`: dev server at http://localhost:3000
- `npm run build`: production build (also type-checks)
- `npm run lint`: ESLint (`next/core-web-vitals`)
- `npx prettier --write .`: format. Prettier uses `prettier-plugin-tailwindcss`, which sorts Tailwind class names.

## Architecture

- **Single-page site.** `app/page.tsx` stacks the section components from `components/home/` (Hero, AboutUs, Experience, Service, FeaturedWork, OurClient, ContactUs) and then the Footer. Each linked section is a `<section id="..." className="scroll-mt-16 ...">`, and in-page navigation scrolls to those ids. `app/layout.tsx` sets `scroll-smooth`, loads the fonts (Instrument Sans as `font-sans`, Fraunces as `font-display` for headlines only), renders `Navbar` on every page, and holds the SEO `metadata`.
- **Nav ↔ section coupling.** The nav entries live in `navBarOptions` in `components/header/NavMenu.tsx` as `[label, link, shown]`. `hooks/useHashLocation.ts` returns the current hash and `MenuItem` marks itself active when `link === "/" + hash`. To add or remove a section, update the section `id` and `navBarOptions`.
- **Content.** `lib/content.ts` holds the hero image, phone numbers, email, and the `projects` / `testimonials` arrays. FeaturedWork and OurClient render nothing, and drop out of the nav, while their array is empty. Only add real projects and real client quotes.
- **Server vs client components.** Components are server components by default. Interactivity goes in small `"use client"` wrappers, for example `ExperienceInfoAnimatedNumberClient` (framer-motion `useInView` plus `AnimatedNumber`), and `Navbar` (mobile `Sheet` menu). Keep new client-only logic in wrappers like these so the sections themselves stay server-rendered.
- **Shared layout primitives.** Sections use `components/Container.tsx` for width and padding and `components/Heading.tsx` for section titles.
- **UI primitives.** `components/ui/` holds shadcn/ui components ("new-york" style, configured in `components.json`; add new ones with `npx shadcn@latest add <name>`). Use `cn()` from `lib/utils.ts` to merge class names.
- **Styling.** Warm limestone neutrals are shadcn CSS variables in `app/globals.css` (`bg-background`, `bg-card`, `bg-raised`, `text-foreground`, `text-muted-foreground`, `text-subtle`). The brand accent `borderColor` (`#FFCC33`) is for fills with dark text; for yellow used as text on light surfaces, use `text-stone-ink`. The `.mortar-course` rule under section headings is the site's one signature detail. Motion uses `ease-out` (overridden to `cubic-bezier(0.23,1,0.32,1)`) and named transition properties, never `transition-all`; the only load animation is `.rise-in` in the hero.
- **Assets.** Images are statically imported from `@/public/images/...` for use with `next/image`. Logos are in `public/logo/`.
- **Path alias.** `@/*` maps to the repo root.
