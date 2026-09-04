import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://nexttoken.tv",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
