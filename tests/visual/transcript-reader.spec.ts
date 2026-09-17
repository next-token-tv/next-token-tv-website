import { expect, test } from '@playwright/test';

test('transcript is directly discoverable and only links to available locales', async ({ page }) => {
  for (const path of ['/', '/weekly', '/weekly/001', '/weekly/002']) {
    await page.goto(path);
    const expectedCount = path === '/' ? 2 : path === '/weekly' ? 3 : 1;
    await expect(page.locator('.episode-transcript-cta')).toHaveCount(expectedCount);
    const link = page.locator('main > section').first().locator('.episode-transcript-cta');
    await expect(link).toHaveCount(1);
    const episode = path === '/weekly/001' ? '001' : '002';
    await expect(link).toHaveAttribute('href', `/weekly/${episode}/transcript`);
    if (path.startsWith('/weekly/00')) {
      await expect(page.locator('.transcript-cta-description')).toContainText('个章节 · 支持全文搜索');
      expect(await link.evaluate((node) => !!(node.compareDocumentPosition(document.querySelector('.episode-detail-hero .episode-actions')!) & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
    }
    await link.click();
    await expect(page.locator('.transcript-body')).toBeVisible();
    await page.goto(`/en${path}`);
    await expect(page.locator('.episode-transcript-cta')).toHaveCount(0);
  }
});

test('published transcripts provide a canonical Markdown format', async ({ page, request }) => {
  await page.goto('/weekly/001/transcript');
  const link = page.getByRole('link', { name: 'Markdown 格式' });
  await expect(link).toHaveAttribute('href', '/weekly/001/transcript.md');
  await expect(page.locator('head link[rel="alternate"][type="text/markdown"]')).toHaveAttribute('href', 'https://nexttoken.tv/weekly/001/transcript.md');

  const response = await request.get('/weekly/001/transcript.md');
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('text/markdown');
  const markdown = await response.text();
  expect(markdown).toContain('# Weekly #001｜大模型进入“斩杀线”大战，Token 就是新货币');
  expect(markdown).toContain('## 01 / 节目片头');
  const [body = '', relatedResources = ''] = markdown.split('## 相关资料');
  expect(body).toContain('Claude Code 的架构其实很重');
  expect(body).not.toContain('](https://nexttoken.tv/wiki/');
  expect(relatedResources).toContain('### 品牌');
  expect(relatedResources).toContain('### 产品');
  expect(relatedResources).toContain('### 人物');
  expect(relatedResources).toContain('- [Claude Code](https://nexttoken.tv/wiki/products/claude-code)');
  expect(relatedResources.match(/\/wiki\/products\/claude-code(?:\s|\))/g)).toHaveLength(1);

  const secondResponse = await request.get('/weekly/002/transcript.md');
  expect(secondResponse.ok()).toBe(true);
  const secondMarkdown = await secondResponse.text();
  const [secondBody = '', secondRelatedResources = ''] = secondMarkdown.split('## 相关资料');
  expect(secondBody).toContain('iPhone Duo 发布，Astra 会用电脑就算 AGI 吗？');
  expect(secondBody).not.toContain('](https://nexttoken.tv/wiki/');
  expect(secondRelatedResources).toContain('### 品牌');
  expect(secondRelatedResources).toContain('### 产品');
  expect(secondRelatedResources).toContain('### 人物');
  expect(secondRelatedResources).toContain('- [AGI Bar](https://nexttoken.tv/wiki/brands/agi-bar)');

  await page.goto('/weekly/002/transcript.md');
  await expect(page.locator('body')).toContainText('iPhone Duo 发布，Astra 会用电脑就算 AGI 吗？');
  await expect(page.locator('body')).toContainText('节目片头');
  expect((await page.locator('body').textContent())?.includes('ï½œ')).toBe(false);
});

test('machine-readable transcript discovery only includes published transcripts', async ({ request }) => {
  const llms = await (await request.get('/llms.txt')).text();
  for (const number of ['001', '002']) {
    const markdown = await request.get(`/weekly/${number}/transcript.md`);
    expect(markdown.ok()).toBe(true);
    expect(llms).toContain(`https://nexttoken.tv/weekly/${number}/transcript.md`);
  }
});

test('transcript hero entrances fit desktop and mobile', async ({ page }) => {
  for (const width of [390, 1327, 1920]) for (const path of ['/', '/weekly', '/weekly/001', '/weekly/002']) {
    await page.setViewportSize({ width, height: 897 });
    await page.goto(path);
    const hero = page.locator('main > section').first();
    await expect(hero.locator('.episode-transcript-cta')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `/tmp/transcript-entry-${path.replaceAll('/', '-')}-${width}.png` });
  }
});

test('first transcript chapter clears the fold on a 14-inch laptop viewport', async ({ page }) => {
  await page.setViewportSize({ width: 1512, height: 625 });
  await page.goto('/weekly/002/transcript');
  await expect(page.locator('.transcript-review-banner')).toHaveCount(0);
  await expect(page.locator('.transcript-notice')).toHaveCount(0);
  const intro = await page.locator('#chapter-01 .transcript-turn').first().boundingBox();
  expect(intro).not.toBeNull();
  expect(intro!.y + intro!.height).toBeLessThanOrEqual(625);
  await page.screenshot({ path: '/tmp/transcript-weekly-002-mbp14.png' });
});

for (const width of [390, 1440]) {
  test(`reader tools fit at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/weekly/001/transcript');
    await expect(page.locator('[data-reader-tools]')).toBeVisible();
    await expect(page.getByRole('button', { name: '清除', exact: true })).toBeHidden();
    await page.getByRole('searchbox').focus();
    await expect(page.locator('[data-reader-tools]')).toHaveScreenshot(`reader-search-focus-${width}.png`);
    await expect(page.locator('.transcript-sidebar')).toHaveScreenshot(`reader-sidebar-${width}.png`);
    await expect(page.locator('.transcript-chapter').first()).toHaveScreenshot(`reader-chapter-${width}.png`);
  });
}

test('search finds dialogue without altering transcript and clear restores empty results', async ({ page }) => {
  await page.goto('/weekly/001/transcript');
  const body = await page.locator('.transcript-turns').allTextContents();
  const input = page.getByRole('searchbox', { name: '搜索文字稿' });
  await input.fill('Token');
  await expect(page.getByRole('button', { name: '清除', exact: true })).toBeVisible();
  await expect(page.locator('[data-search-results] a').first()).toBeVisible();
  await expect(page.locator('[data-search-results] mark').first()).toHaveText(/token/i);
  expect(await page.locator('[data-search-results] mark').allTextContents()).toEqual(
    expect.arrayContaining(['Token']),
  );
  await input.fill('圆桌');
  await expect(page.locator('[data-search-results] mark').first()).toHaveText('圆桌');
  await page.locator('[data-search-results] a').first().click();
  await expect(page).toHaveURL(/#chapter-/);
  await input.fill('unfindable-xyz-123');
  await expect(page.locator('[data-search-status]')).toHaveText('0 处匹配');
  await expect(page.locator('[data-search-results] a')).toHaveCount(0);
  await page.getByRole('button', { name: '清除', exact: true }).click();
  await expect(input).toHaveValue('');
  await expect(page.getByRole('button', { name: '清除', exact: true })).toBeHidden();
  expect(await page.locator('.transcript-turns').allTextContents()).toEqual(body);
});

test('chapter sharing uses canonical URL and handles clipboard denial', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/weekly/001/transcript');
  await page.getByRole('button', { name: '复制章节链接' }).first().click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('https://nexttoken.tv/weekly/001/transcript#chapter-01');
  await page.evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error('denied'); }; });
  await page.getByRole('button', { name: '复制章节链接' }).first().click();
  await expect(page.getByRole('textbox', { name: '章节链接' })).toHaveValue('https://nexttoken.tv/weekly/001/transcript#chapter-01');
});
