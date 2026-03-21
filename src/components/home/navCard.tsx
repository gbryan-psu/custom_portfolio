import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export function NavCard({
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
