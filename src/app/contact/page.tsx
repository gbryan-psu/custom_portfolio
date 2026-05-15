import type { Metadata } from "next";
import Link from "next/link";
import { ContactMessageDialog } from "@/components/general/contactMessageDialog";
import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Gabien Bryan",
  description:
    "Contact Gabien Bryan about Software Engineering opportunities, product engineering work, React, TypeScript, automation, and quality-focused development.",
};

export default function ContactPage() {
  return (
    <PageMain className="background-effect">
      <PageHero
        eyebrow="Contact"
        title="Open to conversations about software engineering roles and product work."
        description="I am looking for Software Engineering opportunities where I can build reliable product software, keep growing across the stack, and bring the ownership, automation experience, and product judgment I have developed as a Quality Engineer."
        action={<ContactMessageDialog />}
        asideKey="contact"
      />

      <section className="mt-8 px-5 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionIntro
            eyebrow="Reach out"
            title="The easiest way to start a conversation."
            description="Email is the best way to reach me directly. LinkedIn has the fuller career timeline, including my Minitab experience, project work, and current move toward Software Engineering."
          />

          <div className="grid gap-4">
            <article className="border border-[var(--color-mint)]/28 bg-[var(--color-mint)]/8 p-5">
              <p className="font-mono text-[0.68rem] tracking-[0.32em] text-[var(--color-mint)] uppercase">
                Email
              </p>
              <Link
                href={`mailto:${siteMeta.email}`}
                className="mt-3 inline-block font-display text-xl font-medium tracking-[-0.04em] break-all text-white transition-colors duration-300 hover:text-[var(--color-mint)] sm:text-2xl"
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
