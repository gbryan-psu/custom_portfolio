import type { Metadata } from "next";
import { Roboto_Mono, Quicksand } from "next/font/google";
import "./app.css";
import Navbar from "@/components/navbar";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabien Bryan - Portfolio & Playground",
  description: "The digital home of Gabien Bryan - code, projects, and creations.",
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
    title: "Gabien Bryan - Portfolio & Playground",
    description: "Explore the projects, portfolio, and creative coding space of Gabien Bryan.",
    url: "https://gabien-bryan.com",
    siteName: "Gabien Bryan - Portfolio & Playground",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabien Bryan - Portfolio & Playground",
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
      <body className={`${quicksand.variable} ${robotoMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
