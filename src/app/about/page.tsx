import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { aboutHighlights } from "@/content/site";

export default function AboutPage() {
  return (
    <PageMain className="background-effect">
      <PageHero
        eyebrow="About"
        title="A systems-minded engineer who cares about craft, clarity, and the people maintaining the code next."
        description="I like building web experiences that feel refined to users and straightforward to evolve for teams. My approach combines strong frontend instincts with a quality engineering background, which means I naturally think about resilience, edge cases, and sustainable architecture."
        aside={
          <div className="space-y-3">
            <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
              Working style
            </p>
            <p>
              Calm collaboration, strong ownership, and a preference for reusable systems over
              one-off heroics.
            </p>
          </div>
        }
      />

      <section className="basic-panel mt-8 px-6 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionIntro
            eyebrow="How I work"
            title="I try to make software easier to trust."
            description="That shows up in code structure, in the way interfaces are introduced, and in how delivery practices support confidence instead of slowing momentum down."
          />

          <div className="grid gap-4">
            {aboutHighlights.map((item) => (
              <article
                key={item}
                className="border border-white/8 bg-black/10 p-5 text-sm leading-7 text-[var(--color-text-muted)]"
              >
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageMain>
  );
}
