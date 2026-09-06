import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nexttoken.tv",
  output: "static",
  // Accept both spellings locally; directory output and canonical links use trailing slashes.
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      filter: (page) => !/\/404(?:\.html|\/)?$/.test(new URL(page).pathname),
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
