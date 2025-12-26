import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [sitemap()],
  site: `https://example.com`,
  trailingSlash: "never",
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
