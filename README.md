# eduard.io — v4.0.0

A static Astro portfolio with reusable Astro components, plain CSS, and no client framework.
Designed in Figma, built with Codex support and hosted on the existing Netlify site.

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bee668f-93f2-41fb-99b0-8a7d5ce9d9e6/deploy-status)](https://app.netlify.com/sites/practical-khorana-da0eed/deploys)

## Local development

Use Node 24.8.0 (`.nvmrc`) and npm. Run `npm ci`, supply the licensed fonts below, then `npm run dev`.

- `npm run check`: Astro/TypeScript diagnostics.
- `npm run build`: font preflight and static output in `dist/`.
- `npm run preview`: serve the built output.
- `npm test`: build/output checks for production, deploy-preview, and branch-deploy contexts.
- `npm run fmt:check`: formatting check; `npm run fmt` applies formatting.

## Content and styles

- `src/data/site.ts`: contact address, metadata and social links.
- `src/data/projects.ts`: the four ordered projects, descriptions, outcomes, images, alt text and email subjects.
- `src/data/experience.ts`: company dates and roles, transcribed from the v4 design.
- `src/styles/tokens.css`: Figma colors, spacing and responsive typography.
- `src/components/`: header, introduction, projects, experience, footer and shared contact link.
- `src/assets/projects/`: Figma source images, converted to responsive WebP by Astro.
- `public/images/v4/`: original Figma SVG exports. Preserve intrinsic dimensions and image crops.

Project cards stack below 700px, form two columns from 700px to 1099px, and use image/text rows from 1100px. These are implementation breakpoints; the reference frames are 390px, 768px, and 1440px. Text and cards grow with content instead of using fixed Figma heights. Case studies, theme switching, back-to-top and social preview metadata are outside this release.

## Deployment and release review

`netlify.toml` uses `npm run build` and publishes `dist` on the existing site. No adapter, functions, SPA rewrite or hosting change is needed.

`CONTEXT=production` includes Umami and preserves the existing crawler policy. All other builds omit analytics, add HTML `noindex`, generate a Netlify `X-Robots-Tag` header, and replace robots.txt with a disallow-all policy. Canonicals always use https://eduard.io. To validate production output locally: `CONTEXT=production npm run build` (this builds files; it does not deploy).
