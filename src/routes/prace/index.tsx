import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import {
  categorySlug,
  projectTypes,
  projects,
} from "@/data/projects";
import { seoHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

type PraceSearch = {
  typ?: string;
};

export const Route = createFileRoute("/prace/")({
  validateSearch: (search: Record<string, unknown>): PraceSearch => ({
    typ:
      typeof search.typ === "string" && search.typ.length > 0
        ? search.typ
        : undefined,
  }),
  head: () =>
    seoHead(
      "Portfolio",
      "Vybrané projekty studia VOID — weby, identity a kampaně. Jablonec nad Nisou.",
    ),
  component: PraceIndex,
});

function PraceIndex() {
  const { typ } = Route.useSearch();
  const activeType = projectTypes.find((c) => categorySlug(c) === typ);
  const visible = activeType
    ? projects.filter((p) => p.category === activeType)
    : projects;

  return (
    <SiteShell>
      <PageHero kicker="Portfolio" title="Portfolio">
        Vybrané zakázky. Každý projekt má vlastní detail — klient, místo, rok,
        disciplína, výstupy.
      </PageHero>

      <section className="page-grid py-14 md:py-20">
        <nav
          aria-label="Filtr podle typu"
          className="mb-10 flex flex-wrap gap-x-1 gap-y-2 border-b border-line"
        >
          <FilterLink label="Vše" active={!activeType} />
          {projectTypes.map((type) => (
            <FilterLink
              key={type}
              label={type}
              typ={categorySlug(type)}
              active={activeType === type}
            />
          ))}
        </nav>

        {visible.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14">
            {visible.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 40} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-sm text-muted">
            V této kategorii zatím nejsou žádné projekty.
          </p>
        )}
      </section>

      <section className="border-t border-line">
        <div className="page-grid py-16 md:py-20">
          <Reveal>
            <p className="kicker">Poptávka</p>
            <h2 className="mt-4 font-medium text-3xl tracking-tight">
              Podobné zadání
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Identita, web, tisk, kampaň. Popište rozsah, navrhneme postup a
              cenu.
            </p>
            <Link
              to="/kontakt"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase transition-colors duration-200 hover:text-steel"
            >
              Kontakt
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

function FilterLink({
  label,
  typ,
  active,
}: {
  label: string;
  typ?: string;
  active: boolean;
}) {
  return (
    <Link
      to="/prace"
      search={typ ? { typ } : {}}
      resetScroll={false}
      activeOptions={{ exact: true, includeSearch: true, explicitUndefined: true }}
      aria-current={active ? "page" : undefined}
      className={cn(
        "-mb-px border-b px-2 pb-3 text-xs tracking-[0.16em] uppercase transition-colors duration-200 sm:px-3",
        active
          ? "border-fg text-fg"
          : "border-transparent text-muted hover:text-fg",
      )}
    >
      {label}
    </Link>
  );
}
