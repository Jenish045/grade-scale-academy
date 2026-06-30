import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-large"
  | "body"
  | "small"
  | "caption"
  | "label";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children?: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, string> = {
  display: "font-heading text-5xl md:text-7xl font-normal tracking-tight text-foreground leading-[1.15]",
  h1: "font-heading text-4xl md:text-5xl font-normal tracking-tight text-foreground leading-tight",
  h2: "font-heading text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-snug",
  h3: "font-heading text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-snug",
  h4: "font-heading text-xl font-medium tracking-normal text-foreground leading-normal",
  "body-large": "font-sans text-lg md:text-xl font-light text-muted-foreground leading-relaxed",
  body: "font-sans text-base font-normal text-foreground/90 leading-relaxed",
  small: "font-sans text-sm font-normal text-muted-foreground leading-relaxed",
  caption: "font-sans text-xs font-semibold tracking-wider uppercase text-muted-foreground/80",
  label: "font-sans text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
};

const defaultElement: Record<TypographyVariant, React.ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-large": "p",
  body: "p",
  small: "span",
  caption: "span",
  label: "label",
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "body", as, children, ...props }, ref) => {
    const Component = as || defaultElement[variant];

    return (
      <Component
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";
