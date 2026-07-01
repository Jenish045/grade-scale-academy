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
  Compass,
  FileCheck,
  AlertCircle
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animation"
import { HomePlaceholder } from "@/features/home/components/HomePlaceholder"

interface FormFields {
  name: string
  phone: string
  email: string
  city: string
  destination: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  city?: string
  destination?: string
}

interface FAQItem {
  question: string
  answer: string
}

export default function ConsultationPage() {
  const [form, setForm] = useState<FormFields>({
    name: "",
    phone: "",
    email: "",
    city: "",
    destination: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "How long does the consultation take?",
      answer: "A standard initial profile evaluation session takes between 45 to 60 minutes. We do not rush discussions and prioritize transcripts analysis.",
    },
    {
      question: "Can parents attend the session?",
      answer: "Yes, parent attendance is highly recommended. We align budgets, timelines, and country policies transparently with all family members present.",
    },
    {
      question: "Do I need to prepare or bring anything?",
      answer: "Bringing your academic mark sheets (10th, 12th, and college semesters) and any previous IELTS or PTE diagnostic test scores helps us give precise advice.",
    },
    {
      question: "Can I discuss multiple countries?",
      answer: "Yes. Our team maps out university and visa paths across multiple countries side-by-side to determine which matches your academic credentials best.",
    },
    {
      question: "Is there any obligation after the consultation?",
      answer: "None. Our guidance cycle is structured around transparency. You receive a recommended roadmap and are encouraged to discuss options with family at home.",
    },
    {
      question: "Can working professionals also book a consultation?",
      answer: "Yes. We help professionals plan postgraduate degrees, business course entries, and work-study conversions with proper profile evaluations.",
    },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear validation error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[0-9]{10}$/

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Full Name must be at least 2 characters."
    }

    if (!form.phone.trim() || !phoneRegex.test(form.phone.trim())) {
      newErrors.phone = "Phone Number must be exactly 10 digits."
    }

    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!form.city.trim() || form.city.trim().length < 2) {
      newErrors.city = "Current City must be at least 2 characters."
    }

    if (!form.destination.trim() || form.destination.trim().length < 2) {
      newErrors.destination = "Preferred Destination must be at least 2 characters."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to submit request.")
      }

      setIsSuccess(true)
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "An error occurred. Please try again."
      setSubmitError(errorMsg)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-background min-h-screen pt-4">
      {/* SECTION 1: HERO (Split Layout with Floating Badges) */}
      <Section id="booking-hero" variant="standard" className="bg-white pb-[88px] lg:pb-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-[540px]">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase bg-primary/5 text-primary border border-[rgba(15,23,42,0.08)] select-none">
                Personalsed Guidance
              </span>
            </FadeUp>
            <FadeUp>
              <Typography variant="display" className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-semibold text-foreground">
                {"Let's Plan Your Study Abroad Journey Together"}
              </Typography>
            </FadeUp>
            <FadeUp>
              <Typography variant="body-large" className="text-[20px] md:text-[22px] leading-[1.7] text-muted-foreground/90 font-light">
                {"Every student has different ambitions. Whether you're just beginning your research or already shortlisted universities, we'll help you understand the best path for your future."}
              </Typography>
            </FadeUp>
            <FadeUp className="flex flex-wrap gap-4 pt-2">
              <a href="#consultation-form-section" className="focus-visible:outline-none">
                <Button variant="primary" size="lg" className="relative group/button overflow-hidden rounded-full shadow-md hover:shadow-lg transition-shadow">
                  Start Your Consultation
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                </Button>
              </a>
              <a href="tel:+912810000000" className="focus-visible:outline-none">
                <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                  Call Our Office
                  {/* Shine overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
                </Button>
              </a>
            </FadeUp>
          </div>

          {/* Right Column: visual placeholder with float badges */}
          <div className="lg:col-span-6 w-full relative flex items-stretch">
            <HomePlaceholder
              label="Counseling Cabin [Photo Placeholder]"
              aspectRatio="aspect-[4/3] md:aspect-[16/11] lg:aspect-auto w-full h-full min-h-[360px]"
              className="shadow-premium-card"
            />
            {/* Floating indicator badges */}
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-xs border border-[rgba(15,23,42,0.08)] py-2.5 px-4 rounded-xl shadow-xs text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="size-4 text-success" />
              <span>Personal Guidance</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-xs border border-[rgba(15,23,42,0.08)] py-2.5 px-4 rounded-xl shadow-xs text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="size-4 text-success" />
              <span>Student-first Advice</span>
            </div>
            <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-card/90 backdrop-blur-xs border border-[rgba(15,23,42,0.08)] py-2.5 px-4 rounded-xl shadow-xs text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="size-4 text-success" />
              <span>Walk-in Friendly</span>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2: WHY BOOK A CONSULTATION (4 cards) */}
      <Section id="booking-why" variant="standard" className="bg-rhythm border-t border-b border-[rgba(15,23,42,0.08)] py-[88px] lg:py-[112px]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Why Book A Consultation
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"What makes our diagnostic counseling sessions different from generic sales consultancies."}
            </Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
            {[
              { title: "Personalised Country Guidance", desc: "Choose the study destination that matches your transcripts and goals." },
              { title: "Course & University Planning", desc: "Discover institutions aligned with your specific modules and career wishes." },
              { title: "Application & Visa Roadmap", desc: "Understand deadlines and documentation checkpoints before you apply." },
              { title: "Honest Advisor Vows", desc: "Profiling advice based on academic match—never commission percentages." },
            ].map((card, idx) => (
              <StaggerItem key={idx}>
                <Card className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                  <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                    {card.title}
                  </Typography>
                  <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                    {card.desc}
                  </Typography>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* SECTION 3: HOW IT WORKS (Horizontal timeline) */}
      <Section id="booking-steps" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              How It Works
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"A structured, transparent cycle designed around your profile evaluation timeline."}
            </Typography>
          </div>

          <div className="relative w-full">
            {/* Desktop timeline horizontal line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-[rgba(15,23,42,0.08)] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center md:text-left lg:text-center items-start">
              {[
                { step: "Step 1", title: "Submit Request", desc: "Fill in the consultation request form below." },
                { step: "Step 2", title: "Team Connects", desc: "Our coordinators contact you to align on visiting times." },
                { step: "Step 3", title: "Office Visit", desc: "Join us in our Rajkot office to review your transcripts." },
                { step: "Step 4", title: "Personal Roadmap", desc: "Receive honest path短lists tailored to your career." },
              ].map((step, idx) => (
                <div key={idx} className="space-y-4 flex flex-col items-center lg:items-center">
                  <div className="size-14 rounded-full bg-primary border-4 border-white flex items-center justify-center text-primary-foreground font-bold z-10 shadow-xs">
                    {idx + 1}
                  </div>
                  <div className="space-y-1 text-center w-full">
                    <Typography variant="label" className="font-semibold block text-[15px] leading-tight">{step.title}</Typography>
                    <Typography variant="small" className="text-xs text-muted-foreground block max-w-[170px] mx-auto leading-relaxed font-light">
                      {step.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: FORM SECTION */}
      <Section id="consultation-form-section" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="max-w-2xl mx-auto">
          {isSuccess ? (
            <Card className="rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-10 md:p-16 shadow-premium-card text-center flex flex-col items-center justify-center space-y-8 animate-fade-in">
              <div className="size-16 rounded-full bg-success/10 text-success flex items-center justify-center">
                <FileCheck className="size-8" />
              </div>
              <div className="space-y-4 max-w-md flex flex-col items-center">
                <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
                  Thank You!
                </Typography>
                <Typography variant="body" className="text-[18px] leading-[1.8] text-muted-foreground/95 font-light text-center">
                  {"We've received your consultation request. Our team will contact you shortly to schedule your visit."}
                </Typography>
              </div>
              <div className="flex flex-wrap gap-4 justify-center w-full pt-2">
                <Link href="/" className="focus-visible:outline-none">
                  <Button variant="primary" className="rounded-full px-6">
                    Return to Homepage
                  </Button>
                </Link>
                <Link href="/study-destinations" className="focus-visible:outline-none">
                  <Button variant="outline" className="rounded-full px-6">
                    Continue Exploring
                  </Button>
                </Link>
              </div>
            </Card>
          ) : (
            <Card className="rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-8 md:p-12 shadow-premium-card space-y-8">
              <div className="space-y-2 text-center">
                <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground">
                  Request a Consultation
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground font-light">
                  {"Fill in a few details and our team will get in touch shortly."}
                </Typography>
              </div>

              {submitError && (
                <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-xl flex items-start gap-3 text-sm text-destructive">
                  <AlertCircle className="size-4 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground/80 block">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={cn(errors.name && "border-destructive focus-visible:ring-destructive")}
                  />
                  {errors.name && (
                    <span className="text-xs text-destructive block">{errors.name}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-semibold text-foreground/80 block">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    disabled={isSubmitting}
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your 10-digit mobile number"
                    className={cn(errors.phone && "border-destructive focus-visible:ring-destructive")}
                  />
                  {errors.phone && (
                    <span className="text-xs text-destructive block">{errors.phone}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground/80 block">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className={cn(errors.email && "border-destructive focus-visible:ring-destructive")}
                  />
                  {errors.email && (
                    <span className="text-xs text-destructive block">{errors.email}</span>
                  )}
                </div>

                {/* Current City */}
                <div className="space-y-2">
                  <label htmlFor="city" className="text-xs font-semibold text-foreground/80 block">
                    Current City *
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={form.city}
                    onChange={handleInputChange}
                    placeholder="Your current city"
                    className={cn(errors.city && "border-destructive focus-visible:ring-destructive")}
                  />
                  {errors.city && (
                    <span className="text-xs text-destructive block">{errors.city}</span>
                  )}
                </div>

                {/* Preferred Destination */}
                <div className="space-y-2">
                  <label htmlFor="destination" className="text-xs font-semibold text-foreground/80 block">
                    Preferred Study Destination *
                  </label>
                  <Input
                    id="destination"
                    name="destination"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={form.destination}
                    onChange={handleInputChange}
                    placeholder="e.g. United Kingdom, Australia, Europe (excluding Germany)"
                    className={cn(errors.destination && "border-destructive focus-visible:ring-destructive")}
                  />
                  {errors.destination && (
                    <span className="text-xs text-destructive block">{errors.destination}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground/80 block">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    disabled={isSubmitting}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Tell us anything you'd like us to know before we contact you."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full rounded-full py-3 h-12 shadow-sm font-semibold flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request Consultation"}
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <Typography variant="small" className="text-xs text-muted-foreground/80 font-light block">
                    {"No spam. No obligations. We'll simply contact you to schedule your consultation."}
                  </Typography>
                </div>
              </form>
            </Card>
          )}
        </div>
      </Section>

      {/* SECTION 5: TRUST INDICATORS (6 cards) */}
      <Section id="booking-trust" variant="standard" className="bg-white py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-12 max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Why Families Trust Grade Scale Academy
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Our core commitment to transparent student-centric pathways."}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
            {[
              { title: "Personal Guidance", desc: "Speak directly to experienced counselors, never volume sales agents.", icon: <Users className="size-5" /> },
              { title: "Ethical Counselling", desc: "Pathways aligned with your credentials and parent financial boundaries.", icon: <CheckCircle2 className="size-5" /> },
              { title: "Experienced Mentorship", desc: "Expert profiling and visa document checklist reviews.", icon: <UserCheck className="size-5" /> },
              { title: "Transparent Process", desc: "Detailed breakdown of course modules, fees, and timelines.", icon: <HeartHandshake className="size-5" /> },
              { title: "Minimal Fee Structures", desc: "Completely transparent pricing without hidden commission markups.", icon: <Shield className="size-5" /> },
              { title: "Student Success First", desc: "We track long-term academic and career outcome parameters.", icon: <Compass className="size-5" /> },
            ].map((trust, idx) => (
              <Card key={idx} className="rounded-[28px] border border-[rgba(15,23,42,0.08)] bg-card p-8 flex flex-col justify-start space-y-4 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all h-full">
                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center border border-[rgba(15,23,42,0.04)] shrink-0">
                  {trust.icon}
                </div>
                <Typography variant="h3" className="font-heading font-semibold text-[20px] leading-snug">
                  {trust.title}
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed font-light">
                  {trust.desc}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6: FAQs (Accordion) */}
      <Section id="booking-faq" variant="standard" className="bg-rhythm py-[88px] lg:py-[112px] border-b border-[rgba(15,23,42,0.08)]">
        <div className="space-y-16 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center space-y-3">
            <Typography variant="h2" className="text-3xl font-heading font-semibold text-foreground text-center">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed text-center font-light">
              {"Common questions about our booking and profiling sessions."}
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

      {/* SECTION 7: FINAL REASSURANCE CTA */}
      <Section id="booking-final-cta" variant="standard" className="bg-white py-[88px] lg:py-[112px]">
        <div className="w-full max-w-5xl mx-auto rounded-[32px] border border-[rgba(15,23,42,0.08)] bg-card p-10 md:p-16 lg:p-20 shadow-premium-card text-center flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 max-w-2xl flex flex-col items-center">
            <Typography variant="h2" className="text-3xl md:text-[56px] leading-[1.08] font-heading font-semibold text-foreground text-center">
              {"Still Unsure?"}
            </Typography>
            <Typography variant="body-large" className="text-[20px] leading-[1.8] text-muted-foreground/95 max-w-xl mx-auto font-light text-center">
              {"One conversation can often bring clarity to months of confusion. Let's align on your options."}
            </Typography>
          </div>

          <div className="flex flex-wrap gap-4 justify-center w-full">
            <a href="tel:+912810000000" className="focus-visible:outline-none">
              <Button variant="primary" size="lg" className="relative group/button overflow-hidden rounded-full shadow-md hover:shadow-lg transition-shadow">
                Call Us
              </Button>
            </a>
            <Link href="/connect" className="focus-visible:outline-none">
              <Button variant="outline" size="lg" className="relative group/button overflow-hidden rounded-full">
                Visit Our Office
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
