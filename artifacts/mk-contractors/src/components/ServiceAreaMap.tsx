import { Star } from "lucide-react";

const counties = [
  { name: "Northampton", x: 712, y: 232 },
  { name: "Lehigh", x: 660, y: 252 },
  { name: "Berks", x: 588, y: 308 },
  { name: "Montgomery", x: 700, y: 302 },
  { name: "Bucks", x: 768, y: 282 },
  { name: "Chester", x: 668, y: 360 },
  { name: "Delaware", x: 740, y: 372 },
];

const HQ = { name: "Hatfield, PA", x: 712, y: 290 };

export function ServiceAreaMap() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#1C1C1E] via-[#212124] to-[#1C1C1E] overflow-hidden subtle-noise">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'radial-gradient(circle at 75% 45%, rgba(255,184,0,0.4) 0%, transparent 45%)'
      }} />

      <svg
        viewBox="0 0 900 540"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-label="M&K Contractors Pennsylvania service area map"
      >
        <defs>
          <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF9500" stopOpacity="0.75" />
          </linearGradient>
          <radialGradient id="serviceGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
          </radialGradient>
          <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="700" cy="310" rx="180" ry="140" fill="url(#serviceGlow)" />

        <path
          d="M 130 180 L 215 175 L 240 165 L 245 155 L 260 152 L 265 168 L 285 172 L 360 175 L 460 175 L 540 178 L 620 180 L 700 185 L 770 195 L 805 220 L 808 245 L 798 270 L 780 285 L 770 305 L 762 330 L 745 355 L 730 380 L 705 400 L 680 410 L 650 400 L 620 390 L 580 395 L 540 405 L 500 410 L 460 408 L 420 405 L 380 400 L 340 395 L 300 390 L 260 388 L 220 386 L 180 380 L 150 370 L 130 350 L 122 320 L 120 290 L 122 260 L 125 220 Z"
          fill="#26262a"
          stroke="#3a3a3c"
          strokeWidth="1.5"
        />

        <path
          d="M 580 180 L 620 180 L 700 185 L 770 195 L 805 220 L 808 245 L 798 270 L 780 285 L 770 305 L 762 330 L 745 355 L 730 380 L 705 400 L 680 410 L 650 400 L 620 390 L 595 380 L 580 360 L 575 330 L 580 300 L 585 270 L 588 240 L 585 210 Z"
          fill="url(#serviceGrad)"
          stroke="#FFB800"
          strokeWidth="1.5"
        />

        <g stroke="#FFB800" strokeWidth="0.8" opacity="0.4" fill="none">
          <path d="M 580 220 L 770 230" />
          <path d="M 585 270 L 760 280" />
          <path d="M 580 320 L 750 330" />
          <path d="M 595 370 L 730 380" />
          <path d="M 640 185 L 645 405" />
          <path d="M 700 188 L 700 410" />
          <path d="M 750 195 L 745 405" />
        </g>

        {counties.map((c) => (
          <g key={c.name} filter="url(#pinGlow)">
            <circle cx={c.x} cy={c.y} r="6" fill="#1C1C1E" stroke="#FFB800" strokeWidth="2" />
            <circle cx={c.x} cy={c.y} r="2.5" fill="#FFB800" />
          </g>
        ))}

        <g filter="url(#pinGlow)">
          <circle cx={HQ.x} cy={HQ.y} r="14" fill="#1C1C1E" stroke="#FFB800" strokeWidth="2.5" />
          <path
            d="M 712 280 L 715 287 L 723 287 L 716 292 L 719 300 L 712 295 L 705 300 L 708 292 L 701 287 L 709 287 Z"
            fill="#FFB800"
          />
        </g>
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        {counties.map((c) => (
          <div
            key={c.name}
            className="absolute font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-white/85 whitespace-nowrap"
            style={{
              left: `${(c.x / 900) * 100}%`,
              top: `${(c.y / 540) * 100}%`,
              transform: c.name === "Bucks" || c.name === "Delaware"
                ? "translate(14px, -50%)"
                : c.name === "Berks"
                ? "translate(-100%, -50%) translateX(-12px)"
                : c.name === "Lehigh"
                ? "translate(-100%, -50%) translateX(-12px)"
                : "translate(-50%, -28px)",
            }}
          >
            <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-sm border border-accent/25">
              {c.name}
            </span>
          </div>
        ))}
        <div
          className="absolute"
          style={{
            left: `${(HQ.x / 900) * 100}%`,
            top: `${(HQ.y / 540) * 100}%`,
            transform: "translate(20px, -50%)",
          }}
        >
          <div className="bg-accent text-[#1C1C1E] px-3 py-1.5 rounded-sm shadow-[0_4px_20px_rgba(255,184,0,0.4)] flex items-center gap-1.5">
            <Star className="w-3 h-3 fill-current" />
            <span className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] whitespace-nowrap">
              Hatfield, PA — HQ
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
        <span className="w-3 h-3 bg-accent rounded-sm" />
        Active Service Area
      </div>
      <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">
        Pennsylvania, USA
      </div>
    </div>
  );
}
