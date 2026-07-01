import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { HomeTeamCard } from "./HomeCards"
import { StaggerContainer, StaggerItem } from "@/components/ui/animation"

export default function Team() {
  const teamMembers = [
    {
      name: "Founder & Lead Counsellor",
      role: "Lead Counsellor & Visa Expert [Real Name Placeholder]",
      bio: "An alumnus of a prestigious global university [Qualification Placeholder] with years of advisory experience. Dedicated to establishing transparent profile vetting and helping students from Rajkot secure fits at leading colleges.",
      buttonText: "View Profile",
    },
    {
      name: "Head IELTS / PTE Instructor",
      role: "IELTS / PTE Trainer [Real Name Placeholder]",
      bio: "An expert language coach with an MA in English Lit [Qualification Placeholder]. Mentors students on speaking, listening, and academic writing modules using custom classroom tests and personalized reviews.",
      buttonText: "Learn More",
    },
  ]

  return (
    <Section
      id="team" // Section 1: id added
      title="Meet The People Behind Your Journey"
      subtitle="Our Mentors"
      description="We do not hire commission-driven sales agents. You are guided directly by educators and academic specialists who prioritize your long-term success."
      variant="standard"
      className="bg-white border-b border-[rgba(15,23,42,0.08)]"
    >
      <div className="space-y-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <StaggerItem key={idx}>
              <HomeTeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                buttonText={member.buttonText}
                href="/our-team"
                className="bg-card h-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* Section Ending centered link CTA (Route updated to /our-team) */}
        <div className="flex justify-center pt-4">
          <Link href="/our-team" className="focus-visible:outline-none">
            <Button variant="outline" className="rounded-full relative group/button overflow-hidden">
              Meet Our Team
              {/* Shine overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
