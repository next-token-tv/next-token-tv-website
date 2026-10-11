import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";
import { readSitemapDates } from "./scripts/lib/sitemap-dates.mjs";

const sitemapDates = await readSitemapDates(fileURLToPath(new URL(".", import.meta.url)));

export default defineConfig({
  site: "https://nexttoken.tv",
  output: "static",
  trailingSlash: "never",
  integrations: [
    sitemap({
      serialize: (page) => {
        const date = sitemapDates.get(new URL(page.url).pathname.replace(/\/$/, ""));
        return date ? { ...page, lastmod: date } : page;
      },
      filter: (page) => {
        const path = new URL(page).pathname;
        return !path.endsWith(".md") && !path.endsWith(".txt") && !path.endsWith(".json") && !/\/(?:404|(?:en\/)?(?:design-system|search))(?:\.html|\/)?$/.test(path);
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
