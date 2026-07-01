import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

// Import layout components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Font configurations
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
const playfairSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grade Scale Academy",
  description: "Corporate portal for Grade Scale Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairSerif.variable} antialiased`}
      >
        {/* Render Navbar at the top of every page */}
        <Navbar />
        
        {/* Page contents (should have pt-24 padding to offset fixed Navbar) */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>

        {/* Global layout Footer */}
        <Footer />
      </body>
    </html>
  );
}