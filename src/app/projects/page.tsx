import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { projectsHighlights } from "@/content/site";

export default function ProjectsPage() {
  return (
    <PageMain className="pt-8">
      <PageHero
        eyebrow="Projects"
        title="Selected work, technical decisions, and the foundation for a stronger case-study section."
        description="This page is set up as a starter for project highlights and deeper writeups. It already matches the shared visual system, so adding real case studies later can stay focused on content instead of layout reinvention."
        aside={
          <div className="space-y-3">
            <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
              Next upgrade
            </p>
            <p>
              Add screenshots, metrics, constraints, and architecture notes for each featured build.
            </p>
          </div>
        }
      />

      <section className="mt-8 px-6 py-8 sm:px-8">
        <SectionIntro
          eyebrow="Starter structure"
          title="A clean foundation for turning project bullets into real narratives."
          description="Each section below can grow into a case study module without changing the page's overall rhythm or visual language."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {projectsHighlights.map((item) => (
            <article key={item.title} className="border border-white/8 bg-black/10 p-5">
              <h2 className="font-display text-xl font-medium tracking-[-0.03em] text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageMain>
  );
}
