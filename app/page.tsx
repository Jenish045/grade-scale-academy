import Hero from "@/features/home/components/Hero"
import Trust from "@/features/home/components/Trust"
import Philosophy from "@/features/home/components/Philosophy"
import Services from "@/features/home/components/Services"
import Destinations from "@/features/home/components/Destinations"
import Timeline from "@/features/home/components/Timeline"
import Team from "@/features/home/components/Team"
import Testimonials from "@/features/home/components/Testimonials"
import InstagramPreview from "@/features/home/components/InstagramPreview"
import CtaSection from "@/features/home/components/CtaSection"

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Why Families Trust Grade Scale Academy */}
      <Trust />

      {/* Section 3: Guidance Before Consultancy */}
      <Philosophy />

      {/* Section 4: Everything Your Journey Needs */}
      <Services />

      {/* Section 5: Find Your Best Destination */}
      <Destinations />

      {/* Section 6: One Step At A Time. Done Right. */}
      <Timeline />

      {/* Section 7: Meet The People Behind Your Journey */}
      <Team />

      {/* Section 8: Dreams That Became Destinations */}
      <Testimonials />

      {/* Section 9: Inside Grade Scale Academy */}
      <InstagramPreview />

      {/* Section 10: Let's Talk About Your Future */}
      <CtaSection />
    </>
  )
}
