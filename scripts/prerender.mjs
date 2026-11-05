import { build } from "vite";
import { readFile, writeFile, rm, access } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { site, projects } from "../src/content/site.js";
const ssrDirectory = resolve("dist-ssr");
try {
  await build({
    build: {
      ssr: "src/entry-server.jsx",
      outDir: ssrDirectory,
      copyPublicDir: false,
      emptyOutDir: true,
    },
  });
  const { render } = await import(
    pathToFileURL(resolve(ssrDirectory, "entry-server.js")).href
  );
  const template = await readFile("dist/index.html", "utf8");
  if (!template.includes('<div id="root"></div>'))
    throw new Error("The HTML root marker is missing.");
  const markup = render();
  await writeFile(
    "dist/index.html",
    template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`),
  );
  const canonical = `${site.url.replace(/\/$/, "")}/`;
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\n\nSitemap: ${canonical}sitemap.xml\n`,
  );
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc></url></urlset>\n`,
  );
  for (const image of [
    site.portrait,
    ...projects.map((project) => project.image),
    "/og-image.png",
  ])
    await access(resolve("dist", image.replace(/^\//, "")));
  console.log(
    `Prerendered the portfolio and ${projects.length} projects; generated robots.txt and sitemap.xml.`,
  );
} finally {
  await rm(ssrDirectory, { recursive: true, force: true });
}
