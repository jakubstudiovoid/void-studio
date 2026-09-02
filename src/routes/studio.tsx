import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/studio")({
  head: () =>
    seoHead(
      "Studio",
      "studio VOID — grafické a marketingové studio v Jablonci nad Nisou. Identita, tisk, web a kampaně.",
    ),
  component: StudioPage,
});

function StudioPage() {
  return (
    <SiteShell>
      <PageHero kicker="O studiu" title={site.brand}>
        Grafické a marketingové studio. {site.address.city},{" "}
        {site.address.region}.
      </PageHero>

      <section className="border-b border-line">
        <div className="page-grid py-16 md:py-24">
          <Reveal>
            <p className="text-lg leading-relaxed md:text-xl">
              Navrhujeme vizuální systémy a weby. Značka, tisk, rozhraní,
              kampaň — jako jeden jazyk.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
              Práce probíhá přímo se studiem. Zadání, návrh, realizace a
              předání. Působíme z Jablonce nad Nisou, zakázky bereme po Česku.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="mt-12 border-t border-line text-sm">
              {[
                ["Značka", site.brand],
                ["Sídlo", site.address.city],
                ["Kraj", site.address.region],
                ["E-mail", site.email],
                ["Obor", "Grafika, identita, web, kampaně"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-3 gap-3 border-b border-line py-4"
                >
                  <dt className="text-xs tracking-[0.14em] text-subtle uppercase">
                    {k}
                  </dt>
                  <dd className="col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="page-grid py-16 md:py-24">
          <Reveal>
            <p className="kicker">Přístup</p>
            <h2 className="mt-4 font-medium text-4xl tracking-tight">
              Jeden vizuální systém
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Každý výstup má vydržet. Paleta je úzká, typografie drží linku,
              sazba má rytmus. Web, tisk i značka vycházejí ze stejného systému.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="page-grid py-16 md:py-20">
          <Reveal>
            <h2 className="font-medium text-3xl tracking-tight">
              Práce a poptávka
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/prace">Práce</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/kontakt">
                  Kontakt
                  <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
