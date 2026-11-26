// news-image-20261125 entry: the front page is drawn ahead of time by
// build_image.py (PIL, flat-colour newspaper, deterministic) and shipped as
// entry.png beside this file. This program just copies it to the output
// directory the grader provides.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
const srcSize = statSync(src).size;
if (srcSize === 0) {
  console.error(`error: source image is empty: ${src}`);
  process.exit(1);
}
copyFileSync(src, dst);
// Verify the copy landed intact: same size as the source.
const dstSize = statSync(dst).size;
if (dstSize !== srcSize) {
  console.error(`error: copied image size mismatch: ${dstSize} bytes, expected ${srcSize}`);
  process.exit(1);
}
// Validate the output is a real PNG (8-byte magic signature) before finishing.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!readFileSync(dst, { flag: 'r' }).subarray(0, 8).equals(pngMagic)) {
  console.error(`error: output is not a valid PNG: ${dst}`);
  process.exit(1);
}
console.log(`wrote ${dst} (${dstSize} bytes, PNG verified)`);
