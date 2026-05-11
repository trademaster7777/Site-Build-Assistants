import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export function HeroVideo({ src, poster, className = "" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const idle = (cb: () => void) => {
      const w = window as unknown as {
        requestIdleCallback?: (cb: () => void) => number;
      };
      if (typeof w.requestIdleCallback === "function") {
        w.requestIdleCallback(cb);
      } else {
        window.setTimeout(cb, 200);
      }
    };
    idle(() => setShouldLoad(true));
  }, [reducedMotion]);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;
    const v = videoRef.current;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, [shouldLoad]);

  return (
    <>
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={className}
        loading="eager"
        decoding="async"
      />
      {shouldLoad && !reducedMotion && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className={`${className} absolute inset-0`}
        />
      )}
    </>
  );
}
