import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  success?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, success, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-[18px] border border-[rgba(15,23,42,0.12)] bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:border-primary disabled:cursor-not-allowed disabled:bg-muted/30 disabled:opacity-60 transition-all duration-200",
          error && "border-destructive text-destructive placeholder:text-destructive/40 focus-visible:ring-destructive/20 focus-visible:border-destructive",
          success && "border-success text-success placeholder:text-success/40 focus-visible:ring-success/20 focus-visible:border-success",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
