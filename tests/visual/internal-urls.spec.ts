import { expect, test } from '@playwright/test';

const pages = [
  '/',
  '/en',
  '/weekly',
  '/weekly/002',
  '/weekly/002/transcript',
  '/wiki/brands',
  '/wiki/brands/openai',
  '/wiki/products/chatgpt',
  '/wiki/people/yangpan',
  '/sitemap',
  '/api',
];

test('published page links and canonical metadata omit trailing slashes', async ({ page }) => {
  for (const path of pages) {
    await page.goto(path);
    const internalLinks = await page.locator('a[href^="/"]').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href')).filter((href): href is string => Boolean(href)),
    );
    for (const href of internalLinks) {
      const pathname = new URL(href, 'https://nexttoken.tv').pathname;
      expect(pathname === '/' || !pathname.endsWith('/'), `${path}: ${href}`).toBe(true);
    }

    for (const href of await page.locator('link[rel="canonical"], link[rel="alternate"][hreflang]').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href')).filter((value): value is string => Boolean(value)),
    )) {
      const pathname = new URL(href).pathname;
      expect(pathname === '/' || !pathname.endsWith('/'), `${path}: ${href}`).toBe(true);
    }
  }
});
