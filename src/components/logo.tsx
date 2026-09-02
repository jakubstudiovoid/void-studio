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
      className={cn("inline-flex items-center py-2", className)}
    >
      <img
        src="/logo.png"
        alt=""
        width={53}
        height={28}
        className="brand-mark"
      />
      <span className="sr-only">{site.brand}</span>
    </Link>
  );
}
