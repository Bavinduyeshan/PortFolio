import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSeoHead } from "./scripts/seo.mjs";
export default defineConfig({
  cacheDir: ".vite-cache",
  plugins: [
    react(),
    {
      name: "portfolio-seo",
      transformIndexHtml(html) {
        return html.replace("<!--seo-head-->", createSeoHead());
      },
    },
  ],
});
