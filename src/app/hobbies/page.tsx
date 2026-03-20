import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { hobbiesHighlights } from "@/content/site";

export default function HobbiesPage() {
  return (
    <PageMain className="pt-8">
      <PageHero
        eyebrow="Hobbies"
        title="A place for the interests and side quests that feed better product instincts."
        description="The strongest portfolios usually show more than output. This page gives you room to add personality through the activities, curiosities, and creative habits that influence how you build."
        aside={
          <div className="space-y-3">
            <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
              Suggested use
            </p>
            <p>Use this page for a few specific interests rather than a long list of everything.</p>
          </div>
        }
      />

      <section className="mt-8 px-6 py-8 sm:px-8">
        <SectionIntro
          eyebrow="Outside of work"
          title="Interests can sharpen engineering judgment too."
          description="Creative play, curiosity, and taste-building often improve how software gets designed. This page is ready for those details."
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
