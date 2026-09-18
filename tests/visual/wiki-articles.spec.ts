import { expect, test } from "@playwright/test";

const samples = ["products/deepseek", "brands/deepseek", "people/dhh"];

test("Wiki prose links stay subtle but show hover and keyboard focus", async ({ page }) => {
  await page.goto("/wiki/products/workbuddy");
  const link = page.locator(".wiki-prose a").first();
  await expect(link).toBeVisible();
  await expect(link).toHaveCSS("text-decoration-line", "underline");
  await expect(link).toHaveCSS("text-decoration-style", "dashed");
  expect(await link.evaluate((element) => parseFloat(getComputedStyle(element).textUnderlineOffset))).toBeGreaterThan(5);
  const restingBackground = await link.evaluate((element) => getComputedStyle(element).backgroundColor);
  expect(restingBackground).toBe("rgba(0, 0, 0, 0)");
  const restingBox = await link.boundingBox();

  await link.hover();
  const hoverBackground = await link.evaluate((element) => getComputedStyle(element).backgroundColor);
  expect(hoverBackground).not.toBe(restingBackground);
  await expect(link).not.toHaveCSS("box-shadow", "none");
  expect(await link.boundingBox()).toEqual(restingBox);

  await link.focus();
  await expect(link).toHaveCSS("outline-style", "solid");
});

test("Wiki samples publish readable bilingual articles and working citations without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  for (const prefix of ["", "/en"]) {
    for (const sample of samples) {
      const path = `${prefix}/wiki/${sample}`;
      await page.goto(path);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator(".wiki-prose")).toBeVisible();
      await expect(page.locator("main > :last-child")).toHaveClass(/entity-related-episodes/);
      await expect(page.locator(".entity-related-episodes h2")).toHaveText(prefix ? "Mentioned on Next Token" : "在 Next Token 中出现");
      await expect(page.locator(".wiki-outline .wiki-updated time")).toHaveCount(2);
      await expect(page.locator(".entity-verification")).toHaveCount(0);
      await expect(page.locator(".entity-detail-poster")).toHaveCount(0);
      await expect(page.locator(".entity-article-poster")).toHaveCount(sample === "people/dhh" ? 0 : 1);
      expect(await page.locator(".wiki-prose h2").count()).toBeGreaterThanOrEqual(3);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://nexttoken.tv${path}`);
      const faq = page.locator('.wiki-prose h2', { hasText: prefix ? 'Frequently asked questions' : '常见问题' });
      await expect(faq).toBeVisible();
      expect(await page.locator('.wiki-prose h3').count()).toBeGreaterThanOrEqual(3);
      const navigation = await page.locator(".wiki-outline a").evaluateAll(links => links.map(link => link.getAttribute("href")!));
      for (const hash of navigation) expect(await page.evaluate(hash => !!document.getElementById(decodeURIComponent(hash.slice(1))), hash)).toBe(true);
      const citations = await page.locator('.wiki-prose a[href*="/transcript#"]').evaluateAll(links => links.map(link => (link as HTMLAnchorElement).getAttribute("href")!));
      expect(citations.length).toBeGreaterThan(0);
      for (const href of citations) {
        await page.goto(href);
        expect(await page.evaluate(() => !!document.getElementById(decodeURIComponent(location.hash.slice(1))))).toBe(true);
      }
    }
  }
  // As of 2026-09-18 every product, brand and non-host person has an article, so no
  // live no-article sample exists for EntityDetailPage. Keep a positive assertion on
  // the former fallback sample; if a future entity ships without an article, point a
  // fallback case (`.wiki-prose` count 0 with a visible h1) at that entity here.
  await page.goto("/wiki/products/glm");
  await expect(page.locator(".wiki-prose")).toHaveCount(1);
  await expect(page.locator("h1")).toBeVisible();
  await context.close();
});

for (const width of [390, 768, 1280, 1440, 1920, 2560]) {
  test(`Wiki samples preserve readable geometry at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const prefix of ["", "/en"]) {
      for (const sample of samples) {
        await page.goto(`${prefix}/wiki/${sample}`);
        if (sample !== "people/dhh") {
          for (const selector of [".entity-detail-facts", ".entity-detail-links", ".entity-related-episodes"]) {
            const density = await page.locator(selector).evaluate(section => ({
              padding: parseFloat(getComputedStyle(section).paddingTop),
              heading: parseFloat(getComputedStyle(section.querySelector('h2')!).fontSize),
            }));
            expect(density.padding).toBeLessThanOrEqual(24);
            expect(density.heading).toBeLessThanOrEqual(20);
          }
        }
        const visual = page.locator(sample === "people/dhh" ? ".person-article-visual" : ".entity-article-poster");
        const frame = (await visual.boundingBox())!;
        expect(frame.height).toBe(width <= 760 ? 144 : 192);
        if (sample === "people/dhh") {
          const square = (await page.locator(".person-article-placeholder, .person-article-portrait").boundingBox())!;
          expect(square.width).toBeCloseTo(square.height, 1);
          expect(square.x + square.width / 2).toBeCloseTo(frame.x + frame.width / 2, 1);
          expect(square.y + square.height / 2).toBeCloseTo(frame.y + frame.height / 2, 1);
        }
        const alignment = await page.evaluate(() => {
          const box = (el: Element) => {
            const r = el.getBoundingClientRect();
            const css = getComputedStyle(el);
            return { x: r.x, width: r.width, left: parseFloat(css.paddingLeft), right: parseFloat(css.paddingRight) };
          };
          return {
            hero: box(document.querySelector(".wiki-detail-hero")!),
            sections: [...document.querySelectorAll(".wiki-detail-back, .wiki-reading, .wiki-support-section")].map(box),
            titleX: document.querySelector(".wiki-detail-copy")!.getBoundingClientRect().x,
            proseX: document.querySelector(".wiki-prose")!.getBoundingClientRect().x,
            supportX: [...document.querySelectorAll(".wiki-support-section > :last-child")].map(el => el.getBoundingClientRect().x),
          };
        });
        for (const section of alignment.sections) expect(section).toEqual(alignment.hero);
        expect(alignment.titleX).toBeCloseTo(alignment.proseX, 1);
        for (const x of alignment.supportX) expect(x).toBeCloseTo(alignment.proseX, 1);
        const metrics = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth - innerWidth,
          ratios: [...document.querySelectorAll("h2")].map(h => {
            const s = getComputedStyle(h);
            return parseFloat(s.lineHeight) / parseFloat(s.fontSize);
          }),
        }));
        expect(metrics.overflow).toBeLessThanOrEqual(0);
        for (const ratio of metrics.ratios) expect(ratio).toBeCloseTo(1.25, 2);
      }
    }
    if (width === 390 || width === 1440) await page.screenshot({ path: `/tmp/wiki-dhh-${width}.png`, fullPage: true });
  });
}
