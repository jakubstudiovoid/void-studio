import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { priceItems, priceNotes, pricePackages } from "@/data/pricing";
import { seoHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cenik")({
  head: () =>
    seoHead(
      "Ceník",
      "Orientační ceník studia VOID — identita, web, tisk a kampaně. Jablonec nad Nisou.",
    ),
  component: CenikPage,
});

function CenikPage() {
  return (
    <SiteShell>
      <PageHero kicker="Služby a ceny" title="Ceník">
        Orientační ceny. Finální nabídka se stanoví podle rozsahu, termínu a
        počtu výstupů.
      </PageHero>

      <div>
        {pricePackages.map((pack) => (
          <section
            key={pack.slug}
            id={pack.slug}
            className="scroll-mt-24 border-b border-line"
          >
            <div className="page-grid py-14 md:py-16">
              <Reveal>
                <p className="text-xs tracking-[0.2em] text-subtle">
                  {pack.number}
                </p>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
                  <h2 className="font-medium text-4xl tracking-tight">
                    {pack.title}
                  </h2>
                  <p className="text-sm tracking-[0.08em] text-muted tabular-nums">
                    {pack.price}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
                  {pack.lead}
                </p>
                <ul className="mt-8 grid gap-0">
                  {pack.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-line py-3 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="border-b border-line">
        <div className="page-grid py-16 md:py-24">
          <Reveal>
            <p className="kicker">Položky</p>
            <h2 className="mt-4 font-medium text-4xl tracking-tight">
              Samostatné výstupy
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Pokud zadání nespadá do balíčku, naceníme jednotlivé položky.
            </p>
          </Reveal>
          <div className="mt-12">
            {priceItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 40}
                className="grid grid-cols-12 items-baseline gap-x-3 gap-y-1 border-t border-line py-5 last:border-b"
              >
                <h3 className="col-span-12 font-medium text-lg tracking-tight sm:col-span-4">
                  {item.title}
                </h3>
                <p className="col-span-12 text-sm tabular-nums text-fg sm:col-span-3">
                  {item.price}
                </p>
                <p className="col-span-12 text-sm leading-relaxed text-muted sm:col-span-5">
                  {item.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="page-grid py-16 md:py-24">
          <Reveal>
            <p className="kicker">Podmínky</p>
            <h2 className="mt-4 font-medium text-4xl tracking-tight">
              Jak se nacení
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2">
            {priceNotes.map((note, i) => (
              <Reveal
                key={note.title}
                delay={(i % 2) * 60}
                className={cn(
                  "border-t border-line py-8",
                  i % 2 === 0 ? "sm:pr-10" : "sm:pl-10",
                )}
              >
                <h3 className="font-medium text-xl tracking-tight">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {note.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="page-grid py-16 md:py-20">
          <Reveal>
            <h2 className="font-medium text-3xl tracking-tight">
              Nabídka na míru
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Pošlete zadání, rozsah a termín. Vrátíme se s postupem a cenou.
            </p>
            <Button asChild className="mt-8">
              <Link to="/kontakt">
                Kontakt
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
