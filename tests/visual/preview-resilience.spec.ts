import {test, expect} from '@playwright/test';

test('preview survives cancelled asset requests and rejected request bodies', async ({page, request}) => {
  await page.goto('/');
  const image = await page.locator('meta[property="og:image"]').getAttribute('content');
  const asset = new URL(image!).pathname;
  // Normal navigation may cancel requests to the previous page. This must not
  // terminate the dev proxy and take down every subsequent browser check.
  await page.evaluate(async path => {
    await Promise.all(Array.from({length: 24}, async (_, index) => {
      const controller = new AbortController();
      const pending = fetch(`${path}?cancel=${index}`, {signal: controller.signal})
        .then(response => response.arrayBuffer()).catch(() => undefined);
      setTimeout(() => controller.abort(), index % 6);
      await pending;
    }));
  }, asset);
  const rejected = await request.post(asset, {data: 'x'.repeat(64 * 1024)});
  try { expect(rejected.status()).toBe(405); }
  finally { await rejected.dispose(); }
  const healthy = await request.get('/');
  try { expect(healthy.status()).toBe(200); }
  finally { await healthy.dispose(); }
  expect((await page.goto('/weekly'))?.status()).toBe(200);
});
