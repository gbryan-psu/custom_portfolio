import type { LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type Line = {
  top: string;
  left: string;
  width: string;
  rotate: string;
  delay: string;
  mobile?: "hide";
};

export type AmbientIconName =
  | "monitor"
  | "computer"
  | "mouse"
  | "keyboard"
  | "code"
  | "cpu";

export type AmbientIcon = {
  kind: AmbientIconName;
  icon: LucideIcon;
  top: string;
  left: string;
  size: string;
  rotate: string;
  delay: string;
  mobile?: "hide";
};

export type Glow = {
  top: string;
  left: string;
  size: string;
  tone: "mint" | "cyan";
  delay: string;
  mobile?: "hide";
};
