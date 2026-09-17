import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nexttoken.tv",
  output: "static",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !path.endsWith(".md") && !path.endsWith(".txt") && !path.endsWith(".json") && !/\/(?:404|(?:en\/)?design-system)(?:\.html|\/)?$/.test(path);
      },
      i18n: {
        defaultLocale: "zh-Hans",
        locales: { "zh-Hans": "zh-Hans", en: "en" },
      },
    }),
  ],
  build: {
    format: "directory",
  },
});
