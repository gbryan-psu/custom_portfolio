export function InfoCard({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <article className="group border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-mint)]/30 hover:shadow-[var(--shadow-panel-hover)]">
      <div className="section-kicker-line mb-4 opacity-90 transition-all duration-500 group-hover:w-24" />
      <h3 className="font-display text-lg font-medium tracking-[-0.03em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
    </article>
  );
}
