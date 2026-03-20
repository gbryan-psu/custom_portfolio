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
  title: "Gabien Bryan | Software Engineer",
  description:
    "A multi-page portfolio for Gabien Bryan featuring software engineering work, background, interests, and contact details.",
  keywords: [
    "Gabien Bryan",
    "Web Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "Personal Website",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Playwright Testing",
    "Web Applications",
    "Frontend Development",
    "Backend Development",
    "Interactive Projects",
    "Coding Portfolio",
    "Programming Projects",
  ],
  authors: [{ name: "Gabien Bryan", url: "https://gabien-bryan.com" }],
  creator: "Gabien Bryan",
  openGraph: {
    title: "Gabien Bryan | Software Engineer",
    description:
      "Explore the portfolio, projects, background, and contact details of Gabien Bryan.",
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
