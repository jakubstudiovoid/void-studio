export type ProjectTone = "ph-01" | "ph-02" | "ph-03" | "ph-04" | "ph-05" | "ph-06" | "ph-07";

export type ProjectShot = {
  label: string;
  aspect: "cover" | "wide" | "square";
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  excerpt: string;
  body: string[];
  outputs: string[];
  featured: boolean;
  tone: ProjectTone;
  image: string;
  url?: string;
  gallery: ProjectShot[];
};

const shots = (count: number): ProjectShot[] => {
  const aspects: ProjectShot["aspect"][] = ["cover", "wide", "square", "cover"];
  return Array.from({ length: count }, (_, i) => ({
    label: i === 0 ? "Úvodní" : `Fotografie 0${i + 1}`,
    aspect: aspects[i] ?? "cover",
  }));
};

export const projects: Project[] = [
  {
    slug: "kovovyroba-hrdlicka",
    title: "Kovovýroba Hrdlička",
    client: "Kovovýroba Hrdlička",
    location: "Nová Ves nad Nisou",
    year: "2026",
    category: "Web",
    excerpt:
      "Web zakázkové kovovýroby. Portfolio realizací, služby, postup zakázky.",
    body: [
      "Kovovýroba Hrdlička vyrábí schodiště, zábradlí, brány a ocelové konstrukce v Nové Vsi nad Nisou. Web má ukázat práci, ne firmu popisovat.",
      "Struktura: úvod, vybrané realizace, služby, postup, kontakt. Každá zakázka má vlastní detail — místo, rok, typ, materiál.",
      "Tmavý podklad, ostrý řez, Space Grotesk. Žádné zaoblení, žádný šum. Typografie drží tempo stránky.",
    ],
    outputs: ["Web", "Art direction", "Copy"],
    featured: true,
    tone: "ph-01",
    image: "/images/projects/kovovyroba-hrdlicka.jpg",
    url: "https://www.kovohrdlicka.cz",
    gallery: shots(4),
  },
  {
    slug: "adamovsky-ocni-protezy",
    title: "Oční protézy Petr Adamovský",
    client: "Petr Adamovský",
    location: "Jablonec nad Nisou",
    year: "2026",
    category: "Web",
    excerpt:
      "Web ateliéru skleněných očních protéz. Řemeslo, postup, objednání.",
    body: [
      "Petr Adamovský vyrábí skleněné oční protézy v Jablonci nad Nisou. Web vysvětluje postup výroby a návštěvu ateliéru.",
      "Důraz na klid, materiál a přesnost. Informace o objednání a průběhu jsou na jednom místě, bez zbytečných vrstev.",
      "Identita webu drží řemeslo: omezená paleta, věcný tón, žádná ilustrace navíc.",
    ],
    outputs: ["Web", "Identita", "Copy", "Produktové fotografie"],
    featured: true,
    tone: "ph-02",
    image: "/images/projects/adamovsky-ocni-protezy.jpg",
    url: "https://www.ocniprotezyadamovsky.cz",
    gallery: shots(4),
  },
  {
    slug: "exmar",
    title: "exmar",
    client: "exmar s.r.o.",
    location: "Jablonec nad Nisou",
    year: "2026",
    category: "Web",
    excerpt:
      "Web elektroinstalační firmy. MaR, průmysl, projektování.",
    body: [
      "Firma exmar s.r.o. dodává elektroinstalace a systémy měření a regulace. Působí v průmyslu i v bytové výstavbě, včetně prostředí EX.",
      "Web převádí technickou nabídku do čitelné struktury: služby, reference, kontakt.",
      "Typografie a sazba drží firemní tón — věcný, přesný, použitelný pro poptávku.",
    ],
    outputs: ["Web", "Identita", "Copy"],
    featured: true,
    tone: "ph-03",
    image: "/images/projects/exmar.jpg",
    url: "https://www.ex-mar.cz",
    gallery: shots(4),
  },
  {
    slug: "sweet-night-club",
    title: "Sweet Night Club",
    client: "Sweet Night Club",
    location: "Jablonec nad Nisou",
    year: "2026",
    category: "Web",
    excerpt: "Webová vizitka night clubu. Provoz, místo, rezervace.",
    body: [
      "Sweet Night Club v Jablonci nad Nisou potřeboval krátký, přesný web. Provoz, adresa, otevírací doba.",
      "Jedna stránka, tmavý podklad, žádné nadbytečné sekce. Informace, které návštěvník hledá, jsou na dosah.",
      "Vizuál drží noční provoz bez klišé nočního života.",
    ],
    outputs: ["Web", "Identita"],
    featured: true,
    tone: "ph-04",
    image: "/images/projects/sweet-night-club.jpg",
    url: "https://www.nightclubsweet.cz",
    gallery: shots(4),
  },
  {
    slug: "ponorka",
    title: "Bar Ponorka",
    client: "Bar Ponorka",
    location: "Jablonec nad Nisou",
    year: "2025",
    category: "Identita",
    excerpt: "Identita a web nočního podniku. Tmavý jazyk, plakátová sazba.",
    body: [
      "Ponorka je noční podnik. Zadání: vizuální jazyk, který obstojí na plakátu i na webu.",
      "Systém staví na velké typografii, omezené paletě a tmavém poli. Žádné dekorace, které by podnik přebíjely.",
      "Výstupem je značka, sada nosičů a web.",
    ],
    outputs: ["Identita", "Web", "Kampaně"],
    featured: true,
    tone: "ph-05",
    image: "/images/projects/ponorka.jpg",
    url: "https://www.barponorka.cz",
    gallery: shots(4),
  },
  {
    slug: "green-vision",
    title: "Green Vision",
    client: "Green Vision",
    location: "Česko",
    year: "2025",
    category: "Identita",
    excerpt: "Identita a web. Čistý systém, omezená paleta, srozumitelná struktura.",
    body: [
      "Green Vision potřeboval sjednotit značku a web. Zadání: čitelný systém, který unese další výstupy.",
      "Identita je úzká — písmo, paleta, rytmus sazby. Web z ní vychází přímo, bez druhé vizuální vrstvy.",
      "Výstupem je značka, základní tiskoviny a prezentační web.",
    ],
    outputs: ["Identita", "Web", "Tisk"],
    featured: true,
    tone: "ph-06",
    image: "/images/projects/green-vision.jpg",
    url: "https://www.greenvision.cz",
    gallery: shots(4),
  },
  {
    slug: "glide-edge",
    title: "Glide Edge",
    client: "Glide Edge",
    location: "Česko",
    year: "2025",
    category: "Identita",
    excerpt: "Identita, web a vizuální systém značky.",
    body: [
      "Glide Edge je produktová značka. Zadání: vizuální systém pro web, obal a krátkou kampaň.",
      "Značka je ostře řezaná, paleta omezená. Web a obal sdílejí stejnou sazbu a stejný rytmus.",
      "Výstupem je identita, prezentační web a základní obalová řada.",
    ],
    outputs: ["Identita", "Web", "Obal"],
    featured: false,
    tone: "ph-07",
    image: "/images/projects/glide-edge.jpg",
    url: "https://www.glideedge.cz",
    gallery: shots(4),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function categorySlug(category: string) {
  return category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const categoryOrder = ["Web", "Identita", "Kampaň"];

export const projectTypes = [
  ...categoryOrder.filter((c) => projects.some((p) => p.category === c)),
  ...[...new Set(projects.map((p) => p.category))].filter(
    (c) => !categoryOrder.includes(c),
  ),
];

export const featuredProjects = projects.filter((p) => p.featured);

export const toneClass: Record<ProjectTone, string> = {
  "ph-01": "bg-ph-01",
  "ph-02": "bg-ph-02",
  "ph-03": "bg-ph-03",
  "ph-04": "bg-ph-04",
  "ph-05": "bg-ph-05",
  "ph-06": "bg-ph-06",
  "ph-07": "bg-ph-07",
};

export const aspectClass: Record<ProjectShot["aspect"], string> = {
  cover: "aspect-4/3",
  wide: "aspect-video",
  square: "aspect-square",
};
