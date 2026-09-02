import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { SiteShell } from "@/components/site-shell";
import { seoHead } from "@/lib/seo";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => seoHead(undefined, site.description),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
