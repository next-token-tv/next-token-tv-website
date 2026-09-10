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
  { path: "/weekly/001/", shell: ".episode-detail-hero-inner.shell", visual: ".episode-detail-hero" },
  { path: "/weekly/001/transcript/", shell: ".transcript-hero.shell", visual: ".transcript-hero" },
  { path: "/en/weekly/001/", shell: ".episode-detail-hero-inner.shell", visual: ".episode-detail-hero" },
  { path: "/weekly/002/", shell: ".episode-preview-hero-inner.shell", visual: ".episode-preview-hero" },
  { path: "/en/weekly/002/", shell: ".episode-preview-hero-inner.shell", visual: ".episode-preview-hero" },
  { path: "/partners/", shell: ".partners-intro.shell", visual: ".partners-intro" },
  { path: "/en/partners/", shell: ".partners-intro.shell", visual: ".partners-intro" },
  { path: "/wiki/brands/", shell: ".entity-index-hero.shell", visual: ".entity-index-hero" },
  { path: "/en/wiki/brands/", shell: ".entity-index-hero.shell", visual: ".entity-index-hero" },
  { path: "/wiki/brands/zhipu/", shell: ".entity-detail-hero.shell", visual: ".entity-detail-hero" },
  { path: "/en/wiki/brands/zhipu/", shell: ".entity-detail-hero.shell", visual: ".entity-detail-hero" },
  { path: "/wiki/products/", shell: ".entity-index-hero.shell", visual: ".entity-index-hero" },
  { path: "/en/wiki/products/", shell: ".entity-index-hero.shell", visual: ".entity-index-hero" },
  { path: "/wiki/products/glm/", shell: ".entity-detail-hero.shell", visual: ".entity-detail-hero" },
  { path: "/en/wiki/products/glm/", shell: ".entity-detail-hero.shell", visual: ".entity-detail-hero" },
] as const;

