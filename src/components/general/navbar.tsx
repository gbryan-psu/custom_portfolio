"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteMeta } from "@/content/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border border-white/12 bg-[rgba(12,12,12,0.84)] px-4 py-3 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6">
        <Link href="/" className="group min-w-0">
          <div className="font-mono text-[0.68rem] tracking-[0.32em] text-[var(--color-mint)]/80 uppercase">
            Portfolio
          </div>
          <div className="truncate font-display text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--color-mint)]">
            {siteMeta.name}
          </div>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex min-h-11 items-center justify-center border px-3 py-2 text-sm font-medium tracking-[0.18em] uppercase transition-all duration-300",
                      item.special
                        ? "border-[var(--color-mint)]/70 bg-[var(--color-mint)]/10 text-[var(--color-mint)] shadow-[inset_0_0_0_1px_rgba(124,255,221,0.15),0_12px_30px_rgba(0,0,0,0.28)] hover:bg-[var(--color-mint)]/16 hover:text-white"
                        : "border-white/10 bg-white/[0.03] text-white/76 shadow-[0_10px_24px_rgba(0,0,0,0.2)] hover:border-[var(--color-mint)]/50 hover:text-[var(--color-mint)]",
                      isActive &&
                        (item.special
                          ? "bg-[var(--color-mint)]/16 text-white"
                          : "border-[var(--color-mint)]/40 text-[var(--color-mint)]")
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
