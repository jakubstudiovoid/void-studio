import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const first = useRef(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setEntered(false);
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <Header />
      <main id="obsah" className={entered ? "page-transition flex-1 bg-bg" : "flex-1 bg-bg"}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
