import { expect, test } from '@playwright/test';
import { headingClippingViolations } from './helpers/heading-clipping';

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
      const violations = await page.evaluate(() => {
        const problems: string[] = [];
        if (document.documentElement.scrollWidth > innerWidth) problems.push('page overflow');
        const nav = document.querySelector('.nav.shell')!.getBoundingClientRect();
        for (const el of document.querySelectorAll('main .shell')) {
          const r = el.getBoundingClientRect();
          if (!r.width) continue;
          if (Math.abs(r.left - nav.left) > 1 || Math.abs(r.right - nav.right) > 1) problems.push(`shell: ${el.className}`);
        }
        for (const el of document.querySelectorAll('main h1, main h2, .heading-reading-title')) {
          const s = getComputedStyle(el), r = el.getBoundingClientRect();
          if (!r.width) continue;
          if (el.scrollWidth > el.clientWidth + 1) problems.push(`heading overflow: ${el.textContent?.slice(0,40)}`);
          if (el.tagName === 'H2' || el.classList.contains('heading-reading-title')) {
            if (Math.abs(parseFloat(s.lineHeight) / parseFloat(s.fontSize) - 1.25) > .01) problems.push(`heading leading: ${el.className}`);
          }
        }
        const roles: Record<string, string> = {
          'heading-section-display': '--heading-section-display-size',
          'heading-section-content': '--heading-section-content-size',
          'heading-section-compact': '--heading-section-compact-size',
          'heading-follow-display': '--heading-follow-display-size',
        };
        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        for (const [role, token] of Object.entries(roles)) for (const el of document.querySelectorAll(`.${role}`)) {
          const s = getComputedStyle(el);
          if (Math.abs(parseFloat(s.fontSize) - parseFloat(s.getPropertyValue(token)) * rem) > .1) problems.push(`role size: ${role}`);
        }
        for (const el of document.querySelectorAll('.transcript-meta-actions a')) {
          const r = el.getBoundingClientRect(), parent = el.parentElement!.getBoundingClientRect();
          if (Math.abs(r.left-parent.left)>1 || Math.abs(r.right-parent.right)>1) problems.push('transcript action alignment');
        }
        return problems;
      });
      violations.push(...await page.evaluate(headingClippingViolations));
      expect(violations, path).toEqual([]);
    }
  });
}
