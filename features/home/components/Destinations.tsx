"use client"

import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { HomeCountryCard } from "./HomeCards"
import { StaggerContainer, StaggerItem } from "@/components/ui/animation"

interface DestinationItem {
  name: string
  description: string
  areasExplored: string[]
}

export default function Destinations() {
  const destinations: DestinationItem[] = [
    {
      name: "United Kingdom",
      description: "Renowned for centuries-old academic traditions, accelerated degree structures, and global business networks.",
      areasExplored: ["Business & Management", "Data Science & Computing", "Finance & Corporate Law"],
    },
    {
      name: "United States",
      description: "A hub for academic flexibility, interdisciplinary research, and leading technology partnerships.",
      areasExplored: ["STEM Fields", "Computer Science & AI", "MBA & Executive Programs"],
    },
    {
      name: "Canada",
      description: "Provides diverse diploma and degree pathways alongside clear options for post-study work and permanent settlement.",
      areasExplored: ["Project Management", "Engineering Technologies", "Healthcare Informatics"],
    },
    {
      name: "Australia",
      description: "Known for research-intensive universities, strong student support systems, and post-study career opportunities.",
      areasExplored: ["Information Systems", "Infrastructure Engineering", "Nursing & Public Health"],
    },
    {
      name: "New Zealand",
      description: "Offers practical, research-focused learning environments set against a landscape known for innovation and safety.",
      areasExplored: ["Agribusiness", "Environmental Studies", "Creative Technologies"],
    },
    {
      name: "Europe",
      description: "Offers specialized research programs, multilingual course selections, and culture-rich academic hubs.",
      areasExplored: ["Engineering & Design", "Renewable Energy", "Social Sciences"],
    },
    {
      name: "Japan",
      description: "Focuses on high-tech engineering pathways, cultural immersion, and strong industrial partnerships.",
      areasExplored: ["Robotics & Robotics", "Advanced Electronics", "Japanese Studies"],
    },
    {
      name: "South Korea",
      description: "A fast-emerging destination for technology, media studies, and advanced computing fields.",
      areasExplored: ["Information Tech", "Automotive Design", "Cultural Studies"],
    },
    {
      name: "China",
      description: "Provides extensive scholarship structures, infrastructure research, and direct access to emerging global industries.",
      areasExplored: ["Material Sciences", "International Trade", "Civil Engineering"],
    },
  ]

  return (
    <Section
      id="destinations" // Section 1: id added
      title="Explore Study Destinations"
      subtitle="Study Destinations"
      description="We align your academic goals with global pathways that suit your credentials, career aspirations, and financial plans. Here are the regions our students commonly explore."
      variant="standard"
      className="bg-white border-b border-[rgba(15,23,42,0.08)]"
      headerClassName="max-w-[760px]"
    >
      <div className="space-y-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-stretch">
          {destinations.map((dest, idx) => (
            <StaggerItem key={idx}>
              <HomeCountryCard
                name={dest.name}
                description={dest.description}
                areasExplored={dest.areasExplored}
                href="/study-destinations"
                className="bg-card h-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Section Ending CTA: Explore All Destinations */}
        <div className="flex justify-center pt-4">
          <Link href="/study-destinations" className="focus-visible:outline-none">
            <Button variant="outline" className="rounded-full relative group/button overflow-hidden">
              Explore All Destinations
              {/* Shine overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
