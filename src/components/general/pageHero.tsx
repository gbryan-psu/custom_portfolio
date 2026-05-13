import { Aside } from "@/components/general/heroAside";
import { HeroAction } from "@/components/general/heroAction";
import { type actionKey, type asideKey } from "@/lib/content";

export function PageHero({
  eyebrow,
  title,
  description,
  actionKey,
  action,
  asideKey,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  actionKey?: actionKey;
  action?: React.ReactNode;
  asideKey?: asideKey;
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
          {actionKey ? (
            <div className="pt-2">
              <HeroAction contentKey={actionKey} />
            </div>
          ) : null}
          {action ? <div className="pt-2">{action}</div> : null}
        </div>
        {asideKey ? <Aside contentKey={asideKey} /> : null}
      </div>
    </section>
  );
}
