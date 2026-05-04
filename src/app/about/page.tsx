import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { aboutHighlights } from "@/content/site";

export default function AboutPage() {
  return (
    <PageMain className="background-effect">
      <PageHero
        eyebrow="About"
        title="A Quality Engineer moving into Software Engineering through product work I can point to."
        description="My path is practical and honest: my title is Quality Engineer, but my day-to-day work has expanded into building features, improving developer workflows, maintaining automation systems, and helping teams ship with confidence."
        aside={
          <div className="space-y-3">
            <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
              Working style
            </p>
            <p>
              Calm collaboration, strong ownership, fast learning, and a habit of making software
              easier to test, debug, and extend.
            </p>
          </div>
        }
      />

      <section className="mt-8 px-8 py-8">
        <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8">
          <SectionIntro
            eyebrow="How I work"
            title="I bring reliability thinking into implementation, not just verification."
            description="Quality engineering taught me to look past the happy path: data sync, authentication, performance, release risk, production behavior, and what users actually experience. Software engineering lets me apply that judgment earlier, while the product is still being shaped."
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
