import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// astro.config.mjs
export default defineConfig({
  site: "https://bhar2254.github.io",
  base: "/steam-review-template/", 
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr", "it", "de", "pl", "pt"],
  }
});
