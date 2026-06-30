import React from "react"
import { cn } from "@/lib/utils"
import { Typography } from "./typography"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  align?: "left" | "center" | "right"
  container?: boolean
  headerClassName?: string
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      align = "left",
      container = true,
      headerClassName,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24 lg:py-28 relative overflow-hidden", className)}
        {...props}
      >
        <div className={cn(container && "container-custom")}>
          {(title || subtitle || description) && (
            <div
              className={cn(
                "max-w-3xl mb-12 md:mb-16 space-y-3.5",
                align === "center" && "mx-auto text-center flex flex-col items-center",
                align === "right" && "ml-auto text-right flex flex-col items-end",
                headerClassName
              )}
            >
              {subtitle && (
                <Typography
                  variant="caption"
                  className="text-primary font-bold tracking-widest block"
                >
                  {subtitle}
                </Typography>
              )}
              {title && (
                <Typography variant="h2" className="text-balance-custom text-foreground font-semibold">
                  {title}
                </Typography>
              )}
              {description && (
                <Typography variant="body-large" className="text-pretty-custom">
                  {description}
                </Typography>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = "Section"
