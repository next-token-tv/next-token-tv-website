import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const cards = Object.entries(JSON.parse(readFileSync('public/assets/og/manifest.json', 'utf8'))) as [string, {image: string; alt: string}][];
// Disjoint groups preserve complete coverage while allowing four independent pages.
for (let group = 0; group < 4; group++) {
test(`every social card has a working PNG and complete matching head metadata (group ${group + 1}/4)`, async ({ page, request }) => {
  for (const [path, card] of cards.filter((_, index) => index % 4 === group)) {
    await page.goto(path);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', `https://nexttoken.tv${card.image}`);
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', `https://nexttoken.tv${card.image}`);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute('content', card.alt);
    const response = await request.get(card.image);
    expect(response.status()).toBe(200);
    const png = await response.body();
    expect(png.subarray(1, 4).toString()).toBe('PNG');
    expect(png.readUInt32BE(16)).toBe(1200);
    expect(png.readUInt32BE(20)).toBe(630);
  }
});
}
