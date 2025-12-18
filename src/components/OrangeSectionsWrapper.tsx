"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamically import to avoid SSR issues with react-simple-maps
const DottedWorldMap = dynamic(() => import("./DottedWorldMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

interface OrangeSectionsWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component that provides a single world map background
 * spanning across the red sections (Stats benefits, CTA, Footer)
 * Color distribution: 60% black, 20% red, 15% orange, 5% white
 */
export default function OrangeSectionsWrapper({ children }: OrangeSectionsWrapperProps) {
  return (
    <div className="relative">
      {/* Single World Map Background - red for 20% color distribution */}
      <div className="absolute inset-0 bg-red overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-40">
          <DottedWorldMap />
        </div>
      </div>

      {/* Content sections */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
