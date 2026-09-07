import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop-narrow", width: 1280, height: 800 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "wide", width: 1920, height: 840 },
  { name: "ultrawide", width: 2560, height: 1080 },
] as const;

const routes = [
  { path: "/", shell: ".hero-grid.shell", visual: ".hero-grid" },
  { path: "/en/", shell: ".hero-grid.shell", visual: ".hero-grid" },
  { path: "/weekly/", shell: ".weekly-show-hero-inner.shell", visual: ".weekly-show-hero" },
  { path: "/en/weekly/", shell: ".weekly-show-hero-inner.shell", visual: ".weekly-show-hero" },
  { path: "/weekly/001/", shell: ".episode-detail-content.shell", visual: ".episode-detail-hero" },
  { path: "/weekly/001/transcript/", shell: ".transcript-hero.shell", visual: ".transcript-hero" },
  { path: "/en/weekly/001/", shell: ".episode-detail-content.shell", visual: ".episode-detail-hero" },
  { path: "/weekly/002/", shell: ".episode-preview-hero-inner.shell", visual: ".episode-preview-hero" },
  { path: "/en/weekly/002/", shell: ".episode-preview-hero-inner.shell", visual: ".episode-preview-hero" },
  { path: "/partners/", shell: ".partners-intro.shell", visual: ".partners-intro" },
  { path: "/en/partners/", shell: ".partners-intro.shell", visual: ".partners-intro" },
  { path: "/brands/", shell: ".entity-index-hero.shell", visual: ".entity-index-hero" },
  { path: "/en/brands/", shell: ".entity-index-hero.shell", visual: ".entity-index-hero" },
  { path: "/brands/zhipu/", shell: ".entity-detail-hero.shell", visual: ".entity-detail-hero" },
  { path: "/en/brands/zhipu/", shell: ".entity-detail-hero.shell", visual: ".entity-detail-hero" },
  { path: "/products/", shell: ".entity-index-hero.shell", visual: ".entity-index-hero" },
  { path: "/en/products/", shell: ".entity-index-hero.shell", visual: ".entity-index-hero" },
  { path: "/products/glm-5-3-flash/", shell: ".entity-detail-hero.shell", visual: ".entity-detail-hero" },
  { path: "/en/products/glm-5-3-flash/", shell: ".entity-detail-hero.shell", visual: ".entity-detail-hero" },
] as const;

for (const viewport of viewports) {
  test.describe(`${viewport.name} ${viewport.width}px`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const route of routes) {
      test(`${route.path} keeps shared geometry`, async ({ page }) => {
        await page.goto(route.path);
        await page.evaluate(() => window.localStorage.setItem("next-token-language", "zh-Hans"));
        await page.reload();

        const geometry = await page.evaluate((mainShellSelector) => {
          const rect = (selector: string) => document.querySelector(selector)?.getBoundingClientRect();
          const header = rect(".nav.shell");
          const main = rect(mainShellSelector);
          const headingRatios = [...document.querySelectorAll("h2")].map((heading) => {
            const style = getComputedStyle(heading);
            return Number.parseFloat(style.lineHeight) / Number.parseFloat(style.fontSize);
          });
          return {
            overflow: document.documentElement.scrollWidth - window.innerWidth,
            header: header && { left: header.left, right: header.right },
            main: main && { left: main.left, right: main.right },
            headingRatios,
          };
        }, route.shell);

        expect(geometry.overflow).toBeLessThanOrEqual(0);
        expect(geometry.header).not.toBeNull();
        expect(geometry.main).not.toBeNull();
        expect(Math.abs(geometry.header!.left - geometry.main!.left)).toBeLessThanOrEqual(1);
        expect(Math.abs(geometry.header!.right - geometry.main!.right)).toBeLessThanOrEqual(1);
        for (const ratio of geometry.headingRatios) expect(ratio).toBeCloseTo(1.25, 2);

        if (route.path.includes("/weekly/002/")) {
          const venue = await page.evaluate(() => {
            const rect = (selector: string) => document.querySelector(selector)?.getBoundingClientRect();
            const details = rect(".episode-preview-details.shell");
            const block = rect(".episode-preview-venue-inner.shell");
            const copy = rect(".episode-preview-venue-copy");
            const map = rect(".episode-preview-map");
            return { details, block, copy, map };
          });
          expect(Math.abs(venue.details!.left - venue.block!.left)).toBeLessThanOrEqual(1);
          expect(Math.abs(venue.details!.right - venue.block!.right)).toBeLessThanOrEqual(1);
          if (venue.map) {
            expect(venue.map.left).toBeGreaterThanOrEqual(venue.copy!.left);
            expect(venue.map.right).toBeLessThanOrEqual(venue.copy!.right);
          }
        }

        if (viewport.name === "mobile" || viewport.name === "wide") {
          await expect(page.locator(route.visual)).toHaveScreenshot(
            `${route.path.replaceAll("/", "-").replace(/^-|-$/g, "") || "home"}-${viewport.name}.png`,
          );
        }
      });
    }
  });
}

