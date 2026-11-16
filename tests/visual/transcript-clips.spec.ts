import { expect, test } from "@playwright/test";

test("episode 010 clip preview copies a video range and exits selection", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const quote = "quote-5153c558cfaf1cafa82f";
  await page.goto(`/weekly/010/transcript#${quote}`);
  const paragraph = page.locator(`#${quote}`);
  const launch = page.getByRole("button", { name: "制作切片" });
  await launch.click();
  await paragraph.locator("[data-clip-pick]").press("Enter");
  await expect(paragraph).toHaveAttribute("data-clip-selected", "");
  await page.getByRole("button", { name: "预览切片" }).click();

  const dialog = page.getByRole("dialog", { name: "切片预览" });
  await expect(dialog.getByRole("link", { name: "在 B 站 打开起点" }))
    .toHaveAttribute("href", "https://www.bilibili.com/video/BV1oJsF6dEsL?t=1034");
  await expect(dialog.getByRole("link", { name: "在 YouTube 打开起点" }))
    .toHaveAttribute("href", "https://www.youtube.com/watch?v=tBMlXQIrYK4&t=1034s");
  await dialog.getByRole("button", { name: "复制切片提示词" }).click();
  await expect(dialog.getByText("已复制切片提示词。")).toBeVisible();
  const prompt = await page.evaluate(() => navigator.clipboard.readText());
  expect(prompt).toContain(`https://nexttoken.tv/weekly/010/transcript#${quote}`);
  expect(prompt).toContain("https://github.com/next-token-tv/next-token-skill");

  await dialog.getByRole("button", { name: "关闭", exact: true }).click();
  await expect(launch).toBeFocused();
  await expect(page.locator("[data-clip-selected]")).toHaveCount(0);
  await expect(paragraph.locator("[data-clip-pick]")).toBeHidden();
});
