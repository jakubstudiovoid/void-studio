export type Service = {
  slug: string;
  number: string;
  title: string;
  lead: string;
  body: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "identita",
    number: "01",
    title: "Identita",
    lead: "Značka, typografie, barva a pravidla použití.",
    body: "Vizuální systém, který vydrží. Značka, písmo, paleta, tiskoviny a krátký manuál. Bez ozdob, které by značka musela nosit.",
    items: [
      "Značka a logotyp",
      "Typografický a barevný systém",
      "Základní tiskoviny",
      "Manuál použití",
    ],
  },
  {
    slug: "web",
    number: "02",
    title: "Web",
    lead: "Prezentační a produktové weby. Návrh, sazba, vývoj, nasazení.",
    body: "Web jako nosič značky — struktura, typografie, tempo. Od jedné stránky po rozsáhlejší prezentaci. Po spuštění předáváme zdroj a přístup.",
    items: [
      "Prezentační weby",
      "Struktura a copy",
      "Vývoj a nasazení",
      "Správa a úpravy",
    ],
  },
  {
    slug: "tisk",
    number: "03",
    title: "Tisk",
    lead: "Sazba a produkce tiskovin. Od vizitky po publikaci.",
    body: "Papír, formát, sazba. Tiskoviny se navrhují jako součást identity, ne jako samostatný dekor.",
    items: [
      "Vizitky, hlavičky, složky",
      "Katalogy a lookbooky",
      "Plakáty a orientace",
      "Příprava do tisku",
    ],
  },
  {
    slug: "kampane",
    number: "04",
    title: "Kampaně",
    lead: "Art direction, klíčové vizuály a adaptace.",
    body: "Jedna idea, přesný řez, kontrolované použití. Kampaně pro tisk, web i sítě — bez šumu okolo.",
    items: [
      "Art direction",
      "Klíčový vizuál",
      "Adaptace formátů",
      "Pouliční a digitální nosiče",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Zadání",
    text: "Rozsah, termín, podklady. Co má vzniknout a k čemu to slouží.",
  },
  {
    number: "02",
    title: "Návrh",
    text: "Směr, struktura, první vizuály. Práce pokračuje po odsouhlasení.",
  },
  {
    number: "03",
    title: "Realizace",
    text: "Sazba, vývoj, produkce. Průběžné korekce v dohodnutém počtu kol.",
  },
  {
    number: "04",
    title: "Předání",
    text: "Finální soubory, nasazení webu, krátký návod k použití.",
  },
];

export const disciplines = [
  "Identita",
  "Web",
  "Tisk",
  "Kampaně",
  "Art direction",
  "Signage",
  "Obal",
  "Sazba",
];
