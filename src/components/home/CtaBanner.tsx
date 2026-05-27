import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const perks = [
  "30 Tage Geld-zurück-Garantie",
  "Gratis Versand ab 29 €",
  "Über 500 zufriedene Kundinnen",
];

export default function CtaBanner() {
  return (
    <section className="bg-melyla-navy section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-melyla-gold/6 rounded-full blur-[100px]" />
      </div>

      <div className="container-luxury relative z-10 text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="text-melyla-gold text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Jetzt starten
          </p>
          <h2 className="font-serif text-[2.5rem] lg:text-[3rem] text-white text-balance leading-tight mb-5">
            Schlaf dich jung —<br />
            <em className="not-italic text-melyla-gold">jede Nacht</em>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            Starte noch heute mit der einfachsten Anti-Aging-Routine der Welt. Kein Aufwand, keine Chemie — nur erholsamer Schlaf.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {perks.map((perk) => (
              <span key={perk} className="flex items-center gap-2 text-white/70 text-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l4 4 6-6" stroke="#CA8A04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {perk}
              </span>
            ))}
          </div>

          <Link
            href="/produkte/anti-falten-schlaf-bh"
            className="inline-flex items-center gap-3 text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-300 shadow-[var(--shadow-cta)] hover:shadow-[0_12px_40px_rgba(201,151,62,0.55)] hover:scale-105 cursor-pointer min-h-[52px]"
            style={{ backgroundColor: "#C9973E" }}
          >
            Jetzt kaufen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
