import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { Parser } from 'htmlparser2';
const cards = Object.entries(JSON.parse(readFileSync('public/assets/og/manifest.json', 'utf8'))) as [string, {image: string; alt: string}][];
// Metadata is emitted in static HTML. Avoid navigating through every page:
// that starts unrelated scripts/lazy images and aborts them on the next URL.
// Keep one real-browser check per group as well as exhaustive HTTP validation.
for (let group = 0; group < 4; group++) {
test(`every social card has a working PNG and complete matching head metadata (group ${group + 1}/4)`, async ({ page, request }) => {
  const entries = cards.filter((_, index) => index % 4 === group);
  for (const [path, card] of entries) {
    const expected = {'og:image': `https://nexttoken.tv${card.image}`, 'twitter:image': `https://nexttoken.tv${card.image}`, 'twitter:card': 'summary_large_image', 'og:image:alt': card.alt};
    const pageResponse = await request.get(path);
    try {
      expect(pageResponse.status(), path).toBe(200);
      const metadata: Record<string, string[]> = {};
      let inHead = false;
      const parser = new Parser({
        onopentag(name, attrs) {
          if (name === 'head') inHead = true;
          const key = attrs.property ?? attrs.name;
          if (inHead && name === 'meta' && key) (metadata[key] ??= []).push(attrs.content);
        },
        onclosetag(name) { if (name === 'head') inHead = false; },
      });
      parser.end(await pageResponse.text());
      for (const [key, value] of Object.entries(expected)) expect(metadata[key], `${path} ${key}`).toEqual([value]);
    } finally { await pageResponse.dispose(); }
    const response = await request.get(card.image);
    try {
      expect(response.status(), card.image).toBe(200);
      const png = await response.body();
      expect(png.subarray(0, 8)).toEqual(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
      expect(png.readUInt32BE(16)).toBe(1200);
      expect(png.readUInt32BE(20)).toBe(630);
    } finally { await response.dispose(); }
    if (path === entries[0][0]) {
      expect((await page.goto(path))?.status()).toBe(200);
      for (const [key, value] of Object.entries(expected)) {
        await expect(page.locator(`head meta[property="${key}"], head meta[name="${key}"]`)).toHaveAttribute('content', value);
      }
    }
  }
});
}
