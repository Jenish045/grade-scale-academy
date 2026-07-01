import Link from "next/link"
import { MapPin, Users, Sparkles, Compass } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { HomePlaceholder } from "./HomePlaceholder"

export default function InstagramPreview() {
  return (
    <Section
      id="academy" // Section 1: id added
      title="Inside Grade Scale Academy"
      subtitle="Academy Experience"
      description="Take a virtual look around our counselling rooms and classroom setups in Rajkot. We design environments that support learning and calm guidance."
      variant="standard"
      className="bg-white border-b border-[rgba(15,23,42,0.08)]"
      headerClassName="max-w-[760px]"
    >
      <div className="space-y-12">
        {/* Large Responsive Gallery Grid */}
        {/* Lightweight 3-Image Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <HomePlaceholder
            label="Counseling Cabin [Photo Placeholder]"
            aspectRatio="aspect-[4/3]"
            className="shadow-premium-card hover:translate-y-[-4px] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition-all duration-[250ms] ease-out"
          />
          <HomePlaceholder
            label="Classroom Study Area [Photo Placeholder]"
            aspectRatio="aspect-[4/3]"
            className="shadow-premium-card hover:translate-y-[-4px] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition-all duration-[250ms] ease-out"
          />
          <HomePlaceholder
            label="Reference Library Room [Photo Placeholder]"
            aspectRatio="aspect-[4/3]"
            className="shadow-premium-card hover:translate-y-[-4px] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition-all duration-[250ms] ease-out"
          />
        </div>

        {/* Small Info Strip below gallery */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-[rgba(15,23,42,0.08)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="size-5 text-primary/70 shrink-0" />
              <Typography variant="small" className="text-xs font-semibold text-foreground/80">
                Located in Rajkot
              </Typography>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="size-5 text-primary/70 shrink-0" />
              <Typography variant="small" className="text-xs font-semibold text-foreground/80">
                Walk-in Consultation
              </Typography>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Sparkles className="size-5 text-primary/70 shrink-0" />
              <Typography variant="small" className="text-xs font-semibold text-foreground/80">
                Comfortable Environment
              </Typography>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Compass className="size-5 text-primary/70 shrink-0" />
              <Typography variant="small" className="text-xs font-semibold text-foreground/80">
                One-to-One Guidance
              </Typography>
            </div>
          </div>
        </div>

        {/* Section Ending CTA button (Plan Your Visit) */}
        <div className="flex justify-center pt-4">
          <Link href="/connect" className="focus-visible:outline-none">
            <Button variant="outline" className="rounded-full relative group/button overflow-hidden">
              Plan Your Visit
              {/* Shine overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
