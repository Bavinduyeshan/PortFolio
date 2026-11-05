import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { site, projects } from "../src/content/site.js";
const html = await readFile("dist/index.html", "utf8");
assert.match(html, /<html lang="en"[^>]*>/);
assert.equal(
  (html.match(/<h1[\s>]/g) ?? []).length,
  1,
  "Use one primary heading.",
);
assert.match(
  html,
  /<div id="root"><a/,
  "Render the portfolio into the initial HTML.",
);
assert.equal((html.match(/<title>/g) ?? []).length, 1, "Use one page title.");
assert.equal(
  (html.match(/name="description"/g) ?? []).length,
  1,
  "Use one description.",
);
assert.ok(html.includes(site.email));
for (const project of projects)
  assert.ok(html.includes(project.name), `Missing project ${project.name}`);
for (const section of ["home", "projects", "about", "skills", "contact"])
  assert.ok(html.includes(`id="${section}"`));
const schema = JSON.parse(
  html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
);
assert.ok(schema["@graph"].some((entity) => entity["@type"] === "ProfilePage"));
const person = schema["@graph"].find((entity) => entity["@type"] === "Person");
assert.equal(person.email, site.email);
assert.ok(person.sameAs.includes(site.linkedin));
assert.ok(html.includes(`<link rel="canonical" href="${site.url}/"`));
assert.ok(html.includes(`${site.url}/og-image.png`));
assert.ok(!html.includes("bavinduyeshan@example.com"));
assert.ok(!html.includes("og-image.jpg"));
assert.ok(
  (await readFile("dist/robots.txt", "utf8")).includes(
    `${site.url}/sitemap.xml`,
  ),
);
assert.ok(
  (await readFile("dist/sitemap.xml", "utf8")).includes(
    `<loc>${site.url}/</loc>`,
  ),
);
await access("dist/og-image.png");
await access("dist/favicon.svg");
await access("dist/404.html");
assert.ok((await readFile("dist/404.html", "utf8")).includes("noindex"));
assert.ok(
  !(await readFile("netlify.toml", "utf8")).includes("status = 200"),
  "Avoid soft 404s from a catch-all rewrite.",
);
console.log(
  "SEO checks passed: prerendered content, title, description, canonical, social image, profile schema, sitemap, robots, and 404 page.",
);
