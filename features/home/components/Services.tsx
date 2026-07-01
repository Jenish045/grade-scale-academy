import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/ui/animation"

interface ServiceItem {
  title: string
  category: string
  description: string
  bullets: string[]
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Planning Your Future",
      category: "Stage 01",
      description: "Establishing your academic baseline and aligning plans to your direct credentials.",
      bullets: [
        "Career Counselling",
        "Profile Evaluation",
        "Course Selection",
        "University Shortlisting",
      ],
    },
    {
      title: "Building Your Application",
      category: "Stage 02",
      description: "Creating premium files that tell your personal story clearly to admissions committees.",
      bullets: [
        "Admission Guidance",
        "SOP Guidance",
        "LOR Guidance",
        "Resume Review",
      ],
    },
    {
      title: "Preparing For Success",
      category: "Stage 03",
      description: "Academic English coaching and language test readiness for mandatory targets.",
      bullets: [
        "IELTS & PTE Prep",
        "TOEFL & Duolingo Guidance",
        "Spoken English Modules",
        "Classroom tests at GSA campus",
      ],
    },
    {
      title: "Financial Preparation",
      category: "Stage 04",
      description: "Vetting scholarship applications and managing sponsorships honestly.",
      bullets: [
        "Scholarship Vetting",
        "Education Loan Guidance",
        "Financial Path Planning",
      ],
    },
    {
      title: "Visa & Travel",
      category: "Stage 05",
      description: "Meticulous documentation checks and simulated interviews before consulate meetings.",
      bullets: [
        "Visa Documentation Support",
        "Consulate Mock Interviews",
        "Pre-Departure Briefings",
      ],
    },
    {
      title: "Support Beyond Admission",
      category: "Stage 06",
      description: "Ongoing support services for a smooth landing and integration in your target country.",
      bullets: [
        "Accommodation Assistance",
        "Post-Arrival Landing Support",
        "Continuous Alumni Mentorship",
      ],
    },
  ]

  return (
    <Section
      id="services" // Section 1: id added
      variant="standard"
      className="bg-rhythm border-b border-[rgba(15,23,42,0.08)]"
      container={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
        {/* Left Column: Sticky Section Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-[112px] space-y-6 flex flex-col items-start text-left">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-secondary/30 text-secondary-foreground border border-[rgba(15,23,42,0.08)] select-none">
              Comprehensive Mentorship
            </span>
          </div>
          <Typography
            variant="h2"
            className="text-[32px] md:text-[40px] lg:text-[52px] leading-[1.08] font-semibold text-foreground tracking-tight"
          >
            Everything Your Journey Needs
          </Typography>
          <Typography
            variant="body-large"
            className="text-[20px] leading-[1.8] text-muted-foreground/80 font-light max-w-[760px]"
          >
            No matter where you are today, Grade Scale Academy is here to guide you. We support your entire path—from Rajkot prep rooms to campus arrival and beyond.
          </Typography>
        </div>

        {/* Right Column: Service Journey Stages Stack */}
        <div className="lg:col-span-8 w-full">
          <StaggerContainer className="space-y-6">
            {services.map((svc, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-card border border-[rgba(15,23,42,0.08)] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 justify-between hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(15,23,42,0.02)] transition-all">
                  <div className="md:w-1/3 space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary block">
                      {svc.category}
                    </span>
                    <Typography variant="h3" className="font-heading font-semibold text-lg md:text-xl">
                      {svc.title}
                    </Typography>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <Typography variant="body" className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                      {svc.description}
                    </Typography>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.bullets.map((bullet, bIdx) => (
                        <span key={bIdx} className="bg-muted/50 border border-[rgba(15,23,42,0.04)] text-foreground/85 px-2.5 py-0.5 rounded-full text-xs font-light">
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Section Ending CTA: Explore How We Help */}
          <div className="mt-12 flex justify-start">
            <Link href="/how-we-help" className="focus-visible:outline-none">
              <Button variant="outline" className="rounded-full relative group/button overflow-hidden">
                Explore How We Help
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
