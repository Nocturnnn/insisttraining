import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";

const base = process.env.SITE_TEST_URL || "http://127.0.0.1:3000";
const routes = [
  "/musculacao",
  "/hiit",
  "/",
  "/cronograma",
  "/danca",
  "/eventos",
  "/pilates",
  "/duathlon",
  "/circuito-das-estacoes",
  "/bike-in",
];
const titles = new Set();
const pages = new Map();

for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, `${route}: HTTP 200 esperado`);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title?.includes("Insist Training"), `${route}: título com marca`);
  assert.ok(!titles.has(title), `${route}: título único`);
  titles.add(title);
  assert.match(html, /property="og:title"/);
  assert.match(html, /name="description"/);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: um h1`);
  pages.set(route, html);
  console.log(`OK ${route}: HTTP, título, descrição, Open Graph e h1`);
}

const home = pages.get("/");
assert.equal((home.match(/class="plan-inclusions"/g) || []).length, 4);
for (const route of ["/musculacao", "/hiit", "/danca", "/pilates"]) {
  assert.ok(home.includes(`href="${route}"`), `Card da modalidade: ${route}`);
}
for (const id of ["academia", "modalidades", "planos"])
  assert.ok(home.includes(`id="${id}"`));
const planLinks = [...home.matchAll(/href="(https:\/\/wa\.me\/[^" ]+)"/g)]
  .map((match) => new URL(match[1].replaceAll("&amp;", "&")))
  .filter((url) =>
    url.searchParams.get("text")?.includes("Tenho interesse no plano"),
  );
assert.equal(planLinks.length, 4);
for (const [index, condition] of [
  "209,90 por mês",
  "3x de R$ 179,90",
  "6x de R$ 159,90",
  "12x de R$ 139,90",
].entries()) {
  assert.equal(planLinks[index].pathname, "/556294486227");
  assert.ok(planLinks[index].searchParams.get("text").includes(condition));
}
console.log(
  "OK quatro planos: número, valores e mensagens específicas no WhatsApp",
);

for (const [route, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*href="([^" ]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, new URL(route, base));
    assert.ok(
      routes.includes(url.pathname),
      `Link interno desconhecido: ${href}`,
    );
    if (url.pathname === "/" && url.hash)
      assert.ok(home.includes(`id="${url.hash.slice(1)}"`));
  }
}
console.log("OK destinos internos e âncoras da home");

// The complete timetable must be usable before client-side JavaScript loads.
assert.match(pages.get("/cronograma"), /<table>/);
assert.match(pages.get("/cronograma"), /class="schedule-mobile"/);
assert.doesNotMatch(pages.get("/cronograma"), /Carregando grade parcial/);
console.log("OK grade de aulas no HTML inicial, inclusive a versão mobile");

for (const file of await readdir(
  new URL("../public/images/", import.meta.url),
)) {
  const response = await fetch(new URL(`/images/${file}`, base));
  assert.equal(response.status, 200, `Imagem: ${file}`);
  assert.match(response.headers.get("content-type"), /^image\//);
}
const optimized = await fetch(
  new URL("/_next/image?url=%2Fimages%2Fhome.webp&w=640&q=75", base),
);
assert.equal(optimized.status, 200, "Otimizador Next Image");
assert.match(optimized.headers.get("content-type"), /^image\//);
console.log("OK arquivos de imagem e otimizador do Next.js");
const missing = await fetch(new URL("/pagina-inexistente", base));
assert.equal(missing.status, 404);
assert.match(await missing.text(), /Voltar para a home/);
console.log("OK página 404 com retorno para a home");
