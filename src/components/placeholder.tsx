import { cn } from "@/lib/utils";
import {
  aspectClass,
  toneClass,
  type ProjectShot,
  type ProjectTone,
} from "@/data/projects";

export function Placeholder({
  tone,
  label,
  index,
  aspect = "cover",
  className,
}: {
  tone: ProjectTone;
  label?: string;
  index?: string;
  aspect?: ProjectShot["aspect"];
  className?: string;
}) {
  const hasMeta = Boolean(index || label);
  return (
    <div
      className={cn(
        "img-frame img-zoom relative flex w-full flex-col justify-between overflow-hidden",
        hasMeta && "p-5 md:p-6",
        aspectClass[aspect],
        toneClass[tone],
        className,
      )}
    >
      {hasMeta ? (
        <>
          <span className="text-xs tracking-[0.2em] text-fg/35 uppercase">
            {index}
          </span>
          {label ? (
            <span className="text-xs tracking-[0.16em] text-fg/50 uppercase">
              {label}
            </span>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
