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

test('page URLs with trailing slashes redirect to the slashless canonical path', async ({ request }) => {
  for (const path of [
    '/weekly',
    '/weekly/002',
    '/weekly/002/transcript',
    '/wiki/products/iphone',
    '/en/wiki/brands/openai',
    '/sitemap',
    '/api',
  ]) {
    const response = await request.get(`${path}/`, { maxRedirects: 0 });
    expect(response.status(), path).toBe(307);
    expect(response.headers().location, path).toBe(path);
  }

  const queryResponse = await request.get('/wiki/products/iphone/?src=test', { maxRedirects: 0 });
  expect(queryResponse.status()).toBe(307);
  expect(queryResponse.headers().location).toBe('/wiki/products/iphone?src=test');
  expect((await request.get('/', { maxRedirects: 0 })).status()).toBe(200);
});
