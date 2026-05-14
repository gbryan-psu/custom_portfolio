import {
  Code2,
  Compass,
  Flag,
  Gamepad2,
  Mail,
  PanelsTopLeft,
  Trophy,
  UserRound,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { NavItem } from "@/lib/types";

export const siteMeta = {
  name: "Gabien Bryan",
  title: "Quality Engineer transitioning into Software Engineering",
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

export const asideContent = {
  about: {
    eyebrow: "Working style",
    description:
      "Calm collaboration, strong ownership, fast learning, and comfort working across code, tests, pipelines, and release decisions.",
  },
  projects: {
    eyebrow: "Current goal",
    description:
      "Keep growing these into deeper case studies with architecture notes, screenshots, constraints, and measurable outcomes.",
  },
  contact: {
    eyebrow: "Best fit",
    description:
      "Teams building reliable product software with strong engineering practices, automation, and close collaboration between development and quality.",
  },
} as const;

export type asideKey = keyof typeof asideContent;

export const actionContent = {
  projects: {
    href: "/projects",
    label: "View projects",
    external: false,
    icon: PanelsTopLeft,
  },
  about: {
    href: "/about",
    label: "Learn more",
    external: false,
    icon: UserRound,
  },
  github: {
    href: "https://github.com/gbryan-psu",
    label: "View GitHub",
    external: true,
    icon: SiGithub,
  },
} as const;

export type actionKey = keyof typeof actionContent;

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
    description: "The 5 to 9 after my 9 to 5.",
    icon: Compass,
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Welcoming any conversations about software engineering roles and what's next.",
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
      "A reusable end-to-end automation framework I developed, maintain, and help other engineers adopt.",
    details: [
      "Supports page object patterns, authentication handling, multi-context web testing, staging/live smoke checks, reporting, and targeted notifications.",
      "Improved CI feedback by adding sharding to a Playwright suite, reducing pipeline runtime from roughly 45 minutes to about 10 minutes on average.",
    ],
  },
  {
    title: "Product UI and workflow work",
    tech: "React, TypeScript, component tests",
    description:
      "Product development and quality work across feature projects involving UI updates, workflow improvements, and release-ready implementation support.",
    details: [
      "Partnered closely with Software Engineers on delivery, risk, bug turnaround, and release readiness across product work.",
      "Implemented React and TypeScript UI updates, reusable components, workflow enhancements, and supporting tests across multiple feature areas.",
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
    title: "Baseball",
    description:
      "I have played baseball for over 20 years and it is still a passion of mine even though I no longer play competetively.",
    icon: Trophy,
  },
  {
    title: "Golf",
    description:
      "After stepping away from competetive baseball, I picked up golf and have been enjoying a new sport to improve in.",
    icon: Flag,
  },
  {
    title: "Video games",
    description:
      "I love playing games with friends, especially World of Warcraft, Counter-Strike 2, and whatever random game our group decides to try next.",
    icon: Gamepad2,
  },
  {
    title: "Game development",
    description:
      "A friend and I are planning a game development project. We have just recently started, and I'm very excited to tackle my next passion project.",
    icon: Code2,
  },
];
