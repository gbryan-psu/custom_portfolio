import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { hobbiesHighlights } from "@/lib/content";

export default function HobbiesPage() {
  return (
    <PageMain className="background-effect">
      <PageHero
        eyebrow="Hobbies"
        title="The curiosity outside the role that keeps the engineering work moving."
        description="Personal projects give me room to practice the software engineering skills I am building toward: frontend polish, reusable components, interaction details, and the patience to keep iterating until something feels right."
        asideKey="hobbies"
      />

      <section className="mt-8 px-6 py-8 sm:px-8">
        <SectionIntro
          eyebrow="Outside of work"
          title="Side projects make the transition more concrete."
          description="They let me practice the skills I want to use every day while giving future teams something real to evaluate beyond a resume."
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
