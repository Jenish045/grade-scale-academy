"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Compass, 
  ChevronDown,
  Users,
  CheckCircle2,
  UserCheck,
  HeartHandshake,
  Smile
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animation"
import { HomePlaceholder } from "@/features/home/components/HomePlaceholder"

interface FAQItem {
  question: string
  answer: string
}

export default function OurTeamPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "Who will guide my counselling session?",
      answer: "Every counselling session is guided directly by our founder and lead overseas education counsellor. We do not employ secondary sales executives.",
    },
    {
      question: "Can parents attend meetings?",
      answer: "Yes. Parental alignment regarding academic expectations, country policies, and financial limits is essential. We welcome parents to join all sessions.",
    },
    {
      question: "Will I meet the founder directly?",
      answer: "Yes. Our founder personally leads student profiling, university selection processes, and Statement of Purpose (SOP) essay reviews.",
    },
    {
      question: "Who helps with visa documentation?",
      answer: "Our in-house visa specialists handle document checklist reviews, verify financial filings, and organize simulated consulate mock interviews.",
    },
    {
      question: "Can I visit the office before booking a consultation?",
      answer: "Absolutely. We encourage students and parents to visit our Rajkot office to check out our learning environment and discuss options before deciding on enrollment.",
    },
  ]

  return (
    <div className="bg-background min-h-screen pt-4">
      {/* SECTION 1: HERO (Split Layout) */}
      <Section id="team-hero" variant="standard" className="bg-white pb-[88px] lg:pb-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Title & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-[540px]">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
                The GSA Team
              </span>
            </FadeUp>
            <FadeUp>
              <Typography variant="display" className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-foreground">
                {"Meet The People Behind Every Success Story"}
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography variant="body-large" className="text-[20px] md:text-[22px] leading-[1.7] text-muted-foreground/90 font-light">
                {"Every recommendation, application, and counselling session at Grade Scale Academy is guided personally by experienced professionals who believe your future deserves individual attention."}
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
              <Link href="/connect" className="focus-visible:outline-none">
                <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                  Connect With Us
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
                </Button>
              </Link>
            </FadeUp>
          </div>

          {/* Right Column: Office Vector Placeholder */}
          <div className="lg:col-span-6 w-full flex items-stretch">
            <HomePlaceholder
              label="Academy Workspace [Photo Placeholder]"
              aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
              className="shadow-premium-card"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 2: SMALL TEAM. PERSONAL ATTENTION (Asymmetric Layout) */}
      <Section id="team-attention" variant="standard" className="bg-rhythm border-t border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Explainer */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 max-w-[620px]">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-secondary/30 text-secondary-foreground border border-[rgba(15,23,42,0.08)] select-none">
                Our Structure
              </span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-[40px] leading-[1.1] font-heading font-semibold text-foreground">
              A Small Team With A Big Responsibility
            </Typography>
            <div className="space-y-4 text-muted-foreground/95 text-[18px] leading-[1.8] font-light">
              <p>
                {"At Grade Scale Academy, we believe that choosing a study abroad destination is too important to be treated as a volume business. By keeping our team small and focused, we make sure every student receives direct, personal guidance from experienced mentors."}
              </p>
              <p>
                {"You will never find sales executives or commission targets here. There is no passing your documents between junior departments. The professionals you meet during your first visit will remain your active guides until you successfully arrive at your international university campus."}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Parameter Strip */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            {[
              { label: "Zero Intermediaries", desc: "Speak directly to your actual counselors." },
              { label: "Transparent Vetting", desc: "Document preparation handled in-house." },
              { label: "Alumni Connection", desc: "Direct access to previous GSA students." },
            ].map((param, pIdx) => (
              <div key={pIdx} className="bg-card border border-[rgba(15,23,42,0.08)] p-6 rounded-2xl shadow-xs">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary block mb-1">
                  {param.label}
                </span>
                <span className="text-sm text-muted-foreground font-light block">
                  {param.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 3: MEET THE FOUNDER (Portrait Left, Details Right) */}
      <Section id="team-founder" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HomePlaceholder
              label="Founder Portrait [Photo Placeholder]"
              aspectRatio="aspect-[3/4] max-w-sm w-full"
              className="shadow-premium-card"
            />
          </div>

          {/* Right Column: Bio Details */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-start max-w-[620px]">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-accent/10 text-accent-foreground border border-[rgba(15,23,42,0.08)] select-none">
                Leadership
              </span>
            </div>
            <div className="space-y-1">
              <Typography variant="h2" className="text-3xl md:text-[40px] leading-[1.1] font-heading font-semibold text-foreground">
                [Founder Name Placeholder]
              </Typography>
              <Typography variant="small" className="text-sm font-semibold text-primary uppercase tracking-wider block">
                Founder, Lead Counsellor & Visa Expert
              </Typography>
            </div>

            <div className="space-y-4 text-muted-foreground/95 text-[18px] leading-[1.8] font-light">
              <p>
                {"With years of experience teaching English and preparing Rajkot students for competitive exams, our founder established Grade Scale Academy to protect the fundamental goal of education: helping students find where they can succeed."}
              </p>
              <p>
                {"Prioritizing student credentials and family budgets over commission-driven university targets, he personally leads profile evaluations, document packages, and Statement of Purpose (SOP) reviews."}
              </p>
            </div>

            <div className="border-l-2 border-primary/20 pl-6 py-1 space-y-4 text-foreground/90 font-serif text-[18px] md:text-[20px] leading-relaxed italic font-light">
              {"\"The right advice can change the course of a student's life. That responsibility should never be taken lightly.\""}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: MEET THE TRAINER (Details Left, Portrait Right) */}
      <Section id="team-trainer" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio Details */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-start max-w-[620px] order-last lg:order-first">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-accent/10 text-accent-foreground border border-[rgba(15,23,42,0.08)] select-none">
                Language Mentorship
              </span>
            </div>
            <div className="space-y-1">
              <Typography variant="h2" className="text-3xl md:text-[40px] leading-[1.1] font-heading font-semibold text-foreground">
                [Trainer Name Placeholder]
              </Typography>
              <Typography variant="small" className="text-sm font-semibold text-primary uppercase tracking-wider block">
                Lead IELTS & PTE Trainer
              </Typography>
            </div>

            <div className="space-y-4 text-muted-foreground/95 text-[18px] leading-[1.8] font-light">
              <p>
                {"Specializing in diagnostic communication and test preparation, our trainer helps students perform naturally in IELTS, PTE, and mock visa interviews."}
              </p>
              <p>
                {"Rather than directing students through standard rote coaching cycles, she focuses on personalized speaking skills and structured writing drills, preparing candidates for real-world communication confidence."}
              </p>
            </div>
          </div>

          {/* Right Column: Portrait */}
          <div className="lg:col-span-5 flex justify-center w-full ml-auto">
            <HomePlaceholder
              label="Trainer Portrait [Photo Placeholder]"
              aspectRatio="aspect-[3/4] max-w-sm w-full"
              className="shadow-premium-card"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 5: HOW WE WORK TOGETHER (Visual Timeline Flow) */}
      <Section id="team-process" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Consultation & Guidance Cycle
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"How our team collaborates with you and your parents at every stage."}
            </Typography>
          </div>

          <div className="relative w-full">
            {/* Desktop timeline horizontal line */}
            <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-0.5 bg-[rgba(15,23,42,0.08)] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4 text-center md:text-left lg:text-center items-start">
              {[
                { title: "Student Intake", desc: "First meeting to discuss goals." },
                { title: "Founder Session", desc: "Personal profiling and vetting." },
                { title: "Career Alignment", desc: "Shortlisting suitable fields." },
                { title: "Applications", desc: "SOP reviews and filings." },
                { title: "Language Prep", desc: "Structured IELTS/PTE training." },
                { title: "Visa Mock Drills", desc: "Simulated interview tests." },
                { title: "Departure", desc: "Accommodation briefs." },
              ].map((step, idx) => (
                <div key={idx} className="space-y-4 flex flex-col items-center lg:items-center">
                  <div className="size-14 rounded-full bg-primary border-4 border-white flex items-center justify-center text-primary-foreground font-bold z-10 shadow-xs">
                    {idx + 1}
                  </div>
                  <div className="space-y-1 text-center w-full">
                    <Typography variant="label" className="font-semibold block text-[15px] leading-tight">{step.title}</Typography>
                    <Typography variant="small" className="text-xs text-muted-foreground block max-w-[130px] mx-auto leading-relaxed font-light">
                      {step.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6: WHAT MAKES OUR TEAM DIFFERENT (5 Cards) */}
      <Section id="team-parameters" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              What Makes Our Team Different
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Five core standards that define our day-to-day counselling relationships."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 w-full items-stretch">
            {[
              { title: "Personal Guidance", desc: "No sales departments. Work directly with experienced advisors.", icon: <Users className="size-5" /> },
              { title: "Ethical Advice", desc: "Shortlists based strictly on academic fit and budgets.", icon: <CheckCircle2 className="size-5" /> },
              { title: "Long-Term Care", desc: "Continued advisor assistance even after visa clearance.", icon: <HeartHandshake className="size-5" /> },
              { title: "Continual Learning", desc: "Keeping updated on shifting immigration rules.", icon: <Compass className="size-5" /> },
              { title: "Direct Accessibility", desc: "Open-door policy for all student and parent concerns.", icon: <UserCheck className="size-5" /> },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-6 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                  <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                    {item.icon}
                  </div>
                  <Typography variant="h3" className="font-heading font-semibold text-[18px] leading-snug">
                    {item.title}
                  </Typography>
                  <Typography variant="body" className="text-xs text-muted-foreground leading-relaxed font-light">
                    {item.desc}
                  </Typography>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* SECTION 7: INSIDE GRADE SCALE ACADEMY (Rajkot Office description + 4 photo placeholders) */}
      <Section id="team-office" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Inside Grade Scale Academy
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"A quiet, structured environment designed for personalized training and transparent counseling."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full items-stretch">
            {[
              { label: "Counseling Cabins", desc: "Private zones for direct profile mappings." },
              { label: "IELTS Classrooms", desc: "Equipped cabins for diagnostic test preparation." },
              { label: "Consultation Spaces", desc: "Comfortable rooms for parent-advisor discussions." },
              { label: "Quiet Study Area", desc: "Dedicated desks for student revision sessions." },
            ].map((office, idx) => (
              <Card key={idx} className="rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-6 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <HomePlaceholder
                  label={`${office.label} [Placeholder]`}
                  aspectRatio="aspect-[4/3] w-full"
                  className="rounded-2xl"
                />
                <div className="space-y-1 text-left">
                  <Typography variant="h3" className="font-heading font-semibold text-lg">
                    {office.label}
                  </Typography>
                  <Typography variant="body" className="text-xs text-muted-foreground leading-relaxed font-light">
                    {office.desc}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 8: OUR PROMISE */}
      <Section id="team-promise" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
          <div className="flex justify-center">
            <div className="size-12 rounded-full bg-success/10 text-success flex items-center justify-center">
              <Smile className="size-6" />
            </div>
          </div>
          <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
            Our Direct Accountability Promise
          </Typography>
          <Typography variant="body-large" className="text-[20px] leading-[1.8] text-muted-foreground/90 font-light text-center max-w-2xl">
            {"When you walk into our office, you meet the people who will personally guide you. We do not hand off your documents or statements to separate administrative departments."}
          </Typography>
        </div>
      </Section>

      {/* SECTION 9: FAQs (Accordion) */}
      <Section id="team-faq" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Common questions about our team and consulting structure."}
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

      {/* SECTION 10: FINAL CTA (Centered Card) */}
      <Section id="team-final-cta" variant="standard" className="bg-white py-[88px] lg:py-[112px]">
        <div className="w-full max-w-5xl mx-auto rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-10 md:p-16 lg:p-20 shadow-premium-card text-center flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 max-w-2xl flex flex-col items-center">
            <Typography variant="h2" className="text-3xl md:text-[56px] leading-[1.08] font-heading font-semibold text-foreground text-center">
              {"Let's Start With A Conversation"}
            </Typography>
            <Typography variant="body-large" className="text-[20px] leading-[1.8] text-muted-foreground/95 max-w-xl mx-auto font-light text-center">
              {"Whether you already know where you want to study or you're just beginning your research, we're here to help you make informed decisions with confidence."}
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
            <Link href="/connect" className="focus-visible:outline-none">
              <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                Connect With Us
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
