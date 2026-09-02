import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import { processSteps, services } from "@/data/services";
import { site } from "@/data/site";

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
  return (
    <section className="bg-bg">
      <div className="page-grid pt-28 pb-12 md:pt-36 md:pb-16">
        <p className="hero-fade kicker" style={{ animationDelay: "0.2s" }}>
          {site.address.city}
        </p>
        <h1 className="mt-5 font-medium text-hero tracking-tight">
          <span className="hero-line">
            <span>Grafika</span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "0.1s" }}>a web</span>
          </span>
        </h1>
        <p
          className="hero-fade page-hero-lead mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base"
          style={{ animationDelay: "0.35s" }}
        >
          Identita, tisk, web a kampaně.
          <br />
          Jablonec nad Nisou.
        </p>
        <div
          className="hero-fade mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <Button asChild variant="outline" size="lg">
            <Link to="/prace">Portfolio</Link>
          </Button>
          <Button asChild size="lg">
            <Link to="/kontakt">
              Kontakt
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="overflow-hidden border-y border-line">
        <div className="page-grid">
          <figure className="hero-photo img-frame overflow-hidden bg-bg-elevated">
            <img
              src="/images/hero.jpg"
              alt="Ateliér studia VOID — sazba, papír, tisk"
              width={1792}
              height={1008}
              className="aspect-video w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
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
