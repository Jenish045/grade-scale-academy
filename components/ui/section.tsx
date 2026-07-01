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
  variant?: "hero" | "standard" | "compact" | "cta" | "flow-next"
}

const spacingClasses = {
  hero: "pt-[72px] pb-[72px] md:pt-[96px] md:pb-[96px] lg:pt-[112px] lg:pb-[112px]",
  standard: "pt-[72px] pb-[72px] md:pt-[96px] md:pb-[96px] lg:pt-[112px] lg:pb-[112px]",
  "flow-next": "pt-[72px] pb-[72px] md:pt-[96px] md:pb-[96px] lg:pt-[112px] lg:pb-[88px]",
  cta: "pt-[72px] pb-[72px] md:pt-[96px] md:pb-[96px] lg:pt-[112px] lg:pb-[112px]",
  compact: "pt-[72px] pb-[72px] md:pt-[72px] md:pb-[72px] lg:pt-[72px] lg:pb-[72px]",
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      container = true,
      headerClassName,
      variant = "standard",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(spacingClasses[variant], "relative overflow-hidden w-full scroll-mt-[80px]", className)}
        {...props}
      >
        <div className={cn(container && "mx-auto w-full max-w-[1376px] px-5 sm:px-6 md:px-8 lg:px-12")}>
          {(title || subtitle || description) && (
            <div
              className={cn(
                "w-full mb-[56px] mx-auto text-center flex flex-col items-center",
                headerClassName
              )}
              style={{ maxWidth: "760px" }} // Ticket 001: "Reading content max-width: 760px"
            >
              {subtitle && (
                <Typography
                  variant="caption"
                  className="text-primary font-semibold tracking-[0.08em] uppercase text-[14px] mb-[20px] block"
                >
                  {subtitle}
                </Typography>
              )}
              {title && (
                <Typography
                  variant="h2"
                  className={cn(
                    "text-balance-custom text-foreground font-semibold tracking-tight text-[32px] md:text-[40px] lg:text-[52px] leading-[1.08]",
                    description ? "mb-[24px]" : "mb-0"
                  )}
                  style={{ maxWidth: "760px" }}
                >
                  {title}
                </Typography>
              )}
              {description && (
                <Typography
                  variant="body-large"
                  className="text-pretty-custom text-[20px] leading-[1.8] text-muted-foreground/80 font-light"
                  style={{ maxWidth: "760px" }}
                >
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
