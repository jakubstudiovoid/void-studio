import { pageTitle, site } from "@/data/site";
export function seoHead(title: string | undefined, description: string) {
  const full = pageTitle(title);
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { name: "author", content: site.brand },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#000000" },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "cs_CZ" },
      { property: "og:site_name", content: site.brand },
      { property: "og:image", content: `${site.url}/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${site.url}/og.jpg` },
    ],
  };
}
