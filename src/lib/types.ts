export type Line = {
  top: string;
  left: string;
  width: string;
  rotate: string;
  delay: string;
  mobile?: "hide";
};

export type Shape = {
  kind: "triangle" | "square" | "diamond" | "ring";
  top: string;
  left: string;
  size: string;
  rotate: string;
  delay: string;
  mobile?: "hide";
};

export type Glow = {
  top: string;
  left: string;
  size: string;
  tone: "mint" | "cyan";
  delay: string;
  mobile?: "hide";
};
