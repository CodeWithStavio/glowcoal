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
 * spanning across all orange sections (Stats benefits, CTA, Footer)
 */
export default function OrangeSectionsWrapper({ children }: OrangeSectionsWrapperProps) {
  return (
    <div className="relative">
      {/* Single World Map Background - spans all orange sections */}
      <div className="absolute inset-0 bg-orange overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-60">
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
