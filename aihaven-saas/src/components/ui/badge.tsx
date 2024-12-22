import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-primary-500 text-white hover:bg-brand-primary-600",
        secondary:
          "border-transparent bg-brand-secondary-500 text-white hover:bg-brand-secondary-600",
        accent:
          "border-transparent bg-brand-accent-cyan-500 text-white hover:bg-brand-accent-cyan-600",
        success:
          "border-transparent bg-brand-accent-emerald-500 text-white hover:bg-brand-accent-emerald-600",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: 
          "text-brand-neutral-700 border-brand-neutral-200 hover:bg-brand-neutral-100 hover:text-brand-neutral-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
