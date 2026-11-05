import { site, skills } from "../src/content/site.js";
const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
export function createSeoHead() {
  const url = `${site.url.replace(/\/$/, "")}/`;
  const image = `${site.url}/og-image.png`;
  const profile = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: site.name,
        description: site.description,
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: site.title,
        description: site.description,
        isPartOf: { "@id": `${url}#website` },
        mainEntity: { "@id": `${url}#person` },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: site.name,
        url,
        image: `${site.url}${site.portrait}`,
        jobTitle: site.role,
        description: site.description,
        email: site.email,
        sameAs: [site.github, site.linkedin],
        homeLocation: { "@type": "Place", name: site.location },
        affiliation: {
          "@type": "EducationalOrganization",
          name: site.institution,
        },
        knowsAbout: skills.flatMap((group) => group.items),
      },
    ],
  };
  return `<title>${escape(site.title)}</title>
    <meta name="description" content="${escape(site.description)}" />
    <meta name="author" content="${escape(site.name)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#f8fafc" />
    <link rel="canonical" href="${escape(url)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escape(site.name)}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${escape(url)}" />
    <meta property="og:title" content="${escape(site.title)}" />
    <meta property="og:description" content="${escape(site.description)}" />
    <meta property="og:image" content="${escape(image)}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Bavindu Yeshan — Full-stack and application developer." />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(site.title)}" />
    <meta name="twitter:description" content="${escape(site.description)}" />
    <meta name="twitter:image" content="${escape(image)}" />
    <meta name="twitter:image:alt" content="Bavindu Yeshan — Full-stack and application developer." />
    <link rel="preload" as="image" href="${escape(site.portrait)}" fetchpriority="high" />
    <script type="application/ld+json">${JSON.stringify(profile).replaceAll("<", "\\u003c")}</script>`;
}
