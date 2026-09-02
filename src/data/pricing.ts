export type PricePackage = {
  number: string;
  slug: string;
  title: string;
  price: string;
  lead: string;
  items: string[];
};

export type PriceItem = {
  title: string;
  price: string;
  note: string;
};

export const pricePackages: PricePackage[] = [
  {
    number: "01",
    slug: "identita",
    title: "Identita",
    price: "od 48 000 Kč",
    lead: "Značka a vizuální systém pro běžné použití.",
    items: [
      "Logotyp a značka",
      "Typografie a paleta",
      "Základní tiskoviny",
      "Manuál použití",
    ],
  },
  {
    number: "02",
    slug: "web",
    title: "Web",
    price: "od 62 000 Kč",
    lead: "Prezentační web od struktury po nasazení.",
    items: [
      "Struktura a copy",
      "Návrh a sazba",
      "Vývoj",
      "Nasazení a předání",
    ],
  },
  {
    number: "03",
    slug: "identita-web",
    title: "Identita a web",
    price: "od 98 000 Kč",
    lead: "Značka a web v jednom zadání. Společný vizuální jazyk.",
    items: [
      "Kompletní identita",
      "Prezentační web",
      "Sjednocené tiskoviny",
      "Manuál a zdrojové soubory",
    ],
  },
  {
    number: "04",
    slug: "kampan",
    title: "Kampaň",
    price: "od 36 000 Kč",
    lead: "Art direction a sada klíčových vizuálů.",
    items: [
      "Směr a koncept",
      "Klíčový vizuál",
      "Adaptace formátů",
      "Podklady k nasazení",
    ],
  },
];

export const priceItems: PriceItem[] = [
  {
    title: "Konzultace",
    price: "2 400 Kč / hod",
    note: "Nezávazné zadání, posudek stávající značky nebo webu.",
  },
  {
    title: "Značka",
    price: "od 18 000 Kč",
    note: "Logotyp, základní variace, jednobarevné a negativní použití.",
  },
  {
    title: "Vizuální identita",
    price: "od 48 000 Kč",
    note: "Značka, písmo, paleta, tiskoviny, manuál.",
  },
  {
    title: "Prezentační web",
    price: "od 62 000 Kč",
    note: "Do cca 8 stran. Návrh, vývoj, nasazení.",
  },
  {
    title: "Rozšířený web",
    price: "od 95 000 Kč",
    note: "Více stran, filtry, detailní případovky, vícejazyčnost.",
  },
  {
    title: "Sada tiskovin",
    price: "od 12 000 Kč",
    note: "Vizitka, hlavička, obálka, složka. Příprava do tisku.",
  },
  {
    title: "Plakát / klíčový vizuál",
    price: "od 8 000 Kč",
    note: "Jeden nosič, včetně exportů.",
  },
  {
    title: "Obalový systém",
    price: "od 28 000 Kč",
    note: "Etiketa, krabice, základní řada.",
  },
  {
    title: "Správa webu",
    price: "od 4 800 Kč / měsíc",
    note: "Úpravy obsahu, drobný vývoj, dohled.",
  },
  {
    title: "Kampaně a sítě",
    price: "od 14 000 Kč / měsíc",
    note: "Měsíční sada vizuálů a nasazení podle dohody.",
  },
];

export const priceNotes = [
  {
    title: "Rozsah",
    text: "Ceny jsou orientační. Finální nabídka se stanoví podle zadání, počtu výstupů a termínu.",
  },
  {
    title: "Kola úprav",
    text: "V ceně jsou dvě kola korekcí. Další se účtují hodinovou sazbou.",
  },
  {
    title: "Záloha",
    text: "Práce začíná po záloze 50 %. Doplatek před předáním souborů nebo spuštěním webu.",
  },
  {
    title: "Podklady",
    text: "Texty, fotografie a přístup k existujícím účtům dodává klient, pokud není dohodnuto jinak.",
  },
];
