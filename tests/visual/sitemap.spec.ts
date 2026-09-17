import { test, expect } from '@playwright/test';

for (const width of [390, 1440]) {
  for (const prefix of ['', '/en']) {
    test(`HTML sitemap ${prefix || 'zh'} at ${width}`, async ({ page, request }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${prefix}/sitemap`);
      await expect(page.locator('h1')).toHaveText(prefix ? 'Sitemap' : '网站地图');
      await expect(page.locator(`footer a[href="${prefix}/sitemap"]`)).toBeVisible();
      await expect(page.locator('#brands li')).not.toHaveCount(0);
      await expect(page.locator('#products li')).not.toHaveCount(0);
      await expect(page.locator('#people li')).not.toHaveCount(0);
      await expect(page.locator(`main a[href="/api"]`)).toHaveCount(prefix ? 0 : 1);
      await expect(page.locator('main a[href*="/transcript"]')).toHaveCount(prefix ? 0 : 2);
      await expect(page.locator(`#episodes a[href="${prefix}/weekly/002"] .episode-title`)).toHaveText(prefix
        ? 'iPhone Duo launches. Does Astra using a computer count as AGI?'
        : 'iPhone Duo 发布，Astra 会用电脑就算 AGI 吗？');
      await expect(page.locator(`#episodes a[href="${prefix}/weekly/001"] .episode-title`)).toHaveText(prefix
        ? 'The LLM “Kill Line” Wars: Tokens Are the New Money'
        : '大模型进入“斩杀线”大战，Token 就是新货币');
      const hrefs = await page.locator('main section a').evaluateAll(links => links.map(a => a.getAttribute('href')!));
      for (const href of hrefs) expect((await request.get(href)).status()).toBe(200);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      if (!prefix && width === 1440) {
        const episode = await page.locator('#episodes a[href="/weekly/001"]').boundingBox();
        const transcript = await page.locator('#transcripts a[href="/weekly/001/transcript"]').boundingBox();
        expect(Math.abs(episode!.y - transcript!.y)).toBeLessThan(1);
        expect(transcript!.x).toBeGreaterThan(episode!.x);
      }
      await expect(page.locator('.sitemap-episodes')).toHaveScreenshot(`sitemap-episodes-${prefix ? 'en' : 'zh'}-${width}.png`);
      await expect(page.locator('.sitemap-intro')).toHaveScreenshot(`sitemap-${prefix ? 'en' : 'zh'}-${width}.png`);
      await expect(page.locator('.footer-bottom')).toHaveScreenshot(`sitemap-footer-${prefix ? 'en' : 'zh'}-${width}.png`);
      const xml = await request.get('/sitemap-index.xml');
      expect(xml.status()).toBe(200);
      expect(await xml.text()).toContain('<sitemapindex');
    });
  }
}

test('llms.txt provides a UTF-8 site guide and Markdown transcripts', async ({ page, request }) => {
  const response = await request.get('/llms.txt');
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('text/plain');
  const content = await response.text();
  expect(content).toContain('# Next Token｜词元之外');
  expect(content).toContain('https://nexttoken.tv/weekly/002/transcript.md');
  expect(content).toContain('https://nexttoken.tv/wiki/brands');

  await page.goto('/');
  await expect(page.locator('head link[rel="describedby"]')).toHaveAttribute('href', '/llms.txt');
  await page.goto('/llms.txt');
  await expect(page.locator('body')).toContainText('节目与文字稿');
  expect((await page.locator('body').textContent())?.includes('ï½œ')).toBe(false);
});
