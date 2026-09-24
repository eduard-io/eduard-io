# eduard.io — v4.0.0

A static Astro portfolio with reusable Astro components, plain CSS, and no client framework.
Designed in [Figma](https://www.figma.com/design/gTbAzYiQ1yq6yK6acS0FzL/v4?node-id=506-3062), hosted on the existing Netlify site.

## Local development

Use Node 24.8.0 (`.nvmrc`) and npm. Run `npm ci`, supply the licensed fonts below, then `npm run dev`.

- `npm run check`: Astro/TypeScript diagnostics.
- `npm run build`: font preflight and static output in `dist/`.
- `npm run preview`: serve the built output.
- `npm test`: build/output checks for production, deploy-preview, and branch-deploy contexts.
- `npm run fmt:check`: formatting check; `npm run fmt` applies formatting.

## Fonts and licensing

PP Mori is user-supplied licensed material, not covered by the repository's MIT license.
The repository includes only the webfonts used by the site:

- `PPMori-Regular.woff2`
- `PPMori-Semibold.woff2`
- `PPMori-Black.woff2`

TTF, OTF, WOFF, unused weights, and italic variants are excluded. The build checks that the three required WOFF2 files are present. Setting `private` in package.json prevents npm publication; it does not make the GitHub repository private.

Cinzel (the footer motto) is self-hosted through `@fontsource/cinzel`, with its SIL Open Font License included in that package. Project imagery and company marks are not relicensed by the code license.

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

Before pushing/releasing:

1. Confirm the actual production deploy SHA and save its deploy ID for rollback. The prior package version, Git tags, and reported live version differed.
2. Check Netlify dashboard production branch, runtime, redirects, headers, plugins and preview enablement; these remain unverified.
3. Review a Deploy Preview at mobile/tablet/desktop and intermediate widths. Verify four distinct mailto subjects, keyboard focus, images/fonts, metadata and no preview analytics/indexing.
4. Inspect the production deploy for `/index.old/`, `/articles/example-article/`, `/notes/example-note/`, and `/feed/`. These existed only in ignored local `_site` output at audit time. They are not copied into Astro; no redirect is invented without publication evidence.
5. Update the sitemap's lastmod when the homepage is actually published; its existing date remains the previous publication date until then.
6. After release, smoke-test homepage, favicons, sitemap, robots, genuine 404 responses, canonical domain/HTTPS handling, and production Umami.

Existing favicon and company-logo URLs remain. Legacy `/stylesheets/` and `/javascript/site.js` files remain available for old cached pages but are not loaded by v4. The legacy font stylesheet is now a no-op: Euclid font files were explicitly retired. No files from stale `_site` output are published.

Rollback: republish the saved previous Netlify deploy, then revert the migration including its build/output configuration before the next production build. Do not assume the v3.0.1 tag matches that deploy.
