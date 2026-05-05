export function InfoCard({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <article className="group border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-mint)]/30 hover:shadow-[var(--shadow-panel-hover)]">
      <div className="flex items-center gap-5 font-display text-lg font-medium tracking-[-0.03em] text-white">
        <h3 className="block text-[var(--color-mint)]">{title}</h3>
        <span className="section-kicker-line block" />
      </div>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{description}</p>
    </article>
  );
}
