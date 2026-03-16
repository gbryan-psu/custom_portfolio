import type { CSSProperties } from "react";

export function HomeOrnaments() {
  const lines = [
    { top: "10%", left: "-4%", width: "38rem", rotate: "-14deg", delay: "0.2s" },
    { top: "21%", left: "62%", width: "26rem", rotate: "26deg", delay: "0.45s" },
    { top: "48%", left: "-2%", width: "22rem", rotate: "18deg", delay: "0.58s" },
    {
      top: "63%",
      left: "46%",
      width: "33rem",
      rotate: "-30deg",
      delay: "0.72s",
      mobile: "hide",
    },
    {
      top: "74%",
      left: "8%",
      width: "24rem",
      rotate: "-8deg",
      delay: "0.84s",
      mobile: "hide",
    },
  ];

  const shapes = [
    { kind: "triangle", top: "12%", left: "10%", size: "5.75rem", rotate: "22deg", delay: "0.5s" },
    {
      kind: "square",
      top: "10%",
      left: "76%",
      size: "5rem",
      rotate: "-18deg",
      delay: "0.35s",
      mobile: "hide",
    },
    {
      kind: "diamond",
      top: "54%",
      left: "8%",
      size: "4.25rem",
      rotate: "-28deg",
      delay: "0.68s",
    },
    {
      kind: "ring",
      top: "26%",
      left: "70%",
      size: "6.2rem",
      rotate: "34deg",
      delay: "0.9s",
      mobile: "hide",
    },
    {
      kind: "triangle",
      top: "68%",
      left: "82%",
      size: "4.8rem",
      rotate: "216deg",
      delay: "1.02s",
      mobile: "hide",
    },
  ] as const;

  const glows = [
    { top: "18%", left: "24%", size: "11rem", tone: "mint", delay: "0.25s" },
    {
      top: "30%",
      left: "72%",
      size: "15rem",
      tone: "cyan",
      delay: "0.45s",
      mobile: "hide",
    },
  ] as const;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((line) => (
        <div
          key={`${line.top}-${line.left}-${line.width}`}
          className="ambient-line"
          data-mobile={line.mobile}
          style={
            {
              "--line-top": line.top,
              "--line-left": line.left,
              "--line-width": line.width,
              "--line-rotate": line.rotate,
              animationDelay: line.delay,
            } as CSSProperties
          }
        />
      ))}
      {shapes.map((shape) => (
        <div
          key={`${shape.kind}-${shape.top}-${shape.left}`}
          className="ambient-shape"
          data-kind={shape.kind}
          data-mobile={shape.mobile}
          style={
            {
              "--shape-top": shape.top,
              "--shape-left": shape.left,
              "--shape-size": shape.size,
              "--shape-rotate": shape.rotate,
              animationDelay: shape.delay,
            } as CSSProperties
          }
        />
      ))}
      {glows.map((glow) => (
        <div
          key={`${glow.top}-${glow.left}-${glow.tone}`}
          className="ambient-glow"
          data-tone={glow.tone}
          data-mobile={glow.mobile}
          style={
            {
              "--glow-top": glow.top,
              "--glow-left": glow.left,
              "--glow-size": glow.size,
              animationDelay: glow.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
