"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(x * 100);
  }, []);

  return (
    <section className="section-padding bg-melyla-navy">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Vorher & Nachher"
          title="Sichtbare Veränderung nach 4 Wochen"
          subtitle="Regelmäßige Anwendung des Anti-Falten Schlaf BH zeigt messbare Ergebnisse."
          light
        />

        <div className="max-w-2xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-[var(--shadow-luxury)]"
            onMouseMove={(e) => updatePosition(e.clientX)}
            onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
            role="img"
            aria-label="Vorher-Nachher-Vergleich Dekolleté"
          >
            <div className="absolute inset-0">
              <Image src="/images/Nachher.jpg" alt="Nachher" fill className="object-cover" />
            </div>
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image src="/images/Vorher.jpg" alt="Vorher" fill className="object-cover" />
            </div>

            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-[var(--shadow-card)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6 9H2M12 9h4M5 6l-3 3 3 3M13 6l3 3-3 3" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <span className="absolute top-4 left-4 bg-white/90 text-melyla-navy text-xs font-semibold px-3 py-1 rounded-full">Vorher</span>
            <span className="absolute top-4 right-4 bg-melyla-navy/90 text-white text-xs font-semibold px-3 py-1 rounded-full">Nachher</span>
          </div>

          <p className="text-center text-melyla-muted text-xs mt-4">
            Slider verschieben für Vorher-Nachher-Vergleich
          </p>
        </div>
      </div>
    </section>
  );
}
