import { useEffect, useRef, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const first = useRef(true);

  useEffect(() => {
    first.current = false;
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <Header />
      <main
        id="obsah"
        key={pathname}
        className={first.current ? "flex-1 bg-bg" : "page-transition flex-1 bg-bg"}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
