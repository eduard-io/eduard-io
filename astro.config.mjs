import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';

export default defineConfig({
  site: 'https://eduard.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    {
      name: 'preview-indexing',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          if (process.env.CONTEXT !== 'production') {
            await writeFile(new URL('_headers', dir), '/*\n  X-Robots-Tag: noindex, nofollow\n');
            await writeFile(new URL('robots.txt', dir), 'User-agent: *\nDisallow: /\n');
          }
        },
      },
    },
  ],
});
