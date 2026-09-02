import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Placeholder } from "@/components/placeholder";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/prace/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    return seoHead(
      project ? project.title : "Projekt",
      project
        ? `${project.title} — ${project.excerpt}`
        : "Projekt studia VOID.",
    );
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = getProject(slug);
  if (!project) throw notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 4);
  const [cover, ...rest] = project.gallery;

  return (
    <SiteShell>
      <article>
        <header className="page-grid pt-28 pb-10 md:pt-36 md:pb-12">
          <Link
            to="/prace"
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-muted uppercase transition-colors duration-200 hover:text-fg"
          >
            <ArrowLeft className="size-3.5" strokeWidth={1.75} />
            Práce
          </Link>
          <p className="mt-8 text-xs tracking-[0.2em] text-subtle uppercase">
            {project.year} — {project.category} — {project.location}
          </p>
          <h1 className="mt-4 font-medium text-display tracking-tight">
            {project.title}
          </h1>
        </header>

        <div className="page-grid">
          {cover ? (
            <Placeholder
              tone={project.tone}
              aspect={cover.aspect}
              index="01"
              label={cover.label}
              className="aspect-video"
            />
          ) : null}
        </div>

        <section className="page-grid py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              {project.body.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-5 text-base leading-relaxed text-fg/90 first:mt-0"
                >
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9" delay={80}>
              <dl className="border-t border-line">
                <MetaRow label="Klient" value={project.client} />
                <MetaRow label="Místo" value={project.location} />
                <MetaRow label="Rok" value={project.year} />
                <MetaRow label="Disciplína" value={project.category} />
                <div className="border-b border-line py-4">
                  <dt className="text-xs tracking-[0.16em] text-subtle uppercase">
                    Výstupy
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {project.outputs.map((m) => (
                      <span
                        key={m}
                        className="border border-border px-2 py-1 text-xs text-muted"
                      >
                        {m}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <Button asChild className="mt-8" variant="outline">
                <Link to="/kontakt">
                  Poptávka
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {rest.length > 0 ? (
          <section className="border-t border-line">
            <div className="page-grid grid gap-4 py-10">
              {rest.map((shot, i) => (
                <Reveal key={shot.label} delay={i * 70}>
                  <Placeholder
                    tone={project.tone}
                    aspect={shot.aspect}
                    index={`0${i + 2}`}
                    label={shot.label}
                  />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="border-t border-line">
          <div className="page-grid py-14 md:py-16">
            <p className="kicker mb-8">Další práce</p>
            <ul className="divide-y divide-line border-y border-line">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/prace/$slug"
                    params={{ slug: p.slug }}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block text-xs tracking-[0.16em] text-subtle uppercase">
                        {p.category}
                      </span>
                      <span className="mt-1 block font-medium text-xl tracking-tight md:text-2xl">
                        {p.title}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/prace"
              className="mt-10 inline-flex items-center gap-2 text-xs tracking-[0.16em] text-muted uppercase transition-colors duration-200 hover:text-fg"
            >
              <ArrowLeft className="size-3.5" strokeWidth={1.75} />
              Zpět na veškerou práci
            </Link>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line py-4">
      <dt className="text-xs tracking-[0.16em] text-subtle uppercase">{label}</dt>
      <dd className="text-sm">{value}</dd>
    </div>
  );
}
