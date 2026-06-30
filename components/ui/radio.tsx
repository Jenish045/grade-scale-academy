import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  success?: boolean
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, error, success, disabled, ...props }, ref) => {
    return (
      <input
        type="radio"
        disabled={disabled}
        ref={ref}
        className={cn(
          "peer size-4 shrink-0 rounded-full border border-input text-primary bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 cursor-pointer accent-primary",
          error && "border-destructive accent-destructive",
          success && "border-success accent-success",
          className
        )}
        {...props}
      />
    )
  }
)

Radio.displayName = "Radio"

export { Radio }
