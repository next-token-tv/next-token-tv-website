import { defineConfig } from "@playwright/test";

const port = Number(process.env.PLAYWRIGHT_PORT ?? 4176);
const baseURL = `http://127.0.0.1:${port}`;

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
    baseURL,
    channel: "chrome",
    colorScheme: "light",
    locale: "zh-CN",
    reducedMotion: "reduce",
  },
  webServer: process.env.PLAYWRIGHT_USE_EXISTING_SERVER === "1" ? undefined : {
    command: `npm run build && npx wrangler dev --local --ip 127.0.0.1 --port ${port}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
