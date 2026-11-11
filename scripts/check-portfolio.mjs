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
  "/spoluprace",
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
const pricing = await readFile("dist/cenik/index.html", "utf8");
for (const amount of ["24 000 Kč", "42 000 Kč", "68 000 Kč", "1 200 Kč / hod"]) assert.ok(pricing.includes(amount), amount);
for (const service of ["Web / Start", "Web / Business", "Značka & web"]) {
 const response = await server.fetch(new Request(`https://studiovoid.cz/kontakt?sluzba=${encodeURIComponent(service)}`));
 const html = await response.text();
 const escaped = service.replaceAll("&", "&amp;");
 assert.ok(html.includes(`value="${escaped}" selected=""`), `Prefilled service: ${service}`);
}
const cooperation = await readFile("dist/spoluprace/index.html", "utf8");
assert.equal((cooperation.match(/<details/g) || []).length, 10);
assert.ok(cooperation.includes("Mlčení není schválení"));
assert.ok(cooperation.includes("Oprava naší chyby se do kol nepočítá"));
console.log(
  "PASS: 14 prerendered routes, local assets, SEO, multi-discipline filters, unknown project 404.",
);
