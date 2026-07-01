import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-[16px] font-semibold whitespace-nowrap transition-all duration-[250ms] ease-out outline-none select-none active:scale-[0.98] hover:translate-y-[-2px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:transition-transform [&_svg]:duration-[250ms] [&_svg]:ease-out group-hover/button:[&_svg]:translate-x-[4px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        primary: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-secondary-foreground/10 focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2",
        outline:
          "border border-border bg-background text-foreground/90 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
        ghost:
          "text-foreground/90 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:ring-1 focus-visible:ring-ring/50",
      },
      size: {
        default: "h-10 gap-2 px-5 py-2",
        sm: "h-9 gap-1.5 px-4 text-sm",
        lg: "h-12 gap-2.5 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading, children, disabled, ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
        {children}
      </ButtonPrimitive>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
