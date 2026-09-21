import { expect, test } from '@playwright/test';

const pages = [
  '/',
  '/en',
  '/weekly',
  '/weekly/002',
  '/weekly/002/transcript',
  '/wiki',
  '/en/wiki',
  '/wiki/brands',
  '/wiki/brands/openai',
  '/wiki/products/chatgpt',
  '/wiki/people/yangpan',
  '/sitemap',
  '/api',
];

test('retired entity URLs redirect directly to their canonical successor', async ({ request }) => {
  const mappings = [
    ['products/minimax-h3', 'products/minimax'],
    ['products/glm-5-3-flash', 'products/glm'],
    ['products/claude-opus-4-8', 'products/claude'],
    ['products/claude-fable-5-1', 'products/claude'],
    ['brands/workbuddy', 'products/workbuddy'],
  ];
  for (const [source, target] of mappings) for (const locale of ['', '/en']) {
    const canonical = `${locale}/wiki/${target}`;
    const destination = await request.get(canonical, { maxRedirects: 0 });
    expect(destination.status(), canonical).toBe(200);
    expect(await destination.text()).toContain(`rel="canonical" href="https://nexttoken.tv${canonical}"`);
    for (const base of ['', '/wiki']) for (const suffix of ['', '/']) {
      const path = `${locale}${base}/${source}${suffix}`;
      const response = await request.get(path, { maxRedirects: 0 });
      expect(response.status(), path).toBe(301);
      expect(response.headers().location, path).toBe(canonical);
    }
  }
});

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
    '/wiki',
    '/en/wiki',
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
