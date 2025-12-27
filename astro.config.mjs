import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  adapter: cloudflare(),
  build: {
    format: "file",
  },
  integrations: [react(), sitemap()],
  site: `https://example.com`,
  trailingSlash: "never",
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
