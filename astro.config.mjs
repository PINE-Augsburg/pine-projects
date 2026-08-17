import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://projects.pine-augsburg.de",

  integrations: [
    sitemap({
      namespaces: {
        news: false,
        xhtml: false,
        video: false,
      },
    }),
  ],
});