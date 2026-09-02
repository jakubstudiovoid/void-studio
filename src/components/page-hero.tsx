import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  children,
  className,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "border-b border-line pt-28 pb-12 md:pt-36 md:pb-16",
        className,
      )}
    >
      <div className="page-grid">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 font-medium text-display tracking-tight">{title}</h1>
        {children ? (
          <p className="page-hero-lead mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {children}
          </p>
        ) : null}
      </div>
    </header>
  );
}
