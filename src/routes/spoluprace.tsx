import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { collaborationSteps, projectRules } from "@/data/pricing";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/spoluprace")({
  head: () =>
    seoHead(
      "Spolupráce",
      "Jak spolupráce se studiem VOID probíhá: zadání, nabídka, záloha, návrh, úpravy a předání. Jasná pravidla před zahájením projektu.",
    ),
  component: CollaborationPage,
});
function CollaborationPage() {
  return (
    <SiteShell>
      <PageHero kicker="Průběh & pravidla" title="Skvělá práce začíná domluvou.">
        Přímá komunikace, srozumitelné kroky a jasné hranice. Abyste se mohli těšit na výsledek a
        věděli, co vás po cestě čeká.
      </PageHero>
      <section className="page-grid collaboration-promises">
        <div>
          <span className="micro">01 / CENA PŘEDEM</span>
          <h2>
            Žádné překvapení
            <br />
            na faktuře.
          </h2>
        </div>
        <div>
          <span className="micro">02 / SPOLEČNÝ SMĚR</span>
          <h2>
            Každý krok
            <br />
            má vaše ano.
          </h2>
        </div>
        <div>
          <span className="micro">03 / VLASTNÍ VÝSTUPY</span>
          <h2>
            Jasné předání.
            <br />
            Volnost pokračovat.
          </h2>
        </div>
      </section>
      <section className="page-grid collaboration-process" id="postup">
        <div className="section-bar">
          <span className="micro">OD PRVNÍ ZPRÁVY PO SPUŠTĚNÍ</span>
          <Link to="/cenik" className="text-link">
            Služby a ceny <ArrowUpRight size={17} />
          </Link>
        </div>
        {collaborationSteps.map((s, i) => (
          <article key={s.title}>
            <span className="step-number">0{i + 1}</span>
            <div>
              <span className="micro">{s.label}</span>
              <h2>{s.title}</h2>
            </div>
            <div>
              <p>{s.text}</p>
              <p className="step-result">
                <span>Výsledek</span>
                {s.result}
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="collaboration-brief">
        <div className="page-grid">
          <div>
            <span className="micro">CO NÁM POMŮŽE NA STARTU</span>
            <h2>
              Dobré zadání.
              <br />
              Lepší výsledek.
            </h2>
            <p>
              Nemusíte mít hotový brief. Stačí několik konkrétních odpovědí; zbytek společně
              ujasníme.
            </p>
          </div>
          <ol>
            {[
              "Co nabízíte a komu je služba nebo produkt určený?",
              "Co má projekt zlepšit a podle čeho poznáte úspěch?",
              "Jaké podklady už máte — logo, texty, fotografie, web?",
              "Jaký je rozpočet, požadovaný termín a kdo schvaluje?",
              "Co se vám vizuálně líbí a proč?",
            ].map((s, i) => (
              <li key={s}>
                <span className="micro">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="page-grid collaboration-rules" id="pravidla">
        <div>
          <span className="micro">PRAVIDLA, KTERÁ DRŽÍ PROJEKT POHROMADĚ</span>
          <h2>Jasno na obou stranách.</h2>
          <p>
            Tento přehled popisuje standardní způsob spolupráce pro firemní projekty. Konkrétní
            rozsah, závazná ujednání a případné odchylky budou součástí písemně potvrzené nabídky
            nebo smlouvy.
          </p>
        </div>
        <div className="editorial-faq">
          {projectRules.map((r, i) => (
            <details key={r.title} open={i === 0}>
              <summary>
                {r.title}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{r.text}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="page-grid pricing-note">
        <div>
          <span className="micro">PROSTOR PRO VÁŠ PROJEKT</span>
          <h2>Nejdřív se poznejme.</h2>
          <p>
            Úvodní dvacetiminutový rozhovor je zdarma a bez závazků. Probereme možnosti, rozsah a
            další krok.
          </p>
        </div>
        <Link to="/kontakt" className="round-link" aria-label="Domluvit nezávazný rozhovor">
          <ArrowUpRight />
        </Link>
      </section>
    </SiteShell>
  );
}
