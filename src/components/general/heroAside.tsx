import { asideContent, type asideKey } from "@/lib/content";

export function Aside({ contentKey }: Readonly<{ contentKey: asideKey }>) {
  const content = asideContent[contentKey];

  return (
    <aside className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-5 text-sm leading-7 text-[var(--color-text-muted)] shadow-[0_14px_36px_rgba(0,0,0,0.22)]">
      <div className="space-y-3">
        <p className="font-mono text-[0.72rem] tracking-[0.34em] text-white/45 uppercase">
          {content.eyebrow}
        </p>
        <p>{content.description}</p>
      </div>
    </aside>
  );
}
