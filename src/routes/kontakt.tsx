import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/data/site";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () =>
    seoHead(
      "Kontakt",
      `Poptávka studia VOID. ${site.email}, ${site.address.city}.`,
    ),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <SiteShell>
      <PageHero kicker="Poptávka" title="Kontakt">
        E-mail nebo formulář. Studio sídlí v Jablonci nad Nisou, zakázky
        bereme po Česku.
      </PageHero>

      <section className="border-b border-line">
        <div className="page-grid py-14 md:py-20">
          <Reveal>
            <ul className="flex flex-col gap-8">
              <li>
                <p className="kicker mb-2">E-mail</p>
                <a
                  href={site.emailHref}
                  className="font-medium text-2xl tracking-tight transition-colors duration-200 hover:text-steel"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="kicker mb-2">Sídlo</p>
                <p className="text-base leading-relaxed">
                  {site.address.city}
                  <br />
                  {site.address.region}
                </p>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={80} className="mt-14 border-t border-line pt-14">
            <p className="kicker mb-8">Formulář</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
