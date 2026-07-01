import { Shield, LifeBuoy, GraduationCap, Compass } from "lucide-react"
import { Section } from "@/components/ui/section"
import { HomeTrustCard } from "./HomeCards"
import { StaggerContainer, StaggerItem } from "@/components/ui/animation"

interface TrustItem {
  icon: React.ReactNode
  title: string
  description: string
  colorClass: string
}

export default function Trust() {
  const trustItems: TrustItem[] = [
    {
      icon: <Shield className="size-6" />,
      title: "Ethical Guidance",
      description: "We evaluate your credentials honestly. If a university or path does not align with your potential or budget, we tell you upfront—honesty before profit.",
      colorClass: "bg-primary/5 text-primary border-[rgba(15,23,42,0.05)]",
    },
    {
      icon: <LifeBuoy className="size-6" />,
      title: "End-to-End Support",
      description: "We are beside you at every step, from initial career counselling and IELTS coaching to admissions, visa tracking, pre-departure briefings, and landing support.",
      colorClass: "bg-accent/10 text-accent-foreground border-[rgba(15,23,42,0.05)]",
    },
    {
      icon: <GraduationCap className="size-6" />,
      title: "Experienced Mentorship",
      description: "Get guided by professionals who understand global university frameworks, admissions criteria, and visa requirements deeply, steering you clear of generic templates.",
      colorClass: "bg-secondary/30 text-secondary-foreground border-[rgba(15,23,42,0.05)]",
    },
    {
      icon: <Compass className="size-6" />,
      title: "Personalised Planning",
      description: "Every student's dream is unique. We tailor our academic planning, country selections, and timelines specifically to your personal career aspirations.",
      colorClass: "bg-primary/5 text-primary border-[rgba(15,23,42,0.05)]",
    },
  ]

  return (
    <Section
      id="trust"
      title="Why Families Trust Grade Scale Academy"
      subtitle="The Trust Foundation"
      description="We reject the transactional nature of generic consulting. Our focus is on long-term relationships, ensuring students and parents receive advice based on potential—not commission."
      align="center"
      variant="standard"
      className="bg-rhythm border-b border-[rgba(15,23,42,0.08)] pt-[88px] lg:pt-[88px]"
      headerClassName="max-w-[720px]"
    >
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        {trustItems.map((item, idx) => (
          <StaggerItem key={idx}>
            <HomeTrustCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              colorClass={item.colorClass}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}
