"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Compass, 
  ChevronDown,
  CheckCircle2,
  FileText,
  Globe,
  MessageSquare,
  UserCheck,
  HeartHandshake,
  Shield
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animation"
import { HomePlaceholder } from "@/features/home/components/HomePlaceholder"

interface TimelineStage {
  stage: string
  title: string
  desc: string
  icon: React.ReactNode
}

interface NarrativeStory {
  student: string
  course: string
  country: string
  challenge: string
  decision: string
  outcome: string
  lesson: string
}

interface StudentPlaceholder {
  name: string
  destination: string
  course: string
  university: string
  status: "Studying" | "Graduated" | "Working" | "Alumni"
}

interface FAQItem {
  question: string
  answer: string
}

export default function StudentJourneysPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

  const timelineStages: TimelineStage[] = [
    {
      stage: "Stage 01",
      title: "First Conversation",
      desc: "We begin with a conversation to understand your long-term career goals and preferences.",
      icon: <MessageSquare className="size-5" />,
    },
    {
      stage: "Stage 02",
      title: "Profile Evaluation",
      desc: "An objective review of your academic strengths, test preparation requirements, and interests.",
      icon: <UserCheck className="size-5" />,
    },
    {
      stage: "Stage 03",
      title: "Country & University Selection",
      desc: "Shortlisting destinations and universities that fit your profile and family budgets.",
      icon: <Compass className="size-5" />,
    },
    {
      stage: "Stage 04",
      title: "Application Preparation",
      desc: "Assembling recommendation letters, editing statement essays, and managing applications.",
      icon: <FileText className="size-5" />,
    },
    {
      stage: "Stage 05",
      title: "Visa Guidance",
      desc: "Vetting file documentation and conducting simulated consulate mock interviews.",
      icon: <Shield className="size-5" />
    },
    {
      stage: "Stage 06",
      title: "Departure Preparation",
      desc: "Briefing sessions on travel rules, student visa restrictions, and local accommodation options.",
      icon: <HeartHandshake className="size-5" />,
    },
    {
      stage: "Stage 07",
      title: "Beginning A New Chapter",
      desc: "Students arrive at their campus and start their international education journey.",
      icon: <Globe className="size-5" />,
    },
  ]

  const stories: NarrativeStory[] = [
    {
      student: "Aarav P.",
      course: "MS in Computer Science (AI Track)",
      country: "United States",
      challenge: "Unsure how to choose between general computing courses and specialized AI research programs.",
      decision: "Focused on universities offering active research labs and interdisciplinary data sciences major credits.",
      outcome: "Secured admission to a respected technical program with access to hands-on AI research groups.",
      lesson: "Research compatibility is more valuable than generalized university rankings.",
    },
    {
      student: "Priya S.",
      course: "Bachelor of Business (Marketing)",
      country: "Australia",
      challenge: "Comparing options across three destinations while managing family budget parameters.",
      decision: "Selected a destination offering integrated internship credits and post-study work permit paths.",
      outcome: "Enrolled in a business program in Melbourne, allowing practical marketing internship exposure.",
      lesson: "Post-study work rules and local industry access are critical for career starts.",
    },
    {
      student: "Rohan M.",
      course: "MBA (Supply Chain)",
      country: "United Kingdom",
      challenge: "Transitioning from engineering roles to business management after three years of work experience.",
      decision: "Applied to accelerated one-year programs to minimize career gap and resume work quickly.",
      outcome: "Secured a supply chain specialization in London, transitioning to logistics advisory roles.",
      lesson: "Accelerated degree structures are ideal for experienced professionals managing career breaks.",
    },
    {
      student: "Ananya J.",
      course: "MA in Sustainable Architecture",
      country: "Europe",
      challenge: "Seeking international exposure across multiple countries with affordable tuition structures.",
      decision: "Chose a collaborative European program offering split-term modules in Milan and Barcelona.",
      outcome: "Participated in design projects in two separate European cities with local architectural focus.",
      lesson: "Affordable tuition settings can offer premium, diverse cultural learning environments.",
    },
  ]

  const parentQuotes = [
    { quote: "We finally understood every step.", context: "Parent of a graduate studying in Canada" },
    { quote: "We never felt pressured.", context: "Parent of a student preparing for the US intake" },
    { quote: "Our questions were always answered.", context: "Parent of a postgrad student in Australia" },
    { quote: "The process became much less stressful.", context: "Parent of a business student in the UK" },
  ]

  const studentWall: StudentPlaceholder[] = [
    { name: "Aarav P.", destination: "Canada", course: "MS in Computer Science", university: "University of Toronto", status: "Studying" },
    { name: "Priya S.", destination: "Australia", course: "Bachelor of Business", university: "University of Melbourne", status: "Alumni" },
    { name: "Rohan M.", destination: "United Kingdom", course: "MBA", university: "London Business School", status: "Working" },
    { name: "Ananya J.", destination: "United States", course: "PhD in Robotics", university: "Carnegie Mellon", status: "Studying" },
    { name: "Kabir V.", destination: "Europe", course: "MA in Architecture", university: "Politecnico di Milano", status: "Graduated" },
    { name: "Diya S.", destination: "Japan", course: "BS in Robotics", university: "University of Tokyo", status: "Studying" },
  ]

  const faqs: FAQItem[] = [
    {
      question: "How long does the admission and application process typically take?",
      answer: "The entire process—from initial profile evaluation to university submission—takes approximately 3 to 6 months. Starting early ensures ample time for Statement of Purpose (SOP) manual editing and visa filing.",
    },
    {
      question: "Can I apply to multiple countries simultaneously?",
      answer: "Yes. Shortlisting multi-destination programs is common. We help you prepare separate application files to keep options open while university offers are evaluated.",
    },
    {
      question: "Will you guide my parents throughout the counseling sessions?",
      answer: "Absolutely. We encourage parents to participate in all key meetings. Budget planning, financial bank check parameters, and travel arrangements are discussed openly with families.",
    },
    {
      question: "Do you continue helping students after university admissions are secured?",
      answer: "Yes, our guidance continues. We help with pre-departure travel checklists, accommodation search guidelines, and connecting students with active GSA alumni.",
    },
    {
      question: "Can I revisit my counseling sessions if I need to adjust my plans?",
      answer: "Yes, you can request adjustment sessions anytime before the final application files are submitted to the university portals.",
    },
  ]

  const statusStyles = {
    Studying: "bg-primary/5 text-primary border-primary/10",
    Graduated: "bg-success/5 text-success border-success/10",
    Working: "bg-accent/10 text-accent-foreground border-accent/20",
    Alumni: "bg-secondary/30 text-secondary-foreground border-secondary/40",
  }

  return (
    <div className="bg-background min-h-screen pt-4">
      {/* SECTION 1: HERO (Centered) */}
      <Section id="journeys-hero" variant="standard" className="bg-white pb-[88px] lg:pb-[112px]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
          <div className="space-y-6 max-w-3xl flex flex-col items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
                Student Success Stories
              </span>
            </FadeUp>
            <FadeUp>
              <Typography variant="display" className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-foreground text-center">
                {"Every Journey Begins With One Conversation"}
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography variant="body-large" className="text-[20px] md:text-[22px] leading-[1.7] text-muted-foreground/90 font-light text-center max-w-2xl">
                {"Behind every university admission is a student who trusted their future to careful guidance, honest advice, and thoughtful planning. We are proud to be part of those journeys."}
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

          <FadeUp className="pt-6 w-full">
            <div className="w-full max-w-3xl aspect-[16/9] bg-rhythm rounded-3xl border border-[rgba(15,23,42,0.08)] flex items-center justify-center relative p-6">
              <svg className="absolute inset-0 w-full h-full text-foreground/[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 450">
                <path stroke="currentColor" strokeWidth="1" d="M100 225c150-100 250 100 400 0s150-100 200 0" strokeDasharray="5,5" />
                <circle cx="100" cy="225" r="5" fill="currentColor" className="text-primary" />
                <circle cx="250" cy="150" r="5" fill="currentColor" className="text-primary" />
                <circle cx="500" cy="300" r="5" fill="currentColor" className="text-primary" />
                <circle cx="700" cy="225" r="5" fill="currentColor" className="text-primary" />
              </svg>
              <div className="z-10 text-center space-y-2 pointer-events-none select-none">
                <Compass className="size-10 text-primary/40 mx-auto" />
                <span className="text-[10px] tracking-[0.2em] font-bold text-foreground/35 uppercase block">Pathways Roadmap Mapping</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* SECTION 2: THE STUDENT JOURNEY TIMELINE (Vertical Timeline) */}
      <Section id="journeys-timeline" variant="standard" className="bg-rhythm border-t border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Journey Timeline
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"How we work systematically with students from initial intake to global campus arrival."}
            </Typography>
          </div>

          <div className="relative border-l border-[rgba(15,23,42,0.08)] pl-8 md:pl-12 ml-4 md:ml-6 space-y-12">
            {timelineStages.map((stage, idx) => (
              <div key={idx} className="relative group/timeline">
                {/* Visual marker dot */}
                <div className="absolute top-1.5 -left-[41px] md:-left-[57px] size-6 md:size-8 rounded-full bg-primary border-4 border-white flex items-center justify-center text-white shadow-xs z-10">
                  {stage.icon}
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4">
                    <Typography variant="h3" className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                      {stage.title}
                    </Typography>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary/80 bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10 self-start md:self-auto">
                      {stage.stage}
                    </span>
                  </div>

                  <Typography variant="body" className="text-[16px] leading-[1.8] text-muted-foreground/90 font-light block">
                    {stage.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 3: SUCCESS MEANS DIFFERENT THINGS (6 Cards) */}
      <Section id="journeys-success" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Success Looks Different For Every Student
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"We measure outcomes through qualitative milestones rather than university statistics or placement metrics."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full">
            {[
              { title: "Securing Admissions", desc: "Finding programs that match your academic history." },
              { title: "Choosing The Right Fit", desc: "Selecting a university that serves your specific learning style." },
              { title: "Building Confidence", desc: "Feeling prepared and ready for your course studies." },
              { title: "Parental Reassurance", desc: "Aligning budgets, safety concerns, and immigration steps." },
              { title: "Postgrad Employability", desc: "Aligning study locations with genuine career markets." },
              { title: "Finding Belonging", desc: "Entering an environment where you can thive, grow, and settle." },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                  <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                    <CheckCircle2 className="size-5" />
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

      {/* SECTION 4: JOURNEY STORIES (4 Narrative cards) */}
      <Section id="journeys-stories" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Student Success Stories
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Read how GSA helped students choose destinations based on academic capability and goals."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 w-full items-stretch">
            {stories.map((story, idx) => (
              <Card key={idx} className="rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-8 md:p-10 flex flex-col justify-between shadow-xs h-full">
                <div className="space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <Typography variant="h3" className="font-heading font-semibold text-xl">
                        {story.student}
                      </Typography>
                      <Typography variant="small" className="text-xs text-muted-foreground font-light block">
                        {story.course}
                      </Typography>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                      {story.country}
                    </span>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[rgba(15,23,42,0.05)] text-left text-sm leading-relaxed">
                    <div>
                      <span className="font-semibold text-foreground block mb-1">Challenge</span>
                      <Typography variant="body" className="text-sm text-muted-foreground font-light">
                        {story.challenge}
                      </Typography>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block mb-1">Decision</span>
                      <Typography variant="body" className="text-sm text-muted-foreground font-light">
                        {story.decision}
                      </Typography>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block mb-1">Outcome</span>
                      <Typography variant="body" className="text-sm text-muted-foreground font-light">
                        {story.outcome}
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[rgba(15,23,42,0.05)] mt-6 text-xs text-primary italic font-medium">
                  {"Lesson: "}{story.lesson}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 5: WHAT PARENTS OFTEN TELL US (4 quote cards) */}
      <Section id="journeys-parents" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-12 max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              What Parents Often Tell Us
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Open coordination and budget transparency make the transition stress-free for families."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
            {parentQuotes.map((item, idx) => (
              <Card key={idx} className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between space-y-6 shadow-xs h-full">
                <div className="space-y-4 text-foreground/90 font-serif text-[18px] md:text-[20px] leading-relaxed italic font-light">
                  {`"${item.quote}"`}
                </div>
                <div className="pt-4 border-t border-[rgba(15,23,42,0.05)] text-xs text-muted-foreground font-light">
                  {item.context}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6: STUDENT PHOTO WALL (6 placeholders, status badges) */}
      <Section id="journeys-wall" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Our Alumni Grid
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Future-proof profiles of GSA students studying and working across supported international universities."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-stretch">
            {studentWall.map((student, idx) => (
              <Card key={idx} className="rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="space-y-6">
                  {/* Portrait Placeholder Grid */}
                  <HomePlaceholder 
                    label="Student Portrait [Placeholder]" 
                    aspectRatio="aspect-[4/3] w-full"
                    className="rounded-2xl"
                  />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-4">
                      <Typography variant="h3" className="font-heading font-semibold text-lg">
                        {student.name}
                      </Typography>
                      <span className={cn(
                        "text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border select-none",
                        statusStyles[student.status]
                      )}>
                        {student.status}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs leading-relaxed text-muted-foreground">
                      <div>
                        <span className="font-semibold text-foreground">Course: </span>
                        <span>{student.course}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">University: </span>
                        <span>{student.university}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Destination: </span>
                        <span>{student.destination}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 7: JOURNEY MAP (Horizontal Steps Path) */}
      <Section id="journeys-map" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Step-by-Step Pathway
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Our pathway mapping organizes the preparation and admissions sequence from initial dream to career transition."}
            </Typography>
          </div>

          <div className="relative w-full">
            {/* Desktop timeline horizontal line */}
            <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-0.5 bg-[rgba(15,23,42,0.08)] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4 text-center md:text-left lg:text-center items-start">
              {[
                { title: "Dream", desc: "Setting course goals." },
                { title: "Consultation", desc: "Reviewing parameters." },
                { title: "Planning", desc: "Shortlisting courses." },
                { title: "Applications", desc: "Submitting materials." },
                { title: "Visa Vetting", desc: "Filing visa packages." },
                { title: "Departure", desc: "Transition briefing." },
                { title: "Career", desc: "Beginning global work." },
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

      {/* SECTION 8: FINAL CTA BANNER (Centered Card) */}
      <Section id="journeys-final-cta" variant="cta" className="bg-white">
        <div className="w-full max-w-5xl mx-auto rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-10 md:p-16 lg:p-20 shadow-premium-card text-center flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 max-w-2xl flex flex-col items-center">
            <Typography variant="h2" className="text-3xl md:text-[56px] leading-[1.08] font-heading font-semibold text-foreground text-center">
              {"Your Story Could Be The Next One We Celebrate"}
            </Typography>
            <Typography variant="body-large" className="text-[20px] leading-[1.8] text-muted-foreground/95 max-w-xl mx-auto font-light text-center">
              {"Let's begin with a simple conversation about your future."}
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
                Study Destinations
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS (Accordion) */}
      <Section id="journeys-faq" variant="standard" className="bg-rhythm border-t border-[rgba(15,23,42,0.08)] pb-[56px]">
        <div className="space-y-16 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Common questions about our matching and shortlisting processes."}
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
