import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <SiteShell>
      <section className="page-grid pt-32 pb-20">
        <p className="kicker mb-6">404</p>
        <h1 className="font-medium text-display tracking-tight">
          Stránka nebyla nalezena
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
          Požadovaná adresa neexistuje. Pokračujte na úvod nebo do portfolia.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">Úvod</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/prace">
              Portfolio
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
