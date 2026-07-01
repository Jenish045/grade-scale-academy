import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { HomeJourneyCard } from "./HomeCards"
import { StaggerContainer, StaggerItem } from "@/components/ui/animation"

export default function Testimonials() {
  const placeholders = [
    {
      country: "Country: United Kingdom [Placeholder]",
      course: "Course: MSc Data Science [Placeholder]",
      university: "University: Academic Institution [Placeholder]",
      summary: "Academic baseline vetting, course selection review, and Statement of Purpose (SOP) support pathway.",
      buttonText: "Read Story",
    },
    {
      country: "Country: Canada [Placeholder]",
      course: "Course: B.Eng Computer Science [Placeholder]",
      university: "University: Academic Institution [Placeholder]",
      summary: "Holistic credential evaluation, application assembly support, and visa file compilation roadmap.",
      buttonText: "Read Story",
    },
    {
      country: "Country: Australia [Placeholder]",
      course: "Course: Master of Information Systems [Placeholder]",
      university: "University: Academic Institution [Placeholder]",
      summary: "Profile assessment matching, IELTS band review preparation, and pre-departure alumni connection checks.",
      buttonText: "Read Story",
    },
  ]

  return (
    <Section
      id="journeys"
      title="Student Journeys"
      subtitle="Verified Journeys"
      description="Every student's journey is unique. Here, we will share verified success stories once students complete their pathways."
      variant="compact"
      className="bg-rhythm border-b border-[rgba(15,23,42,0.08)] py-[80px]"
    >
      <div className="space-y-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {placeholders.map((item, idx) => (
            <StaggerItem key={idx}>
              <HomeJourneyCard
                country={item.country}
                course={item.course}
                university={item.university}
                summary={item.summary}
                buttonText={item.buttonText}
                href="/student-journeys"
                className="bg-card h-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Section Ending centered link CTA (Route updated to /student-journeys) */}
        <div className="flex justify-center pt-4">
          <Link href="/student-journeys" className="focus-visible:outline-none">
            <Button variant="outline" className="rounded-full relative group/button overflow-hidden">
              Explore Student Journeys
              {/* Shine overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
