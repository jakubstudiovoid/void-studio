import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects, getProject } from "@/data/projects";
import { processSteps, services } from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Featured />
      <ServicesPreview />
      <Process />
      <AboutTeaser />
      <Cta />
    </>
  );
}

function Hero() {
  const disciplines = ["Identita", "Tisk", "Web", "Kampaně"];

  return (
    <section className="relative flex min-h-dvh flex-col bg-bg">
      <div className="page-grid flex flex-col pt-28 pb-8 md:pt-32 md:pb-10">
        <p
          className="hero-fade text-xs tracking-[0.18em] text-subtle uppercase"
          style={{ animationDelay: "0.12s" }}
        >
          {site.address.city}
        </p>

        <h1 className="mt-6 font-medium text-[clamp(3.4rem,7.6vw,7.25rem)] leading-[0.96] tracking-[-0.045em] md:mt-8">
          <span className="hero-line">
            <span>Grafika</span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "0.08s" }}>a web</span>
          </span>
        </h1>

        <div
          className="hero-fade mt-8 flex items-baseline justify-between gap-x-6 gap-y-3 md:mt-10"
          style={{ animationDelay: "0.28s" }}
        >
          <ol className="flex flex-wrap gap-x-6 gap-y-2">
            {disciplines.map((item, index) => (
              <li
                key={item}
                className="text-xs tracking-[0.18em] text-muted uppercase"
              >
                <span className="mr-2 text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <Link
            to="/prace"
            className="inline-flex shrink-0 items-center gap-2 text-xs tracking-[0.18em] uppercase transition-colors duration-200 hover:text-steel"
          >
            Portfolio
            <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>

      <HeroShow />
    </section>
  );
}

const slideFrom = (slug: "ponorka" | "sweet-night-club" | "kovovyroba-hrdlicka") => {
  const project = getProject(slug);
  if (!project) throw new Error(slug);
  return {
    title: project.title,
    category: project.category,
    image: project.image,
    alt: project.title,
    slug: project.slug,
  };
};

const heroSlides = [
  slideFrom("ponorka"),
  {
    title: "Edengarden",
    category: "Obal",
    image: "/images/hero-edengarden.jpg",
    alt: "Obal Edengarden Raspberry Fusion",
    slug: undefined as string | undefined,
  },
  {
    title: "Peugeot Boxer",
    category: "Kampaň",
    image: "/images/hero-boxer.jpg",
    alt: "Billboard kampaně Peugeot New Boxer",
    slug: undefined as string | undefined,
  },
  slideFrom("sweet-night-club"),
  slideFrom("kovovyroba-hrdlicka"),
];

function HeroShow() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const count = heroSlides.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (paused.current || document.hidden) return;
      setIndex((current) => (current + 1) % count);
    }, 6800);
    return () => window.clearInterval(id);
  }, [count]);

  const slide = heroSlides[index];
  if (!slide) return null;

  return (
    <figure
      className="relative min-h-0 w-full flex-1 overflow-hidden bg-bg"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      {heroSlides.map((item, i) => {
        const image = (
          <img
            src={item.image}
            alt={i === index ? item.alt : ""}
            width={1600}
            height={1200}
            className={cn(
              "hero-slide absolute inset-0 size-full object-cover",
              i === index ? "opacity-100" : "opacity-0",
            )}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
          />
        );

        if (!item.slug) {
          return (
            <div key={item.image} className="absolute inset-0">
              {image}
            </div>
          );
        }

        return (
          <Link
            key={item.slug}
            to="/prace/$slug"
            params={{ slug: item.slug }}
            tabIndex={i === index ? 0 : -1}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0",
              i === index ? "z-[1]" : "pointer-events-none",
            )}
          >
            {image}
          </Link>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 z-10">
        <div className="page-grid flex items-end justify-between gap-6 pb-5">
          <p className="text-sm tracking-tight text-fg">
            <span className="mr-3 text-xs tracking-[0.18em] text-subtle uppercase">
              {slide.category}
            </span>
            {slide.title}
          </p>
          <div className="flex items-center gap-3">
            {heroSlides.map((item, i) => (
              <button
                key={item.title}
                type="button"
                aria-label={item.title}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={cn(
                  "text-xs tracking-[0.16em] transition-colors duration-300",
                  i === index ? "text-fg" : "text-fg/40 hover:text-fg/70",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function Intro() {
  return (
    <section id="intro" className="border-b border-line">
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">Studio</p>
          <h2 className="mt-5 font-medium text-4xl tracking-tight">
            Od zadání po předání
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg/90 md:text-lg">
            {site.brand} je grafické a marketingové studio v&nbsp;Jablonci nad
            Nisou. Navrhujeme identity, weby a kampaně. Od zadání po předání.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            Značka, tisk, web, art direction.
            <br />
            Od zadání po předání, bez zprostředkovatele.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  const portfolioLink = (
    <Link
      to="/prace"
      className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors duration-200 hover:text-steel"
    >
      Zobrazit portfolio
      <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
    </Link>
  );

  return (
    <section className="border-b border-line">
      <div className="page-grid py-16 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="kicker">Portfolio</p>
            <h2 className="mt-4 font-medium text-4xl tracking-tight">
              Vybrané projekty
            </h2>
          </Reveal>
          <Reveal delay={80} className="hidden sm:block">
            {portfolioLink}
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              delay={i * 50}
              priority={i < 2}
            />
          ))}
        </div>

        <Reveal delay={80} className="sm:hidden">
          <div className="mt-12">{portfolioLink}</div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="border-b border-line">
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">Služby</p>
          <h2 className="mt-4 font-medium text-4xl tracking-tight">Co děláme</h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={i * 40}>
              <Link
                to="/cenik"
                hash={s.slug}
                className="group grid grid-cols-12 items-baseline gap-x-3 gap-y-1 py-6 md:py-7"
              >
                <span className="col-span-2 text-xs tracking-[0.18em] text-subtle">
                  {s.number}
                </span>
                <span className="col-span-9">
                  <span className="block font-medium text-xl tracking-tight md:text-2xl">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {s.lead}
                  </span>
                </span>
                <span className="col-span-1 hidden self-center justify-end sm:flex">
                  <ArrowUpRight
                    className="size-4 text-subtle transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-b border-line">
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">Postup</p>
          <h2 className="mt-4 font-medium text-4xl tracking-tight">
            Průběh zakázky
          </h2>
        </Reveal>
        <ol className="mt-14 flex flex-col sm:flex-row">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 80}
              className="flex-1 border-l border-line py-7 pl-6 first:pt-0 last:pb-0 sm:border-t sm:border-l-0 sm:pt-7 sm:pr-8 sm:pb-0 sm:pl-0 sm:first:pt-7 last:sm:pr-0"
            >
              <span className="text-xs tracking-[0.2em] text-subtle">
                {step.number}
              </span>
              <h3 className="mt-4 font-medium text-xl tracking-tight md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="border-b border-line">
      <div className="page-grid">
        <div className="grid md:grid-cols-2 md:items-stretch">
          <Reveal className="py-20 md:py-28 md:pr-10">
            <p className="kicker">O studiu</p>
            <h2 className="mt-5 font-medium text-display tracking-tight">
              {site.brand}
            </h2>
            <p className="mt-2 text-sm tracking-[0.16em] text-muted uppercase">
              {site.address.city}
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted">
              Navrhujeme vizuální systémy a weby pro firmy, které potřebují
              přesný jazyk. Práce probíhá přímo se studiem, bez zprostředkovatele.
            </p>
            <Link
              to="/studio"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors duration-200 hover:text-steel"
            >
              Více o studiu
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Reveal>
          <div className="relative grid min-h-80 overflow-hidden bg-ph-01">
            <div className="flex flex-col justify-between p-6 md:p-8">
              <span className="text-xs tracking-[0.2em] text-fg/35 uppercase">
                00
              </span>
              <span className="font-medium text-5xl tracking-tight">VOID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section>
      <div className="page-grid py-20 md:py-28">
        <Reveal>
          <p className="kicker">Kontakt</p>
          <h2 className="mt-5 font-medium text-display tracking-tight">
            Poptávka
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Popište zadání. Ozveme se s&nbsp;rozsahem, termínem a cenou.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Kontakt
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.emailHref}>{site.email}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
