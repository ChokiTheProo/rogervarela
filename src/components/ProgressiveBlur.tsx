import { CSSProperties } from "react";

const BLUR_VALUES = [0.25, 0.5, 1, 2, 4, 8, 16, 32];

const MASK_STOPS: Array<[number, number, number, number]> = [
  [0, 12.5, 25, 37.5],
  [12.5, 25, 37.5, 50],
  [25, 37.5, 50, 62.5],
  [37.5, 50, 62.5, 75],
  [50, 62.5, 75, 87.5],
  [62.5, 75, 87.5, 100],
  [75, 87.5, 100, 100],
  [87.5, 100, 100, 100],
];

function buildMask([a, b, c, d]: [number, number, number, number]) {
  return `linear-gradient(to bottom, rgba(0,0,0,0) ${a}%, rgba(0,0,0,1) ${b}%, rgba(0,0,0,1) ${c}%, rgba(0,0,0,0) ${d}%)`;
}

const containerStyle: CSSProperties = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "200px",
  zIndex: 999,
  pointerEvents: "none",
};

export function ProgressiveBlur() {
  return (
    <div style={containerStyle} aria-hidden="true">
      {BLUR_VALUES.map((blur, i) => {
        const mask = buildMask(MASK_STOPS[i]);
        const layerStyle: CSSProperties = {
          position: "absolute",
          inset: 0,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          maskImage: mask,
          WebkitMaskImage: mask,
        };
        return <div key={i} style={layerStyle} />;
      })}
    </div>
  );
}

export default ProgressiveBlur;
