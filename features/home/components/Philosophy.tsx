import Link from "next/link"
import { Check, X, Shield } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Card } from "@/components/ui/card"
import { FadeUp } from "@/components/ui/animation"

export default function Philosophy() {
  return (
    <Section id="philosophy" variant="standard" className="bg-white border-b border-[rgba(15,23,42,0.08)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Left Column: Split layout text, max-width 540px */}
        <div className="lg:col-span-5 flex flex-col justify-center max-w-[540px] space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-accent/10 text-accent-foreground border border-[rgba(15,23,42,0.08)] select-none">
              Our Core Philosophy
            </span>
          </div>
          
          <Typography variant="h2" className="font-heading font-semibold tracking-tight text-foreground text-[32px] md:text-[40px] lg:text-[52px] leading-[1.08]">
            Guidance Before Consultancy. Always.
          </Typography>
          
          <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 block">
            {"Most academic consulting pathways prioritize commission first, adapting the student to a pre-selected destination template. We believe a student's path should be chosen based on real potential—not agent profit."}
          </Typography>
          
          <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 block font-light">
            {"Our mentorship starts with the student. We evaluate your academic background, long-term goals, and financial planning. Only after completing a holistic profile review do we align appropriate countries and courses."}
          </Typography>
          
          {/* Editorial Quote Statement */}
          <div className="pt-6 border-t border-[rgba(15,23,42,0.08)] text-foreground/90 font-serif text-[18px] md:text-[20px] leading-relaxed italic font-light">
            {"\"Your future is not a volume commodity. You deserve advice that puts your potential first.\""}
          </div>

          <div className="pt-2">
            <Link
              href="/our-story"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
            >
              Learn More About Our Story
              <span className="transition-transform duration-200 group-hover:translate-x-[4px]">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Comparison Cards (identical heights and dimensions) */}
        <div className="lg:col-span-7">
          <FadeUp className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-stretch">
            
            {/* The Grade Scale Way */}
            <Card className="rounded-[28px] border border-success/20 bg-success/5 hover:border-success/35 p-8 flex flex-col justify-between space-y-8 relative overflow-hidden transition-all duration-[250ms] ease-out hover:translate-y-[-4px] hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] shadow-premium-card h-full">
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none text-success font-bold font-serif text-6xl select-none">
                GSA
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-success">
                  <Shield className="size-5" />
                  <Typography variant="label" className="font-bold text-xs uppercase tracking-wider text-success">
                    The Grade Scale Way
                  </Typography>
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-foreground text-[24px] md:text-[32px] leading-[1.12]">
                  Aligning credentials to career path.
                </Typography>
              </div>
              
              <ul className="space-y-4 pt-6 border-t border-success/10 flex-1 flex flex-col justify-end" aria-label="Benefits of Grade Scale Academy">
                <li className="flex items-start gap-2.5 text-[18px] leading-[1.8] text-foreground/80">
                  <Check className="size-4 text-success shrink-0 mt-1.5" />
                  <span>Honest profiling — zero forged files or credentials.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[18px] leading-[1.8] text-foreground/80">
                  <Check className="size-4 text-success shrink-0 mt-1.5" />
                  <span>Guidance fits your real financial and language scores.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[18px] leading-[1.8] text-foreground/80">
                  <Check className="size-4 text-success shrink-0 mt-1.5" />
                  <span>Transparent fee structures and zero hidden margins.</span>
                </li>
              </ul>
            </Card>

            {/* Typical Agent Way */}
            <Card className="rounded-[28px] border border-destructive/10 bg-destructive/5 opacity-90 hover:opacity-100 p-8 flex flex-col justify-between space-y-8 transition-all duration-[250ms] ease-out hover:translate-y-[-4px] hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] shadow-premium-card h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-destructive">
                  <X className="size-5" />
                  <Typography variant="label" className="font-bold text-xs uppercase tracking-wider text-destructive">
                    Typical Consultants
                  </Typography>
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-muted-foreground text-[24px] md:text-[32px] leading-[1.12]">
                  Forcing profiles into preset commissions.
                </Typography>
              </div>

              <ul className="space-y-4 pt-6 border-t border-destructive/10 flex-1 flex flex-col justify-end" aria-label="Problems with typical consultants">
                <li className="flex items-start gap-2.5 text-[18px] leading-[1.8] text-muted-foreground/80">
                  <X className="size-4 text-destructive shrink-0 mt-1.5" />
                  <span>Telling students what they want to hear to get fees.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[18px] leading-[1.8] text-muted-foreground/80">
                  <X className="size-4 text-destructive shrink-0 mt-1.5" />
                  <span>Promising profiles empty promises without deep reviews.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[18px] leading-[1.8] text-muted-foreground/80">
                  <X className="size-4 text-destructive shrink-0 mt-1.5" />
                  <span>Pushing high-commission countries and colleges.</span>
                </li>
              </ul>
            </Card>

          </FadeUp>
        </div>
      </div>
    </Section>
  )
}
