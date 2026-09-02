import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium tracking-[0.14em] uppercase text-xs transition-[color,background-color,border-color,transform,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        solid: "bg-fg text-bg hover:bg-steel hover:text-ink outline-fg",
        outline:
          "border border-fg bg-transparent text-fg hover:bg-fg hover:text-bg outline-fg",
        ghost: "text-fg hover:text-steel outline-fg",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-12 px-7",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
