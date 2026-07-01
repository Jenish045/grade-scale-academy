"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Shield, 
  UserCheck, 
  HeartHandshake, 
  Compass, 
  ChevronDown,
  CheckCircle2
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animation"
import { HomePlaceholder } from "@/features/home/components/HomePlaceholder"

interface JourneyStage {
  stage: string
  title: string
  description: string
  bullets: string[]
}

interface FAQItem {
  question: string
  answer: string
}

export default function HowWeHelpPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

  const journeyStages: JourneyStage[] = [
    {
      stage: "Stage 01",
      title: "Understanding the Student",
      description: "We begin with a detailed review of your academic history, strengths, and goals.",
      bullets: [
        "One-to-one credential review sessions",
        "Discussion of career aspirations and strengths",
        "Parent alignment on finances and expectations",
        "Baseline English language diagnostic test",
      ],
    },
    {
      stage: "Stage 02",
      title: "Country & University Planning",
      description: "We shortlist destination countries and universities that fit your profile.",
      bullets: [
        "Destination compatibility mapping",
        "Transparent course and university shortlists",
        "Aligning choices with post-study opportunities",
        "Fee breakdowns and cost-of-living reviews",
      ],
    },
    {
      stage: "Stage 03",
      title: "Applications & SOP Vetting",
      description: "We help you assemble a complete application package for your chosen programs.",
      bullets: [
        "Detailed review of transcripts and mark sheets",
        "Manual Statement of Purpose (SOP) reviews",
        "Guidance on Letters of Recommendation (LOR)",
        "Application assembly and submission support",
      ],
    },
    {
      stage: "Stage 04",
      title: "Visa Preparation",
      description: "We guide you through the complete visa filing and preparation process.",
      bullets: [
        "Checklists for country-specific visa documents",
        "Simulated consulate mock interviews",
        "Verification of financial statements",
        "Filing submission and tracking support",
      ],
    },
    {
      stage: "Stage 05",
      title: "Pre-Departure Briefings",
      description: "We help you prepare for a smooth transition before you travel.",
      bullets: [
        "Accommodation searches and vetting support",
        "Flight booking and baggage guidelines",
        "Cultural and safety briefing sessions",
        "Essential checklist reviews for travel day",
      ],
    },
    {
      stage: "Stage 06",
      title: "Post-Arrival Support",
      description: "We remain your point of contact even after you land in your destination country.",
      bullets: [
        "Initial airport transfer advice",
        "Guidance on local registration and bank accounts",
        "Connections to active GSA alumni networks",
        "Ongoing check-ins during your first term",
      ],
    },
  ]

  const faqs: FAQItem[] = [
    {
      question: "Do you guarantee admission or visa approval?",
      answer: "No, Grade Scale Academy does not offer guarantees. Admissions and visas are determined solely by university committees and government consulates. Our commitment is to provide transparent, honest preparation and document vetting to ensure your file is presented accurately.",
    },
    {
      question: "Can I begin counseling before taking my IELTS or PTE test?",
      answer: "Yes. Shortlisting programs, aligning documents, and language preparation can run in parallel. Starting counseling early helps you understand the target scores required for your preferred programs.",
    },
    {
      question: "How do you select which universities to recommend?",
      answer: "We shortlist universities based on your academic grades, test scores, career goals, and budget. We do not base recommendations on agent commission rates.",
    },
    {
      question: "Do you charge fees for shortlisting universities?",
      answer: "Our initial consultation, profile review, and university shortlisting are free. This helps you explore options with your family before deciding on enrollment.",
    },
  ]

  return (
    <div className="bg-background min-h-screen pt-4">
      {/* SECTION 1: HERO (Centered) */}
      <Section id="help-hero" variant="standard" className="bg-white pb-[88px] lg:pb-[112px]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 max-w-3xl flex flex-col items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
                How We Help
              </span>
            </FadeUp>
            <FadeUp>
              <Typography variant="display" className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-foreground text-center">
                {"Structured Guidance, Tailored to Your Goals"}
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography variant="body-large" className="text-[20px] md:text-[22px] leading-[1.7] text-muted-foreground/90 font-light text-center max-w-2xl">
                {"Every student deserves guidance built around their personal credentials, financial parameters, and career goals—not a one-size-fits-all admissions template."}
              </Typography>
            </FadeUp>
            <FadeUp className="flex flex-wrap gap-4 justify-center pt-2 w-full">
              <Link href="/consultation" className="focus-visible:outline-none">
                <Button variant="primary" size="lg" className="relative group/button overflow-hidden rounded-full shadow-md hover:shadow-lg transition-shadow">
                  Request a Consultation
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                </Button>
              </Link>
              <Link href="/study-destinations" className="focus-visible:outline-none">
                <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                  Explore Study Destinations
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
                </Button>
              </Link>
            </FadeUp>
          </div>

          <FadeUp className="pt-6 w-full">
            <HomePlaceholder
              label="Academy Counseling Environment [Photo Placeholder]"
              aspectRatio="aspect-[16/9] w-full"
              className="shadow-premium-card"
            />
          </FadeUp>
        </div>
      </Section>

      {/* SECTION 2: WHY OUR PROCESS WORKS (Centered Card Grid) */}
      <Section id="help-logic" variant="standard" className="bg-rhythm border-t border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Why Our Process Works
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center">
              {"By separating counseling from commission incentives, we focus on credentials, budgets, and long-term career outcomes."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full">
            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  <UserCheck className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Profile-First Match
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"We evaluate your academic baseline transcripts and language capabilities before shortlisting universities."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  <Compass className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Career Planning
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"We align courses and destinations with genuine career routes, focusing on long-term opportunities."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  <Shield className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Honest Advice
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"We discuss cost parameters and visa probabilities upfront, helping families plan for expenses transparently."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  <HeartHandshake className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  End-to-End Care
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"We guide you through test preparation, application vetting, pre-departure steps, and post-arrival settlement."}
                </Typography>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* SECTION 3: STUDENT JOURNEY (Vertical Timeline) */}
      <Section id="help-timeline" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Journey Timeline
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center">
              {"We organize the preparation, selection, application, and arrival process into six clear, structured stages."}
            </Typography>
          </div>

          <div className="relative border-l border-[rgba(15,23,42,0.08)] pl-8 md:pl-12 ml-4 md:ml-6 space-y-12">
            {journeyStages.map((stage, idx) => (
              <div key={idx} className="relative group/timeline">
                {/* Visual marker dot */}
                <div className="absolute top-1.5 -left-[41px] md:-left-[57px] size-6 md:size-8 rounded-full bg-primary border-4 border-white flex items-center justify-center text-[10px] md:text-xs font-bold text-white shadow-xs z-10">
                  {idx + 1}
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4">
                    <Typography variant="h3" className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                      {stage.title}
                    </Typography>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary/80 bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10 self-start md:self-auto">
                      {stage.stage}
                    </span>
                  </div>

                  <Typography variant="body" className="text-[16px] leading-[1.8] text-muted-foreground/90 font-light block">
                    {stage.description}
                  </Typography>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {stage.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-foreground/80 font-light">
                        <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 4: WHY STUDENTS CHOOSE GSA (Respectful Comparison Grid) */}
      <Section id="help-compare" variant="standard" className="bg-rhythm border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="space-y-12 max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              How We Work Differently
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"We choose to separate our guidance from commission incentives, focusing on transparency and student outcomes."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            {/* The Grade Scale Way */}
            <Card className="rounded-[32px] border border-success/20 bg-success/5 p-8 md:p-10 flex flex-col justify-start space-y-6 shadow-xs h-full">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-success bg-success/15 px-3 py-1 rounded-full border border-success/20 select-none inline-block">
                  The Grade Scale Way
                </span>
                <Typography variant="h3" className="font-heading font-semibold text-2xl">
                  Focusing on Student Outcomes
                </Typography>
              </div>

              <ul className="space-y-4 pt-4 border-t border-success/10" aria-label="Grade Scale Academy characteristics">
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85 font-light">
                  <CheckCircle2 className="size-4 text-success shrink-0 mt-1" />
                  <span>Profile-first evaluations matching programs to credentials.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85 font-light">
                  <CheckCircle2 className="size-4 text-success shrink-0 mt-1" />
                  <span>Individual SOP reviews to guide your application content.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85 font-light">
                  <CheckCircle2 className="size-4 text-success shrink-0 mt-1" />
                  <span>Transparent preparation costs and loan support pathways.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85 font-light">
                  <CheckCircle2 className="size-4 text-success shrink-0 mt-1" />
                  <span>Accommodation search reviews and alumni coordination.</span>
                </li>
              </ul>
            </Card>

            {/* Typical Counseling Way */}
            <Card className="rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-8 md:p-10 flex flex-col justify-start space-y-6 shadow-xs h-full">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/90 bg-muted/30 px-3 py-1 rounded-full border border-border select-none inline-block">
                  Typical Consulting
                </span>
                <Typography variant="h3" className="font-heading font-semibold text-2xl text-muted-foreground">
                  Focusing on Target Volume
                </Typography>
              </div>

              <ul className="space-y-4 pt-4 border-t border-[rgba(15,23,42,0.08)]" aria-label="Typical consulting characteristics">
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground/80 font-light">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-muted-foreground/60 shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Recommending universities based on pre-selected templates.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground/80 font-light">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-muted-foreground/60 shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Using template SOP essays without individual writing reviews.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground/80 font-light">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-muted-foreground/60 shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Providing visa guidelines without simulated mock sessions.</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground/80 font-light">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-muted-foreground/60 shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Ending communication once the admission and visa steps complete.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS (Expandable Accordion) */}
      <Section id="help-faq" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Common questions about our preparation modules and university کوتاه shortlist practices."}
            </Typography>
          </div>

          <div className="space-y-4 w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[rgba(15,23,42,0.08)] bg-card overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:bg-muted/30 transition-colors"
                  >
                    <span className="font-heading font-semibold text-foreground md:text-[18px] leading-snug pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 text-muted-foreground/80 shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-[rgba(15,23,42,0.04)] bg-muted/10">
                      <Typography variant="body" className="text-sm md:text-base leading-relaxed text-muted-foreground/90 font-light">
                        {faq.answer}
                      </Typography>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* SECTION 6: FINAL CTA (Strictly Centered Card) */}
      <Section id="help-final-cta" variant="standard" className="bg-white py-[88px] lg:py-[112px]">
        <div className="w-full max-w-5xl mx-auto rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-10 md:p-16 lg:p-20 shadow-premium-card text-center flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 max-w-2xl flex flex-col items-center">
            <Typography variant="h2" className="text-3xl md:text-[56px] leading-[1.08] font-heading font-semibold text-foreground text-center">
              {"Let's Align Your Path"}
            </Typography>
            <Typography variant="body-large" className="text-[20px] leading-[1.8] text-muted-foreground/95 max-w-xl mx-auto font-light text-center">
              {"If you are ready to prepare for your IELTS/PTE tests or build your applications, we are here to support you at every stage."}
            </Typography>
          </div>

          <div className="flex flex-wrap gap-4 justify-center w-full">
            <Link href="/consultation" className="focus-visible:outline-none">
              <Button variant="primary" size="lg" className="relative group/button overflow-hidden rounded-full shadow-md hover:shadow-lg transition-shadow">
                Request a Consultation
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              </Button>
            </Link>
            <Link href="/study-destinations" className="focus-visible:outline-none">
              <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                Explore Study Destinations
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
