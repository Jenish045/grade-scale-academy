import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  success?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, success, disabled, ...props }, ref) => {
    return (
      <textarea
        disabled={disabled}
        ref={ref}
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:border-primary disabled:cursor-not-allowed disabled:bg-muted/30 disabled:opacity-60 transition-all duration-200 resize-y",
          error && "border-destructive text-destructive placeholder:text-destructive/40 focus-visible:ring-destructive/20 focus-visible:border-destructive",
          success && "border-success text-success placeholder:text-success/40 focus-visible:ring-success/20 focus-visible:border-success",
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
