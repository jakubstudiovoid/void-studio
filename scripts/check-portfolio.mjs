import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import server from "../.vercel/output/functions/__server.func/index.mjs";
const paths = [
  "/",
  "/prace",
  "/studio",
  "/cenik",
  "/kontakt",
  "/soukromi",
  "/prace/ponorka",
  "/prace/green-vision",
  "/prace/glide-edge",
  "/prace/exmar",
  "/prace/adamovsky-ocni-protezy",
  "/prace/kovovyroba-hrdlicka",
  "/prace/sweet-night-club",
];
for (const path of paths) {
  const html = await readFile(`dist${path === "/" ? "" : path}/index.html`, "utf8");
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: one H1`);
  assert.ok(html.includes('rel="canonical"'), `${path}: canonical`);
  assert.ok(html.includes('property="og:title"'), `${path}: OpenGraph`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) {
    const url = match[1];
    if (
      url.startsWith("/assets/") ||
      url.startsWith("/images/") ||
      url.endsWith(".svg") ||
      url.endsWith(".png")
    )
      await access(`dist${url}`);
  }
  assert.ok(!html.includes("Fotografie 0"), `${path}: no placeholder galleries`);
}
for (const [type, expected] of [
  ["web", 7],
  ["identita", 6],
]) {
  const res = await server.fetch(new Request(`https://studiovoid.cz/prace?typ=${type}`));
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.equal((html.match(/class="project-visual"/g) || []).length, expected, `Filter ${type}`);
}
assert.equal(
  (await server.fetch(new Request("https://studiovoid.cz/prace/does-not-exist"))).status,
  404,
);
console.log(
  "PASS: 13 prerendered routes, local assets, SEO, multi-discipline filters, unknown project 404.",
);
