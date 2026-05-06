import { Code2, Compass, Mail, PanelsTopLeft, Sparkles, UserRound } from "lucide-react";
import { NavItem } from "@/lib/types";

export const siteMeta = {
  name: "Gabien Bryan",
  title: "Quality Engineer transitioning into Software Engineering",
  location: "Based in Philadelphia",
  blurb:
    "Quality Engineer at Minitab building toward Software Engineering through product development, automation framework ownership, and reliable delivery.",
  email: "gabienbryan99@gmail.com",
  linkedIn: "https://www.linkedin.com/in/gabien-bryan-a0a460159/",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/contact", label: "Contact" },
];

export const homeInfoCards = [
  {
    title: "Professional engineering experience",
    description:
      "I have four years of Quality Engineering experience at Minitab, including lead QE ownership, release validation, production issue investigation, and hands-on development support on product teams.",
  },
  {
    title: "Real development contributions",
    description:
      "When projects are starting up, I contribute implementation work before testing demand ramps up, including React UI updates, reusable components, backend integration support, and tests for the features I help build.",
  },
  {
    title: "Automation and CI/CD ownership",
    description:
      "I designed and maintain a TypeScript Playwright framework used across web products, with Azure DevOps integration, staging/live validation, parallel execution, reporting, and onboarding support for other QEs.",
  },
];

export const homeNavigationCards = [
  {
    href: "/about",
    title: "About",
    description:
      "A closer look at my background, experience, and transition into software engineering.",
    icon: UserRound,
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Portfolio work, automation systems, and engineering projects worth digging into.",
    icon: PanelsTopLeft,
  },
  {
    href: "/hobbies",
    title: "Hobbies",
    description: "The curiosity, side quests, and interests that keep my perspective fresh.",
    icon: Compass,
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "A straightforward way to talk about software engineering roles and collaboration.",
    icon: Mail,
  },
];

export const aboutHighlights = [
  "I earned my Computer Engineering degree from Penn State in 2021, where my senior capstone was an autonomous robotic car built with C, Raspberry Pi hardware, PWM control, and infrared sensors.",
  "At Minitab, I have worked as the sole QE on complex product projects while contributing development work early in delivery. That mix has included testing ownership, bug turnaround, feature planning, and implementation support.",
  "My recent React work includes data preview UI updates, a reusable worksheet statistics component, header changes, context menu functionality for cloud storage workflows, backend/API integration support, and supporting tests.",
  "I maintain a shared Playwright and TypeScript automation framework across web products, with Azure DevOps pipelines, HTML reporting, Teams notifications, staging and live deployment validation, multiple test types, and parallelized execution.",
  "I recently improved CI feedback by adding sharding to the test automation framework, bringing pipeline time down from roughly 45 minutes to about 10 minutes on average.",
];

export const projectsHighlights = [
  {
    title: "Personal portfolio website",
    tech: "Next.js, React, TypeScript, Tailwind CSS",
    description:
      "A responsive multi-page portfolio built as both a personal site and a software engineering practice project.",
    details: [
      "Created reusable layout, navigation, hero, card, and section components to keep the codebase consistent.",
      "Used the project to clarify my professional story while practicing frontend structure, responsive UI, and content-driven iteration.",
    ],
  },
  {
    title: "Custom Playwright framework",
    tech: "TypeScript, Playwright, Azure DevOps, Python",
    description:
      "A reusable end-to-end automation framework I designed, maintain, document, and help other engineers adopt.",
    details: [
      "Supports page object patterns, authentication handling, multi-context web testing, staging/live smoke checks, HTML reporting, and targeted notifications.",
      "Improved CI feedback by adding sharding to a Playwright suite, reducing pipeline runtime from roughly 45 minutes to about 10 minutes on average.",
    ],
  },
  {
    title: "Data preview and product workflow work",
    tech: "React, TypeScript, internal APIs, component tests",
    description:
      "Product development and quality work for a project involving data sync, opening, editing, and preview workflows.",
    details: [
      "Served as the sole QE while partnering closely with Software Engineers on delivery, risk, bug turnaround, and release readiness.",
      "Implemented data preview UI updates, including a reusable worksheet column and row statistics component, header updates, and supporting tests.",
    ],
  },
  {
    title: "Robotic car capstone",
    tech: "C, Raspberry Pi, PWM, infrared sensors",
    description:
      "An autonomous Raspberry Pi car built as my Penn State Computer Engineering senior capstone.",
    details: [
      "Used infrared sensors and multithreaded C code with PWM control to manage real-world movement and scheduling constraints.",
      "Combined embedded systems work with the kind of practical debugging that still shapes how I approach software problems.",
    ],
  },
];

export const hobbiesHighlights = [
  {
    title: "Creative tinkering",
    description:
      "I like using personal projects to practice UI ideas, React patterns, and the product instincts I want to bring into a software engineering role.",
    icon: Sparkles,
  },
  {
    title: "Technical curiosity",
    description:
      "I keep exploring frontend architecture, automation tooling, CI/CD practices, and the details that make software easier for teams to trust.",
    icon: Code2,
  },
];
