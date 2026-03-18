import Link from "next/link";
import { PageHero, SectionIntro } from "@/components/site-primitives";
import { PageMain } from "@/components/general/pageMain";
import { siteMeta } from "@/content/site";

export default function ContactPage() {
  return (
    <PageMain>
      <PageHero
        eyebrow="Contact"
        title="A direct, low-friction way to start a conversation."
        description="Whether you want to talk about a role, a project, or collaboration, this page is structured to feel intentional now and easy to expand later with social links or a contact form."
        aside={
          <div className="space-y-3">
            <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
              Best fit
            </p>
            <p>
              Teams that care about thoughtful product work, reliable delivery, and strong
              collaboration.
            </p>
          </div>
        }
      />

      <section className="mt-8 px-6 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionIntro
            eyebrow="Reach out"
            title="Simple by design."
            description="This starter page keeps the action clear and gives you a polished place to add more channels later."
          />

          <div className="grid gap-4">
            <article className="border border-[var(--color-mint)]/28 bg-[var(--color-mint)]/8 p-5">
              <p className="font-mono text-[0.68rem] tracking-[0.32em] text-[var(--color-mint)] uppercase">
                Email
              </p>
              <Link
                href={`mailto:${siteMeta.email}`}
                className="mt-3 inline-block font-display text-2xl font-medium tracking-[-0.04em] text-white transition-colors duration-300 hover:text-[var(--color-mint)]"
              >
                {siteMeta.email}
              </Link>
            </article>
            <article className="border border-white/8 bg-black/10 p-5 text-sm leading-7 text-[var(--color-text-muted)]">
              Add LinkedIn, GitHub, scheduling links, or a lightweight form here when you are ready.
              The section styling is already shared with the rest of the site, so those additions
              can stay consistent.
            </article>
          </div>
        </div>
      </section>
    </PageMain>
  );
}
