import { expect, test } from '@playwright/test';
import { headingClippingViolations } from './helpers/heading-clipping';
import { designContractViolations } from './helpers/design-contract';

// Real templates, including long-content pages; the specimen page alone cannot detect overrides.
const routes = ['/', '/weekly', '/weekly/005', '/weekly/005/transcript', '/partners',
  '/partners/xiangwai', '/partners/agi-bar', '/wiki', '/wiki/products',
  '/wiki/products/deepseek', '/wiki/people/dhh', '/blog', '/blog/agent-browser-ultrawide',
  '/community', '/search', '/sitemap', '/design-system', '/brand-kit'];
const viewports = [
  {width: 390, height: 844}, {width: 768, height: 1024}, {width: 1210, height: 887},
  {width: 1280, height: 720}, {width: 1440, height: 900},
  {width: 1920, height: 1080}, {width: 2560, height: 1080},
];
for (const prefix of ['', '/en']) for (const viewport of viewports) {
  test(`design contracts ${prefix || 'zh'} ${viewport.width}x${viewport.height}`, async ({page}) => {
    await page.setViewportSize(viewport);
    for (const route of routes) {
      const path = prefix + (route === '/' ? '' : route) || '/';
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      // fonts.ready does not imply container/style layout has settled. Retry the
      // measurement, not the test or page load; persistent violations still fail.
      await expect.poll(async () => {
        const violations = await page.evaluate(designContractViolations);
        violations.push(...await page.evaluate(headingClippingViolations));
        return violations;
      }, {message: path, timeout: 5_000}).toEqual([]);
    }
  });
}
