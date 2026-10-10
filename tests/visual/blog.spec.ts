import { expect, test } from "@playwright/test";
import { readFileSync, readdirSync } from "node:fs";
import { load } from "js-yaml";

const reviewDrafts = process.env.PLAYWRIGHT_BLOG_DRAFTS === "1";
const slugs = ["jev-structured-decisions", "agent-browser-ultrawide"];
const posts = readdirSync("src/content/prose/blog").filter(file => file.endsWith(".md")).map(file => {
  const source = readFileSync(`src/content/prose/blog/${file}`, "utf8");
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter?.[1]) throw new Error(`Missing frontmatter: ${file}`);
  const data = load(frontmatter[1]) as { status: "draft" | "published" };
  return { slug: file.slice(0, -3), status: data.status };
});
const visiblePosts = posts.filter(post => post.status === "published" || reviewDrafts);
for (const width of [390, 768, 1280, 1440, 1920, 2560]) {
  for (const path of ["/blog", "/blog/episodes", "/blog/episodes/003", ...visiblePosts.filter(post => slugs.includes(post.slug)).map(post => `/blog/${post.slug}`), "/en"]) {
    test(`Blog layout ${path} at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(path);
      await expect(page.locator('main h1')).toHaveCount(1);
      const geometry = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - innerWidth,
        headings: [...document.querySelectorAll('h2')].map(el => { const s = getComputedStyle(el); return parseFloat(s.lineHeight) / parseFloat(s.fontSize); }),
      }));
      expect(geometry.overflow).toBeLessThanOrEqual(1);
      for (const ratio of geometry.headings) expect(ratio).toBeCloseTo(1.25, 2);
      const post = posts.find(post => path === `/blog/${post.slug}`);
      if (post) {
        if (post.status === "draft") await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
        else await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
        expect((await page.locator('article').innerText()).length).toBeGreaterThan(500);
      }
    });
  }
}
test('Blog discovery, source links and Markdown export', async ({ page, request }) => {
  for (const path of ['/weekly/003', '/weekly/003/transcript']) {
    await page.goto(path);
    await page.locator('main a[href="/blog/episodes/003"]').click();
    await expect(page).toHaveURL(/\/blog\/episodes\/003$/);
    for (const slug of slugs) await expect(page.locator(`a[href="/blog/${slug}"]`)).toBeVisible();
  }
  await page.locator(`a[href="/blog/${slugs[0]}"]`).click();
  await expect(page).toHaveURL(new RegExp(`/blog/${slugs[0]}$`));
  await expect(page.locator('.article-actions a[href="/weekly/003/transcript"]')).toBeVisible();
  const index = await (await request.get('/search/zh-Hans.json')).json();
  for (const slug of slugs) {
    expect(index.some((entry: {href: string}) => entry.href === `/blog/${slug}`)).toBe(true);
    const response = await request.get(`/blog/${slug}.md`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('charset=utf-8');
    expect(await response.text()).toContain('https://nexttoken.tv/weekly/003/transcript#');
  }
});

for (const post of posts.filter(post => post.status === "draft")) {
  test(`Draft visibility: ${post.slug}`, async ({ page, request }) => {
    const path = `/blog/${post.slug}`;
    const response = await page.goto(path);
    expect(response?.status()).toBe(reviewDrafts ? 200 : 404);
    if (reviewDrafts) await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
    expect((await request.get(`${path}.md`)).status()).toBe(reviewDrafts ? 200 : 404);
    const index = await (await request.get('/search/zh-Hans.json')).json();
    expect(index.some((entry: { href: string }) => entry.href === path)).toBe(reviewDrafts);
    expect(await (await request.get('/blog/rss.xml')).text()).not.toContain(`https://nexttoken.tv${path}</guid>`);
  });
}
