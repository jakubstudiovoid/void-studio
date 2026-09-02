import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

function scrollToTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export function Logo({ className, onClick }: LogoProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Link
      to="/"
      onClick={(e) => {
        onClick?.();
        if (pathname === "/") {
          e.preventDefault();
          scrollToTop();
        }
      }}
      aria-label={`${site.brand} — nahoru`}
      className={cn("inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className="size-5 border border-fg/80"
      />
      <span className="flex flex-col justify-center leading-none">
        <span className="text-2xs font-medium tracking-[0.2em] text-muted uppercase">
          studio
        </span>
        <span className="mt-0.5 text-lg font-medium tracking-tight">VOID</span>
      </span>
    </Link>
  );
}
