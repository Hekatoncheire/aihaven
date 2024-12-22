import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary solid - Main CTAs
        primary: 
          "bg-brand-primary-600 text-white shadow-sm hover:bg-brand-primary-700 active:bg-brand-primary-800 hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0",
        
        // Secondary outline - Alternative actions
        secondary:
          "bg-transparent border-2 border-brand-secondary-600 text-brand-secondary-600 hover:bg-brand-secondary-50 hover:border-brand-secondary-700 hover:text-brand-secondary-700 active:bg-brand-secondary-100",
        
        // Ghost - Very subtle actions
        ghost: 
          "text-brand-neutral-600 hover:text-brand-neutral-900 hover:bg-brand-neutral-50 active:bg-brand-neutral-100",
        
        // Link - Text-like buttons
        link: 
          "text-brand-primary-600 hover:text-brand-primary-700 underline-offset-4 hover:underline decoration-2",
        
        // Special variants using both brand colors
        premium: 
          "bg-gradient-to-r from-brand-primary-600 via-brand-secondary-600 to-brand-primary-600 text-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 hover:opacity-90",
        
        // Glass variants using brand colors
        glass:
          "backdrop-blur-md bg-white/80 text-brand-primary-900 hover:bg-white/90 active:bg-white/95 border border-white/20 shadow-sm hover:shadow-md",
        
        // Destructive actions
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800 hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        xs: "h-7 px-2.5 text-xs",
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4 py-2",
        md: "h-11 px-5 text-base",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        "2xl": "h-16 px-10 text-xl",
        icon: {
          xs: "h-7 w-7 p-0",
          sm: "h-8 w-8 p-0",
          default: "h-10 w-10 p-0",
          lg: "h-12 w-12 p-0",
          xl: "h-14 w-14 p-0",
        },
      },
      glow: {
        none: "",
        subtle: "hover:shadow-[0_0_15px_rgba(var(--glow-color,30,64,175),0.3)]",
        strong: "hover:shadow-[0_0_30px_rgba(var(--glow-color,30,64,175),0.4)]",
        pulse: "animate-pulse hover:shadow-[0_0_30px_rgba(var(--glow-color,30,64,175),0.4)]",
      },
      rounded: {
        default: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      glow: "none",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
