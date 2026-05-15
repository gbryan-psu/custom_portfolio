import type { Metadata } from "next";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { hobbiesHighlights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hobbies | Gabien Bryan",
  description:
    "A personal look at Gabien Bryan's hobbies, including baseball, golf, video games, and early game development interests outside of work.",
};

export default function HobbiesPage() {
  return (
    <PageMain className="background-effect">
      <section className="mt-8 px-6 py-8 sm:px-8">
        <SectionIntro
          eyebrow="Hobbies"
          title="Sports, games, and the hobbies that fill my time outside work."
          description="This page is a more personal look at the hobbies I have spent the most time with, the ones I am picking up now, and the projects I am excited to explore next."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {hobbiesHighlights.map(({ title, description, icon: Icon }) => (
            <article key={title} className="border border-white/8 bg-black/10 p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-black/20 text-[var(--color-mint)]">
                <Icon size={18} />
              </div>
              <h2 className="mt-4 font-display text-xl font-medium tracking-[-0.03em] text-white">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageMain>
  );
}
