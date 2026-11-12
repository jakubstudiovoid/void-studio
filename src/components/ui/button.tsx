import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium tracking-[0.14em] uppercase text-xs border-[1.75px] transition-[color,background-color,border-color,transform,opacity] duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.98] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        solid:
          "border-fg bg-fg text-bg hover:border-steel hover:bg-transparent hover:text-steel",
        outline:
          "border-fg bg-transparent text-fg hover:border-steel hover:bg-transparent hover:text-steel",
        ghost: "border-transparent text-fg hover:border-transparent hover:text-steel",
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
