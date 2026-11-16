import { expect, test } from "@playwright/test";

for (const [path, launchName, previewName, dialogName, videoName] of [
  ["/weekly/003/transcript", "制作切片", "预览切片", "切片预览", "在 YouTube 打开起点"],
  ["/en/weekly/001/transcript", "Make a clip", "Preview clip", "Clip preview", "Open at start on YouTube"],
] as const) {
  test(`clip tools are available on ${path}`, async ({ page }) => {
    await page.goto(path);
    const paragraph = page.locator('.transcript-quote-paragraph:has(.transcript-playback a[href*="youtube.com"])').first();
    const timestamp = await paragraph.locator('.transcript-playback a[href*="youtube.com"]').getAttribute("href");
    await expect(page.locator("[data-clip-pick], [data-clip-speaker]")).toHaveCount(0);
    await page.getByRole("button", { name: launchName }).click();
    await paragraph.locator("[data-clip-pick]").press("Enter");
    await page.getByRole("button", { name: previewName }).click();
    const dialog = page.getByRole("dialog", { name: dialogName });
    await expect(dialog.getByRole("link", { name: videoName })).toHaveAttribute("href", timestamp!);
    await expect(dialog.locator("#transcript-clip-prompt")).toHaveValue(new RegExp(`${path}#quote-`));
  });
}

test("episode 010 clip preview copies a video range and exits selection", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const firstQuote = "quote-f3b3283d43e2ad751967";
  const lastQuote = "quote-b6632d3bba020385fb15";
  await page.goto(`/weekly/010/transcript#${firstQuote}`);
  const paragraph = page.locator(`#${firstQuote}`);
  const last = page.locator(`#${lastQuote}`);
  const launch = page.getByRole("button", { name: "制作切片" });
  await launch.click();
  await paragraph.locator("[data-clip-pick]").press("Enter");
  await last.locator("[data-clip-pick]").press("Enter");
  await expect(paragraph).toHaveAttribute("data-clip-selected", "");
  await expect(last).toHaveAttribute("data-clip-selected", "");
  await page.getByRole("button", { name: "预览切片" }).click();

  const dialog = page.getByRole("dialog", { name: "切片预览" });
  await expect(dialog.getByRole("link", { name: "在 B 站 打开起点" }))
    .toHaveAttribute("href", "https://www.bilibili.com/video/BV1oJsF6dEsL?t=5286");
  await expect(dialog.getByRole("link", { name: "在 YouTube 打开起点" }))
    .toHaveAttribute("href", "https://www.youtube.com/watch?v=tBMlXQIrYK4&t=5286s");
  await dialog.getByRole("button", { name: "复制切片提示词" }).click();
  await expect(dialog.getByText("已复制切片提示词。")).toBeVisible();
  const prompt = await page.evaluate(() => navigator.clipboard.readText());
  expect(prompt).toBe([
    "Next Token Weekly #010 · 黄仁勋辞职，Fable 杀死比赛，语言即世界",
    "",
    "逐字稿引用",
    `- [起始段落](https://nexttoken.tv/weekly/010/transcript#${firstQuote})`,
    `- [结束段落](https://nexttoken.tv/weekly/010/transcript#${lastQuote})`,
    "",
    "视频来源 · 引用范围 01:28:06–01:29:24",
    "- [B 站 · 从 01:28:06 播放](https://www.bilibili.com/video/BV1oJsF6dEsL?t=5286)",
    "- [YouTube · 从 01:28:06 播放](https://www.youtube.com/watch?v=tBMlXQIrYK4&t=5286s)",
  ].join("\n"));

  await dialog.getByRole("button", { name: "关闭", exact: true }).click();
  await expect(launch).toBeFocused();
  await expect(page.locator("[data-clip-selected]")).toHaveCount(0);
  await expect(paragraph.locator("[data-clip-pick]")).toBeHidden();
});

test("a missing clip end preserves the verified start links", async ({ page }) => {
  const first = "quote-f3b3283d43e2ad751967";
  const untimedEnd = "quote-bfed5eae3716aa622d9a";
  await page.goto(`/weekly/010/transcript#${first}`);
  await page.getByRole("button", { name: "制作切片" }).click();
  await page.locator(`#${first} [data-clip-pick]`).press("Enter");
  await page.locator(`#${untimedEnd} [data-clip-pick]`).press("Enter");
  await page.getByRole("button", { name: "预览切片" }).click();

  const dialog = page.getByRole("dialog", { name: "切片预览" });
  await expect(dialog.getByRole("link", { name: "在 B 站 打开起点" }))
    .toHaveAttribute("href", "https://www.bilibili.com/video/BV1oJsF6dEsL?t=5286");
  const prompt = await dialog.locator("#transcript-clip-prompt").inputValue();
  expect(prompt).toContain(`- [结束段落](https://nexttoken.tv/weekly/010/transcript#${untimedEnd})`);
  expect(prompt).toContain("- [B 站 · 从 01:28:06 播放](https://www.bilibili.com/video/BV1oJsF6dEsL?t=5286) · 终点待确认");
  expect(prompt).not.toContain("引用范围");
});
