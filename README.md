# Bavindu Yeshan — personal portfolio

A professional React + Vite software developer portfolio using a white, navy,
and blue visual system. It includes a clear developer profile, the selected
portrait, 12 project cards with technical overviews and source links, project
filters, an education section, grouped skills, and the existing Web3Forms form.

## Run and build

```bash
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` builds the browser app, renders the complete portfolio into the
initial HTML, generates the sitemap and robots file, and runs the SEO checks.
The static output is in `dist/`; no production server or database is required.
Temporary `dist-ssr/` build files are removed automatically. `npm run check:seo`
can check an existing build again.

## Edit your content

`src/content/site.js` holds the public profile, email, canonical site URL, project
links, and technology groups. The public email is `bavinduyeshan18@gmail.com`.
The current canonical URL is `https://bavinduyeshan-web.netlify.app/`; change
`site.url` before deploying to a different primary domain. Keep it as an HTTPS
origin without a trailing slash. The build updates metadata, schema, sitemap,
and robots from that single value.

The selected white T-shirt portrait comes from `src/assets/image/personal-img.png`.
An optimized JPEG copy is used on the site; the original upload is preserved.
Public images live in `public/images/`. Keep image paths stable or update the
content configuration. The project cards focus on implementation details and
repository links; the original project artwork is preserved in the files.
Three existing projects linked to an unrelated
Flutter repository; those incorrect code links were removed, and their original
LinkedIn project links remain. Add the correct repositories to the content file
when available.

## Contact form

The existing public Web3Forms access key is preserved in
`src/content/contact-config.js`. The receiving email is controlled by the
Web3Forms account associated with that key; changing the displayed contact email
does not change those account settings. Success, failure, validation, disabled
submission, and a honeypot field are handled in the UI. Browser verification
mocks the service and does not send a real enquiry.

## SEO and accessibility

- Prerendered HTML includes the portfolio, all 12 projects, and contact information.
- A single title, description, and canonical URL are rendered in the HTML head.
- Open Graph and Twitter cards use the included 1200 × 630 `public/og-image.png`.
- JSON-LD describes the website, profile page, and person using the actual profile links.
- `robots.txt` and `sitemap.xml` are generated for the canonical domain at build time.
- The existing Google Search Console verification file is preserved.
- A custom `404.html` replaces the previous catch-all 200 rewrite. This site uses
  section anchors, so unknown paths should return a real 404 on Netlify.
- Semantic sections, one main heading, labeled form controls, visible focus,
  keyboard menu dismissal, reduced motion support, reserved image space, and
  native expandable technical overviews support accessible browsing.
- There are no remote font downloads or scroll-animation dependencies in the page.

Implementation references: [Google’s JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics),
[profile page structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page),
and [Vite’s prerendering guidance](https://vite.dev/guide/ssr#pre-rendering-ssg).

## Deploy

The existing Netlify configuration runs `npm run build` and publishes `dist/`.
It sets security headers and long cache lifetimes only for content-hashed assets.
After deploying, check the production URL, `/robots.txt`, `/sitemap.xml`, social
preview image, and an unknown URL’s 404 status. Use the existing verified Search
Console property to inspect the homepage and submit the sitemap. Search indexing
and rich result eligibility are determined by search engines after deployment.
