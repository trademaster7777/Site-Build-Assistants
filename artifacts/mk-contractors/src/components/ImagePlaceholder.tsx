import React from "react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-secondary flex items-center justify-center p-6 text-center text-sm font-medium text-white ${className}`}
      data-testid={`image-placeholder-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {label}
    </div>
  );
}
