import { test, expect } from '@playwright/test';

test('Wiki API publishes collections and stable entity details', async ({ request }) => {
  const indexResponse = await request.get('/api/v1/wiki.json');
  expect(indexResponse.ok()).toBe(true);
  expect(indexResponse.headers()['content-type']).toContain('application/json');
  const index = await indexResponse.json();
  expect(index.schemaVersion).toBe(1);
  expect(index.documentation).toBe('https://nexttoken.tv/api/');
  expect(index.collections.map((entry: { id: string }) => entry.id)).toEqual(['brands', 'products', 'people']);

  const documentation = await request.get('/api/');
  expect(documentation.ok()).toBe(true);

  const brandsResponse = await request.get('/api/v1/wiki/brands.json');
  const brands = await brandsResponse.json();
  expect(brands.count).toBe(brands.data.length);
  expect(brands.data.find((entry: { id: string }) => entry.id === 'openai')).toMatchObject({
    entityType: 'brand',
    kind: 'company-brand',
    apiUrl: 'https://nexttoken.tv/api/v1/wiki/brands/openai.json',
  });

  const openai = await (await request.get('/api/v1/wiki/brands/openai.json')).json();
  expect(openai.name['zh-Hans']).toBe('OpenAI');
  expect(openai.relationships.products).toContain('chatgpt');

  const bytedance = await (await request.get('/api/v1/wiki/brands/bytedance.json')).json();
  expect(bytedance.relationships.episodes).toEqual(expect.arrayContaining([
    'next-token-weekly--001',
    'next-token-weekly--002',
  ]));

  const chatgpt = await (await request.get('/api/v1/wiki/products/chatgpt.json')).json();
  expect(chatgpt.relationships.brand).toBe('openai');
  expect(chatgpt.url).toBe('https://nexttoken.tv/wiki/products/chatgpt/');

  const yangpan = await (await request.get('/api/v1/wiki/people/yangpan.json')).json();
  expect(yangpan.entityType).toBe('person');
  expect(yangpan.photo).toMatch(/^https:\/\/nexttoken\.tv\/assets\//);

  const serialized = JSON.stringify({ brands, openai, chatgpt, yangpan });
  expect(serialized).not.toContain('productionImport');
  expect(serialized).not.toContain('unlinkedCandidates');
});

test('Wiki API documentation exposes the contract and collection links', async ({ page }) => {
  await page.goto('/api/');
  await expect(page.locator('h1')).toContainText('获取资料库');
  await expect(page.getByRole('link', { name: /打开 API 入口/ })).toHaveAttribute('href', '/api/v1/wiki.json');
  await expect(page.locator('.api-collections a')).toHaveCount(3);
  await expect(page.locator('body')).toContainText('单实体路径');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('machine endpoints stay out of the XML sitemap', async ({ request }) => {
  const index = await (await request.get('/sitemap-index.xml')).text();
  const sitemapUrls = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).filter((url): url is string => Boolean(url));
  const sitemaps = await Promise.all(sitemapUrls.map((url) => request.get(url).then((response) => response.text())));
  const content = sitemaps.join('\n');
  expect(content).not.toContain('/api/');
  expect(content).not.toContain('transcript.md');
  expect(content).not.toContain('/llms.txt');
});
