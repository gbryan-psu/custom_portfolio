import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { projectsHighlights } from "@/content/site";

export default function ProjectsPage() {
  return (
    <PageMain className="background-effect">
      <PageHero
        eyebrow="Projects"
        title="Projects that show the bridge from quality ownership to software engineering."
        description="My work spans frontend development, reusable automation systems, CI/CD improvements, backend integration support, and embedded systems. I am especially interested in projects where maintainable code, reliable behavior, and user experience all matter at once."
        aside={
          <div className="space-y-3">
            <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
              Current goal
            </p>
            <p>
              Keep growing these into deeper case studies with architecture notes, screenshots,
              constraints, and measurable outcomes.
            </p>
          </div>
        }
      />

      <section className="mt-8 px-6 py-8 sm:px-8">
        <SectionIntro
          eyebrow="Selected work"
          title="Specific work with clear technical ownership."
          description="These projects highlight the skills I want to keep growing in a Software Engineering role: TypeScript, React, reusable systems, automation, CI/CD, API integration, and practical debugging."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {projectsHighlights.map((item) => (
            <article key={item.title} className="border border-white/8 bg-black/10 p-5">
              <h2 className="font-display text-xl font-medium tracking-[-0.03em] text-white">
                {item.title}
              </h2>
              <p className="mt-2 font-mono text-[0.68rem] tracking-[0.24em] text-[var(--color-mint)] uppercase">
                {item.tech}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {item.description}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {item.details.map((detail) => (
                  <li key={detail} className="border-l border-white/12 pl-4">
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageMain>
  );
}
