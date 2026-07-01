export const siteConfig = {
  name: "Grade Scale Academy",
  tagline: "Your Personal Mentor for Global Education Decisions",
  location: "Rajkot, Gujarat, India",
  defaultLanguage: "en",
  defaultLocale: "en-IN",
  domain: "gradescaleacademy.com",
  links: {
    instagram: "https://instagram.com/gradescaleacademy",
    whatsapp: "https://wa.me/912810000000",
    phone: "tel:+912810000000",
    email: "mailto:info@gradescaleacademy.com",
    address: "https://maps.google.com/?q=Grade+Scale+Academy+Rajkot",
  },
} as const;

export type SiteConfig = typeof siteConfig;
export default siteConfig;
