"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  ChevronDown,
  Users,
  CheckCircle2,
  UserCheck,
  HeartHandshake,
  Shield,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Car
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

export default function ConnectPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "Do I need an appointment before visiting?",
      answer: "No, appointments are not strictly required for initial inquiries. However, booking a session in advance ensures our lead counselor is fully available to review your credentials without a wait.",
    },
    {
      question: "Can I walk in directly?",
      answer: "Yes. You can walk in during our normal business hours (Monday to Saturday, 10:00 AM – 6:30 PM). Our reception desk will guide you.",
    },
    {
      question: "Can parents attend the counseling meetings?",
      answer: "Yes, we encourage parents to join. Openly coordinating academic aims, visa parameters, and budgets helps families make decisions together.",
    },
    {
      question: "How long does a typical counseling session take?",
      answer: "A standard profile evaluation session takes between 45 to 60 minutes. We take our time to understand your academic transcripts, goals, and budget.",
    },
    {
      question: "What documents should I bring for profiling?",
      answer: "We recommend bringing your 10th and 12th mark sheets, semester-wise college transcripts (if applying for postgraduate courses), and any previous IELTS/PTE score reports.",
    },
    {
      question: "Can we discuss and compare multiple countries?",
      answer: "Absolutely. We encourage comparing destinations. Our profiling framework evaluates options side-by-side to find the right path for you.",
    },
    {
      question: "Do I have to decide on enrollment immediately?",
      answer: "No. Our discussions are completely transparent and carry no obligations. We encourage you to review options with your family before taking next steps.",
    },
  ]

  return (
    <div className="bg-background min-h-screen pt-4">
      {/* SECTION 1: HERO (Split Layout) */}
      <Section id="connect-hero" variant="standard" className="bg-white pb-[88px] lg:pb-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Title & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-[540px]">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
                Connect With Us
              </span>
            </FadeUp>
            <FadeUp>
              <Typography variant="display" className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-foreground">
                {"Let's Start The Conversation"}
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography variant="body-large" className="text-[20px] md:text-[22px] leading-[1.7] text-muted-foreground/90 font-light">
                {"Whether you're exploring countries, comparing universities, or simply don't know where to begin, we're here to help. Every meaningful journey starts with a conversation."}
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
              <a href="tel:+912810000000" className="focus-visible:outline-none">
                <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                  Call Us
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
                </Button>
              </a>
            </FadeUp>
          </div>

          {/* Right Column: Office Vector Placeholder */}
          <div className="lg:col-span-6 w-full flex items-stretch">
            <HomePlaceholder
              label="Academy Entrance Lobby [Photo Placeholder]"
              aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
              className="shadow-premium-card"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 2: VISIT OUR OFFICE (6 parameter cards) */}
      <Section id="connect-office" variant="standard" className="bg-rhythm border-t border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Visit Our Counseling Space
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"We have built a quiet, focused environment in Rajkot, Gujarat where students and parents can discuss goals comfortably."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
            {[
              { title: "Office Address", desc: "[Real Address Line Placeholder], Rajkot, Gujarat, India.", icon: <MapPin className="size-5" /> },
              { title: "Business Hours", desc: "Monday to Saturday: 10:00 AM – 6:30 PM. Closed on Sundays.", icon: <Clock className="size-5" /> },
              { title: "Walk-in Friendly", desc: "Walk in during open hours. Reception will guide you.", icon: <Users className="size-5" /> },
              { title: "Private Counseling Cabin", desc: "Quiet glass and wood cabins for focused profile evaluations.", icon: <Shield className="size-5" /> },
              { title: "Comfortable Waiting Area", desc: "Comfortable lounge for parents and student alignment.", icon: <HeartHandshake className="size-5" /> },
              { title: "Direct Mentorship Vows", desc: "Speak directly to your actual counselors, never sales executives.", icon: <UserCheck className="size-5" /> },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                  <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                    {item.icon}
                  </div>
                  <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                    {item.title}
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                    {item.desc}
                  </Typography>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* SECTION 3: FIND US (Full Width Map with Floating Office Card) */}
      <Section id="connect-map" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="max-w-6xl mx-auto space-y-8 flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Find Us In Rajkot
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Centrally located and easily accessible from all main transit lines."}
            </Typography>
          </div>

          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl border border-[rgba(15,23,42,0.08)] bg-rhythm relative overflow-hidden flex items-center justify-center">
            {/* Custom SVG abstract map background */}
            <svg className="absolute inset-0 w-full h-full text-foreground/[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1200 450">
              <path stroke="currentColor" strokeWidth="1" d="M0 100h1200M0 250h1200M0 400h1200M150 0v450M350 0v450M650 0v450M950 0v450" />
              <path stroke="currentColor" strokeWidth="2" d="M150 100l200 150M650 250l300-150" className="text-primary/20" />
              <circle cx="350" cy="250" r="8" fill="currentColor" className="text-primary animate-pulse" />
            </svg>

            {/* Floating absolute-positioned address card */}
            <div className="z-10 bg-card border border-[rgba(15,23,42,0.08)] p-8 rounded-2xl shadow-premium-card max-w-sm w-full md:absolute md:top-8 md:left-8 text-left space-y-4">
              <div className="space-y-1">
                <Typography variant="label" className="text-primary font-bold uppercase tracking-wider block">
                  Grade Scale Academy
                </Typography>
                <Typography variant="body" className="text-xs text-muted-foreground font-light leading-relaxed">
                  {"[Real Address Line Placeholder], near [Landmark Placeholder], Rajkot, Gujarat, India."}
                </Typography>
              </div>

              <div className="space-y-2 pt-2 border-t border-[rgba(15,23,42,0.05)] text-xs text-foreground/80">
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5 text-muted-foreground" />
                  <span>{"Mon – Sat: 10:00 AM – 6:30 PM"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 text-muted-foreground" />
                  <span>{"+91 [Phone Number Placeholder]"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="size-3.5 text-muted-foreground" />
                  <span>{"Dedicated two-wheeler and visitor parking"}</span>
                </div>
              </div>

              <div className="pt-2">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none w-full block">
                  <Button variant="primary" className="w-full text-xs rounded-full py-2 h-9">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: WAYS TO REACH US (4 communication cards) */}
      <Section id="connect-channels" variant="standard" className="bg-rhythm border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Ways To Reach Us
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Reach out online or coordinate quick conversations before your visit."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
            {/* Phone */}
            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="space-y-4">
                  <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                    Phone Call
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                    {"Call us during business hours for quick checks and directions support."}
                  </Typography>
                </div>
                <div className="pt-6 border-t border-[rgba(15,23,42,0.05)] mt-6">
                  <a href="tel:+912810000000" className="focus-visible:outline-none w-full block">
                    <Button variant="outline" className="w-full text-xs rounded-full py-2 h-9">
                      Call Support
                    </Button>
                  </a>
                </div>
              </Card>
            </StaggerItem>

            {/* Email */}
            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="space-y-4">
                  <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                    Email Support
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                    {"Send us your academic transcripts and list of target course modules."}
                  </Typography>
                </div>
                <div className="pt-6 border-t border-[rgba(15,23,42,0.05)] mt-6">
                  <a href="mailto:info@gradescaleacademy.com" className="focus-visible:outline-none w-full block">
                    <Button variant="outline" className="w-full text-xs rounded-full py-2 h-9">
                      Email Us
                    </Button>
                  </a>
                </div>
              </Card>
            </StaggerItem>

            {/* Instagram */}
            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="space-y-4">
                  <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                    Instagram
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                    {"Check out our current academy events, test results, and student diaries."}
                  </Typography>
                </div>
                <div className="pt-6 border-t border-[rgba(15,23,42,0.05)] mt-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none w-full block">
                    <Button variant="outline" className="w-full text-xs rounded-full py-2 h-9">
                      Explore Profile
                    </Button>
                  </a>
                </div>
              </Card>
            </StaggerItem>

            {/* WhatsApp */}
            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="space-y-4">
                  <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                    <MessageCircle className="size-5" />
                  </div>
                  <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                    WhatsApp Chat
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                    {"Chat directly for quick clarifications or booking coordinator schedules."}
                  </Typography>
                </div>
                <div className="pt-6 border-t border-[rgba(15,23,42,0.05)] mt-6">
                  <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none w-full block">
                    <Button variant="outline" className="w-full text-xs rounded-full py-2 h-9">
                      Chat Now
                    </Button>
                  </a>
                </div>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* SECTION 5: BEFORE YOU VISIT (Expectations Checklist) */}
      <Section id="connect-expect" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Placement */}
          <div className="lg:col-span-6 w-full flex items-stretch order-last lg:order-first">
            <HomePlaceholder
              label="Counseling Classroom Setup [Photo Placeholder]"
              aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
              className="shadow-premium-card"
            />
          </div>

          {/* Right Column: Expectation Checkpoints */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-[540px] ml-auto">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-secondary/30 text-secondary-foreground border border-[rgba(15,23,42,0.08)] select-none">
                What to Expect
              </span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-[40px] leading-[1.1] font-heading font-semibold text-foreground">
              What To Expect During Your Session
            </Typography>
            <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 font-light block">
              {"We want counseling sessions to be transparent and stress-free for families. Here is how we manage our face-to-face evaluations."}
            </Typography>

            <ul className="space-y-4 pt-4 border-t border-[rgba(15,23,42,0.06)]">
              {[
                "Closed cabin one-to-one discussions with your lead counselor.",
                "Detailed overview of suitable pathways based solely on credentials.",
                "Open cost and tuition reviews with parent coordination.",
                "Absolutely no pressure to decide or enroll immediately."
              ].map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5 text-sm text-foreground/80 font-light">
                  <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (Accordion) */}
      <Section id="connect-faq" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Common questions about office visits and initial preparations."}
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

      {/* SECTION 7: OFFICE GALLERY (6 Placeholders) */}
      <Section id="connect-gallery" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Inside Our Counseling Space
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Take a look around our classrooms and private counseling cabins in Rajkot."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
            {[
              { title: "Reception Lobby", label: "Front reception desk and coordinate lounge area" },
              { title: "Counseling Cabin", label: "Private glass and wood counseling cabins" },
              { title: "IELTS Classroom", label: "Quiet IELTS & PTE exam preparation classrooms" },
              { title: "Discussion Space", label: "Open study tables for student coordination" },
              { title: "Academy Exterior", label: "Entrance storefront and visitor parking access" },
              { title: "Resource Library", label: "Study materials and visa guide bookshelves" },
            ].map((img, idx) => (
              <Card key={idx} className="rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-6 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <HomePlaceholder
                  label={`${img.title} [Photo Placeholder]`}
                  aspectRatio="aspect-[4/3] w-full"
                  className="rounded-2xl"
                />
                <div className="space-y-1 text-left">
                  <Typography variant="h3" className="font-heading font-semibold text-lg">
                    {img.title}
                  </Typography>
                  <Typography variant="body" className="text-xs text-muted-foreground leading-relaxed font-light">
                    {img.label}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 8: FINAL CTA */}
      <Section id="connect-final-cta" variant="standard" className="bg-white py-[88px] lg:py-[112px]">
        <div className="w-full max-w-5xl mx-auto rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-10 md:p-16 lg:p-20 shadow-premium-card text-center flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 max-w-2xl flex flex-col items-center">
            <Typography variant="h2" className="text-3xl md:text-[56px] leading-[1.08] font-heading font-semibold text-foreground text-center">
              {"Ready To Take The First Step?"}
            </Typography>
            <Typography variant="body-large" className="text-[20px] leading-[1.8] text-muted-foreground/95 max-w-xl mx-auto font-light text-center">
              {"Visit us, call us, or request a consultation online. We're here whenever you're ready."}
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
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none">
              <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                Get Directions
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}
