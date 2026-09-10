import { test, expect } from '@playwright/test';

test('verified transcript entities link to working profiles, with hosts and Mac excluded', async ({ page, request }) => {
  await page.goto('/weekly/001/transcript/');
  const body = page.locator('.transcript-body');
  for (const host of ['yangpan', 'guizang', 'orange', 'xiangyang-qiaomu'])
    await expect(body.locator(`.transcript-entity-link[href="/wiki/people/${host}/"]`)).toHaveCount(0);
  await expect(body.locator('a[href="/wiki/products/mac/"]')).toHaveCount(0);
  await expect(body).not.toContainText('Gemini 3.5 的 Transcribe');
  const targets = [
    'wiki/brands/plaud',
    'wiki/brands/seeed-studio',
    'wiki/brands/nubia',
    'wiki/brands/zte',
    'wiki/brands/nvidia',
    'wiki/brands/microsoft',
    'wiki/brands/tsmc',
    'wiki/brands/samsung',
    'wiki/brands/stripe',
    'wiki/brands/aws',
    'wiki/brands/vercel',
    'wiki/products/trae',
    'wiki/products/wechat',
    'wiki/products/ios',
    'wiki/products/manus',
    'wiki/products/youware',
    'wiki/products/bloome',
    'wiki/products/feishu',
    'wiki/products/microduck',
    'wiki/products/esp32',
    'wiki/products/seedance',
    'wiki/products/cursor',
    'wiki/products/tiktok',
    'wiki/products/hongguo',
    'wiki/products/qclaw',
    'wiki/products/linear',
    'wiki/brands/y-combinator', 'wiki/brands/doubao', 'wiki/products/pika', 'wiki/products/ruby-on-rails',
    'wiki/products/obsidian', 'wiki/products/linux', 'wiki/products/doubao-seed', 'wiki/products/qoder', 'wiki/products/doubao-work',
    'weekly', 'wiki/products/fal-ai', 'wiki/products/openrouter',
    'wiki/products/pi', 'wiki/products/dia',
    'wiki/products/mimo', 'wiki/products/xiaomi-smart-storage', 'wiki/products/synology-nas', 'wiki/products/ugreen-nas',
    'wiki/products/threejs', 'wiki/products/zcode', 'wiki/products/autoglm',
    'wiki/products/qwen', 'wiki/products/qwen', 'wiki/products/hunyuan',
    'wiki/products/gemini', 'wiki/products/gemini', 'wiki/products/gemini',
    'wiki/products/gpt', 'wiki/products/minimax',
    'wiki/products/herdr', 'wiki/products/youtube', 'wiki/products/opencode',
    'wiki/products/gpt', 'wiki/products/kimi', 'wiki/products/qwen',
  ];
  for (const target of targets) {
    expect(await body.locator(`a[href="/${target}/"]`).count(), target).toBeGreaterThan(0);
    for (const prefix of ['', '/en']) expect((await request.get(`${prefix}/${target}/`)).status()).toBe(200);
  }
  await expect(body.locator('a[href="/wiki/products/openai-api/"]')).toHaveCount(0);
  const apiParagraph = body.locator('p').filter({ hasText: '8 折的 OpenAI API' });
  await expect(apiParagraph.locator('a[href="/wiki/brands/openai/"]')).toHaveText('OpenAI');
  await body.locator('a[href="/wiki/products/gemini/"]').first().click();
  await expect(page.locator('h1')).toHaveText('Gemini');
  await page.goto('/weekly/001/transcript/#chapter-03');
  await page.locator('#chapter-03').scrollIntoViewIfNeeded();
  await page.screenshot({ path: '/tmp/transcript-entities-chapter-03.png' });
});

test('localized name, model-family aliases and standalone product', async ({ page }) => {
  await page.goto('/wiki/people/guanlan-dai/');
  await expect(page.locator('h1')).toHaveText('戴冠兰');
  await page.goto('/en/wiki/people/guanlan-dai/');
  await expect(page.locator('h1')).toHaveText('Guanlan Dai');
  await page.goto('/wiki/products/qwen/');
  await expect(page.locator('h1')).toHaveText('Qwen');
  await expect(page.locator('.entity-detail-aliases')).toContainText('Qwen 3.8 Max 0902');
  await expect(page.locator('.entity-detail-aliases')).toContainText('Qwen 3.8 Flash Next');
  await page.goto('/wiki/products/herdr/');
  await expect(page.locator('h1')).toHaveText('Herdr');
  await expect(page.locator('.entity-detail-facts')).not.toContainText('所属品牌');
  await page.goto('/wiki/products/codex/');
  await expect(page.locator('main')).not.toContainText('Codex 200');
});

