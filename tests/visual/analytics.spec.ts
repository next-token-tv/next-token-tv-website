import { test, expect, type Page, type APIRequestContext } from '@playwright/test';

test.afterEach(async ({ page }) => {
  // Drain local proxy requests before Playwright disposes the request fixture.
  await page.unrouteAll({ behavior: 'wait' });
});

async function simulatedProduction(page: Page, request: APIRequestContext, baseURL: string, path: string) {
  // All production-origin pages are served from the local build. No analytics
  // request or outbound platform navigation leaves this test browser.
  await page.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.origin === 'https://nexttoken.tv') {
      const response = await request.get(`${baseURL}${url.pathname}${url.search}`);
      await route.fulfill({ response });
    } else await route.fulfill({ status: 200, contentType: 'application/javascript', body: '' });
  });
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: async () => {} }, configurable: true });
  });
  await page.goto(`https://nexttoken.tv${path}`);
}
const events = (page: Page): Promise<Array<[string, string, Record<string, unknown>]>> => page.evaluate(() => ((window as any).dataLayer ?? []).map((entry: any) => Array.from(entry)).filter((entry: any[]) => entry[0] === 'event'));

test('production platform links emit one event without changing link behavior', async ({ page, request, baseURL }) => {
  await simulatedProduction(page, request, baseURL!, '/en/weekly/002?utm_source=qa');
  const link = page.locator('a[data-listen-platform]').first();
  const platform = await link.getAttribute('data-listen-platform');
  await expect(link).toHaveAttribute('target', '_blank');
  await link.dispatchEvent('click', { button: 0 });
  const recorded = await events(page);
  expect(recorded).toHaveLength(1);
  expect(recorded[0]![1]).toBe('platform_outbound');
  expect(recorded[0]![2]).toMatchObject({ platform, page_path: '/en/weekly/002', language: 'en', episode_number: '002' });
  expect(JSON.stringify(recorded)).not.toContain('utm_source');
  expect(recorded[0]![2]).not.toHaveProperty('link_url');
  expect(await page.evaluate(() => ((window as any).dataLayer ?? []).filter((x: any) => x[0] === 'config').length)).toBe(1);
});

test('only successful chapter and paragraph copies emit reference events', async ({ page, request, baseURL }) => {
  await simulatedProduction(page, request, baseURL!, '/weekly/002/transcript');
  await page.locator('.transcript-copy-link').first().click();
  await page.locator('[data-paragraph-copy]').first().click();
  let recorded = await events(page);
  expect(recorded.map(e => e[1])).toEqual(['copy_reference', 'copy_reference']);
  expect(recorded.map(e => e[2].reference_type)).toEqual(['chapter', 'paragraph']);
  expect(recorded[0]![2].reference_id).toMatch(/^chapter-/);
  expect(recorded[1]![2].reference_id).toMatch(/^quote-/);
  await page.evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error('denied'); }; });
  await page.locator('.transcript-copy-link').first().click();
  expect(await events(page)).toHaveLength(2);
  await expect(page.getByLabel('章节链接', { exact: true })).toBeVisible();
});

test('local previews never initialize Google Analytics', async ({ page }) => {
  const requests: string[] = [];
  page.on('request', r => { if (/google-analytics|googletagmanager/.test(r.url())) requests.push(r.url()); });
  await page.goto('/weekly/002/transcript');
  await page.evaluate(() => document.dispatchEvent(new CustomEvent('nexttoken:copy', { detail: {kind:'chapter',anchor:'chapter-01'} })));
  expect(await events(page)).toEqual([]);
  expect(requests).toEqual([]);
});
