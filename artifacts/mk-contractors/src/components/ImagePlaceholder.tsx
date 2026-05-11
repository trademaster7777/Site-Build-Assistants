import { getPhoto } from "@/lib/photos";

interface ImagePlaceholderProps {
  label: string;
  number?: number;
  className?: string;
  decorative?: boolean;
  fillBlur?: boolean;
}

export function ImagePlaceholder({ label, number, className = "", decorative = false, fillBlur = false }: ImagePlaceholderProps) {
  const src = getPhoto(number);

  if (src) {
    if (fillBlur) {
      return (
        <>
          <img
            src={src}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-70"
          />
          <img
            src={src}
            alt={decorative ? "" : label}
            aria-hidden={decorative || undefined}
            loading="lazy"
            decoding="async"
            className={className}
            data-testid={`image-photo-${number}`}
          />
        </>
      );
    }
    return (
      <img
        src={src}
        alt={decorative ? "" : label}
        aria-hidden={decorative || undefined}
        loading="lazy"
        decoding="async"
        className={className}
        data-testid={`image-photo-${number}`}
      />
    );
  }

  return (
    <div
      className={`relative bg-gradient-to-br from-[#3a3a3c] via-[#2d2d2f] to-[#1c1c1e] flex items-center justify-center p-6 text-center text-sm font-medium text-white/60 ${className}`}
      data-testid={`image-placeholder-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {typeof number === "number" && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-accent text-[#1C1C1E] font-display font-black text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm shadow-lg">
          <span className="text-[10px] tracking-[0.2em] opacity-80">PHOTO</span>
          <span className="text-base leading-none">#{number}</span>
        </div>
      )}
      <div className="flex flex-col items-center gap-3 max-w-[300px]">
        {typeof number === "number" && (
          <span className="font-display font-black text-3xl text-accent/80 tracking-tight leading-none">#{number}</span>
        )}
        <span className="leading-relaxed tracking-wide uppercase text-xs">{label}</span>
      </div>
    </div>
  );
}
