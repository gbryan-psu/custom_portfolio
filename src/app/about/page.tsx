import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { aboutHighlights } from "@/lib/content";

export default function AboutPage() {
  return (
    <PageMain className="background-effect">
      <PageHero
        eyebrow="About"
        title="Software engineering growth backed by product delivery, automation ownership, and implementation work."
        description="My title is Quality Engineer, but my recent work has moved steadily into implementation. I build React UI, maintain TypeScript automation, improve CI feedback, and contribute directly to features that reach real users."
        aside={
          <div className="space-y-3">
            <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
              Working style
            </p>
            <p>
              Calm collaboration, strong ownership, fast learning, and comfort working across code,
              tests, pipelines, and release decisions.
            </p>
          </div>
        }
      />

      <section className="mt-8 px-8 py-8">
        <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8">
          <SectionIntro
            eyebrow="How I work"
            title="I bring reliability and product thinking into implementation, not just testing."
            description="Working in quality engineering taught me to think beyond the happy path. Release risk, data consistency, authentication flows, performance, and real user behavior all became part of how I approach software. Moving into software engineering has allowed me to apply that mindset earlier in development and help shape more reliable and maintainable products from the start."
          />

          <div>
            {aboutHighlights.map((item, index) => (
              <div key={item}>
                <article className="bg-black/10 px-2 py-2 text-sm leading-7 text-[var(--color-text-muted)]">
                  {item}
                </article>
                {index < aboutHighlights.length - 1 && (
                  <div className="flex items-center justify-center" aria-hidden="true">
                    <div className="section-divider" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageMain>
  );
}
