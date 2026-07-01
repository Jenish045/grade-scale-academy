import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Typography } from "@/components/ui/typography"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/40 border-t border-border pt-16 pb-12 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
              <Typography variant="h3" className="font-heading font-bold text-xl tracking-tight text-foreground">
                Grade Scale Academy
              </Typography>
            </Link>
            <Typography variant="small" className="block max-w-sm text-muted-foreground/90 leading-relaxed text-balance-custom">
              An overseas education and visa consultancy located in Rajkot, Gujarat, India. Dedicated to ethical counselling, honest guidance, and step-by-step student mentorship.
            </Typography>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground/80">
                <MapPin className="size-4.5 mt-0.5 shrink-0 text-primary" />
                <span>Rajkot, Gujarat, India (Contact Office Placeholder)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground/80">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded px-1">+91 (98765) 43210</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground/80">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:info@gradescale.com" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded px-1">info@gradescaleacademy.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <Typography variant="label" className="font-bold text-xs uppercase tracking-widest text-foreground block mb-4">
              Academy
            </Typography>
            <ul className="space-y-2.5" aria-label="Academy navigation links">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/story" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/connect" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  Connect With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <Typography variant="label" className="font-bold text-xs uppercase tracking-widest text-foreground block mb-4">
              Services
            </Typography>
            <ul className="space-y-2.5" aria-label="Services links">
              <li>
                <Link href="/how-we-help" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link href="/how-we-help" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  University Selection
                </Link>
              </li>
              <li>
                <Link href="/how-we-help" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link href="/how-we-help" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  IELTS / PTE Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div>
            <Typography variant="label" className="font-bold text-xs uppercase tracking-widest text-foreground block mb-4">
              Destinations
            </Typography>
            <ul className="space-y-2.5" aria-label="Destinations links">
              <li>
                <Link href="/destinations" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded py-0.5">
                  Australia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 mt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Typography variant="small" className="text-xs text-muted-foreground/80">
            &copy; {currentYear} Grade Scale Academy. All rights reserved. Made ethically with guidance first.
          </Typography>
          <div className="flex gap-5 text-muted-foreground/75">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1" aria-label="Facebook Profile Placeholder">
              <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1" aria-label="Twitter Profile Placeholder">
              <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1" aria-label="Instagram Profile Placeholder">
              <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1" aria-label="LinkedIn Profile Placeholder">
              <svg className="size-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
