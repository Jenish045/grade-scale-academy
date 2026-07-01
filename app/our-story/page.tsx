"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  ChevronDown
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/components/ui/animation"
import { HomePlaceholder } from "@/features/home/components/HomePlaceholder"

interface FAQItem {
  question: string
  answer: string
}

export default function OurStoryPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "Who founded Grade Scale Academy?",
      answer: "GSA was founded by an experienced English educator who observed a gap in transparent profiling and honest counseling within the Rajkot student community.",
    },
    {
      question: "What was the founder's motivation?",
      answer: "The founder noticed education planning was too often driven by agent commissions rather than academic fit. He established GSA to prioritize students' potential first.",
    },
    {
      question: "How does GSA ensure ethical counselling?",
      answer: "We reject forged files, false credentials, and high-commission push tactics. Every shortlist is mapped strictly according to transcripts and family budgets.",
    },
    {
      question: "Are initial profiling sessions free of obligation?",
      answer: "Yes. Our consultations are strictly conversational. We analyze your parameters, recommend target options, and encourage family alignment with zero hard-sales pressure.",
    },
    {
      question: "Can parents visit the Rajkot office directly?",
      answer: "Yes, parents are highly encouraged to visit. We coordinate student timelines and financial profiles in comfortable, closed counseling cabins.",
    },
  ]

  return (
    <div className="bg-background min-h-screen pt-4">
      {/* SECTION 1: HERO (Editorial Hero Style) */}
      <Section id="story-hero" variant="hero" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-[540px]">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
                Our Narrative
              </span>
            </FadeUp>
            <FadeUp>
              <Typography variant="display" className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-foreground">
                {"Every Student Deserves Advice They Can Trust."}
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography variant="body-large" className="text-[20px] md:text-[22px] leading-[1.7] text-muted-foreground/90 font-light">
                {"We believe overseas counseling is a mentorship, not a sales quota."}
              </Typography>
            </FadeUp>
            <FadeUp className="flex flex-wrap gap-4 pt-2">
              <Link href="/consultation" className="focus-visible:outline-none">
                <Button variant="primary" size="lg" className="relative group/button overflow-hidden rounded-full shadow-md hover:shadow-lg transition-shadow">
                  Request a Consultation
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                </Button>
              </Link>
              <Link href="/how-we-help" className="focus-visible:outline-none">
                <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                  Explore How We Help
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
                </Button>
              </Link>
            </FadeUp>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-6 w-full flex items-stretch">
            <HomePlaceholder
              label="Founder Interacting with Students [Photo Placeholder]"
              aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
              className="shadow-premium-card"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 2: WHY WE STARTED (Editorial Story - Image Dominates) */}
      <Section id="story-why-started" variant="editorial" className="bg-rhythm border-t border-b border-[rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Dominant Portrait Image */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <HomePlaceholder
              label="Student Transcripts Vetting Session [Photo Placeholder]"
              aspectRatio="aspect-[16/10] w-full"
              className="shadow-premium-card"
            />
          </div>

          {/* Right Column: Personal Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 max-w-[480px]">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-secondary/30 text-secondary-foreground border border-[rgba(15,23,42,0.08)] select-none">
                Why We Started
              </span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-[40px] leading-[1.1] font-heading font-semibold text-foreground">
              Bringing Honesty Back to Counseling
            </Typography>
            <div className="space-y-4 text-muted-foreground/95 text-[18px] leading-[1.8] font-light">
              <p>
                {"Our founder comes from a teaching background. For him, education has always been about helping students succeed by identifying their strengths and working patiently to build their skills."}
              </p>
              <p>
                {"While tutoring students preparing for tests in Rajkot, he noticed a concerning pattern: many critical decisions regarding study destinations and universities were heavily influenced by external business interests rather than student capabilities. Important choices were being guided by transactions rather than outcomes."}
              </p>
              <p>
                {"Grade Scale Academy was established to provide a transparent alternative. We wanted to build a place where guidance is honest, profiling is objective, and long-term career fits come before all else."}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: THE PROBLEM WE SAW (Editorial Layout - Alternating Panels) */}
      <Section id="story-problem" variant="standard" className="bg-white border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-12 max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Gaps in the Journey
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Navigating overseas education can feel overwhelming. Here are the core challenges students and parents commonly face when seeking advice."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {[
              { title: "Information Overload", desc: "Sifting through thousands of programs, admission portals, and conflicting visa guidelines alone can quickly become confusing." },
              { title: "Uncertain Advice", desc: "It is difficult for students to know whether a recommended university matches their goals or simply serves an agent's benefits." },
              { title: "Financial Risks", desc: "Applying abroad represents a significant family investment. Students fear making costly mistakes with their academic planning." },
              { title: "Safety & Integration", desc: "Parents worry deeply about their child's safety, post-study work routes, and landing integration support in a new country." },
            ].map((prob, idx) => (
              <div key={idx} className="border-l-2 border-primary/20 pl-6 py-2 space-y-2">
                <Typography variant="h3" className="font-heading font-semibold text-xl leading-snug">
                  {prob.title}
                </Typography>
                <Typography variant="body" className="text-sm leading-relaxed text-muted-foreground font-light">
                  {prob.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 4: HOW WE WORK DIFFERENTLY (Split Layout) */}
      <Section id="story-different" variant="standard" className="bg-rhythm border-b border-[rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Placeholder */}
          <div className="lg:col-span-6 w-full flex items-stretch order-last lg:order-first">
            <HomePlaceholder
              label="Counseling Classroom Setup [Photo Placeholder]"
              aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
              className="shadow-premium-card"
            />
          </div>

          {/* Right Column: How We Guide */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-[540px] ml-auto">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-secondary/30 text-secondary-foreground border border-[rgba(15,23,42,0.08)] select-none">
                How We Guide
              </span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-[40px] leading-[1.1] font-heading font-semibold text-foreground">
              A Patient, Student-First Philosophy
            </Typography>
            <div className="space-y-4 text-muted-foreground/95 text-[18px] leading-[1.8] font-light">
              <p>
                {"We replace transactional agent templates with one-to-one, profile-first counseling. Our assessment begins with your academic credentials, finances, and long-term career goals."}
              </p>
              <p>
                {"We think about your career horizon, not just your university admission. We guide you honestly, highlighting parameters and potential adjustments so you can make informed decisions with your parents."}
              </p>
              <p>
                {"From test preparation cabins to visa mock drills and landing connections, we provide ethical, transparent support at every stage."}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5: CORE VALUES (Numbered Philosophy / Editorial List) */}
      <Section id="story-values" variant="standard" className="bg-white border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Values That Guide Us
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Every consultation, review, and recommendation we deliver is anchored in these ethical principles."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-stretch">
            {[
              { num: "01", title: "Integrity First", desc: "We provide absolute clarity regarding eligibility parameters and visa guidelines. We never compromise on honest file vetting." },
              { num: "02", title: "Personal Guidance", desc: "You work directly with experienced academic mentors, receiving detailed, one-to-one feedback on your preparation and essays." },
              { num: "03", title: "Long-Term Care", desc: "We measure success by your long-term compatibility and growth abroad, remaining your trusted mentor throughout your career." },
              { num: "04", title: "Continual Vetting", desc: "We keep our team updated on changing university requirements, course pathways, and visa routes to ensure accurate advice." },
            ].map((value, idx) => (
              <div key={idx} className="space-y-4 text-left border-t border-[rgba(15,23,42,0.08)] pt-6 flex flex-col justify-start">
                <span className="font-heading text-4xl font-light text-primary/30 block">
                  {value.num}
                </span>
                <Typography variant="h3" className="font-heading font-semibold text-2xl leading-none">
                  {value.title}
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {value.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6 & 7: MISSION & VISION (Editorial Text Columns - No Cards) */}
      <Section id="story-mission-vision" variant="editorial" className="bg-rhythm border-b border-[rgba(15,23,42,0.08)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Mission Column */}
          <div className="space-y-4 text-left flex flex-col justify-start">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary block">
              Our Mission
            </span>
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground">
              Ethical Profile Vetting
            </Typography>
            <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/95 font-light block">
              {"To provide transparent, profile-first academic preparation and mentoring that empowers students to make informed, realistic international education choices."}
            </Typography>
          </div>

          {/* Vision Column */}
          <div className="space-y-4 text-left flex flex-col justify-start">
            <span className="text-[10px] uppercase font-bold tracking-widest text-secondary-foreground block">
              Our Vision
            </span>
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground">
              Global Careers Outcome
            </Typography>
            <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/95 font-light block">
              {"A future where every student embarks on their overseas journey with absolute clarity, absolute confidence, and the practical skills to build a successful global career."}
            </Typography>
          </div>
        </div>
      </Section>

      {/* SECTION 8: FOUNDER NOTE (Split Layout) */}
      <Section id="story-founder-note" variant="standard" className="bg-white border-b border-[rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HomePlaceholder
              label="Founder Portrait [Photo Placeholder]"
              aspectRatio="aspect-[3/4] max-w-sm w-full"
              className="shadow-premium-card"
            />
          </div>

          {/* Right Column: Bio Letter */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-start max-w-[620px]">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-accent/10 text-accent-foreground border border-[rgba(15,23,42,0.08)] select-none">
                Founder Message
              </span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-[40px] leading-[1.1] font-heading font-semibold text-foreground">
              A Message From Our Founder
            </Typography>
            
            <div className="border-l-2 border-primary/20 pl-6 py-1 space-y-4 text-foreground/90 font-serif text-[18px] md:text-[20px] leading-relaxed italic font-light">
              <p>
                {"\"Education is, and has always been, about helping people discover where they can succeed. Having taught English for years, I built Grade Scale Academy to protect that fundamental goal.\""}
              </p>
              <p>
                {"\"We believe you deserve advice that respects your background, your family's hard work, and your future ambitions. Our promise is simple: honest counsel, rigorous preparation, and support at every step. Thank you for placing your trust in us.\""}
              </p>
            </div>
            
            <div className="space-y-1">
              <Typography variant="label" className="font-bold text-[14px] uppercase tracking-wider text-foreground">
                [Real Name Placeholder]
              </Typography>
              <Typography variant="small" className="text-xs text-muted-foreground block font-light">
                Founder & Lead Mentor, Grade Scale Academy
              </Typography>
            </div>

            <div className="pt-2">
              <Link href="/our-team" className="focus-visible:outline-none">
                <Button variant="outline" className="rounded-full relative group/button overflow-hidden">
                  Meet Our Team
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 9: FINAL CTA (Centered Card) */}
      <Section id="story-final-cta" variant="cta" className="bg-white">
        <div className="w-full max-w-5xl mx-auto rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-10 md:p-16 lg:p-20 shadow-premium-card text-center flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 max-w-2xl flex flex-col items-center">
            <Typography variant="h2" className="text-3xl md:text-[56px] leading-[1.08] font-heading font-semibold text-foreground text-center">
              {"Let's Start With A Conversation"}
            </Typography>
            <Typography variant="body-large" className="text-[20px] leading-[1.8] text-muted-foreground/95 max-w-xl mx-auto font-light text-center">
              {"If you're planning to study abroad, we'd be happy to understand your goals and help you explore the path that's right for you."}
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

      {/* SECTION 10: FAQs (Accordion) */}
      <Section id="story-faq" variant="standard" className="bg-rhythm border-t border-[rgba(15,23,42,0.08)] pb-[56px]">
        <div className="space-y-16 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Common questions about our history, registration, and values."}
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
    </div>
  )
}
