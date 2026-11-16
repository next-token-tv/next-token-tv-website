import { expect, test } from "@playwright/test";

const botUrl = "https://x.ai/bot/KDaPgN5oNmtGbJt1VsFHl";

for (const [prefix, width] of [["", 390], ["/en", 1440]] as const) {
  test(`agent tool pages work at ${width}px (${prefix || "zh-Hans"})`, async ({ page, context }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${prefix}/skill`);
    await page.evaluate(() => document.fonts.ready);

    const examples = page.locator("[data-skill-examples]");
    const opener = examples.locator("[data-full-answer]");
    const tabs = examples.getByRole("tab");
    const previewHeight = await examples.evaluate(element => element.getBoundingClientRect().height);

    await tabs.first().focus();
    await page.keyboard.press("ArrowRight");
    await expect(tabs.last()).toHaveAttribute("aria-selected", "true");
    await expect(tabs.last()).toBeFocused();
    await expect(examples.getByRole("tabpanel")).toContainText("帮我总结一下 DeepSeek Harness 发行版的认知");
    await expect(examples.getByRole("tabpanel").locator("p")).toHaveCount(5);
    expect(await examples.evaluate(element => element.getBoundingClientRect().height)).toBe(previewHeight);

    await opener.click();
    const answer = examples.getByRole("dialog");
    await expect(answer).toBeVisible();
    await expect(answer.locator("p")).toHaveCount(5);
    await page.keyboard.press("Escape");
    await expect(answer).toBeHidden();
    await expect(opener).toBeFocused();

    const footer = page.locator("footer");
    const skill = footer.getByRole("link", { name: "Next Token Skill", exact: true });
    await expect(skill.locator("xpath=../following-sibling::li[1]/a")).toHaveText("Next Token Grok Bot");
    await footer.getByRole("link", { name: "Next Token Grok Bot", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${prefix}/grok-bot$`));

    await context.route(botUrl, route => route.fulfill({ body: "Grok test destination" }));
    const popupPromise = page.waitForEvent("popup");
    await page.locator("main").getByRole("link", { name: prefix ? "Open in Grok" : "在 Grok 打开" }).click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(botUrl);
    await expect(page).toHaveURL(new RegExp(`${prefix}/grok-bot$`));
    await popup.close();
  });
}
