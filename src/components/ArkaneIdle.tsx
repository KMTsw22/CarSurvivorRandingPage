"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 122;
const FPS = 24;

const framePath = (i: number) =>
  `/images/arkane_idle/frame_${String(i).padStart(3, "0")}.webp`;

type Props = {
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
};

export default function ArkaneIdle({ className, style, alt = "Arkane" }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Preload every frame so cycling doesn't trigger network on each tick
    const cache: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = framePath(i);
      cache.push(img);
    }

    const interval = 1000 / FPS;
    let frame = 0;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      if (now - last >= interval) {
        last = now;
        frame = (frame + 1) % FRAME_COUNT;
        if (imgRef.current) {
          imgRef.current.src = framePath(frame + 1);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={framePath(1)}
      alt={alt}
      className={className}
      style={style}
      draggable={false}
    />
  );
}
