"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteMeta } from "@/content/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-2 sm:px-30">
      <div className="main-panel flex items-center justify-between gap-6 px-3 py-1.5">
        <Link href="/" className="group">
          <div className="font-mono text-[0.68rem] tracking-[0.32em] text-[var(--color-mint)]/80 uppercase">
            Portfolio
          </div>
          <div className="font-display text-lg font-semibold tracking-tight text-white group-hover:text-[var(--color-mint)]">
            {siteMeta.name}
          </div>
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center justify-end gap-2">
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
