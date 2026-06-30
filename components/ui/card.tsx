import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Typography } from "./typography"
import { Star } from "lucide-react"

/* Core Card Building Blocks */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-premium hover:-translate-y-[2px]",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="h4"
    className={cn("font-heading font-medium tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="small"
    className={cn("text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"


/* Presets */

// 1. Primary Card (Simple layout wrapper)
export interface PrimaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  footer?: React.ReactNode
}
export const PrimaryCard = React.forwardRef<HTMLDivElement, PrimaryCardProps>(
  ({ className, title, description, children, footer, ...props }, ref) => (
    <Card ref={ref} className={className} {...props}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
)
PrimaryCard.displayName = "PrimaryCard"

// 2. Feature Card (Icon + Title + Description)
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description: string
}
export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, ...props }, ref) => (
    <Card ref={ref} className={cn("flex flex-col justify-between h-full p-6 space-y-4 hover:border-primary/20", className)} {...props}>
      <div className="flex items-center justify-center size-12 rounded-xl bg-primary/5 text-primary">
        {icon}
      </div>
      <div className="space-y-2">
        <Typography variant="h4" className="font-heading font-medium">{title}</Typography>
        <Typography variant="small" className="text-muted-foreground/90 block leading-relaxed">{description}</Typography>
      </div>
    </Card>
  )
)
FeatureCard.displayName = "FeatureCard"

// 3. Country Card (Image/Flag + Country Name + Details)
export interface CountryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  imageUrl: string
  visaSuccessRate?: string
  popularPrograms?: string[]
  onSelect?: () => void
}
export const CountryCard = React.forwardRef<HTMLDivElement, CountryCardProps>(
  ({ className, name, imageUrl, visaSuccessRate, popularPrograms, onSelect, ...props }, ref) => (
    <Card ref={ref} className={cn("overflow-hidden group/country flex flex-col h-full", className)} {...props}>
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover/country:scale-105"
        />
        {visaSuccessRate && (
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
            {visaSuccessRate} Visa Success
          </div>
        )}
      </div>
      <CardHeader className="flex-1 p-5">
        <Typography variant="h3" className="font-heading font-medium tracking-tight group-hover/country:text-primary transition-colors">{name}</Typography>
        {popularPrograms && popularPrograms.length > 0 && (
          <div className="mt-3 space-y-2">
            <Typography variant="caption" className="text-[10px] text-muted-foreground font-bold tracking-wider">Popular Programs</Typography>
            <div className="flex flex-wrap gap-1">
              {popularPrograms.map((prog, idx) => (
                <span key={idx} className="bg-muted px-2 py-0.5 rounded text-[11px] text-foreground/80 font-medium">
                  {prog}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardHeader>
      <CardFooter className="p-5 pt-0">
        <button
          onClick={onSelect}
          className="w-full text-center text-sm font-semibold text-primary hover:text-primary/80 flex items-center justify-center gap-1.5 transition-colors"
        >
          Explore Requirements
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5 transition-transform group-hover/country:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </CardFooter>
    </Card>
  )
)
CountryCard.displayName = "CountryCard"

// 4. Service Card (Title + Category + Short description + benefits list)
export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  category: string
  description: string
  benefits?: string[]
}
export const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, title, category, description, benefits, ...props }, ref) => (
    <Card ref={ref} className={cn("p-6 flex flex-col justify-between h-full hover:border-secondary-foreground/20", className)} {...props}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold tracking-widest text-secondary-foreground bg-secondary/30 px-2.5 py-1 rounded">
            {category}
          </span>
        </div>
        <div className="space-y-2">
          <Typography variant="h3" className="font-heading font-medium leading-tight">{title}</Typography>
          <Typography variant="small" className="text-muted-foreground block leading-relaxed">{description}</Typography>
        </div>
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-border/60">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5 mt-1 text-success shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  )
)
ServiceCard.displayName = "ServiceCard"

// 5. Team Card (Member Photo + Name + Role + Bio)
export interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  imageUrl: string
  bio?: string
}
export const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(
  ({ className, name, role, imageUrl, bio, ...props }, ref) => (
    <Card ref={ref} className={cn("overflow-hidden group/team flex flex-col h-full bg-card hover:border-accent-foreground/20", className)} {...props}>
      <div className="relative w-full h-64 overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover/team:scale-102"
        />
      </div>
      <CardHeader className="p-5 text-center flex-1">
        <Typography variant="h4" className="font-heading font-medium tracking-tight">{name}</Typography>
        <Typography variant="caption" className="text-[10px] text-primary/80 font-bold tracking-widest block mt-1">{role}</Typography>
        {bio && (
          <Typography variant="small" className="text-muted-foreground mt-3 text-xs block leading-relaxed line-clamp-3">
            {bio}
          </Typography>
        )}
      </CardHeader>
    </Card>
  )
)
TeamCard.displayName = "TeamCard"

// 6. Testimonial Card (Quote + Author Name + University/Designation + Stars)
export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string
  author: string
  designation: string
  rating?: number
}
export const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, quote, author, designation, rating = 5, ...props }, ref) => (
    <Card ref={ref} className={cn("p-6 flex flex-col justify-between h-full bg-card", className)} {...props}>
      <div className="space-y-4">
        {/* Star Rating */}
        {rating > 0 && (
          <div className="flex gap-0.5 text-secondary-foreground">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={cn(
                  "size-4 fill-none stroke-current",
                  idx < rating && "fill-current"
                )}
              />
            ))}
          </div>
        )}
        
        {/* Quote text */}
        <blockquote className="relative">
          <span className="absolute -top-3 -left-2 text-6xl text-primary/10 font-serif pointer-events-none select-none">“</span>
          <Typography variant="body" className="font-sans font-light italic leading-relaxed text-foreground/80 pl-4 block">
            {quote}
          </Typography>
        </blockquote>
      </div>

      <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-3">
        <div>
          <Typography variant="label" className="font-semibold block">{author}</Typography>
          <Typography variant="small" className="text-xs text-muted-foreground block mt-0.5">{designation}</Typography>
        </div>
      </div>
    </Card>
  )
)
TestimonialCard.displayName = "TestimonialCard"


export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
}
