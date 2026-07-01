import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story | Grade Scale Academy",
  description: "Learn why Grade Scale Academy was founded, the values that guide us, and how we help students make informed decisions about studying abroad.",
}

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
