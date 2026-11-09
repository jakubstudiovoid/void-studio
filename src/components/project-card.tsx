import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/projects";
export function ProjectCard({
  project,
  delay = 0,
  priority = false,
}: {
  project: Project;
  delay?: number;
  priority?: boolean;
}) {
  return (
    <Reveal delay={delay} className={`project-card project-${project.slug}`}>
      <Link to="/prace/$slug" params={{ slug: project.slug }} className="group block">
        <div className="project-visual">
          <img
            src={project.image}
            alt={`Vizuální prezentace projektu ${project.title}`}
            width={1600}
            height={1200}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
          />
          <span className="project-open" aria-hidden="true">
            <ArrowUpRight size={25} />
          </span>
          <span className="project-index">{project.year}</span>
        </div>
        <div className="project-caption">
          <div>
            <h3>{project.title}</h3>
            <p>
              {project.outputs
                .filter((x) => ["Web", "Identita", "Obal", "Art direction"].includes(x))
                .join(" / ")}
            </p>
          </div>
          <ArrowUpRight size={19} />
        </div>
      </Link>
    </Reveal>
  );
}