test("platform lists share localized labels, logos and destinations", async ({ page }) => {
  for (const prefix of ["", "/en"]) {
    let expected;
    for (const path of ["/", "/weekly/", "/weekly/001/"]) {
      await page.goto(`${prefix}${path}`);
      const list = page.locator(".platform-list");
      await expect(list.locator("a.platform.is-live")).toHaveCount(5);
      await expect(list.locator("img.platform-logo")).toHaveCount(5);
      const entries = await list.locator(".platform").evaluateAll((rows) => rows.map((row) => ({
        text: row.textContent?.replace(/\s+/g, " ").trim(),
        href: row.getAttribute("href"),
        target: row.getAttribute("target"),
        rel: row.getAttribute("rel"),
      })));
      if (path === '/weekly/001/') {
        expect(entries.map(e => e.href)).not.toEqual(expected?.map(e => e.href));
        await expect(list.locator('a[href*="spotify.com"]')).toHaveAttribute('href', /\/episode\//);
        await expect(list.locator('a[href*="spotify.com"] .coming')).toContainText(prefix ? "Listen / watch" : "收听/收看");
      } else {
        if (expected) expect(entries).toEqual(expected);
        else expected = entries;
        await expect(list.locator('a[href*="spotify.com"]')).toHaveAttribute('href', /\/show\//);
        await expect(list.locator('a[href*="spotify.com"] .coming')).toContainText(prefix ? "Follow show" : "订阅 / 关注");
      }
    }
  }
});

test("person cards link portraits and names to localized profiles", async ({ page }) => {
  for (const prefix of ["", "/en"]) {
    for (const path of ["/", "/weekly/", "/weekly/001/", "/weekly/002/"]) {
      await page.goto(`${prefix}${path}`);
      const portraits = page.locator("article > a.host-photo");
      await expect(portraits).toHaveCount(4);
      for (const portrait of await portraits.all()) {
        const href = await portrait.getAttribute("href");
        expect(href).toMatch(new RegExp(`^${prefix}/wiki/people/[^/]+/$`));
        await expect(portrait.locator("..").locator("h3 a")).toHaveAttribute("href", href!);
        expect((await page.request.get(href!)).status()).toBe(200);
      }
    }
  }
});

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
            `${route.path.replace("/wiki/", "/").replaceAll("/", "-").replace(/^-|-$/g, "") || "home"}-${viewport.name}.png`,
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
    await expect(page.locator('.episode-mention-list a[href="/wiki/brands/zhipu/"]')).toHaveCount(1);
    await expect(page.locator('.episode-mention-list a[href="/wiki/products/glm/"]')).toHaveCount(1);
    const brandGroup = page.locator('[data-mention-kind="brand"]');
    const productGroup = page.locator('[data-mention-kind="product"]');
    await expect(brandGroup).toHaveCount(1);
    await expect(productGroup).toHaveCount(1);
    await expect(brandGroup.locator(".episode-mention-list a")).toHaveCount(Number(await brandGroup.locator(".episode-mention-group-heading span").textContent()));
    await expect(productGroup.locator(".episode-mention-list a")).toHaveCount(Number(await productGroup.locator(".episode-mention-group-heading span").textContent()));

    await page.goto("/wiki/brands/zhipu/");
    await expect(page.locator('.entity-related-episode-list a[href="/weekly/001/"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://nexttoken.tv/wiki/brands/zhipu/");
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", "https://nexttoken.tv/en/wiki/brands/zhipu/");
  });

  test("entity pages expose structured data", async ({ page }) => {
    await page.goto("/wiki/products/glm/");
    const structuredData = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
    expect(structuredData["@type"]).toBe("Product");
    expect(structuredData.name).toBe("GLM");
    expect(structuredData.brand.name).toBe("智谱");
  });

  test("secondary filters restore from and update the URL", async ({ page }) => {
    await page.goto("/wiki/brands/?type=company-brand");
    const companyFilter = page.locator('[data-entity-filter="company-brand"]');
    await expect(companyFilter).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("[data-entity-kind]:visible")).toHaveCount(Number(await companyFilter.locator("strong").textContent()));

    await page.locator('[data-entity-filter="media-brand"]').click();
    await expect(page).toHaveURL(/\/brands\/\?type=media-brand$/);
    await expect(page.locator('[data-entity-kind="media-brand"]')).toBeVisible();
    await expect(page.locator('[data-entity-kind="company-brand"]:visible')).toHaveCount(0);

    await page.goto("/en/wiki/products/?type=model-family");
    const modelFilter = page.locator('[data-entity-filter="model-family"]');
    await expect(modelFilter).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("[data-entity-kind]:visible")).toHaveCount(Number(await modelFilter.locator("strong").textContent()));
  });

  test("sitemap contains stable episode and entity URLs", async ({ request }) => {
    const response = await request.get("/sitemap-0.xml");
    expect(response.ok()).toBeTruthy();
    const sitemap = await response.text();
    expect(sitemap).toContain("https://nexttoken.tv/weekly/002/");
    expect(sitemap).toContain("https://nexttoken.tv/weekly/001/transcript/");
    expect(sitemap).toContain("https://nexttoken.tv/wiki/brands/zhipu/");
    expect(sitemap).toContain("https://nexttoken.tv/en/wiki/products/glm/");
    expect(sitemap).not.toContain("/design-system/");
  });

  test("published episode links to its structured transcript", async ({ page }) => {
    await page.goto("/weekly/001/");
    await expect(page.locator('a.episode-transcript-cta[href="/weekly/001/transcript/"]')).toBeVisible();

    await page.goto("/weekly/001/transcript/");
    await expect(page.locator(".transcript-chapter")).toHaveCount(37);
    await expect(page.locator(".transcript-candidate")).toHaveCount(180);
    await expect(page.locator('.transcript-turn[data-speaker="yangpan"] img').first()).toBeVisible();
    await expect(page.locator('.transcript-entity-link[href="/wiki/products/glm/"]').first()).toBeVisible();
    await expect(page.locator("body")).not.toContainText("5.1 担心");
    await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);
  });
});

