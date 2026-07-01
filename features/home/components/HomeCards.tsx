"use client"

import React from "react"
import Link from "next/link"
import { Typography } from "@/components/ui/typography"
import { HomePlaceholder } from "./HomePlaceholder"
import { cn } from "@/lib/utils"

// 1. Home Trust Card (Border radius: 28px, Internal Padding: 40px, Icon container: 56px, Hover lift -6px, max line length 32-36 characters)
export interface HomeTrustCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description: string
  colorClass?: string
}

export const HomeTrustCard = React.forwardRef<HTMLDivElement, HomeTrustCardProps>(
  ({ className, icon, title, description, colorClass, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card text-card-foreground p-10 shadow-premium-card transition-all duration-[250ms] ease-out hover:translate-y-[-6px] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between h-full",
          className
        )}
        {...props}
      >
        <div className="space-y-6">
          <div className={cn("size-14 rounded-[18px] border border-[rgba(15,23,42,0.05)] bg-primary/5 text-primary flex items-center justify-center shrink-0", colorClass)}>
            {icon}
          </div>
          <div className="space-y-4">
            <Typography variant="h3" className="font-heading font-semibold text-foreground text-[26px] leading-[1.12]">
              {title}
            </Typography>
            <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 block max-w-[34ch]">
              {description}
            </Typography>
          </div>
        </div>
      </div>
    )
  }
)
HomeTrustCard.displayName = "HomeTrustCard"


// 2. Home Country Card (Border radius: 28px, Hover translateY -6px, image hover scale to 1.04)
export interface HomeCountryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  description: string
  areasExplored?: string[]
  href?: string
}

export const HomeCountryCard = React.forwardRef<HTMLDivElement, HomeCountryCardProps>(
  ({ className, name, description, areasExplored, href = "#", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card text-card-foreground shadow-premium-card overflow-hidden group/country flex flex-col h-full transition-all duration-[250ms] ease-out hover:translate-y-[-6px] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)]",
          className
        )}
        {...props}
      >
        <div className="overflow-hidden w-full aspect-[16/10]">
          <HomePlaceholder
            label={`${name} Pathway`}
            aspectRatio="aspect-full h-full w-full"
            className="border-0 rounded-none bg-transparent transition-transform duration-[250ms] ease-out group-hover/country:scale-[1.04]"
          />
        </div>

        <div className="flex flex-col flex-1 p-8 space-y-4">
          <Typography
            variant="h3"
            className="font-heading font-semibold text-foreground text-[24px] md:text-[32px] leading-[1.12] transition-colors group-hover/country:text-primary"
          >
            {name}
          </Typography>
          
          <Typography
            variant="body"
            className="text-[18px] leading-[1.8] text-muted-foreground/90 line-clamp-2"
          >
            {description}
          </Typography>

          {areasExplored && areasExplored.length > 0 && (
            <div className="space-y-2 pt-2">
              <Typography variant="caption" className="text-[10px] text-muted-foreground/80 font-bold tracking-widest block uppercase">
                Areas students commonly explore
              </Typography>
              <div className="flex flex-wrap gap-1.5">
                {areasExplored.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-rhythm border border-[rgba(15,23,42,0.05)] px-2.5 py-1 rounded-md text-[12px] text-foreground/80 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4 mt-auto">
            <Link
              href={href}
              className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-3.5 transition-transform duration-[250ms] group-hover/country:translate-x-[4px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
  }
)
HomeCountryCard.displayName = "HomeCountryCard"


// 3. Home Service Card (Radius: 28px, Padding: 40px, Hover translateY -6px, Duration: 250ms)
export interface HomeServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  category: string
  description: string
  benefits?: string[]
}

export const HomeServiceCard = React.forwardRef<HTMLDivElement, HomeServiceCardProps>(
  ({ className, title, category, description, benefits, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card text-card-foreground p-10 shadow-premium-card transition-all duration-[250ms] ease-out hover:translate-y-[-6px] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)] flex flex-col justify-between h-full",
          className
        )}
        {...props}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-secondary-foreground bg-secondary/30 px-2.5 py-1 rounded-full border border-[rgba(15,23,42,0.08)]">
              {category}
            </span>
          </div>
          <div className="space-y-4">
            <Typography variant="h3" className="font-heading font-semibold text-[24px] md:text-[32px] leading-[1.12]">
              {title}
            </Typography>
            <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 block">
              {description}
            </Typography>
          </div>
          {benefits && benefits.length > 0 && (
            <ul className="space-y-2.5 pt-4 border-t border-[rgba(15,23,42,0.08)]">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[15px] text-foreground/80">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4 mt-0.5 text-success shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
)
HomeServiceCard.displayName = "HomeServiceCard"


// 4. Home Team Card (Large portrait layout, rounded corners: 32px, soft border, very subtle hover lift translateY -2px)
export interface HomeTeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  bio: string
  buttonText: string
  href?: string
}

