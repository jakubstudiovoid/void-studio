export type ShotAspect = "cover" | "wide" | "square";

export type ProjectTone = "ph-01" | "ph-02" | "ph-03" | "ph-04" | "ph-05" | "ph-06" | "ph-07";

export type ProjectShot = {
  src: string;
  alt: string;
  wide?: boolean;
  center?: boolean;
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

export const projects: Project[] = [
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
    gallery: [
      { src: "/images/projects/ponorka/rockabilly-9.jpg", alt: "Plakát Rockabilly Fever vol. 9" },
      { src: "/images/projects/ponorka/rockabilly-8.jpg", alt: "Plakát Rockabilly Fever vol. 8" },
      { src: "/images/projects/ponorka/web.jpg", alt: "Web Bar Ponorka" },
      { src: "/images/projects/ponorka/menu.jpg", alt: "Nápojový lístek na webu" },
    ],
  },
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
    image: "/images/projects/kovovyroba-hrdlicka-plot.jpg",
    url: "https://www.kovohrdlicka.cz",
    gallery: [],
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
    gallery: [],
  },
  {
    slug: "exmar",
    title: "Elektroinstalace exmar",
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
    gallery: [],
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
    gallery: [
      { src: "/images/projects/sweet/cap.jpg", alt: "Čepice Sweet Night Club" },
      { src: "/images/projects/sweet/triko.jpg", alt: "Triko Sweet Night Club, přední strana" },
      { src: "/images/projects/sweet/triko-zad.jpg", alt: "Triko Sweet Night Club, zadní strana" },
      { src: "/images/projects/sweet/vizitky.jpg", alt: "Vizitky Sweet Night Club" },
      { src: "/images/projects/sweet/kondomy.jpg", alt: "Kondomy Sweet Night Club" },
      { src: "/images/projects/sweet/plakat-1.jpg", alt: "Plakát Sweet Night Club" },
      { src: "/images/projects/sweet/plakat-3.jpg", alt: "Plakát Sweet Night Club, sklenice" },
      { src: "/images/projects/sweet/plakat-7.jpg", alt: "Plakát Sweet Night Club, třešně" },
    ],
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
      "Výstupem je značka, web, textil a venkovní banner.",
    ],
    outputs: ["Identita", "Web", "Textil"],
    featured: true,
    tone: "ph-06",
    image: "/images/projects/green-vision-mark.jpg",
    url: "https://www.greenvision.cz",
    gallery: [
      { src: "/images/projects/green-vision/merch.jpg", alt: "Textil Green Vision" },
      { src: "/images/projects/green-vision/banner.jpg", alt: "Street banner Green Vision" },
      { src: "/images/projects/green-vision/triko.jpg", alt: "Triko a čepice Green Vision" },
    ],
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
    gallery: [],
  },
  {
    slug: "edengarden",
    title: "edengarden*",
    client: "edengarden*",
    location: "Česko",
    year: "2026",
    category: "Obal",
    excerpt: "Obal, produktové vizuály a web.",
    body: [
      "edengarden* potřeboval obal, produktové vizuály a web.",
      "Sáček nese značku, název a obsah. Každá příchuť má vlastní barvu kouře a ovoce.",
      "Stejný jazyk pokračuje na webu a na stojáncích v prodejně.",
    ],
    outputs: ["Obal", "Web", "Produktový vizuál"],
    featured: false,
    tone: "ph-04",
    image: "/images/projects/edengarden/raspberry-fusion.jpg",
    gallery: [
      { src: "/images/projects/edengarden/raspberry-fusion.jpg", alt: "edengarden* Raspberry fusion" },
      { src: "/images/projects/edengarden/blueberry-fusion.jpg", alt: "edengarden* Blueberry fusion" },
      { src: "/images/projects/edengarden/orange-dreams.jpg", alt: "edengarden* Orange dreams" },
      { src: "/images/projects/edengarden/web-1.jpg", alt: "Web edengarden*" },
      { src: "/images/projects/edengarden/web-2.jpg", alt: "Eshop edengarden*" },
      { src: "/images/projects/edengarden/lollipop-kush.jpg", alt: "Stojánek Lollipop kush" },
      { src: "/images/projects/edengarden/gorilla-glue.jpg", alt: "Stojánek Gorilla glue" },
      { src: "/images/projects/edengarden/stojan-blueberry.jpg", alt: "Stojánek Blueberry fusion" },
      { src: "/images/projects/edengarden/emerald-kush.jpg", alt: "Stojánek Emerald kush" },
    ],
  },
  {
    slug: "bistro-za-vodou",
    title: "Bistro Za vodou",
    client: "Bistro Za vodou",
    location: "Česko",
    year: "2024",
    category: "Identita",
    excerpt: "Značka bistra. Menu, textil a venkovní nosiče.",
    body: [
      "Bistro Za vodou potřebovalo značku, která drží pohromadě na menu, textilu i venku.",
      "Značka je černobílá: slunce, hladina, hora. Nápojové lístky nesou barvu, jídelní lístek zůstává černý.",
      "Výstupem je logo, menu, textil, samolepky a venkovní nosiče.",
    ],
    outputs: ["Identita", "Menu", "Tisk"],
    featured: false,
    tone: "ph-01",
    image: "/images/projects/bistro-za-vodou/znacka.jpg",
    gallery: [
      {
        src: "/images/projects/bistro-za-vodou/menu.jpg",
        alt: "Jídelní a nápojový lístek Bistro Za vodou",
        wide: true,
      },
      { src: "/images/projects/bistro-za-vodou/cocktaily.jpg", alt: "Lístek koktejlů" },
      { src: "/images/projects/bistro-za-vodou/limonady.jpg", alt: "Lístek limonád" },
      { src: "/images/projects/bistro-za-vodou/triko.jpg", alt: "Triko Bistro Za vodou" },
      { src: "/images/projects/bistro-za-vodou/lehatko.jpg", alt: "Lehátko se značkou" },
      { src: "/images/projects/bistro-za-vodou/podtacky.jpg", alt: "Podtácky Bistro Za vodou" },
      { src: "/images/projects/bistro-za-vodou/samolepky.jpg", alt: "Samolepky s QR kódem" },
      { src: "/images/projects/bistro-za-vodou/provozni-doba.jpg", alt: "Cedule provozní doby" },
      { src: "/images/projects/bistro-za-vodou/vlajka.jpg", alt: "Beach vlajka Bistro Za vodou" },
    ],
  },
  {
    slug: "pizza-speed",
    title: "Pizza Speed",
    client: "Pizza Speed",
    location: "Jablonec nad Nisou",
    year: "2025",
    category: "Identita",
    excerpt: "Značka pizzerie. Poutač, leták, cedule a web.",
    body: [
      "Pizza Speed potřebovala značku pro provoz i pro web.",
      "Systém je černý s oranžovou. Stejný jazyk drží poutač, leták, banner, cedule i dárkové poukazy.",
      "Web z něj vychází přímo.",
    ],
    outputs: ["Identita", "Web", "Tisk"],
    featured: false,
    tone: "ph-05",
    image: "/images/projects/pizza-speed/poutac.jpg",
    url: "https://pizza-speed.vercel.app",
    gallery: [
      { src: "/images/projects/pizza-speed/poutac.jpg", alt: "Poutač Pizza Speed" },
      { src: "/images/projects/pizza-speed/poukazy.jpg", alt: "Dárkové poukazy Pizza Speed" },
      { src: "/images/projects/pizza-speed/terasa.jpg", alt: "Cedule terasy Pizza Speed" },
      { src: "/images/projects/pizza-speed/pivo.jpg", alt: "Cedule piva na čepu" },
      {
        src: "/images/projects/pizza-speed/banner.jpg",
        alt: "Banner Pizza Speed",
        wide: true,
      },
      {
        src: "/images/projects/pizza-speed/letak.jpg",
        alt: "Leták na rozvoz Pizza Speed",
        center: true,
      },
    ],
  },
  {
    slug: "nostalgie",
    title: "Antik Galerie Nostalgie",
    client: "Antik Galerie Nostalgie",
    location: "Jablonec nad Nisou",
    year: "2026",
    category: "Identita",
    excerpt: "Identita antik galerie. Logo a vizitka.",
    body: [
      "Antik Galerie Nostalgie sídlí na Mírovém náměstí v Jablonci nad Nisou.",
      "Značka drží bordó pole, kreslené písmo a výřez z obrazu.",
      "Výstupem je logo a vizitka.",
    ],
    outputs: ["Identita", "Tisk"],
    featured: false,
    tone: "ph-02",
    image: "/images/projects/nostalgie/vizitky.jpg",
    url: "https://www.nostalgieantikgalerie.cz",
    gallery: [
      { src: "/images/projects/nostalgie/vizitky.jpg", alt: "Vizitky Antik Galerie Nostalgie" },
    ],
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

export const aspectClass: Record<ShotAspect, string> = {
  cover: "aspect-4/3",
  wide: "aspect-video",
  square: "aspect-square",
};
