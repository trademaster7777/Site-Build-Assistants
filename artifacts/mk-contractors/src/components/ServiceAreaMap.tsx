import { useMemo } from "react";
import { geoMercator, geoPath, geoCentroid } from "d3-geo";
import { feature } from "topojson-client";
import countiesTopo from "us-atlas/counties-10m.json";
import { Star } from "lucide-react";

type GeoFeature = {
  type: "Feature";
  id?: string | number;
  geometry: any;
  properties: { name?: string; [k: string]: unknown };
};

const PA_FIPS = "42";

const SERVED_COUNTIES: Record<string, string> = {
  "42011": "Berks",
  "42017": "Bucks",
  "42029": "Chester",
  "42045": "Delaware",
  "42077": "Lehigh",
  "42091": "Montgomery",
  "42095": "Northampton",
  "42101": "Philadelphia",
};

const HQ = { name: "Hatfield, PA", lon: -75.2974, lat: 40.2807 };

const WIDTH = 900;
const HEIGHT = 540;

export function ServiceAreaMap() {
  const { paCounties, projection } = useMemo(() => {
    const topo = countiesTopo as any;
    const allCounties = feature(topo, topo.objects.counties) as any;

    const paCounties = (allCounties.features as GeoFeature[]).filter(
      (f) => String(f.id).startsWith(PA_FIPS),
    );

    const paState: any = {
      type: "Feature",
      geometry: {
        type: "GeometryCollection",
        geometries: paCounties.map((c) => c.geometry),
      },
      properties: { name: "Pennsylvania" },
    };

    const proj = geoMercator().fitExtent(
      [
        [40, 30],
        [WIDTH - 40, HEIGHT - 30],
      ],
      paState,
    );

    return { paCounties, projection: proj };
  }, []);

  const path = useMemo(() => geoPath(projection), [projection]);

  const hqPoint = projection([HQ.lon, HQ.lat]);

  const labelPositions = useMemo(() => {
    return Object.keys(SERVED_COUNTIES)
      .map((fips) => {
        const f = paCounties.find((c: GeoFeature) => String(c.id) === fips);
        if (!f) return null;
        const centroid = geoCentroid(f as any);
        const projected = projection(centroid);
        if (!projected) return null;
        return {
          fips,
          name: SERVED_COUNTIES[fips],
          x: projected[0],
          y: projected[1],
        };
      })
      .filter(Boolean) as Array<{ fips: string; name: string; x: number; y: number }>;
  }, [paCounties, projection]);

  const labelOffsets: Record<string, { dx: number; dy: number; anchor: "start" | "end" | "middle" }> = {
    "42011": { dx: -10, dy: 0, anchor: "end" },
    "42017": { dx: 18, dy: 22, anchor: "start" },
    "42029": { dx: -10, dy: 14, anchor: "end" },
    "42045": { dx: 8, dy: 18, anchor: "start" },
    "42077": { dx: -10, dy: -4, anchor: "end" },
    "42091": { dx: -12, dy: 14, anchor: "end" },
    "42095": { dx: 12, dy: -8, anchor: "start" },
    "42101": { dx: 18, dy: 12, anchor: "start" },
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#1C1C1E] via-[#212124] to-[#1C1C1E] overflow-hidden subtle-noise">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 60%, rgba(255,184,0,0.5) 0%, transparent 45%)",
        }}
      />

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-label="M&K Contractors Pennsylvania service area map"
      >
        <defs>
          <linearGradient id="srvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FF9500" stopOpacity="0.85" />
          </linearGradient>
          <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hqGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paCounties.map((county: GeoFeature) => {
          const fips = String(county.id);
          const isServed = fips in SERVED_COUNTIES;
          const d = path(county as any);
          if (!d) return null;
          return (
            <path
              key={fips}
              d={d}
              fill={isServed ? "url(#srvGrad)" : "#26262a"}
              stroke={isServed ? "#FFB800" : "#3a3a3c"}
              strokeWidth={isServed ? 0.9 : 0.5}
              strokeLinejoin="round"
            />
          );
        })}

        <path
          d={path({
            type: "FeatureCollection",
            features: paCounties,
          } as any) || ""}
          fill="none"
          stroke="#FFB800"
          strokeWidth={1.5}
          strokeOpacity={0.7}
          strokeLinejoin="round"
        />

        {labelPositions.map(({ fips, x, y }) => (
          <g key={`pin-${fips}`} filter="url(#pinGlow)">
            <circle cx={x} cy={y} r="4.5" fill="#1C1C1E" stroke="#FFB800" strokeWidth="1.8" />
            <circle cx={x} cy={y} r="1.8" fill="#FFB800" />
          </g>
        ))}

        {hqPoint && (
          <g filter="url(#hqGlow)">
            <circle cx={hqPoint[0]} cy={hqPoint[1]} r="12" fill="#1C1C1E" stroke="#FFB800" strokeWidth="2.5" />
            <path
              transform={`translate(${hqPoint[0]} ${hqPoint[1]})`}
              d="M 0 -7 L 2.1 -2.2 L 7.3 -2.2 L 3.1 1.0 L 4.7 6 L 0 3 L -4.7 6 L -3.1 1.0 L -7.3 -2.2 L -2.1 -2.2 Z"
              fill="#FFB800"
            />
          </g>
        )}

        {labelPositions.map(({ fips, name, x, y }) => {
          const offset = labelOffsets[fips] ?? { dx: 0, dy: -10, anchor: "middle" };
          return (
            <g key={`label-${fips}`}>
              <text
                x={x + offset.dx}
                y={y + offset.dy}
                textAnchor={offset.anchor}
                dominantBaseline="middle"
                fontSize="11"
                fontWeight="700"
                fontFamily="Montserrat, sans-serif"
                fill="#FFFFFF"
                stroke="#1C1C1E"
                strokeWidth="3.5"
                strokeLinejoin="round"
                paintOrder="stroke fill"
                style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}
              >
                {name}
              </text>
            </g>
          );
        })}

        {hqPoint && (
          <g>
            <rect
              x={hqPoint[0] - 60}
              y={hqPoint[1] - 38}
              width="120"
              height="22"
              rx="2"
              fill="#FFB800"
              filter="url(#pinGlow)"
            />
            <text
              x={hqPoint[0]}
              y={hqPoint[1] - 26}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontWeight="800"
              fontFamily="Montserrat, sans-serif"
              fill="#1C1C1E"
              style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              HATFIELD HQ
            </text>
            <path
              d={`M ${hqPoint[0] - 5} ${hqPoint[1] - 16} L ${hqPoint[0] + 5} ${hqPoint[1] - 16} L ${hqPoint[0]} ${hqPoint[1] - 11} Z`}
              fill="#FFB800"
            />
          </g>
        )}
      </svg>

      <div className="absolute bottom-4 left-5 flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-accent" />
          <span>Service Area</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-3 h-3 text-accent fill-current" />
          <span>Headquarters</span>
        </div>
      </div>
      <div className="absolute top-4 right-5 text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold">
        Commonwealth of Pennsylvania
      </div>
    </div>
  );
}