test('repeated keywords use pale type-colored backgrounds with visible focus', async ({ page }) => {
  await page.goto('/weekly/001/transcript/');
  const paragraph = page.locator('.transcript-paragraphs p').filter({ hasText: 'Codex 那时候已经比较轻松了' });
  await expect(paragraph.locator('.transcript-entity-link')).toHaveCount(3);
  const link = paragraph.locator('.transcript-entity-link').first();
  await expect(link).toHaveCSS('text-decoration-line', 'none');
  const normal = await link.evaluate(el => ({ color: getComputedStyle(el).color, parentColor: getComputedStyle(el.parentElement!).color }));
  const colors: string[] = [];
  for (const type of ['brand', 'product', 'person']) {
    const entity = page.locator(`.transcript-entity-link[data-entity-type="${type}"]`).first();
    const style = await entity.evaluate(el => ({
      background: getComputedStyle(el).backgroundColor,
      image: getComputedStyle(el).backgroundImage,
      radius: parseFloat(getComputedStyle(el).borderRadius) / parseFloat(getComputedStyle(document.documentElement).fontSize),
    }));
    expect(style.background).toContain('0.08');
    expect(style.image).toBe('none');
    expect(style.radius).toBeCloseTo(0.25, 3);
    colors.push(style.background);
  }
  expect(new Set(colors).size).toBe(3);
  expect(normal.color).toBe(normal.parentColor);
  const height = await paragraph.evaluate(el => el.getBoundingClientRect().height);
  const toggle = page.getByRole('switch', { name: '高亮' });
  await expect(toggle).toHaveAttribute('aria-checked', 'false');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-checked', 'true');
  await expect(link).toHaveCSS('background-color', 'rgba(55, 130, 175, 0.22)');
  expect(await paragraph.evaluate(el => el.getBoundingClientRect().height)).toBe(height);
  await toggle.press('Space');
  await expect(toggle).toHaveAttribute('aria-checked', 'false');
  await expect(link).toHaveCSS('background-color', 'rgba(55, 130, 175, 0.08)');
  await link.hover();
  await expect(link).toHaveCSS('text-decoration-line', 'none');
  await expect(link).toHaveCSS('cursor', 'pointer');
  await expect(link).toHaveCSS('background-color', 'rgba(55, 130, 175, 0.08)');
  await link.focus();
  await expect(link).toHaveCSS('text-decoration-line', 'underline');
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.locator('h1').click();
    await paragraph.scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `/tmp/transcript-quiet-links-${width}.png` });
  }
});

test('Runta remains one platform entry with its founder relationship', async ({ page }) => {
  await page.goto('/wiki/products/runta/');
  await expect(page.locator('.entity-detail-summary')).toContainText('执行平台');
  await expect(page.locator('.entity-detail-facts')).not.toContainText('所属品牌');
  await expect(page.locator('main a[href="/wiki/people/guanlan-dai/"]')).toHaveCount(1);
  await page.goto('/wiki/people/guanlan-dai/');
  await expect(page.locator('main a[href="/wiki/products/runta/"]')).toHaveCount(1);
  await page.goto('/weekly/001/transcript/');
  await expect(page.locator('.transcript-body a[href="/wiki/products/runta/"]')).toHaveCount(1);
});

test('Rails name links to the framework without swallowing the author phrase', async ({ page }) => {
  await page.goto('/weekly/001/transcript/');
  const paragraph = page.locator('.transcript-paragraphs p').filter({ hasText: 'Ruby on Rails 那个连，作者' });
  await expect(paragraph.locator('a[href="/wiki/products/ruby-on-rails/"]')).toHaveText('Ruby on Rails');
  await expect(paragraph.locator('a[href="/wiki/people/dhh/"]')).toHaveCount(0);
  await expect(paragraph).toContainText('Ruby on Rails 那个连，作者');
  await paragraph.locator('a[href="/wiki/products/ruby-on-rails/"]').click();
  await expect(page.locator('h1')).toHaveText('Ruby on Rails');
  await expect(page.locator('main a[href="/wiki/people/dhh/"]')).toHaveCount(1);
});
