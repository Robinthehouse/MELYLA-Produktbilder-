"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Ich bin total begeistert! Nach nur zwei Wochen sieht mein Dekolleté schon viel glatter aus. Der Schlaf BH ist unglaublich bequem — ich vergesse fast, dass ich ihn trage.",
    name: "Sandra K.",
    age: 30,
    location: "Hamburg",
    rating: 5,
    productName: "Anti-Falten Schlaf BH",
    image: "/images/kundin-30.webp",
  },
  {
    quote: "Endlich ein Produkt, das hält was es verspricht. Meine Freundinnen haben schon gefragt, was ich anders mache. Klare Empfehlung — kauft es, ihr werdet es nicht bereuen!",
    name: "Monika R.",
    age: 33,
    location: "München",
    rating: 5,
    productName: "Anti-Falten Schlaf BH",
    image: "/images/kundin-33.avif",
  },
  {
    quote: "Der Schlaf BH ist so angenehm, ich merke ihn kaum. Morgens sieht mein Dekolleté deutlich entspannter aus — keine tiefen Eindrücke mehr. Ich hätte nie gedacht, dass das wirklich funktioniert.",
    name: "Andrea B.",
    age: 35,
    location: "Berlin",
    rating: 4,
    productName: "Anti-Falten Schlaf BH",
    image: "/images/kundin-35.webp",
  },
  {
    quote: "Bin seit 3 Monaten dabei und der Unterschied ist wirklich sichtbar. Ich kaufe nichts anderes mehr. Die Lieferung war schnell und der Kundenservice super. Danke MELYLA!",
    name: "Christine M.",
    age: 43,
    location: "Frankfurt",
    rating: 5,
    productName: "Anti-Falten Schlaf BH",
    image: "/images/kundin-43.webp",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.5l1.85 3.74 4.12.6-2.98 2.9.7 4.1L8 10.77l-3.69 2.07.7-4.1L2.03 5.84l4.12-.6z"
            fill={s <= rating ? "#CA8A04" : "none"}
            stroke="#CA8A04"
            strokeWidth="1.2"
            strokeOpacity={s <= rating ? "1" : "0.3"}
          />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => { setActive(index); setVisible(true); }, 300);
  }, []);

  const prev = () => goTo(active === 0 ? testimonials.length - 1 : active - 1);
  const next = useCallback(() => goTo(active === testimonials.length - 1 ? 0 : active + 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section
      className="bg-melyla-navy section-padding"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-luxury">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-melyla-gold text-xs tracking-[0.25em] uppercase font-semibold mb-2">Kundenstimmen</p>
            <h2 className="font-serif text-[2rem] text-white">Das sagen unsere Kunden</h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <svg key={s} width="14" height="14" viewBox="0 0 16 16" fill="#CA8A04">
                  <path d="M8 1.5l1.85 3.74 4.12.6-2.98 2.9.7 4.1L8 10.77l-3.69 2.07.7-4.1L2.03 5.84l4.12-.6z"/>
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold text-sm">4.79</span>
            <span className="text-white/40 text-sm">· 52 Bewertungen</span>
          </div>
        </div>

        {/* Card */}
        <div
          className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 300ms ease, transform 300ms ease",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">

            {/* Portrait — natural size, no stretching */}
            <div className="flex items-stretch justify-center md:justify-start bg-white/5 border-b md:border-b-0 md:border-r border-white/10">
              <div className="relative w-[260px] shrink-0">
                <Image
                  src={t.image}
                  alt={`${t.name}, ${t.age} Jahre`}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-top"
                  style={{ maxHeight: 340 }}
                  priority
                />
              </div>
            </div>

            {/* Quote */}
            <div className="flex flex-col justify-between p-8 lg:p-10">
              {/* Top */}
              <div>
                {/* Decorative quote mark */}
                <svg className="text-melyla-gold/25 mb-5" width="44" height="34" viewBox="0 0 52 40" fill="currentColor">
                  <path d="M0 40V24C0 10.7 8.3 3 25 0l3.5 5.5C20.2 7.8 16 12.7 15 20h9V40H0zm28 0V24C28 10.7 36.3 3 53 0l3.5 5.5C48.2 7.8 44 12.7 43 20h9V40H28z"/>
                </svg>

                <Stars rating={t.rating} />

                <blockquote className="font-serif text-white text-[1.2rem] lg:text-[1.35rem] leading-relaxed mt-4 mb-6 italic text-balance">
                  „{t.quote}"
                </blockquote>
              </div>

              {/* Bottom: author + product */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-melyla-gold/20 flex items-center justify-center text-melyla-gold font-bold text-sm font-serif">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}, {t.age}</p>
                    <p className="text-white/50 text-xs">{t.location}</p>
                  </div>
                </div>
                <span className="text-[11px] font-medium text-melyla-gold bg-melyla-gold/10 border border-melyla-gold/20 rounded-full px-3 py-1">
                  {t.productName}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {/* Dot indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Bewertung ${i + 1}`}
                className="cursor-pointer"
              >
                <div
                  className="h-1.5 rounded-full bg-white transition-all duration-300"
                  style={{ width: i === active ? 24 : 6, opacity: i === active ? 1 : 0.25 }}
                />
              </button>
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors duration-200 cursor-pointer"
              aria-label="Vorherige"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors duration-200 cursor-pointer"
              aria-label="Nächste"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
