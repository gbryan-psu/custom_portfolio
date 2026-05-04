import Link from "next/link";
import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { siteMeta } from "@/content/site";

export default function ContactPage() {
  return (
    <PageMain className="background-effect">
      <PageHero
        eyebrow="Contact"
        title="Open to Software Engineering conversations."
        description="I am looking for Software Engineering opportunities where I can build product software, keep growing in React and TypeScript, and bring the reliability, automation, and customer-facing judgment I developed as a Quality Engineer."
        aside={
          <div className="space-y-3">
            <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
              Best fit
            </p>
            <p>
              Teams that value thoughtful product work, reliable delivery, TypeScript, React,
              automation, and strong collaboration between development and quality.
            </p>
          </div>
        }
      />

      <section className="mt-8 px-8 py-8">
        <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8">
          <SectionIntro
            eyebrow="Reach out"
            title="Let's talk about the next engineering step."
            description="Email is the easiest way to reach me. LinkedIn has the fuller career timeline, including my Minitab experience and current Software Engineering transition."
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
              <p className="font-mono text-[0.68rem] tracking-[0.32em] text-white/45 uppercase">
                LinkedIn
              </p>
              <Link
                href={siteMeta.linkedIn}
                className="mt-3 inline-block font-display text-2xl font-medium tracking-[-0.04em] text-white transition-colors duration-300 hover:text-[var(--color-mint)]"
              >
                Gabien Bryan
              </Link>
            </article>
          </div>
        </div>
      </section>
    </PageMain>
  );
}
