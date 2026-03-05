import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-mono transition-colors",
  {
    variants: {
      variant: {
        default: "border border-border bg-background text-foreground",
        secondary: "border border-border bg-card text-muted",
        tag: "border border-border bg-background text-foreground/80 font-mono text-[11px] tracking-wide",
        status:
          "border border-emerald-200 bg-emerald-50 text-emerald-700 font-mono text-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
