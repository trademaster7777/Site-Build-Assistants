interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-[#3a3a3c] via-[#2d2d2f] to-[#1c1c1e] flex items-center justify-center p-6 text-center text-sm font-medium text-white/50 ${className}`}
      data-testid={`image-placeholder-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <span className="max-w-[280px] leading-relaxed tracking-wide uppercase text-xs">{label}</span>
    </div>
  );
}
