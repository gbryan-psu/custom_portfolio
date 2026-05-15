import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import "./app.css";
import Navbar from "@/components/general/navbar";
import { siteMeta } from "@/lib/content";

const siteUrl = new URL(siteMeta.url);
const siteTitle = "Gabien Bryan | Quality Engineer to Software Engineer";
const siteDescription =
  "Gabien Bryan's portfolio, highlighting Quality Engineering experience, product development work, React and TypeScript projects, and a focused transition into Software Engineering.";

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
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
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
  authors: [{ name: siteMeta.name, url: siteMeta.url }],
  creator: siteMeta.name,
  openGraph: {
    title: siteTitle,
    description: "Explore Gabien Bryan's Quality Engineering background, experience, and projects.",
    url: siteMeta.url,
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
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMeta.name,
    url: siteMeta.url,
    email: `mailto:${siteMeta.email}`,
    jobTitle: "Quality Engineer transitioning into Software Engineering",
    description:
      "Quality Engineer focused on software engineering, React, TypeScript, product development, automation, CI/CD, and reliable web applications.",
    sameAs: [siteMeta.github, siteMeta.linkedIn],
    knowsAbout: [
      "Software Engineering",
      "Quality Engineering",
      "React",
      "TypeScript",
      "Next.js",
      "Playwright",
      "CI/CD",
      "Test Automation",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gabien Bryan Portfolio",
    url: siteMeta.url,
    author: {
      "@type": "Person",
      name: siteMeta.name,
    },
    description: siteDescription,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} ${plexMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
