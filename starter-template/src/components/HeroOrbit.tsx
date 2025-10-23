"use client";
import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="animate-spin [animation-duration:20s]">
        <div
          className="flex items-start justify-start "
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
            willChange: "transform",
          }}
        >
          <div
            className="inline-flex animate-spin"
            style={{
              transform: `rotate(${rotation * -1}deg)`,
              animationDuration: "30s",
              animationTimingFunction: "linear",
              willChange: "transform",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
