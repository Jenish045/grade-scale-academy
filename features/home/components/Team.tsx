import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { HomePlaceholder } from "./HomePlaceholder"
import { CheckCircle2 } from "lucide-react"

export default function Team() {
  return (
    <Section
      id="team"
      variant="standard"
      className="bg-white border-b border-[rgba(15,23,42,0.08)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Left Column: dominant visual workspace/team placeholder */}
        <div className="lg:col-span-6 w-full flex items-stretch">
          <HomePlaceholder
            label="GSA Counseling Mentors [Photo Placeholder]"
            aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
            className="shadow-premium-card"
          />
        </div>

        {/* Right Column: Teaser & Invite */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-[540px] ml-auto">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
              Direct Mentorship
            </span>
          </div>
          <Typography
            variant="h2"
            className="text-[32px] md:text-[40px] lg:text-[52px] leading-[1.08] font-semibold text-foreground tracking-tight"
          >
            Guided Personally By Experts
          </Typography>
          <Typography
            variant="body-large"
            className="text-[20px] leading-[1.8] text-muted-foreground/80 font-light"
          >
            {"At Grade Scale Academy, we believe your future deserves individual attention. You will always coordinate directly with actual academic mentors and visa specialists—never secondary sales executives."}
          </Typography>

          <ul className="space-y-3 pt-4 border-t border-[rgba(15,23,42,0.08)]">
            <li className="flex items-center gap-2.5 text-sm text-foreground/80 font-light">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>Founder, Lead Counselor & Visa Specialist</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-foreground/80 font-light">
              <CheckCircle2 className="size-4 text-primary shrink-0" />
              <span>Head IELTS & PTE English Language Trainer</span>
            </li>
          </ul>

          <div className="pt-2">
            <Link href="/our-team" className="focus-visible:outline-none">
              <Button variant="primary" className="rounded-full relative group/button overflow-hidden shadow">
                Meet the GSA Mentors
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
