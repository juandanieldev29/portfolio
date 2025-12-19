# Portfolio (Next.js + TypeScript + Tailwind)

This repository contains a personal portfolio website built with Next.js, TypeScript and Tailwind CSS. The site is component-driven and structured to be easy to extend and deploy (recommended: Vercel).

## Overview

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Purpose:** Personal portfolio site showcasing projects, experience and contact information.

## Features

- Lightweight single-page portfolio built with reusable React components.
- Responsive layout with Tailwind CSS utilities.
- Clean, minimal structure suitable for customization and personalization.

## Prerequisites

- Node.js 16 or later
- npm (or pnpm/yarn if you prefer)

## Quick Start

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

Top-level files and folders:

- `package.json` — scripts and dependencies
- `next-env.d.ts` — Next.js TypeScript environment
- `postcss.config.cjs`, `tailwind.config.cjs` — Tailwind setup
- `tsconfig.json` — TypeScript configuration
- `styles/globals.css` — global CSS and Tailwind imports
- `public/` — static assets
- `components/` — reusable UI components
- `pages/` — Next.js pages
- `src/` — app-specific source (config/types)

Core files in this repo (visible in this workspace):

- `components/About.tsx` — About section component
- `components/Experience.tsx` — Experience / timeline section
- `components/Footer.tsx` — Site footer
- `components/Header.tsx` — Top navigation / header
- `components/Hero.tsx` — Hero / landing section
- `components/Section.tsx` — Generic section wrapper used across pages
- `components/icons/Menu.tsx` — Menu / icon used by header
- `pages/_app.tsx` — App wrapper (global providers, styles)
- `pages/index.tsx` — Home page composed of components
- `src/config/index.ts` — Project configuration (metadata, links)
- `src/types/index.ts` — Shared TypeScript types and interfaces
- `public/about.txt` — example public text asset
- `public/site.webmanifest` — PWA manifest (if used)

## Components Overview

- `Hero` — Top of the page, headline and primary call-to-action.
- `About` — Personal bio and background details.
- `Experience` — Work/education timeline or notable achievements.
- `Header` — Navigation and site branding.
- `Footer` — Copyright, links and small print.
- `Section` — Layout wrapper for consistent spacing and anchoring.

Each component is a functional React component written in TypeScript. They are intentionally small and composable.

## Configuration

Project-level configuration and metadata live in `src/config/index.ts`. Use that file to update site title, social links, and other constants consumed by components and pages.

## Styling

This project uses Tailwind CSS. Global styles and Tailwind base imports are in `styles/globals.css`. Configure design tokens and extend Tailwind in `tailwind.config.cjs`.

## Deployment

Recommended deployment: Vercel. The project is a standard Next.js app and works well with Vercel's platform (automatic builds, previews, and edge network). To deploy:

1. Push the repository to GitHub (or your Git provider).
2. Import the project in Vercel and follow the deploy wizard.

Environment variables: none required by default. If you add secrets for analytics or CMS, configure them in your host's environment settings.

## Contributing

Contributions are welcome. For small edits or fixes, open a PR with a concise description of the change. For larger features, open an issue first to discuss the plan.

Suggested workflow:

```bash
git checkout -b feat/some-feature
npm install
npm run dev
# make changes, run build and tests (if any)
git commit -am "Add some feature"
git push origin feat/some-feature
```

## License

This project is provided under the MIT License. Update or replace the license as you see fit for your needs.

## Contact

If you want to reach out, update the contact details in `src/config/index.ts` or leave a GitHub issue in this repo.

---

Generated README for the portfolio project.
