import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BackgroundEffects } from "@/components/home/backgroundEffects";
import { PageMain } from "@/components/general/pageMain";
import { SectionIntro } from "@/components/general/sectionIntro";
import { InfoCard } from "@/components/home/infoCard";
import { NavCard } from "@/components/home/navCard";
import { homeNavigationCards, homeSignals, siteMeta } from "@/content/site";

export default function HomePage() {
  return (
    <PageMain>
      <section className="background-effect">
        <BackgroundEffects />
        <div className="relative z-10 mx-auto">
          <div className="main-panel mx-auto w-full max-w-6xl animate-fade-in px-8 py-8 opacity-0">
            <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-end">
              <div className="space-y-10">
                <div className="space-y-10">
                  <div className="flex items-center gap-8">
                    <p className="font-mono text-lg tracking-[0.2em] text-[var(--color-mint)] uppercase">
                      Quality Engineer to Software Engineer
                    </p>
                    <span className="section-kicker-line hidden sm:block" />
                  </div>
                  <h1 className="font-display text-7xl leading-[0.9] font-bold tracking-[-0.06em] text-white">
                    <span className="block text-white/92">
                      Building software with a quality-first
                    </span>
                    <span className="text-gradient block pb-2.5">engineering mindset.</span>
                  </h1>
                </div>

                <p className="text-xl leading-7 text-[var(--color-text-muted)]">
                  I&apos;m {siteMeta.name}, a Quality Engineer transitioning into Software
                  Engineering. At Minitab, I support product teams with React and TypeScript
                  development work, own a shared Playwright automation framework, and investigate
                  real customer and release issues with the same care I bring to code.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects"
                    className="styled-button transition-all duration-300 hover:-translate-y-0.5"
                  >
                    View projects
                  </Link>
                  <Link
                    href="/about"
                    className="reg-button transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              <div className="main-panel space-y-4 p-4">
                <div>
                  <p className="font-mono text-[0.68rem] tracking-[0.32em] text-white/85 uppercase">
                    Focus
                  </p>
                  <p className="py-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    React, TypeScript, Playwright, CI/CD, API validation, App Insights, KQL, and
                    product work that stays reliable after release.
                  </p>
                </div>
                <div className="section-divider" />
                <div>
                  <p className="font-mono text-[0.68rem] tracking-[0.32em] text-white/85 uppercase">
                    In-Development
                  </p>
                  <p className="py-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    Moving intentionally toward Software Engineering through real development tasks,
                    automation ownership, debugging, and personal projects.
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-white/85">
                <span className="h-px w-10 bg-white/16" />
                <span className="font-mono text-[0.68rem] tracking-[0.34em] uppercase">Scroll</span>
                <ArrowDown size={14} className="animate-[y-drift_2s_ease-in-out_infinite]" />
                <span className="h-px w-10 bg-white/16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="overview-panel relative z-10 w-full animate-fade-in p-20 opacity-0">
          <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-20">
            <div className="space-y-8">
              <SectionIntro
                eyebrow="Overview"
                title="Showing why I am ready to step into software engineering."
                description="The goal of this site is to make that transition tangible through real product work, automation ownership, technical problem-solving, and projects that reflect how I build."
              />
              <div className="grid gap-4">
                {homeSignals.map((signal) => (
                  <InfoCard
                    key={signal.title}
                    title={signal.title}
                    description={signal.description}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="font-mono text-[0.72rem] tracking-[0.34em] text-[var(--color-mint)] uppercase">
                  Continue through the site
                </p>
                <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white">
                  Start with the angle that matters most.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {homeNavigationCards.map((card) => (
                  <NavCard
                    key={card.href}
                    href={card.href}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageMain>
  );
}
