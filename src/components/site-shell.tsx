import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <Header />
      <main id="obsah" className="flex-1 bg-bg">
        {children}
      </main>
      <Footer />
    </div>
  );
}
