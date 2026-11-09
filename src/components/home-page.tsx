import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Mark } from "@/components/mark";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { getProject } from "@/data/projects";

const selection = ["green-vision", "adamovsky-ocni-protezy", "kovovyroba-hrdlicka", "ponorka"].map(
  (slug) => getProject(slug)!,
);
export function HomePage() {
  return (
    <>
      <section className="editorial-hero">
        <div className="page-grid hero-frame">
        <div className="hero-eyebrow">
          <span>
            <i className="status-dot" /> Nezávislé designové studio
          </span>
          <span>Jablonec nad Nisou, CZ</span>
        </div>
        <h1 className="hero-title">
          Silné značky.
          <br />
          <span>Výjimečné weby.</span>
        </h1>
        <div className="hero-bottom">
          <a className="round-link" href="#vyber" aria-label="Prohlédnout vybrané projekty">
            <ArrowDown size={22} />
          </a>
          <p>
            Od první myšlenky po poslední pixel.
            <br />
            Tvoříme weby a vizuální identity,
            <br />
            které dávají značkám vlastní tvář.
          </p>
          <span className="micro">
            DESIGN & DEVELOPMENT
            <br />
            SELECTED WORK / 2025—26
          </span>
        </div>
        </div>
      </section>
      <section className="page-grid selected-section" id="vyber">
        <div className="section-bar">
          <span className="micro">01 / VYBRANÁ PRÁCE</span>
          <Link to="/prace" className="text-link">
            Všechny projekty <span className="count">07</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="editorial-projects">
          {selection.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={i === 0}
              delay={(i % 2) * 80}
            />
          ))}
        </div>
      </section>
      <section className="studio-statement page-grid">
        <Reveal>
          <div className="section-bar">
            <span className="micro">02 / MYŠLENKA ZA DESIGNEM</span>
            <span className="micro">MÉNĚ, ALE LÉPE.</span>
          </div>
          <h2>
            Dobře vypadat
            <br />
            je teprve <span>začátek.</span>
          </h2>
          <div className="statement-bottom">
            <span className="asterisk" aria-hidden="true">
              <Mark />
            </span>
            <div>
              <p>
                Web je prostor, kde vaše značka ožívá. Propojujeme strategii, vizuální cit a vývoj v
                jeden celek. Aby každý detail měl svůj důvod — a celek svůj charakter.
              </p>
              <Link to="/studio" className="text-link">
                Poznejte studio <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="visual-notes">
        <div className="page-grid">
          <Reveal>
            <div className="section-bar">
              <span className="micro">03 / ZA HRANICÍ OBRAZOVKY</span>
              <span className="micro">IDENTITA. OBAL. OBJEKT.</span>
            </div>
            <div className="notes-heading">
              <h2>
                Značka má
                <br />
                mnoho podob.
              </h2>
              <p>
                Vizuální svět, který drží pohromadě.
                <br />
                Na webu, v ruce i v prostoru.
              </p>
            </div>
          </Reveal>
          <div className="notes-grid">
            <Reveal as="figure">
              <img
                src="/images/hero-edengarden.jpg"
                alt="Produktový vizuál Edengarden Raspberry Fusion s růžovým kouřem"
                width="1600"
                height="1200"
                loading="lazy"
              />
              <figcaption>
                <span>Edengarden</span>
                <span>Obal & produktový vizuál</span>
              </figcaption>
            </Reveal>
            <Reveal className="note-offset" delay={160}>
              <Link to="/prace/$slug" params={{ slug: "glide-edge" }}>
                <figure>
                  <img
                    src="/images/projects/glide-edge.jpg"
                    alt="Produktová prezentace Glide Edge"
                    width="1600"
                    height="1200"
                    loading="lazy"
                  />
                  <figcaption>
                    <span>Glide Edge</span>
                    <span>
                      Identita & obal <ArrowUpRight size={14} />
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="expertise page-grid">
        <Reveal>
          <span className="micro">04 / CO SPOLU VYTVOŘÍME</span>
          <h2>
            Od nápadu.
            <br />K zážitku.
          </h2>
          <Link to="/cenik" className="text-link">
            Služby a orientační ceny <ArrowUpRight size={17} />
          </Link>
        </Reveal>
        <Reveal delay={140}>
          <div className="service-list">
            {[
              {
                title: "Web design & vývoj",
                text: "Promyšlená struktura, osobitý design a responzivní vývoj. Web od prvního wireframu až po spuštění.",
                tags: "UX / UI DESIGN / DEVELOPMENT",
              },
              {
                title: "Vizuální identita",
                text: "Značka s vlastním jazykem. Logo, typografie a systém, který funguje napříč všemi výstupy.",
                tags: "STRATEGIE / LOGO / BRAND SYSTEM",
              },
              {
                title: "Art direction & grafika",
                text: "Silné vizuály pro produkty i kampaně. Od obalu a tiskovin po ucelenou prezentaci značky.",
                tags: "PACKAGING / VIZUÁLY / PRINT",
              },
            ].map((s, i) => (
              <ServiceItem key={s.title} index={i} {...s} />
            ))}
          </div>
        </Reveal>
      </section>
      <section className="process-band page-grid">
        <Reveal>
          <span className="micro">JASNÝ POSTUP. PŘÍMÁ SPOLUPRÁCE.</span>
        </Reveal>
        <div className="process-steps">
          {[
            { t: "Poznáme se", d: "Cíle, kontext a společný směr." },
            { t: "Najdeme výraz", d: "Koncept, struktura a vizuální jazyk." },
            { t: "Doladíme detaily", d: "Design, vývoj a testování." },
            { t: "Pošleme to do světa", d: "Spuštění, předání a další rozvoj." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 110}>
              <span className="micro">0{i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function ServiceItem({
  index,
  title,
  text,
  tags,
}: {
  index: number;
  title: string;
  text: string;
  tags: string;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <details
      open={open}
      onToggle={(event) => {
        const next = event.currentTarget.open;
        setOpen((current) => (current === next ? current : next));
      }}
    >
      <summary>
        <span className="micro">0{index + 1}</span>
        <h3>{title}</h3>
        <span className="service-toggle">+</span>
      </summary>
      <div className="service-body">
        <div className="service-body-inner">
          <p>{text}</p>
          <span className="micro">{tags}</span>
        </div>
      </div>
    </details>
  );
}
