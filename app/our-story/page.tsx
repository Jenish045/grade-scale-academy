import { Metadata } from "next"
import Link from "next/link"
import { 
  Shield, 
  UserCheck, 
  HeartHandshake, 
  Compass, 
  TrendingUp, 
  Smile,
  GraduationCap,
  Sparkles,
  BookOpen
} from "lucide-react"

import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animation"
import { HomePlaceholder } from "@/features/home/components/HomePlaceholder"

export const metadata: Metadata = {
  title: "Our Story | Grade Scale Academy",
  description: "Learn why Grade Scale Academy was founded, the values that guide us, and how we help students make informed decisions about studying abroad.",
}

export default function OurStoryPage() {
  return (
    <div className="bg-background min-h-screen pt-4">
      {/* SECTION 1: HERO (Strictly Centered) */}
      <Section id="story-hero" variant="standard" className="bg-white pb-[88px] lg:pb-[112px]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 max-w-3xl flex flex-col items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
                Our Narrative
              </span>
            </FadeUp>
            <FadeUp>
              <Typography variant="display" className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-foreground text-center">
                {"Every Student Deserves Advice They Can Trust."}
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography variant="body-large" className="text-[20px] md:text-[22px] leading-[1.7] text-muted-foreground/90 font-light text-center max-w-2xl">
                {"At Grade Scale Academy, our journey began with a simple belief: students deserve guidance that puts their future before everything else."}
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
              <Link href="/how-we-help" className="focus-visible:outline-none">
                <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                  Explore How We Help
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
                </Button>
              </Link>
            </FadeUp>
          </div>

          {/* Large Image Placeholder */}
          <FadeUp className="pt-6 w-full">
            <HomePlaceholder
              label="Founder Interacting with Students [Photo Placeholder]"
              aspectRatio="aspect-[16/9] w-full"
              className="shadow-premium-card"
            />
          </FadeUp>
        </div>
      </Section>

      {/* SECTION 2: WHY WE STARTED (Narrative Flow, Origin) */}
      <Section id="story-why-started" variant="standard" className="bg-rhythm border-t border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Origin Story Text */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-[540px]">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-secondary/30 text-secondary-foreground border border-[rgba(15,23,42,0.08)] select-none">
                Why We Started
              </span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-[40px] leading-[1.1] font-heading font-semibold text-foreground">
              Bringing Honesty Back to Counseling
            </Typography>
            <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 font-light block">
              {"Our founder comes from a teaching background. For him, education has always been about helping students succeed by identifying their strengths and working patiently to build their skills."}
            </Typography>
            <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 font-light block">
              {"While tutoring students preparing for tests in Rajkot, he noticed a concerning pattern: many critical decisions regarding study destinations and universities were heavily influenced by external business interests rather than student capabilities. Important choices were being guided by transactions rather than outcomes."}
            </Typography>
            <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/90 font-light block">
              {"Grade Scale Academy was established to provide a transparent alternative. We wanted to build a place where guidance is honest, profiling is objective, and long-term career fits come before all else."}
            </Typography>
          </div>

          {/* Right Column: Origin Image Placeholder */}
          <div className="lg:col-span-6 w-full flex items-stretch">
            <HomePlaceholder
              label="Student Vetting Sessions [Photo Placeholder]"
              aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
              className="shadow-premium-card"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 3: THE PROBLEM WE SAW (Centered Header, 4 Cards Aligned) */}
      <Section id="story-problem" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Gaps in the Journey
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center">
              {"Navigating overseas education can feel overwhelming. Here are the core challenges students and parents commonly face when seeking advice."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full">
            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-destructive/5 text-destructive flex items-center justify-center border border-destructive/10 shrink-0">
                  <BookOpen className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Information Overload
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"Sifting through thousands of programs, admission portals, and conflicting visa guidelines alone can quickly become confusing."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-destructive/5 text-destructive flex items-center justify-center border border-destructive/10 shrink-0">
                  <Shield className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Uncertain Advice
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"It is difficult for students to know whether a recommended university matches their goals or simply serves an agent's benefits."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-destructive/5 text-destructive flex items-center justify-center border border-destructive/10 shrink-0">
                  <TrendingUp className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Financial Risks
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"Applying abroad represents a significant family investment. Students fear making costly mistakes with their academic planning."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-destructive/5 text-destructive flex items-center justify-center border border-destructive/10 shrink-0">
                  <Smile className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Safety & Integration
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"Parents worry deeply about their child's safety, post-study work routes, and landing integration support in a new country."}
                </Typography>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* SECTION 4: HOW WE WORK DIFFERENTLY (Split Layout, Philosophy details) */}
      <Section id="story-different" variant="standard" className="bg-rhythm border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Placeholder */}
          <div className="lg:col-span-6 w-full flex items-stretch order-last lg:order-first">
            <HomePlaceholder
              label="Counseling Classroom Setup [Photo Placeholder]"
              aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
              className="shadow-premium-card"
            />
          </div>

          {/* Right Column: How We Work */}
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

      {/* SECTION 5: OUR CORE VALUES (Centered Header, 4 Cards Aligned) */}
      <Section id="story-values" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Values That Guide Us
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center">
              {"Every consultation, review, and recommendation we deliver is anchored in these ethical principles."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full">
            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  <Shield className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Integrity First
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"We provide absolute clarity regarding eligibility parameters and visa guidelines. We never compromise on honest file vetting."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  <UserCheck className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Personal Guidance
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"You work directly with experienced academic mentors, receiving detailed, one-to-one feedback on your preparation and essays."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  <HeartHandshake className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Long-Term Care
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"We measure success by your long-term compatibility and growth abroad, remaining your trusted mentor throughout your career."}
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  <Compass className="size-5" />
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  Continual Vetting
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"We keep our team updated on changing university requirements, course pathways, and visa routes to ensure accurate advice."}
                </Typography>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* SECTION 6 & 7: MISSION & VISION (Presented Side-by-Side inside a single centered section) */}
      <Section id="story-mission-vision" variant="standard" className="bg-rhythm border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Mission Card */}
          <div className="bg-card border border-[rgba(15,23,42,0.08)] rounded-[32px] p-10 md:p-12 space-y-4 shadow-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
              <GraduationCap className="size-3.5" />
              Our Mission
            </span>
            <Typography variant="h3" className="font-heading font-semibold text-2xl">
              Ethical Profile Vetting
            </Typography>
            <Typography variant="body" className="text-[16px] leading-[1.8] text-muted-foreground/90 font-light block">
              {"To provide transparent, profile-first academic preparation and mentoring that empowers students to make informed, realistic international education choices."}
            </Typography>
          </div>

          {/* Vision Card */}
          <div className="bg-card border border-[rgba(15,23,42,0.08)] rounded-[32px] p-10 md:p-12 space-y-4 shadow-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.08em] uppercase bg-secondary/30 text-secondary-foreground border border-[rgba(15,23,42,0.08)] select-none">
              <Sparkles className="size-3.5" />
              Our Vision
            </span>
            <Typography variant="h3" className="font-heading font-semibold text-2xl">
              Global Careers Outcome
            </Typography>
            <Typography variant="body" className="text-[16px] leading-[1.8] text-muted-foreground/90 font-light block">
              {"A future where every student embarks on their overseas journey with absolute clarity, absolute confidence, and the practical skills to build a successful global career."}
            </Typography>
          </div>
        </div>
      </Section>

      {/* SECTION 8: FOUNDER NOTE (Split Layout: Portrait left, handwritten letter style right) */}
      <Section id="story-founder-note" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Portrait Avatar Placeholder */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HomePlaceholder
              label="Founder Portrait [Photo Placeholder]"
              aspectRatio="aspect-[3/4] max-w-sm w-full"
              className="shadow-premium-card"
            />
          </div>

          {/* Right Column: Warm Bio & Handwritten style Letter */}
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
              <Typography variant="small" className="text-xs text-muted-foreground block">
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

      {/* SECTION 9: FINAL CTA (Strictly Centered Card) */}
      <Section id="story-final-cta" variant="standard" className="bg-white py-[88px] lg:py-[112px]">
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
    </div>
  )
}
