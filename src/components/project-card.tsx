import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Placeholder } from "@/components/placeholder";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        to="/prace/$slug"
        params={{ slug: project.slug }}
        className="group block"
      >
        <div className="overflow-hidden bg-bg-elevated">
          <Placeholder tone={project.tone} />
        </div>
        <p className="mt-4 text-xs tracking-[0.2em] text-subtle uppercase">
          {project.year} — {project.category}
        </p>
        <h3 className="mt-2 font-medium text-xl tracking-tight md:text-2xl">
          {project.title}
        </h3>
        <span className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.16em] text-muted uppercase transition-colors duration-200 group-hover:text-fg">
          Detail
          <ArrowUpRight
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </span>
      </Link>
    </Reveal>
  );
}
