import * as React from "react"
import { cn } from "@/lib/utils"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  success?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, success, disabled, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          disabled={disabled}
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-[18px] border border-[rgba(15,23,42,0.12)] bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:border-primary disabled:cursor-not-allowed disabled:bg-muted/30 disabled:opacity-60 transition-all duration-200 appearance-none pr-10",
            error && "border-destructive text-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive",
            success && "border-success text-success focus-visible:ring-success/20 focus-visible:border-success",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    )
  }
)

Select.displayName = "Select"

export { Select }
