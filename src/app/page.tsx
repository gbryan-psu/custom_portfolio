import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { HomeOrnaments } from "@/components/home-ornaments";
import {
  NavigationCard,
  PageFrame,
  Panel,
  SectionIntro,
  SignalCard,
} from "@/components/site-primitives";
import { homeNavigationCards, homeSignals, siteMeta } from "@/content/site";

export default function HomePage() {
  return (
    <PageFrame className="gap-0 pt-8 sm:pt-10">
      <section className="hero-band relative min-h-[calc(100vh-8rem)] overflow-hidden pt-8 pb-10">
        <HomeOrnaments />

        <div className="relative z-10 mx-auto flex min-h-[34rem] items-center py-6">
          <Panel className="hero-panel mx-auto w-full max-w-5xl px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <p className="font-mono text-[0.74rem] tracking-[0.42em] text-[var(--color-mint)] uppercase">
                      {siteMeta.location} / Portfolio
                    </p>
                    <span className="section-kicker-line hidden sm:block" />
                  </div>
                  <h1 className="max-w-3xl font-display text-5xl leading-[0.96] font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
                    <span className="block text-white/92">Building thoughtful, reliable</span>
                    <span className="hero-name block">software experiences.</span>
                  </h1>
                </div>

                <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                  I&apos;m {siteMeta.name}, a software engineer focused on clean systems,
                  maintainable frontends, and product experiences that feel polished from the first
                  interaction to the long tail of maintenance.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex min-h-12 items-center gap-2 border border-[var(--color-mint)]/70 bg-[var(--color-mint)]/14 px-5 py-3 text-sm font-medium tracking-[0.22em] text-white uppercase shadow-[0_18px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-mint)]/20"
                  >
                    View projects
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex min-h-12 items-center border border-white/12 bg-white/[0.02] px-5 py-3 text-sm font-medium tracking-[0.22em] text-white/72 uppercase shadow-[0_16px_36px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-[var(--color-mint)]/50 hover:text-[var(--color-mint)]"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              <div className="space-y-4 border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                <div>
                  <p className="font-mono text-[0.68rem] tracking-[0.32em] text-white/45 uppercase">
                    Focus
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    Frontend architecture, quality-minded delivery, and interfaces that balance
                    clarity with character.
                  </p>
                </div>
                <div className="section-divider" />
                <div>
                  <p className="font-mono text-[0.68rem] tracking-[0.32em] text-white/45 uppercase">
                    Current lens
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    Reusable UI systems, reliable web apps, TypeScript workflows, and thoughtful
                    interaction design.
                  </p>
                </div>
              </div>
            </div>
          </Panel>
        </div>

        <div className="relative z-10 mt-8 flex items-center gap-3 text-white/52">
          <span className="font-mono text-[0.68rem] tracking-[0.34em] uppercase">Scroll</span>
          <span className="h-px w-16 bg-white/16" />
          <ArrowDown size={14} className="animate-[drift_4s_ease-in-out_infinite]" />
        </div>
      </section>

      <section className="overview-band relative py-10 sm:py-12">
        <Panel className="overview-panel relative z-10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-8">
              <SectionIntro
                eyebrow="Overview"
                title="An engineer's portfolio shaped like a guided tour, not a file dump."
                description="The homepage sets the direction, then hands off into focused spaces for background, work, interests, and contact. Informational notes stay distinct from navigation so the page reads clearly on both desktop and mobile."
              />
              <div className="grid gap-4">
                {homeSignals.map((signal) => (
                  <SignalCard
                    key={signal.title}
                    title={signal.title}
                    description={signal.description}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-mono text-[0.72rem] tracking-[0.34em] text-[var(--color-mint)] uppercase">
                  Continue through the site
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                  Choose the angle you want first.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {homeNavigationCards.map((card) => (
                  <NavigationCard
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
        </Panel>
      </section>
    </PageFrame>
  );
}
