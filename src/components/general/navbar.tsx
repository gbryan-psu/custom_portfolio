"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteMeta } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-6 lg:px-30">
      <div className="main-panel px-3 py-2 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:py-1.5">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="group min-w-0">
            <div className="font-mono text-[0.62rem] tracking-[0.26em] text-[var(--color-mint)]/80 uppercase sm:text-[0.68rem] sm:tracking-[0.32em]">
              Portfolio
            </div>
            <div className="truncate font-display text-base font-semibold tracking-tight text-white group-hover:text-[var(--color-mint)] sm:text-lg">
              {siteMeta.name}
            </div>
          </Link>

          <button
            type="button"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white/15 bg-white/[0.03] text-white/80 transition hover:border-[var(--color-mint)]/70 hover:bg-[var(--color-mint)]/10 hover:text-[var(--color-mint)] sm:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={18} />
            ) : (
              <Menu aria-hidden="true" size={18} />
            )}
          </button>
        </div>

        <nav className="hidden sm:block sm:w-auto">
          <ul className="flex min-w-max items-center gap-1.5 sm:justify-end sm:gap-2">
            {navItems.map((item) => {
              const isCurrent = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn("nav-button", isCurrent && "nav-button-current")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {isMenuOpen && (
          <nav id="mobile-navigation" className="mt-3 sm:hidden">
            <ul className="grid gap-2">
              {navItems.map((item) => {
                const isCurrent = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "nav-button w-full justify-center",
                        isCurrent && "nav-button-current"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