test("shared heading roles keep their documented scales", async ({ page }) => {
  const sizesInRem = async (selector: string) => page
    .locator(selector)
    .evaluateAll((headings) => {
      const rootSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
      return headings.map((heading) => Number.parseFloat(getComputedStyle(heading).fontSize) / rootSize);
    });

  const roleSteps = [
    { width: 390, display: 3.1, content: 2.25, compact: 1.8 },
    { width: 768, display: 4.25, content: 2.65, compact: 2.15 },
    { width: 1440, display: 5.25, content: 3, compact: 2.5 },
    { width: 1920, display: 5.25, content: 3, compact: 2.5 },
  ];

  for (const step of roleSteps) {
    await page.setViewportSize({ width: step.width, height: 900 });
    await page.goto("/design-system/");
    await expect.poll(async () => (await sizesInRem(".type-specimens .heading-section-display"))[0]).toBeCloseTo(step.display, 2);
    await expect.poll(async () => (await sizesInRem(".type-specimens .heading-section-content"))[0]).toBeCloseTo(step.content, 2);
    await expect.poll(async () => (await sizesInRem(".type-specimens .heading-section-compact"))[0]).toBeCloseTo(step.compact, 2);
  }

  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto("/");
  const displaySizes = await sizesInRem(".heading-section-display");
  expect(displaySizes.length).toBeGreaterThan(1);
  expect(new Set(displaySizes).size).toBe(1);

  await page.goto("/weekly/001/");
  const episodeSizesInRem = await sizesInRem(".heading-section-content");
  expect(new Set(episodeSizesInRem).size).toBe(1);
  expect(episodeSizesInRem[0]).toBeGreaterThanOrEqual(2.25);
  expect(episodeSizesInRem[0]).toBeLessThanOrEqual(3.75);
  expect(displaySizes[0]!).toBeGreaterThan(episodeSizesInRem[0]!);

  await page.goto("/brand-kit/");
  const compactSizes = await sizesInRem(".heading-section-compact");
  expect(compactSizes.length).toBeGreaterThan(1);
  expect(new Set(compactSizes).size).toBe(1);
  expect(episodeSizesInRem[0]!).toBeGreaterThan(compactSizes[0]!);

  await page.goto("/design-system/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
  await expect(page.locator(".type-specimens .heading-section-display")).toBeVisible();
  await expect(page.locator(".type-specimens .heading-section-content")).toBeVisible();
  await expect(page.locator(".type-specimens .heading-section-compact")).toBeVisible();

  await page.goto("/en/design-system/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
  await expect(page.getByRole("heading", { level: 1, name: "Interface standards" })).toBeVisible();
});

test("featured episode identity never exceeds its section heading", async ({ page }) => {
  const cases = [
    { path: "/", heading: ".weekly .section-heading h2" },
    { path: "/weekly/", heading: ".weekly-show-episodes .weekly-show-section-heading h2" },
    { path: "/en/", heading: ".weekly .section-heading h2" },
    { path: "/en/weekly/", heading: ".weekly-show-episodes .weekly-show-section-heading h2" },
  ];

  for (const width of [390, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const item of cases) {
      await page.goto(item.path);
      const sizes = await page.evaluate((headingSelector) => {
        const size = (selector: string) => Number.parseFloat(getComputedStyle(document.querySelector(selector)!).fontSize);
        return {
          heading: size(headingSelector),
          number: size(".weekly-card .episode-number"),
          title: size(".weekly-card .weekly-copy h3"),
        };
      }, item.heading);
      expect(sizes.number).toBeLessThanOrEqual(sizes.heading);
      expect(sizes.title).toBeLessThanOrEqual(sizes.heading);
    }
  }
});
