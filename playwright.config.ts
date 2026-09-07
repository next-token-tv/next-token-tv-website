import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  reporter: [["line"], ["html", { open: "never" }]],
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      maxDiffPixelRatio: 0.01,
    },
  },
  use: {
    baseURL: "http://127.0.0.1:4176",
    channel: "chrome",
    colorScheme: "light",
    locale: "zh-CN",
    reducedMotion: "reduce",
  },
  webServer: {
    command: "npm run build && ASTRO_PREVIEW_BACKGROUND=0 npx astro preview --ignore-lock --host 127.0.0.1 --port 4176",
    url: "http://127.0.0.1:4176",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
