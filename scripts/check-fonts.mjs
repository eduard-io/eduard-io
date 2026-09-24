import { stat } from 'node:fs/promises';

for (const weight of ['Regular', 'Semibold', 'Black']) {
  const path = new URL(`../public/typefaces/mori/PPMori-${weight}.woff2`, import.meta.url);
  const file = await stat(path).catch(() => null);
  if (!file?.size) {
    throw new Error(
      `Missing licensed PP Mori ${weight} webfont. See README.md for local/build setup.`
    );
  }
}
