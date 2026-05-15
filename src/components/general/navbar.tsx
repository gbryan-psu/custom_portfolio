"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteMeta } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-6 lg:px-30">
      <div className="main-panel flex flex-col gap-2 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-1.5">
        <Link href="/" className="group min-w-0">
          <div className="font-mono text-[0.62rem] tracking-[0.26em] text-[var(--color-mint)]/80 uppercase sm:text-[0.68rem] sm:tracking-[0.32em]">
            Portfolio
          </div>
          <div className="truncate font-display text-base font-semibold tracking-tight text-white group-hover:text-[var(--color-mint)] sm:text-lg">
            {siteMeta.name}
          </div>
        </Link>

        <nav className="w-full overflow-x-auto sm:w-auto">
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
      </div>
    </header>
  );
}
