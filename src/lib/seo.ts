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
      { name: "apple-mobile-web-app-title", content: site.brand },
    ],
  };
}
