"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import ScrollProgress from "@/components/ui/scroll-progress";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <ScrollProgress />
      {children}
    </ReactLenis>
  );
}
