export function SectionIntro({
  eyebrow,
  title,
  description,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <p className="font-mono text-[0.72rem] tracking-[0.38em] text-[var(--color-mint)] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">{description}</p>
    </div>
  );
}
