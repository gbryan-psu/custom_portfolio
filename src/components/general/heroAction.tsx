import Link from "next/link";
import { actionContent, type actionKey } from "@/lib/content";

export function HeroAction({ contentKey }: Readonly<{ contentKey: actionKey }>) {
  const content = actionContent[contentKey];
  const Icon = content.icon;

  const className = "styled-button transition-all duration-300 hover:-translate-y-0.5";

  if (content.external) {
    return (
      <a href={content.href} target="_blank" rel="noreferrer" className={className}>
        <Icon size={18} aria-hidden="true" />
        {content.label}
      </a>
    );
  }

  return (
    <Link href={content.href} className={className}>
      <Icon size={18} aria-hidden="true" />
      {content.label}
    </Link>
  );
}
