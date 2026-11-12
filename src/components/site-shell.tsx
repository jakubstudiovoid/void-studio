import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <Header />
      <main id="obsah" className="page-stage flex-1 bg-bg">
        {children}
      </main>
      <Footer />
    </div>
  );
}
