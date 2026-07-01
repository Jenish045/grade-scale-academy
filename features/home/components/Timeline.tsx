"use client"

import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { FadeUp, StaggerContainer } from "@/components/ui/animation"
import { motion } from "framer-motion"

interface TimelineStep {
  step: string
  title: string
  description: string
}

export default function Timeline() {
  const steps: TimelineStep[] = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Understanding your academic baseline, career ambitions, and family financial goals.",
    },
    {
      step: "02",
      title: "Profile Evaluation",
      description: "Vetting your transcripts and language scores honestly to map realistic options.",
    },
    {
      step: "03",
      title: "University & Course Selection",
      description: "Selecting optimal majors and matching universities without commission bias.",
    },
    {
      step: "04",
      title: "Application & Admission",
      description: "Guiding you through forms, application checks, and Statement of Purpose (SOP) reviews.",
    },
    {
      step: "05",
      title: "Visa & Documentation",
      description: "Assisting in precise document compiling, financial declarations, and mock interviews.",
    },
    {
      step: "06",
      title: "Travel Preparation",
      description: "Preparing briefings on local academic cultures, travel packing, and flight booking.",
    },
    {
      step: "07",
      title: "Settle Into Your New Journey",
      description: "Connecting you with local student networks and alumni to help you settle in.",
    },
  ]

  return (
    <Section
      id="timeline"
      title="Your Journey, One Step At A Time"
      subtitle="Our Mentorship Timeline"
      description="We split the complex journey into simple, logical stages. We ensure each phase is complete and verified before moving to the next."
      variant="compact"
      className="bg-rhythm border-b border-[rgba(15,23,42,0.08)] py-[80px]"
      headerClassName="max-w-[760px] mb-10 lg:mb-12"
    >
      <StaggerContainer className="relative max-w-4xl mx-auto pt-4">
        {/* Vertical Line running down the center with viewport entrance grow animation */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 pointer-events-none"
        />

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0
            // Sequential delay: 0.08s increment per node
            const sequentialDelay = idx * 0.08

            return (
              <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center justify-between">
                {/* Node Dot */}
                <div className="absolute left-4 md:left-1/2 size-4 rounded-full bg-primary border-4 border-rhythm -translate-x-1/2 z-10" />

                {/* Left Side (Desktop Only) */}
                <div className="hidden md:block w-[45%] text-right pr-8">
                  {isEven ? (
                    <FadeUp delay={sequentialDelay} className="w-full">
                      <div className="space-y-2">
                        <span className="font-heading text-4xl font-extrabold text-primary/10 select-none block">
                          {step.step}
                        </span>
                        <Typography variant="h3" className="font-heading font-semibold text-foreground text-[24px] md:text-[32px] leading-[1.12]">
                          {step.title}
                        </Typography>
                        <Typography variant="body" className="text-muted-foreground block text-[18px] leading-[1.8] max-w-[34ch] ml-auto">
                          {step.description}
                        </Typography>
                      </div>
                    </FadeUp>
                  ) : null}
                </div>

                {/* Gap Spacer (Desktop Only) */}
                <div className="hidden md:block w-[10%]" />

                {/* Right Side / Mobile Layout */}
                <div className="w-full md:w-[45%] pl-10 md:pl-8 text-left">
                  {!isEven ? (
                    <FadeUp delay={sequentialDelay} className="w-full">
                      <div className="space-y-2">
                        <span className="font-heading text-4xl font-extrabold text-primary/10 select-none block">
                          {step.step}
                        </span>
                        <Typography variant="h3" className="font-heading font-semibold text-foreground text-[24px] md:text-[32px] leading-[1.12]">
                          {step.title}
                        </Typography>
                        <Typography variant="body" className="text-muted-foreground block text-[18px] leading-[1.8] max-w-[34ch]">
                          {step.description}
                        </Typography>
                      </div>
                    </FadeUp>
                  ) : (
                    /* Render mobile fallback when left-aligned on desktop */
                    <FadeUp delay={sequentialDelay} className="block md:hidden w-full">
                      <div className="space-y-2">
                        <span className="font-heading text-4xl font-extrabold text-primary/10 select-none block">
                          {step.step}
                        </span>
                        <Typography variant="h3" className="font-heading font-semibold text-foreground text-[24px] md:text-[32px] leading-[1.12]">
                          {step.title}
                        </Typography>
                        <Typography variant="body" className="text-muted-foreground block text-[18px] leading-[1.8] max-w-[34ch]">
                          {step.description}
                        </Typography>
                      </div>
                    </FadeUp>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </StaggerContainer>
    </Section>
  )
}
