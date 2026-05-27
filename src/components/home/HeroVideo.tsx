"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const videos = [
  "/images/products/bh-video-1.mp4",
  "/images/products/bh-video-2.mp4",
  "/images/products/bh-video-3.mp4",
];

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goToNext = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % videos.length);
    }, 350);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.src = videos[current];
    v.load();
    v.play().catch(() => {});
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <div className="relative w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 lg:ml-auto">
      {/* Glow background */}
      <div className="absolute -inset-4 bg-gradient-to-br from-melyla-gold/10 to-melyla-rose rounded-3xl" />

      {/* Video card */}
      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)]">
        <video
          ref={videoRef}
          muted
          playsInline
          onEnded={goToNext}
          className="w-full h-full object-cover"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 350ms ease",
          }}
        />

        {/* Trust badge — top right */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1l1.3 4H13l-3.5 2.5 1.3 4L7 9 3.2 11.5l1.3-4L1 5h4.7z" fill="#CA8A04" />
          </svg>
          <span className="text-melyla-navy text-xs font-semibold tracking-wide">Nr. 1 Bestseller</span>
        </div>

        {/* Video indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => { setVisible(false); setTimeout(() => setCurrent(i), 350); }}
              className="cursor-pointer transition-all duration-300"
              aria-label={`Video ${i + 1}`}
            >
              <div
                className="rounded-full bg-white transition-all duration-300"
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  opacity: i === current ? 1 : 0.5,
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Rating badge — bottom right */}
      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-[var(--shadow-card)] p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-melyla-gold/10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2l1.854 5.756H18l-4.927 3.58 1.854 5.756L10 13.51l-4.927 3.582 1.854-5.756L2 7.756h6.146z" fill="#CA8A04"/>
          </svg>
        </div>
        <div>
          <p className="font-sans font-bold text-melyla-navy text-sm">4.79 / 5</p>
          <p className="text-melyla-muted text-xs">52 Bewertungen</p>
        </div>
      </div>
    </div>
  );
}
