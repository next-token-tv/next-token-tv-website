import {test,expect} from '@playwright/test';
for(const width of [390,1280]) test(`search entities, episodes and transcript anchors at ${width}`,async({page})=>{
 await page.setViewportSize({width,height:844});
 await page.goto('/search?q=Muse');
 await expect(page.getByRole('status')).toContainText('找到');
 await expect(page.locator('.search-results a').first()).toHaveCSS('display','block');
 await expect(page.locator('.search-results li').first().getByRole('link')).toHaveAttribute('href',/\/wiki\//);
 await page.locator('#search-kind').selectOption('transcript');
 await expect(page.locator('.search-results a').first()).toHaveAttribute('href',/\/transcript#quote-/);
 const href=await page.locator('.search-results a').first().getAttribute('href');
 await page.locator('.search-results a').first().click();
 await expect(page.locator(`[id="${href!.split('#')[1]}"]`)).toBeVisible();
 await page.goto('/search');await page.locator('#search-query').fill('产品经理');await page.locator('#search-query').press('Enter');
 await expect(page.getByRole('status')).toContainText('找到');
 await page.locator('#search-query').fill('nothing-matches-abcxyz');
 await expect(page.getByRole('status')).toContainText('没有找到');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
});
test('English search and global entry',async({page})=>{
 await page.goto('/en/search?q=Codex&type=entity');
 await expect(page.getByRole('status')).toContainText('results');
 await expect(page.locator('.search-results a').first()).toHaveAttribute('href','/en/wiki/products/codex');
 await page.goto('/en/weekly/004');await page.locator('.nav-links').getByRole('link',{name:'Search',exact:true}).click();
 await expect(page).toHaveURL(/\/en\/search$/);
});
test('search load failure offers retry and no-JS has a navigation fallback',async({page,browser})=>{
 await page.route('**/search/zh-Hans.json',route=>route.abort());
 await page.goto('/search?q=Muse');await expect(page.getByRole('status')).toContainText('重试');
 await page.unroute('**/search/zh-Hans.json');await page.locator('#search-query').press('Enter');
 await expect(page.getByRole('status')).toContainText('找到');
 const context=await browser.newContext({javaScriptEnabled:false});const nojs=await context.newPage();
 await nojs.goto('/search');await expect(nojs.locator('noscript').getByRole('link',{name:'网站地图'})).toBeVisible();await context.close();
});

for (const width of [390, 1280]) for (const locale of ['', '/en']) test(`search shortcut reveals and focuses the input ${locale || 'zh'} at ${width}`, async ({ page }) => {
 await page.setViewportSize({width,height:844});
 await page.goto(`${locale}/weekly`);
 await page.locator('footer').scrollIntoViewIfNeeded();
 await page.keyboard.press('Meta+k');
 await expect(page).toHaveURL(new RegExp(`${locale}/search#search-query$`));
 const input = page.locator('#search-query');
 await expect(input).toBeFocused();
 await expect(async () => {
  const bounds = await input.boundingBox();
  const header = await page.locator('.site-header').boundingBox();
  expect(bounds!.y).toBeGreaterThan(header!.y + header!.height);
  expect(bounds!.y + bounds!.height).toBeLessThan(page.viewportSize()!.height);
 }).toPass();
 await input.fill('Codex');
 await page.locator('footer').scrollIntoViewIfNeeded();
 await page.keyboard.press('Control+k');
 await expect(input).toBeFocused();
 await expect(input).toHaveValue('Codex');
});

test('English transcript search links retain the shared paragraph anchors', async ({page, request}) => {
 const response = await request.get('/search/en.json');
 expect(response.ok()).toBe(true);
 const documents = await response.json() as Array<{kind:string; href:string}>;
 for (const number of ['001','002','003','004','005']) {
  const results = documents.filter(row => row.kind === 'transcript' && row.href.startsWith(`/en/weekly/${number}/transcript#`));
  expect(results.length).toBeGreaterThan(0);
  for (const entry of [results[0], results.at(-1)!]) {
   await page.goto(entry.href);
   const id = decodeURIComponent(entry.href.split('#')[1]);
   await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
  }
 }
});