export const HomeTeamCard = React.forwardRef<HTMLDivElement, HomeTeamCardProps>(
  ({ className, name, role, bio, buttonText, href = "#", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card text-card-foreground overflow-hidden flex flex-col h-full shadow-premium-card transition-all duration-[250ms] ease-out hover:translate-y-[-2px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.05)]",
          className
        )}
        {...props}
      >
        <div className="p-8 pb-0 flex justify-center">
          <HomePlaceholder label={`${name} Portfolio`} aspectRatio="aspect-[4/3] w-full" />
        </div>
        <div className="flex flex-col flex-1 p-8 space-y-4">
          <div className="space-y-1">
            <Typography variant="h3" className="font-heading font-semibold text-foreground text-[24px] md:text-[32px] leading-[1.12]">
              {name}
            </Typography>
            <Typography variant="caption" className="text-[10px] text-primary/80 font-bold tracking-widest block uppercase">
              {role}
            </Typography>
          </div>
          <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 block">
            {bio}
          </Typography>
          <div className="pt-4 mt-auto">
            <Link
              href={href}
              className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              {buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-3.5 transition-transform duration-[250ms] group-hover/team:translate-x-[4px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
  }
)
HomeTeamCard.displayName = "HomeTeamCard"


// 5. Home Journey Card (Student Journeys Success Preview - No reviews/quotation marks)
export interface HomeJourneyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  country: string
  course: string
  university: string
  summary: string
  buttonText: string
  href?: string
}

export const HomeJourneyCard = React.forwardRef<HTMLDivElement, HomeJourneyCardProps>(
  ({ className, country, course, university, summary, buttonText, href = "#", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card text-card-foreground overflow-hidden flex flex-col h-full shadow-premium-card transition-all duration-[250ms] ease-out hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.05)]",
          className
        )}
        {...props}
      >
        <div className="p-6 pb-0 flex justify-center">
          <HomePlaceholder label={`Journey Mockup`} aspectRatio="aspect-[16/10] w-full" />
        </div>
        <div className="flex flex-col flex-1 p-6 space-y-4">
          <div className="space-y-2">
            <Typography variant="caption" className="text-[10px] text-primary/80 font-bold tracking-widest block uppercase">
              {country}
            </Typography>
            <Typography variant="h3" className="font-heading font-semibold text-foreground text-[20px] md:text-[24px] leading-tight">
              {course}
            </Typography>
            <Typography variant="small" className="text-xs text-muted-foreground block font-medium">
              {university}
            </Typography>
          </div>
          <Typography variant="body" className="text-[16px] leading-[1.7] text-muted-foreground/80 block">
            {summary}
          </Typography>
          <div className="pt-4 mt-auto">
            <Link
              href={href}
              className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              {buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-3.5 transition-transform duration-[250ms] group-hover/journey:translate-x-[4px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
  }
)
HomeJourneyCard.displayName = "HomeJourneyCard"
