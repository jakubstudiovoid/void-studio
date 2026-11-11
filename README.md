# VOID — portfolio redesign

Samostatný redesign původního `jakubstudiovoid/void-studio`. Obsah a obrazové podklady pocházejí z původního repozitáře. Původní `main` zůstává beze změn.

## Spuštění

```sh
npm ci
npm run dev
npm run build
npm run typecheck
node scripts/check-portfolio.mjs
```

Build nejprve vytvoří TanStack Start SSR aplikaci pro Vercel a poté exportuje všech 14 veřejných stránek do `dist/`. Statické HTML je čitelné bez JavaScriptu a po načtení se hydratuje. `dist/` obsahuje i 404, sitemap a robots.txt. Vercel může použít původní `.vercel/output`; statický hosting používá `dist/`.

## Úpravy obsahu

- `src/data/projects.ts`: projekty, existující podklady, odkazy a rozsah práce.
- `src/data/site.ts`: identita, kontakty a produkční doména.
- `src/data/pricing.ts`: zachovaný původní ceník.
- `src/components/home-page.tsx`: kurátorský výběr a doplňkové vizuály.
- `src/styles.css`: responzivní designový systém.

V detailech nejsou fiktivní fotografie ani prázdné galerie. Další skutečné snímky realizovaných webů lze doplnit do projektových dat. Před publikací na vlastní doméně ověřte aktuálnost projektových textů, cen a obchodních údajů. Kanonická doména a sitemap jsou nastavené na studiovoid.cz.

## Funkčnost a soukromí

Portfolio filtruje podle skutečných výstupů projektu (projekt může patřit do více kategorií). Menu podporuje klávesnici, Escape a řízení fokusu. Animace respektují reduced motion. Font je lokální. Bez analytických cookies, externích fontových služeb, uživatelských účtů a databáze v běhu webu.

Kontaktní formulář **připravuje e-mail v programu návštěvníka**, neposílá jej ze serveru. Pro serverové odesílání je potřeba samostatně připojit e-mailovou službu. Formulář netvrdí, že byla zpráva odeslána.

## Cenotvorba a spolupráce

`src/data/pricing.ts` je společný zdroj balíčků, pravidel a FAQ. Stránky `/cenik` a `/spoluprace` ho zobrazují. Tlačítka balíčků předvyplňují nezávaznou poptávku. Interní ekonomika a pravidla pro sestavení nabídek jsou v `docs/PRICING-STRATEGY.md`; tento dokument není součástí publikovaného webu. Ceny jsou návrh pro nové objednávky, nemění již uzavřené zakázky. Před použitím na veřejné doméně potvrdit aktuální daňový režim studia.
