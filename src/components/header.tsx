import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [onDark, setOnDark] = useState(pathname === "/");

  useEffect(() => {
    const update = () => {
      if (pathname !== "/") {
        setOnDark(false);
        return;
      }
      const hero = document.querySelector(".editorial-hero");
      setOnDark(hero ? hero.getBoundingClientRect().bottom > 72 : false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && open) {
        const targets = [
          toggleRef.current,
          ...Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []),
        ].filter(Boolean) as HTMLElement[];
        const index = targets.indexOf(document.activeElement as HTMLElement);
        const next = e.shiftKey
          ? index <= 0
            ? targets.length - 1
            : index - 1
          : (index + 1) % targets.length;
        e.preventDefault();
        targets[next]?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Přeskočit na obsah
      </a>
      <header
        className={cn(
          "premium-header fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-700",
          onDark && !open ? "is-dark" : "bg-bg/90",
        )}
      >
        <div className="page-grid flex h-16 items-center justify-between md:h-[4.5rem]">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex xl:gap-7" aria-label="Hlavní">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link"
                activeProps={{ className: "nav-link is-active" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <Button asChild size="md" className="header-cta">
              <Link to="/kontakt">
                Proberme projekt
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </Button>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="relative flex size-11 items-center justify-center lg:hidden"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span
              className={cn(
                "absolute h-px w-5 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-current transition-opacity duration-500",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-40 bg-bg transition-opacity duration-700 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <nav
          className="page-grid flex h-full flex-col justify-end pt-24 pb-10"
          aria-label="Mobilní"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <li
                key={item.to}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                className={cn(
                  "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                <Link
                  to={item.to}
                  className="block py-2 font-medium text-4xl leading-none tracking-tight text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3 text-sm text-muted">
            <a href={site.emailHref} className="text-fg">
              {site.email}
            </a>
            <p>{site.address.city}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
