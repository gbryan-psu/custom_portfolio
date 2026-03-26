import { Code2, Compass, Mail, PanelsTopLeft, Sparkles, UserRound } from "lucide-react";
import { NavItem } from "@/lib/types";

export const siteMeta = {
  name: "Gabien Bryan",
  title: "Software Engineer",
  location: "Based in Philadelphia",
  blurb:
    "I build resilient web experiences with an engineer's eye for systems, interfaces, and quality.",
  email: "hello@gabienbryan.dev",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/contact", label: "Contact" },
];

export const homeSignals = [
  {
    title: "Systems-minded execution",
    description:
      "I like interfaces that feel calm on the surface because the architecture underneath is deliberate, reusable, and easy to extend.",
  },
  {
    title: "Quality built into delivery",
    description:
      "Testing, observability, and clear component boundaries are part of the design process, not a cleanup pass at the end.",
  },
  {
    title: "Modern product sensibility",
    description:
      "I care about motion, spacing, typography, and narrative so each page feels considered rather than assembled from a template.",
  },
];

export const homeNavigationCards = [
  {
    href: "/about",
    title: "About",
    description: "Background, values, and the way I think about software teams and craft.",
    icon: UserRound,
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Selected work, technical bets, and the problem-solving decisions behind it.",
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
      "A straightforward way to start a conversation about roles, projects, or collaboration.",
    icon: Mail,
  },
];

export const aboutHighlights = [
  "I enjoy turning fuzzy ideas into systems that are readable, testable, and pleasant to work in.",
  "My background in quality engineering sharpened how I think about reliability, edge cases, and long-term maintainability.",
  "I care about the handoff between design and development, especially where interaction details shape trust.",
];

export const projectsHighlights = [
  {
    title: "Reusable foundations",
    description:
      "Designing component systems and page structures that scale without becoming brittle.",
  },
  {
    title: "Testing as product quality",
    description:
      "Using automation and thoughtful guardrails to preserve velocity while keeping behavior dependable.",
  },
  {
    title: "Pragmatic technical decisions",
    description:
      "Balancing polish, maintainability, and delivery speed so the result is both thoughtful and shippable.",
  },
];

export const hobbiesHighlights = [
  {
    title: "Creative tinkering",
    description:
      "I like exploring UI ideas, motion studies, and side experiments that sharpen design intuition.",
    icon: Sparkles,
  },
  {
    title: "Technical curiosity",
    description:
      "I regularly follow tooling, testing, and frontend architecture trends to stay sharp.",
    icon: Code2,
  },
];
