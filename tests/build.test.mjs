import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, stat, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

test('static output preserves URLs, assets, contact subjects and deployment boundaries', async () => {
  const temporary = await mkdtemp(join(tmpdir(), 'eduard-v4-'));
  try {
    for (const context of ['production', 'deploy-preview', 'branch-deploy']) {
      const output = join(temporary, context);
      execFileSync(
        process.execPath,
        ['node_modules/astro/bin/astro.mjs', 'build', '--outDir', output],
        {
          env: { ...process.env, CONTEXT: context, ASTRO_TELEMETRY_DISABLED: '1' },
          stdio: 'pipe',
        }
      );
      const html = await readFile(join(output, 'index.html'), 'utf8');
      const production = context === 'production';
      assert.match(html, /rel="canonical" href="https:\/\/eduard.io\/"/);
      assert.equal((html.match(/<h1\b/g) || []).length, 1);
      assert.equal((html.match(/<article\b/g) || []).length, 4);
      assert.equal(html.includes('cloud.umami.is/script.js'), production);
      assert.equal(html.includes('content="noindex, nofollow"'), !production);
      assert.doesNotMatch(html, /alpine|unpkg|Euclid|figma.com\/api|astro-island/);
      const subjects = [...html.matchAll(/href="mailto:[^"]+\?subject=(Enquiry[^"]+)"/g)].map(
        (match) => decodeURIComponent(match[1])
      );
      assert.equal(subjects.length, 4);
      assert.equal(new Set(subjects).size, 4);
      assert.ok(subjects.includes('Enquiry about Growth & Activation'));
      for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)) {
        if (match[1] === '/') continue;
        assert.ok((await stat(join(output, match[1]))).size > 0, match[1]);
      }
      for (const asset of [
        'favicons/favicon.ico',
        'favicons/favicon.svg',
        'favicons/favicon.png',
        'images/gelato.svg',
        'sitemap.xml',
      ]) {
        assert.ok((await stat(join(output, asset))).size > 0, asset);
      }
      assert.match(await readFile(join(output, '404.html'), 'utf8'), /Page not found/);
      const robots = await readFile(join(output, 'robots.txt'), 'utf8');
      if (production) {
        assert.equal(robots, await readFile('public/robots.txt', 'utf8'));
        assert.equal(await stat(join(output, '_headers')).catch(() => null), null);
      } else {
        assert.equal(robots, 'User-agent: *\nDisallow: /\n');
        assert.match(
          await readFile(join(output, '_headers'), 'utf8'),
          /X-Robots-Tag: noindex, nofollow/
        );
      }
      for (const obsolete of [
        'feed/index.html',
        'index.old/index.html',
        'articles/example-article/index.html',
        'notes/example-note/index.html',
      ]) {
        assert.equal(await stat(join(output, obsolete)).catch(() => null), null);
      }
    }
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});
