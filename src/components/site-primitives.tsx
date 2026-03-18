import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}>) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      <p className="font-mono text-[0.72rem] tracking-[0.38em] text-[var(--color-mint)] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">{description}</p>
    </div>
  );
}

export function SignalCard({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <article className="group border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-mint)]/30 hover:shadow-[var(--shadow-panel-hover)]">
      <div className="section-kicker-line mb-4 opacity-90 transition-all duration-500 group-hover:w-24" />
      <h3 className="font-display text-lg font-medium tracking-[-0.03em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
    </article>
  );
}

export function NavigationCard({
  href,
  title,
  description,
  icon: Icon,
}: Readonly<{
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
}>) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-mint)]/38 hover:shadow-[var(--shadow-panel-hover)]"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-black/30 text-[var(--color-mint)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <Icon size={18} />
          </span>
          <ArrowUpRight
            className="text-white/40 transition-colors duration-300 group-hover:text-[var(--color-mint)]"
            size={18}
          />
        </div>
        <div>
          <h3 className="font-display text-xl font-medium tracking-[-0.03em] text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
        </div>
      </div>
      <span className="mt-6 font-mono text-[0.72rem] tracking-[0.32em] text-white/55 uppercase transition-colors duration-300 group-hover:text-[var(--color-mint)]">
        Explore
      </span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
}>) {
  return (
    <section className="basic-panel mt-8 px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
        <div className="space-y-5">
          <p className="font-mono text-[0.72rem] tracking-[0.38em] text-[var(--color-mint)] uppercase">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
            {description}
          </p>
        </div>
        {aside ? (
          <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-5 text-sm leading-7 text-[var(--color-text-muted)] shadow-[0_14px_36px_rgba(0,0,0,0.22)]">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
