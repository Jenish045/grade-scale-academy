"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Compass, 
  ChevronDown,
  GraduationCap,
  Users,
  FileText,
  Globe,
  TrendingUp,
  BookOpen,
  Heart,
  Info
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animation"

interface CountryProfile {
  name: string
  overview: string
  idealFor: string
  fields: string[]
  learning: string
  lifestyle: string
}

interface FAQItem {
  question: string
  answer: string
}

interface ComparisonRow {
  destination: string
  bestFor: string
  learningStyle: string
  fields: string
  career: string
  lifestyle: string
}

export default function StudyDestinationsPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

  const countries: CountryProfile[] = [
    {
      name: "Australia",
      overview: "A leading destination for practical, industry-aligned higher education with strong career opportunities.",
      idealFor: "Career-focused students seeking practical education.",
      fields: ["Engineering", "IT", "Healthcare", "Business"],
      learning: "Industry integrated, research focused",
      lifestyle: "Balanced, outdoor, multicultural",
    },
    {
      name: "New Zealand",
      overview: "Renowned for its safe, peaceful environment and hands-on, innovation-driven study modules.",
      idealFor: "Students looking for quality education in a peaceful environment.",
      fields: ["Agriculture", "Business", "Hospitality", "Engineering"],
      learning: "Practical, interactive learning formats",
      lifestyle: "Relaxed, nature-oriented, community focused",
    },
    {
      name: "United Kingdom",
      overview: "Home to historic institutions and accelerated undergraduate and postgraduate degree pathways.",
      idealFor: "Students seeking historic universities and accelerated degree pathways.",
      fields: ["Business", "Law", "Finance", "Arts"],
      learning: "Academic, highly research-driven",
      lifestyle: "Urban, international, rich heritage",
    },
    {
      name: "United States",
      overview: "The global hub for flexible academic course choices, research infrastructure, and technical innovation.",
      idealFor: "Students seeking flexibility and research opportunities.",
      fields: ["Computer Science", "AI", "Engineering", "Business"],
      learning: "Flexible major choices, innovation driven",
      lifestyle: "Highly diverse, campus focused",
    },
    {
      name: "Canada",
      overview: "Offers balanced academic degrees, diverse college diplomas, and welcoming settlement policies.",
      idealFor: "Students seeking balanced education and career pathways.",
      fields: ["Engineering", "Healthcare", "Business", "Technology"],
      learning: "Practical, highly career oriented",
      lifestyle: "Welcoming, multicultural, community oriented",
    },
    {
      name: "Europe",
      overview: "Provides specialized research programs, multilingual settings, and highly affordable tuition programs.",
      idealFor: "Students interested in international exposure across multiple countries.",
      fields: ["Design", "Architecture", "Engineering", "Management"],
      learning: "International, collaborative projects",
      lifestyle: "Culturally diverse, historical backdrop",
    },
    {
      name: "Japan",
      overview: "Offers state-of-the-art technological curricula set against a highly disciplined academic culture.",
      idealFor: "Students interested in advanced technology and innovation.",
      fields: ["Robotics", "Engineering", "Automotive", "Research"],
      learning: "Highly disciplined, technology focused",
      lifestyle: "Safe, modern, culturally immersive",
    },
    {
      name: "South Korea",
      overview: "A fast-paced technical and cultural center, connecting academics directly with global tech giants.",
      idealFor: "Students interested in innovation and global industries.",
      fields: ["Technology", "Business", "Media", "Engineering"],
      learning: "Fast paced, industry connected",
      lifestyle: "Dynamic, modern, highly connected",
    },
    {
      name: "China",
      overview: "Provides massive scholarship infrastructures, emerging industrial links, and extensive medical programs.",
      idealFor: "Students seeking global exposure in one of the world's fastest growing economies.",
      fields: ["Medicine", "Business", "Engineering", "Language"],
      learning: "Research oriented, large scale classrooms",
      lifestyle: "Urban, international, fast evolving",
    },
  ]

  const comparisons: ComparisonRow[] = [
    {
      destination: "Australia",
      bestFor: "Practical Career Options",
      learningStyle: "Industry Integrated",
      fields: "Engineering, IT, Healthcare",
      career: "Post-Study Work Pathways",
      lifestyle: "Balanced & Multicultural",
    },
    {
      destination: "New Zealand",
      bestFor: "Peaceful Environment",
      learningStyle: "Practical & Interactive",
      fields: "Agriculture, Hospitality",
      career: "Green List Shortlists",
      lifestyle: "Relaxed & Nature-Oriented",
    },
    {
      destination: "United Kingdom",
      bestFor: "Accelerated Degrees",
      learningStyle: "Research & Academic",
      fields: "Business, Finance, Law",
      career: "Graduate Visa Route",
      lifestyle: "Urban & Rich Heritage",
    },
    {
      destination: "United States",
      bestFor: "Academic Flexibility",
      learningStyle: "Flexible & Innovation-Led",
      fields: "AI, STEM, Computer Science",
      career: "OPT Period Alignments",
      lifestyle: "Highly Diverse Campus Life",
    },
    {
      destination: "Canada",
      bestFor: "Balanced Options",
      learningStyle: "Career Oriented",
      fields: "Technology, Management",
      career: "PGWP Work Permits",
      lifestyle: "Welcoming & Inclusive",
    },
    {
      destination: "Europe",
      bestFor: "Affordable Curricula",
      learningStyle: "Collaborative Projects",
      fields: "Design, Architecture",
      career: "Schengen Area Access",
      lifestyle: "Culturally Diverse Backdrop",
    },
    {
      destination: "Japan",
      bestFor: "Technical Research",
      learningStyle: "Disciplined & Lab-Focused",
      fields: "Robotics, Automotive",
      career: "Local Technology Placements",
      lifestyle: "Safe & Modern Cities",
    },
    {
      destination: "South Korea",
      bestFor: "Media & Emerging Tech",
      learningStyle: "Fast-Paced & Connected",
      fields: "Technology, Media",
      career: "Global Corporate Hubs",
      lifestyle: "Dynamic & Connected",
    },
    {
      destination: "China",
      bestFor: "Global Infrastructure",
      learningStyle: "Large-Scale Research",
      fields: "Medicine (MBBS), Business",
      career: "Direct Industrial Exposure",
      lifestyle: "Urban & Rapidly Evolving",
    },
  ]

  const faqs: FAQItem[] = [
    {
      question: "How do I know which study destination suits me best?",
      answer: "We recommend choosing a destination based on your academic credentials, test bands, budget, and long-term career aspirations. During your profile review session, we shortlist options side-by-side to find the ideal match.",
    },
    {
      question: "Can I apply to universities in different countries simultaneously?",
      answer: "Yes, you can apply to multiple countries at the same time. We help you prepare separate application files to keep your options open as universities release admissions.",
    },
    {
      question: "Do you help review country-specific visa criteria?",
      answer: "Yes, we provide detailed document checklists, verify your financial statements, and organize simulated consulate mock interviews for every supported country.",
    },
    {
      question: "Do university recommendations vary by intake season?",
      answer: "Yes. Different countries operate on varying academic cycles (e.g., September/January in the UK/US, or February/July in Australia/NZ). We align your preparation timeline with the most suitable intake.",
    },
    {
      question: "Are parent alignment sessions included in the shortlisting stage?",
      answer: "Absolutely. We encourage parents to join counseling sessions so we can address all queries regarding tuition fees, living costs, and student safety together.",
    },
  ]

  return (
    <div className="bg-background min-h-screen pt-4">
      {/* SECTION 1: HERO (Centered with Abstract SVG World Map Mesh) */}
      <Section id="destinations-hero" variant="standard" className="bg-white pb-[88px] lg:pb-[112px] relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 relative z-10">
          <div className="space-y-6 max-w-3xl flex flex-col items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
                Study Destinations
              </span>
            </FadeUp>
            <FadeUp>
              <Typography variant="display" className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-foreground text-center">
                {"Find The Country That Fits Your Future"}
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography variant="body-large" className="text-[20px] md:text-[22px] leading-[1.7] text-muted-foreground/90 font-light text-center max-w-2xl">
                {"Choosing a study destination isn't about following trends. It is about selecting a country that aligns with your ambitions, learning style, career aspirations, finances, and long-term goals."}
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
                  Explore Our Process
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
                </Button>
              </Link>
            </FadeUp>
          </div>

          {/* Abstract mesh map illustration (SVG mesh) */}
          <FadeUp className="w-full pt-6 flex justify-center">
            <div className="w-full max-w-3xl aspect-[16/9] bg-rhythm rounded-3xl border border-[rgba(15,23,42,0.08)] flex items-center justify-center relative p-6">
              <svg className="absolute inset-0 w-full h-full text-foreground/[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 450">
                <path stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" d="M100 100h600v250H100zM200 50v350M400 50v350M600 50v350M50 150h700M50 300h700" />
                <circle cx="200" cy="150" r="4" fill="currentColor" className="text-primary/40 animate-pulse" />
                <circle cx="400" cy="300" r="4" fill="currentColor" className="text-primary/40 animate-pulse" />
                <circle cx="600" cy="200" r="4" fill="currentColor" className="text-primary/40 animate-pulse" />
                <circle cx="300" cy="100" r="4" fill="currentColor" className="text-primary/40" />
                <circle cx="500" cy="350" r="4" fill="currentColor" className="text-primary/40" />
              </svg>
              <div className="z-10 text-center space-y-2 pointer-events-none select-none">
                <Globe className="size-10 text-primary/40 mx-auto animate-spin" style={{ animationDuration: "20s" }} />
                <span className="text-[10px] tracking-[0.2em] font-bold text-foreground/35 uppercase block">Global Interconnected Grid</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* SECTION 2: RECOMMENDATION PHILOSOPHY (Centered 8 cards grid) */}
      <Section id="destinations-philosophy" variant="standard" className="bg-rhythm border-t border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              We Recommend Futures, Not Countries
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"We do not steer choices based on popular trends or commissions. Every recommendation considers eight key parameters."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full">
            {[
              { title: "Career Aspirations", desc: "Long-term employment outcomes and industry growth paths.", icon: <TrendingUp className="size-5" /> },
              { title: "Academic Profile", desc: "Your GPA transcripts, credentials, and academic background.", icon: <GraduationCap className="size-5" /> },
              { title: "Learning Preferences", desc: "Choosing between research-driven, practical, or lab coursework.", icon: <BookOpen className="size-5" /> },
              { title: "Financial Planning", desc: "Tuition structures, living costs, and sponsorship vetting.", icon: <FileText className="size-5" /> },
              { title: "Settlement Goals", desc: "Post-study work permissions and local immigration routes.", icon: <Globe className="size-5" /> },
              { title: "Personal Interests", desc: "Matching programs directly with your intellectual interests.", icon: <Heart className="size-5" /> },
              { title: "Family Expectations", desc: "Parent coordination on budgets, loans, and timeline safety.", icon: <Users className="size-5" /> },
              { title: "Lifestyle Choices", desc: "Urban university hubs vs. relaxed, nature-oriented campus spaces.", icon: <Compass className="size-5" /> },
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

      {/* SECTION 3: THE COUNTRY SELECTION FRAMEWORK (Horizontal Timeline Layout) */}
      <Section id="destinations-framework" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              The Country Selection Framework
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"How we work systematically with students and parents to make structured destination choices."}
            </Typography>
          </div>

          <div className="relative w-full">
            {/* Desktop timeline horizontal line */}
            <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-0.5 bg-[rgba(15,23,42,0.08)] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 lg:gap-4 text-center md:text-left lg:text-center items-start">
              {[
                { title: "Career Goals", desc: "Defining target post-study career aims." },
                { title: "Academics", desc: "Reviewing grades and English scores." },
                { title: "Financials", desc: "Setting budget ranges and loan limits." },
                { title: "Learning Style", desc: "Choosing project vs. exam assessments." },
                { title: "Lifestyles", desc: "Selecting campus environments." },
                { title: "Visa Checks", desc: "Verifying document probabilities." },
                { title: "Opportunities", desc: "Reviewing graduate work policies." },
                { title: "Shortlist", desc: "Delivering the university recommendations." },
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

      {/* SECTION 4: EXPLORE STUDY DESTINATIONS (9 Editorial Profiles) */}
      <Section id="destinations-explore" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Destination Profiles
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Explore the unique academic environments, popular study areas, and lifestyles of each supported country."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full items-stretch">
            {countries.map((country, idx) => (
              <StaggerItem key={idx}>
                <Card className="rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Typography variant="h3" className="font-heading font-semibold text-2xl md:text-3xl">
                        {country.name}
                      </Typography>
                      <Typography variant="body" className="text-[15px] leading-relaxed text-muted-foreground font-light">
                        {country.overview}
                      </Typography>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-[rgba(15,23,42,0.06)] text-left">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block mb-1">
                          Ideal For
                        </span>
                        <span className="text-[15px] font-semibold text-foreground">
                          {country.idealFor}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block mb-1.5">
                          Popular Study Areas
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {country.fields.map((f, fIdx) => (
                            <span key={fIdx} className="bg-rhythm border border-[rgba(15,23,42,0.04)] px-2.5 py-1 rounded-md text-[12px] text-foreground font-medium">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block mb-1">
                          Learning Environment
                        </span>
                        <span className="text-[14px] text-foreground/90 font-light">
                          {country.learning}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block mb-1">
                          Student Lifestyle
                        </span>
                        <span className="text-[14px] text-foreground/90 font-light">
                          {country.lifestyle}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[rgba(15,23,42,0.06)] mt-6">
                    <Link href="/consultation" className="focus-visible:outline-none">
                      <Button variant="outline" className="w-full rounded-full text-xs py-2 h-9">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* SECTION 5: DESTINATION COMPARISON (Qualitative Table) */}
      <Section id="destinations-comparison" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Qualitative Comparison
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"A side-by-side comparison of destinations based on qualitative parameters."}
            </Typography>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block w-full overflow-x-auto border border-[rgba(15,23,42,0.08)] rounded-2xl bg-card shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-rhythm border-b border-[rgba(15,23,42,0.08)]">
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-foreground">Destination</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-foreground">Best For</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-foreground">Learning Style</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-foreground">Popular Fields</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-foreground">Career Focus</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-foreground">Lifestyle</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="border-b border-[rgba(15,23,42,0.05)] last:border-0 hover:bg-muted/10 transition-colors">
                    <td className="p-5 text-sm font-semibold text-foreground">{row.destination}</td>
                    <td className="p-5 text-sm text-muted-foreground font-light">{row.bestFor}</td>
                    <td className="p-5 text-sm text-muted-foreground font-light">{row.learningStyle}</td>
                    <td className="p-5 text-sm text-muted-foreground font-light">{row.fields}</td>
                    <td className="p-5 text-sm text-muted-foreground font-light">{row.career}</td>
                    <td className="p-5 text-sm text-muted-foreground font-light">{row.lifestyle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card List View */}
          <div className="md:hidden w-full space-y-6">
            {comparisons.map((row, idx) => (
              <Card key={idx} className="p-6 border border-[rgba(15,23,42,0.08)] space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[rgba(15,23,42,0.05)]">
                  <span className="text-base font-bold text-foreground">{row.destination}</span>
                  <span className="text-xs font-semibold text-primary">{row.bestFor}</span>
                </div>
                <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground">Learning: </span>
                    <span>{row.learningStyle}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Fields: </span>
                    <span>{row.fields}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Career: </span>
                    <span>{row.career}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Lifestyle: </span>
                    <span>{row.lifestyle}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6: CHOOSING THE RIGHT DESTINATION (Scenarios) */}
      <Section id="destinations-scenarios" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-12 max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              {"There Is No Perfect Country. Only The Right One For You."}
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Success depends on finding the correct profile fit rather than following general trends."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
            {/* Scenario 1 */}
            <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between space-y-6 shadow-xs h-full">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10 select-none inline-block">
                  Case 01
                </span>
                <Typography variant="h3" className="font-heading font-semibold text-lg leading-snug">
                  Research & STEM Focus
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"A student seeking flexible major tracks, academic labs, and interdisciplinary computing research."}
                </Typography>
              </div>
              <div className="pt-4 border-t border-[rgba(15,23,42,0.05)] text-sm font-semibold text-primary">
                {"United States may suit"}
              </div>
            </Card>

            {/* Scenario 2 */}
            <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between space-y-6 shadow-xs h-full">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10 select-none inline-block">
                  Case 02
                </span>
                <Typography variant="h3" className="font-heading font-semibold text-lg leading-snug">
                  Practical Career Paths
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"A student seeking direct industry integration, hands-on classroom prep, and clear work permit pathways."}
                </Typography>
              </div>
              <div className="pt-4 border-t border-[rgba(15,23,42,0.05)] text-sm font-semibold text-primary">
                {"Australia may suit"}
              </div>
            </Card>

            {/* Scenario 3 */}
            <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-between space-y-6 shadow-xs h-full">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10 select-none inline-block">
                  Case 03
                </span>
                <Typography variant="h3" className="font-heading font-semibold text-lg leading-snug">
                  Technical Innovation
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {"A student looking to specialize in automotive tech, advanced robotics, and disciplined lab work."}
                </Typography>
              </div>
              <div className="pt-4 border-t border-[rgba(15,23,42,0.05)] text-sm font-semibold text-primary">
                {"Japan may suit"}
              </div>
            </Card>
          </div>

          <div className="flex items-start gap-2.5 p-4 bg-muted/20 border border-[rgba(15,23,42,0.06)] rounded-2xl max-w-2xl text-xs text-muted-foreground">
            <Info className="size-4 text-primary shrink-0 mt-0.5" />
            <Typography variant="body" className="text-[11px] leading-relaxed font-light">
              {"Please note that these cases are general examples. Every profile is evaluated individually based on credentials and target goals."}
            </Typography>
          </div>
        </div>
      </Section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (Accordion) */}
      <Section id="destinations-faq" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
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

      {/* SECTION 8: FINAL CONSULTATION BANNER (Centered Card) */}
      <Section id="destinations-final-cta" variant="standard" className="bg-white py-[88px] lg:py-[112px]">
        <div className="w-full max-w-5xl mx-auto rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-10 md:p-16 lg:p-20 shadow-premium-card text-center flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 max-w-2xl flex flex-col items-center">
            <Typography variant="h2" className="text-3xl md:text-[56px] leading-[1.08] font-heading font-semibold text-foreground text-center">
              {"Still Unsure Where You Belong?"}
            </Typography>
            <Typography variant="body-large" className="text-[20px] leading-[1.8] text-muted-foreground/95 max-w-xl mx-auto font-light text-center">
              {"Let's discover the destination that fits your ambitions—not someone else's."}
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
            <Link href="/how-we-help" className="focus-visible:outline-none">
              <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                How We Help
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
