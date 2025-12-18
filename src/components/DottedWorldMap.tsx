"use client";

import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

// TopoJSON world map URL (free, no API key needed)
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface DottedWorldMapProps {
  // Customize map appearance
  mapFillColor?: string;
  mapStrokeColor?: string;
  className?: string;
}

/**
 * DottedWorldMap - Renders a stylized world map
 * Uses react-simple-maps with TopoJSON data
 */
function DottedWorldMap({
  mapFillColor = "rgba(0, 0, 0, 0.08)",
  mapStrokeColor = "rgba(0, 0, 0, 0.15)",
  className = "",
}: DottedWorldMapProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [40, 30], // Centered more towards Middle East/Syria
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // Highlight Syria (country code SYR)
              const isSyria = geo.properties.name === "Syria";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isSyria ? "rgba(0, 0, 0, 0.25)" : mapFillColor}
                  stroke={mapStrokeColor}
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(DottedWorldMap);
