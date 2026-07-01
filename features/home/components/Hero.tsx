import Link from "next/link"
import { Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Section } from "@/components/ui/section"
import { FadeUp } from "@/components/ui/animation"

export default function Hero() {
  return (
    <Section id="hero" variant="standard" className="bg-white overflow-hidden pb-[88px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Left Column: Context & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <FadeUp className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
              <Compass className="size-3.5" />
              Guidance Before Consultancy
            </span>
          </FadeUp>

          <FadeUp className="mb-8">
            <Typography
              variant="display"
              className="text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] font-semibold text-foreground"
            >
              Counselling That Puts Your Future Before Profit.
            </Typography>
          </FadeUp>

          <FadeUp className="mb-10">
            <Typography
              variant="body-large"
              className="text-[22px] leading-[1.7] text-muted-foreground/90 max-w-[640px] block font-light"
            >
              Every student's future deserves advice based on potential—not commission. Located in Rajkot, Gujarat, we assist you in making the right educational choices without the hard sell.
            </Typography>
          </FadeUp>

          {/* Action CTAs: 24px gap between buttons with hover shine */}
          <FadeUp className="flex flex-wrap gap-6 mb-12">
            <Link href="/consultation" className="focus-visible:outline-none">
              <Button variant="primary" size="lg" className="relative group/button overflow-hidden rounded-full shadow hover:shadow-md transition-all">
                Book Consultation
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              </Button>
            </Link>
            <Link href="/destinations" className="focus-visible:outline-none">
              <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                Explore Destinations
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
              </Button>
            </Link>
          </FadeUp>

          {/* Trust strip */}
          <FadeUp className="pt-10 border-t border-[rgba(15,23,42,0.08)] w-full">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-[14px] font-semibold text-muted-foreground/60 select-none">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-primary/50 text-xs">✓</span> Ethical Guidance
              </span>
              <span className="hidden sm:inline text-muted-foreground/20">•</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-primary/50 text-xs">✓</span> Personalised Counselling
              </span>
              <span className="hidden sm:inline text-muted-foreground/20">•</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-primary/50 text-xs">✓</span> End-to-End Support
              </span>
            </div>
          </FadeUp>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 relative flex justify-center">
          <FadeUp className="w-full max-w-lg aspect-[4/3] md:aspect-[16/11] lg:aspect-square bg-muted/30 border border-[rgba(15,23,42,0.12)] rounded-[28px] overflow-hidden flex flex-col justify-between p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:translate-y-[-4px] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-[300ms] ease-out relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none font-serif text-8xl text-primary select-none">
              GSA
            </div>
            
            <div className="flex items-center justify-between border-b border-[rgba(15,23,42,0.08)] pb-4">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-slate-400/40" />
                <span className="size-3 rounded-full bg-slate-400/40" />
                <span className="size-3 rounded-full bg-slate-400/40" />
              </div>
              <Typography variant="caption" className="text-[10px] tracking-widest font-bold">
                Academic Guidance Dashboard
              </Typography>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center py-6 text-center space-y-3">
              <Typography variant="h3" className="font-heading font-medium text-foreground/90">
                Grade Scale Academy Rajkot Campus
              </Typography>
              <Typography variant="small" className="text-muted-foreground/80 max-w-sm text-xs leading-relaxed block">
                [Academic study workspace and student pathway dashboard mockup]
              </Typography>
            </div>

            <div className="bg-background border border-[rgba(15,23,42,0.12)] rounded-[18px] p-4 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-primary/40 animate-pulse" />
                <div className="text-left">
                  <Typography variant="label" className="text-xs font-semibold block">Academic Intake Support</Typography>
                  <Typography variant="small" className="text-[10px] text-muted-foreground block">Active profile review</Typography>
                </div>
              </div>
              <span className="text-[10px] bg-primary/5 border border-[rgba(15,23,42,0.08)] text-primary px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                Fall / Spring Intake
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>
  )
}
