"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "How We Help", href: "/how-we-help" },
  { label: "Study Destinations", href: "/study-destinations" },
  { label: "Student Journeys", href: "/student-journeys" },
  { label: "Our Team", href: "/our-team" },
  { label: "Connect With Us", href: "/connect" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  // Close panel on escape keypress
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Lock scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Sticky Header Wrapper */}
      <header className="fixed top-0 left-0 right-0 z-sticky w-full bg-white/75 backdrop-blur-xl py-4 border-b border-slate-200/60">
        <div className="container-custom flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg px-2 py-1"
            aria-label="Grade Scale Academy Home"
          >
            <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Grade Scale Academy
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Main Desktop Navigation"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/consultation" className="focus-visible:outline-none">
              <Button
                variant="primary"
                size="default"
                className="relative group/button overflow-hidden rounded-full px-5 transition-all shadow hover:shadow-md"
              >
                Book Consultation
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            aria-label="Open Navigation Menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      {/* Drawer Panel Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay - with slight blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-fixed bg-black/20 backdrop-blur-sm"
            />

            {/* Slide-out Panel */}
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-modal w-full max-w-sm bg-background p-6 shadow-2xl flex flex-col justify-between border-l border-border"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <span className="font-heading text-lg font-bold tracking-tight text-foreground">
                    Grade Scale Academy
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all"
                    aria-label="Close Navigation Menu"
                  >
                    <X className="size-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1 py-8" aria-label="Mobile Navigation Links">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "py-3 text-base font-medium rounded-lg px-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive
                            ? "bg-primary/5 text-primary font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* Drawer Footer Details */}
              <div className="space-y-6 pt-6 border-t border-border">
                <Link
                  href="/consultation"
                  onClick={() => setIsOpen(false)}
                  className="block w-full focus-visible:outline-none"
                >
                  <Button variant="primary" size="lg" className="relative group/button overflow-hidden w-full rounded-xl py-3 shadow">
                    Book Consultation
                    {/* Shine overlay */}
                    <div className="absolute inset-0 -translate-x-full group-hover/button:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  </Button>
                </Link>

                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-all py-1.5"
                  aria-label="Contact support team by phone"
                >
                  <Phone className="size-4" />
                  +91 98765 43210
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
