import { cn } from "@/lib/utils";

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}>) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
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
