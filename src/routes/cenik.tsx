import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { priceItems, pricePackages, pricingFaq, hourlyRate } from "@/data/pricing";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/cenik")({
  head: () =>
    seoHead(
      "Služby a ceny",
      "Web od 24 000 Kč, firemní web od 42 000 Kč. Jasný rozsah, pevná nabídka a předem dohodnutá pravidla spolupráce se studiem VOID.",
    ),
  component: PricingPage,
});
function PricingPage() {
  return (
    <SiteShell>
      <PageHero kicker="Služby & ceny" title="Dobrý design. Jasná cena.">
        Vybereme rozsah, který dává vašemu podnikání smysl. Před začátkem budete vědět, co
        dostanete, kdy to bude hotové a kolik to bude stát.
      </PageHero>
      <section className="page-grid pricing-intro">
        <span className="micro">01 / WEBOVÉ PREZENTACE</span>
        <p>
          Menší začátek. Nebo nová kapitola.
          <br />
          <span>Stejný důraz na detail.</span>
        </p>
      </section>
      <section className="page-grid" aria-label="Webové balíčky">
        <div className="pricing-packages">
          {pricePackages.map((p, i) => (
            <article
              className={`pricing-package ${i === 1 ? "is-featured" : ""}`}
              id={p.slug}
              key={p.slug}
            >
              <div className="package-label">
                <span className="micro">
                  {p.number} / {i === 1 ? "PRO FIREMNÍ PREZENTACI" : "DESIGN & DEVELOPMENT"}
                </span>
              </div>
              <h2>{p.title}</h2>
              <p className="package-lead">{p.lead}</p>
              <p className="package-price">
                <small>od</small> {p.price}
              </p>
              <p className="package-range">{p.range}</p>
              <span className="package-time">{p.time}</span>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="package-excludes">{p.excludes}</p>
              <Link to="/kontakt" search={{ sluzba: p.title }} className="package-cta">
                Probrat tento projekt <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
        <p className="pricing-footnote">
          Částky jsou orientační v Kč. Konečnou cenu včetně případného DPH potvrdíme v nabídce.
          Termíny platí od přijetí zálohy a kompletních podkladů, při průběžném schvalování.
          Zahrnutá kola úprav a výjimky podrobně vysvětlujeme v{" "}
          <Link to="/spoluprace">pravidlech spolupráce ↗</Link>.
        </p>
      </section>
      <section className="page-grid pricing-extras" id="identita">
        <div className="section-bar">
          <span className="micro">02 / IDENTITA, GRAFIKA & PRODUKT</span>
          <span className="micro">SAMOSTATNĚ I JAKO JEDEN CELEK</span>
        </div>
        <h2>Za webem to nekončí.</h2>
        <div className="price-item-list">
          {priceItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <strong>{item.price}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="pricing-care">
        <div className="page-grid">
          <div className="section-bar">
            <span className="micro">03 / DALŠÍ SPOLUPRÁCE</span>
            <span className="micro">PODLE SKUTEČNÉ POTŘEBY</span>
          </div>
          <div className="care-grid">
            <div>
              <h2>
                Dobrá spolupráce
                <br />
                nekončí spuštěním.
              </h2>
              <p>
                Úpravy obsahu, nové výstupy i další rozvoj. Bez povinného paušálu a nejasného
                „neomezeně“.
              </p>
            </div>
            <div>
              <article>
                <h3>Jednorázové úpravy</h3>
                <strong>{hourlyRate}</strong>
                <p>
                  Předem odsouhlasený odhad a finanční limit. Účtování po 30 minutách, přehled
                  provedené práce.
                </p>
              </article>
              <article>
                <h3>Pravidelná spolupráce</h3>
                <strong>4 800 Kč / měsíc</strong>
                <p>
                  4 hodiny dohodnutých úprav nebo grafiky. Výkaz práce každý měsíc; další hodiny
                  pouze po schválení za 1 200 Kč. Nevyužité hodiny se nepřevádějí. Bez minimální
                  doby trvání; další měsíc lze zrušit oznámením do konce aktuálního měsíce.
                </p>
                <p>
                  Nezahrnuje hosting, licence, nepřetržitý monitoring ani pohotovost. Konkrétní
                  termíny úkolů domlouváme podle kapacity.
                </p>
              </article>
              <article>
                <h3>Konzultace</h3>
                <strong>Úvodních 20 minut zdarma</strong>
                <p>
                  Seznámení se zadáním a doporučení dalšího postupu. Samostatný rozbor webu či
                  značky: 1 200 Kč za 60 minut včetně krátkého shrnutí.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="page-grid pricing-faq">
        <div>
          <span className="micro">04 / NEŽ SE ROZHODNETE</span>
          <h2>Bez otazníků.</h2>
          <Link to="/spoluprace" className="text-link">
            Průběh a pravidla spolupráce <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="editorial-faq">
          {pricingFaq.map((f) => (
            <details key={f.title}>
              <summary>
                {f.title}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.text}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="page-grid pricing-note">
        <div>
          <span className="micro">NEJSTE SI JISTÍ ROZSAHEM?</span>
          <h2>Začněme rozhovorem.</h2>
          <p>
            Napište, co děláte, co potřebujete změnit a jaký máte přibližný rozpočet. Navrhneme
            smysluplný první krok.
          </p>
        </div>
        <Link to="/kontakt" className="round-link" aria-label="Domluvit úvodní rozhovor">
          <ArrowUpRight />
        </Link>
      </section>
    </SiteShell>
  );
}
