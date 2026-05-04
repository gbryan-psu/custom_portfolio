import type { CSSProperties } from "react";
import { Code2, Computer, Cpu, Keyboard, Monitor, Mouse } from "lucide-react";
import { AmbientIcon, Glow, Line } from "@/lib/types";

export function BackgroundEffects() {
  const lines: Line[] = [
    { top: "15%", left: "-4%", width: "40rem", rotate: "-14deg", delay: "1s" },
    { top: "27%", left: "16%", width: "30rem", rotate: "-10deg", delay: "5s" },
    { top: "35%", left: "6%", width: "26rem", rotate: "18deg", delay: "7s" },
    { top: "55%", left: "-2%", width: "32rem", rotate: "30deg", delay: "4s" },
    { top: "90%", left: "10%", width: "38rem", rotate: "-20deg", delay: "1s" },
    { top: "21%", left: "56%", width: "26rem", rotate: "40deg", delay: "0s" },
    { top: "30%", left: "52%", width: "33rem", rotate: "-36deg", delay: "6s" },
    { top: "42%", left: "76%", width: "26rem", rotate: "22deg", delay: "0s" },
    { top: "63%", left: "66%", width: "33rem", rotate: "-24deg", delay: "8s" },
    { top: "75%", left: "48%", width: "26rem", rotate: "26deg", delay: "9s" },
    { top: "90%", left: "68%", width: "33rem", rotate: "-30deg", delay: "1s" },
  ];

  const icons: AmbientIcon[] = [
    {
      kind: "monitor",
      icon: Monitor,
      top: "12%",
      left: "15%",
      size: "5.75rem",
      rotate: "22deg",
      delay: "1s",
    },
    {
      kind: "computer",
      icon: Computer,
      top: "10%",
      left: "90%",
      size: "5rem",
      rotate: "-18deg",
      delay: "0s",
    },
    {
      kind: "mouse",
      icon: Mouse,
      top: "54%",
      left: "8%",
      size: "4.25rem",
      rotate: "-28deg",
      delay: "8s",
    },
    {
      kind: "keyboard",
      icon: Keyboard,
      top: "17%",
      left: "55%",
      size: "6.2rem",
      rotate: "34deg",
      delay: "5s",
    },
    {
      kind: "code",
      icon: Code2,
      top: "68%",
      left: "94%",
      size: "4.8rem",
      rotate: "216deg",
      delay: "3s",
    },
    {
      kind: "cpu",
      icon: Cpu,
      top: "77%",
      left: "35%",
      size: "4.6rem",
      rotate: "-12deg",
      delay: "6s",
    },
  ] as const;

  const glows: Glow[] = [
    { top: "85%", left: "80%", size: "25rem", tone: "mint", delay: "0.15s" },
    {
      top: "80%",
      left: "15%",
      size: "15rem",
      tone: "cyan",
      delay: "2s",
      mobile: "hide",
    },
  ] as const;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 flex overflow-hidden">
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
              "--set-rotate": line.rotate,
              animationDelay: line.delay,
            } as CSSProperties
          }
        />
      ))}
      {icons.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={`${item.kind}-${item.top}-${item.left}`}
            className="ambient-icon"
            data-kind={item.kind}
            data-mobile={item.mobile}
            style={
              {
                "--icon-top": item.top,
                "--icon-left": item.left,
                "--icon-size": item.size,
                "--set-rotate": item.rotate,
                animationDelay: item.delay,
              } as CSSProperties
            }
          >
            <Icon className="ambient-icon-svg" strokeWidth={1.4} aria-hidden />
          </div>
        );
      })}
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
