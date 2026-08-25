import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PressSection() {
  return (
    <section className="section-padding bg-melyla-navy overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-melyla-gold/8 rounded-full blur-[120px]" />
      </div>

      <div className="container-luxury relative z-10">
        <ScrollReveal>
          <p className="text-center text-melyla-gold-light text-xs tracking-[0.3em] uppercase font-semibold mb-14">
            Bekannt aus
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Magazine card */}
          <ScrollReveal delay={100} className="flex-1 flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-melyla-gold/10 blur-2xl" />
              {/* Tilted shadow layer */}
              <div className="absolute inset-0 rounded-2xl bg-melyla-navy/60 translate-x-3 translate-y-3 blur-sm" />
              <div
                className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                style={{ maxWidth: 380 }}
              >
                <Image
                  src="/images/promo-barbara.webp"
                  alt="MELYLA Anti-Falten Schlaf BH in der BARBARA Ausgabe Nr. 61"
                  width={760}
                  height={520}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Quote + context */}
          <ScrollReveal delay={200} className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-melyla-gold/40" />
              <span className="text-melyla-gold-light text-xs tracking-[0.2em] uppercase font-semibold">
                Redaktionsempfehlung
              </span>
              <div className="h-px w-8 bg-melyla-gold/40" />
            </div>

            <blockquote className="font-serif text-[1.75rem] lg:text-[2rem] text-white leading-snug text-balance mb-6">
              „Anti-Falten Schlaf BH von Melyla, um 50 Euro"
            </blockquote>

            <p className="text-melyla-on-dark leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Das Frauenmagazin BARBARA zählte den MELYLA Anti-Falten Schlaf BH zu seinen Produktempfehlungen — ein unabhängiges Zeichen für Qualität und Wirkung.
            </p>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9l4.5 4.5L15 4.5" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                BARBARA Magazin — Ausgabe Nr. 61
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
