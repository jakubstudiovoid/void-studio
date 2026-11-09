import { cp, mkdir, readFile, writeFile, rm } from "node:fs/promises";
import server from "../.vercel/output/functions/__server.func/index.mjs";
const projectSource = await readFile("src/data/projects.ts", "utf8");
const slugs = [...projectSource.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
const paths = [
  "/",
  "/prace",
  "/studio",
  "/cenik",
  "/kontakt",
  "/soukromi",
  ...slugs.map((s) => `/prace/${s}`),
];
const origin = "https://studiovoid.cz";
await rm("dist", { recursive: true, force: true });
await cp(".vercel/output/static", "dist", { recursive: true });
for (const path of [...paths, "/404"]) {
  const response = await server.fetch(
    new Request(origin + path, { headers: { accept: "text/html" } }),
  );
  if (path != "/404" && response.status !== 200) throw new Error(`${path}: ${response.status}`);
  let html = await response.text();
  if (!html.includes("<html")) throw new Error(`Missing document at ${path}`);
  html = html.replace("</head>", `<link rel="canonical" href="${origin}${path}"/></head>`);
  const dir = path === "/" ? "dist" : `dist${path}`;
  await mkdir(dir, { recursive: true });
  await writeFile(`${dir}/index.html`, html);
  if (path === "/404") await writeFile("dist/404.html", html);
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${origin}${p}</loc></url>`).join("")}</urlset>`,
);
await writeFile("dist/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Exported ${paths.length} pages + 404, sitemap and robots.txt to dist/`);