test.describe("entity metadata and links", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => window.localStorage.setItem("next-token-language", "zh-Hans"));
  });

  test("episode and entity pages link in both directions", async ({ page }) => {
    await page.goto("/weekly/001/");
    await expect(page.locator('.episode-mention-list a[href="/brands/zhipu/"]')).toHaveCount(1);
    await expect(page.locator('.episode-mention-list a[href="/products/glm-5-3-flash/"]')).toHaveCount(1);

    await page.goto("/brands/zhipu/");
    await expect(page.locator('.entity-related-episode-list a[href="/weekly/001/"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://nexttoken.tv/brands/zhipu/");
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", "https://nexttoken.tv/en/brands/zhipu/");
  });

  test("entity pages expose structured data", async ({ page }) => {
    await page.goto("/products/glm-5-3-flash/");
    const structuredData = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
    expect(structuredData["@type"]).toBe("Product");
    expect(structuredData.name).toBe("GLM-5.3 Flash");
    expect(structuredData.brand.name).toBe("智谱");
  });

  test("secondary filters restore from and update the URL", async ({ page }) => {
    await page.goto("/brands/?type=company-brand");
    await expect(page.locator('[data-entity-filter="company-brand"]')).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("[data-entity-kind]:visible")).toHaveCount(2);

    await page.locator('[data-entity-filter="model-brand"]').click();
    await expect(page).toHaveURL(/\/brands\/\?type=model-brand$/);
    await expect(page.locator('[data-entity-kind="model-brand"]')).toBeVisible();
    await expect(page.locator('[data-entity-kind="company-brand"]:visible')).toHaveCount(0);

    await page.goto("/en/products/?type=model");
    await expect(page.locator('[data-entity-filter="model"]')).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("[data-entity-kind]:visible")).toHaveCount(2);
  });

  test("sitemap contains stable episode and entity URLs", async ({ request }) => {
    const response = await request.get("/sitemap-0.xml");
    expect(response.ok()).toBeTruthy();
    const sitemap = await response.text();
    expect(sitemap).toContain("https://nexttoken.tv/weekly/002/");
    expect(sitemap).toContain("https://nexttoken.tv/weekly/001/transcript/");
    expect(sitemap).toContain("https://nexttoken.tv/brands/zhipu/");
    expect(sitemap).toContain("https://nexttoken.tv/en/products/glm-5-3-flash/");
  });

  test("published episode links to its structured transcript", async ({ page }) => {
    await page.goto("/weekly/001/");
    await expect(page.locator('a.episode-transcript-cta[href="/weekly/001/transcript/"]')).toBeVisible();

    await page.goto("/weekly/001/transcript/");
    await expect(page.locator(".transcript-chapter")).toHaveCount(37);
    await expect(page.locator(".transcript-candidate")).toHaveCount(179);
    await expect(page.locator('.transcript-turn[data-speaker="yangpan"] img').first()).toBeVisible();
    await expect(page.locator('.transcript-entity-link[href="/products/glm-5-3-flash/"]').first()).toBeVisible();
    await expect(page.locator("body")).not.toContainText("5.1 担心");
    await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);
  });
});
