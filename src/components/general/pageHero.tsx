export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
}>) {
  return (
    <section className="basic-panel mt-8 px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
        <div className="space-y-5">
          <p className="font-mono text-[0.72rem] tracking-[0.38em] text-[var(--color-mint)] uppercase">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
            {description}
          </p>
        </div>
        {aside ? (
          <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-5 text-sm leading-7 text-[var(--color-text-muted)] shadow-[0_14px_36px_rgba(0,0,0,0.22)]">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
