import type { Metadata } from "next";
import { PageHero } from "@/components/general/pageHero";
import { SectionIntro } from "@/components/general/sectionIntro";
import { PageMain } from "@/components/general/pageMain";
import { projectsHighlights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects | Gabien Bryan",
  description:
    "Explore Gabien Bryan's portfolio projects across Next.js, React, TypeScript, Playwright automation, CI/CD, product UI work, and embedded systems.",
};

export default function ProjectsPage() {
  return (
    <PageMain className="background-effect">
      <PageHero
        eyebrow="Projects"
        title="Projects that reflect my passion for building reliable systems, thoughtful interfaces, and useful tools."
        description="My work spans frontend development, reusable automation systems, CI/CD improvements, and embedded systems. These projects reflect the kind of practical, reliable, user-minded engineering work I enjoy most."
        actionKey="github"
        asideKey="projects"
      />

      <section className="mt-8 px-6 py-8 sm:px-8">
        <SectionIntro
          eyebrow="What I build"
          title="Practical projects shaped by curiosity, reliability, and real technical ownership."
          description="This work brings together the areas I enjoy growing in most, including TypeScript, React, reusable systems, automation, CI/CD, and practical debugging."
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
