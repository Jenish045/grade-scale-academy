import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  success?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, error, success, disabled, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        disabled={disabled}
        ref={ref}
        className={cn(
          "peer size-4 shrink-0 rounded border border-input text-primary bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 cursor-pointer accent-primary",
          error && "border-destructive accent-destructive",
          success && "border-success accent-success",
          className
        )}
        {...props}
      />
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
