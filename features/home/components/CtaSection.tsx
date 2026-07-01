import Link from "next/link"
import { CalendarRange } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/components/ui/animation"

export default function CtaSection() {
  return (
    <Section id="connect" variant="cta" className="bg-rhythm pt-[112px] pb-[112px]">
      {/* Centered layout wrapped inside a rounded card container with large padding */}
      <div className="w-full max-w-5xl mx-auto rounded-[32px] bg-card border border-[rgba(15,23,42,0.08)] p-10 md:p-16 lg:p-20 shadow-premium-card text-center flex flex-col items-center space-y-8">
        <FadeUp className="space-y-4 max-w-2xl flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
            <CalendarRange className="size-3.5" />
            Profile Review
          </span>
          <Typography
            variant="h2"
            className="font-heading font-semibold tracking-tight text-foreground text-3xl md:text-[56px] leading-[1.08] text-pretty-custom"
          >
            Let's Talk About Your Future
          </Typography>
          <Typography
            variant="body-large"
            className="text-muted-foreground/95 mx-auto block text-balance-custom leading-relaxed font-light text-[20px]"
          >
            We invite you to sit down with our experienced mentors for an honest, step-by-step discussion. Whether you are ready to apply or just beginning to explore international pathways, we are here to support your goals without the hard sell.
          </Typography>
        </FadeUp>

        <FadeUp className="flex flex-wrap gap-4 justify-center pt-2">
          <Link href="/consultation" className="focus-visible:outline-none">
            <Button variant="primary" size="lg" className="relative group/button overflow-hidden rounded-full shadow-md hover:shadow-lg transition-shadow">
              Book Consultation
              {/* Shine overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </Button>
          </Link>
          <Link href="/connect" className="focus-visible:outline-none">
            <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
              Connect With Us
              {/* Shine overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
            </Button>
          </Link>
        </FadeUp>

        <FadeUp className="pt-6 border-t border-[rgba(15,23,42,0.08)] w-full max-w-md">
          <Typography variant="small" className="text-xs text-muted-foreground block text-balance-custom">
            Our Rajkot campus is open Monday to Saturday, 10:00 AM – 6:30 PM. Walk-ins are welcome, but pre-booking ensures direct, dedicated time.
          </Typography>
        </FadeUp>
      </div>
    </Section>
  )
}
