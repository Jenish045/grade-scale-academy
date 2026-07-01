import { siteConfig } from "./site";

export const seoConfig = {
  defaultTitle: `${siteConfig.name} | Study Abroad Counselor in Rajkot`,
  defaultDescription: "Grade Scale Academy offers personal mentorship, IELTS & PTE tutoring, profile evaluation, and visa counselling in Rajkot for global university pathways.",
  canonical: `https://${siteConfig.domain}`,
  keywords: [
    "Study Abroad",
    "Overseas Education",
    "IELTS Coaching Rajkot",
    "PTE Classes Rajkot",
    "Visa Counselor Rajkot",
    "Global University Admissions",
    "Profile Evaluation",
    "Personal Mentorship",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.defaultLocale,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    images: [
      {
        url: `https://${siteConfig.domain}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Overseas Education Mentors`,
      },
    ],
  },
  twitter: {
    handle: "@gradescale",
    site: "@gradescale",
    cardType: "summary_large_image",
  },
} as const;

export type SeoConfig = typeof seoConfig;
export default seoConfig;
