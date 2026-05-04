import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import "./app.css";
import Navbar from "@/components/general/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabien Bryan | Quality Engineer to Software Engineer",
  description:
    "Gabien Bryan's portfolio, highlighting Quality Engineering experience, product development work, React and TypeScript projects, and a focused transition into Software Engineering.",
  keywords: [
    "Gabien Bryan",
    "Quality Engineer",
    "Software Engineering",
    "Software Engineer Transition",
    "Portfolio",
    "Personal Website",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Playwright",
    "Test Automation",
    "Web Applications",
    "Frontend Development",
    "Backend Development",
    "CI/CD",
    "Azure DevOps",
    "Interactive Projects",
    "Coding Portfolio",
    "Programming Projects",
  ],
  authors: [{ name: "Gabien Bryan", url: "https://gabien-bryan.com" }],
  creator: "Gabien Bryan",
  openGraph: {
    title: "Gabien Bryan | Quality Engineer to Software Engineer",
    description: "Explore Gabien Bryan's Quality Engineering background, experience, and projects.",
    url: "https://gabien-bryan.com",
    siteName: "Gabien Bryan Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabien Bryan portfolio preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} ${plexMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
