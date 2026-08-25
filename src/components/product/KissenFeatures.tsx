import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    id: "vorteil",
    image: "/images/products/kissen-beschreibung.jpeg",
    alt: "DER MELYLA-VORTEIL – Produktvergleich mit Anatomy-Diagram",
    layout: "full" as const,
    eyebrow: "Der Unterschied liegt im Detail",
    title: "Durchdachte Form, die im Schlaf wirkt",
    text: "Herkömmliche Kissen üben Druck auf Gesicht und Dekolleté aus und erzeugen so Schlaffalten. Das MELYLA Anti-Falten Kissen wurde von Grund auf anders konzipiert: Seitliche Aussparungen, ein hautschonender Satin-Bezug und die zentrale Nackenstütze umgeben deinen Kopf, ohne ihn zu quetschen.",
    points: [
      { label: "Seitliche Aussparungen", desc: "Gesicht und Dekolleté bleiben druckfrei" },
      { label: "Zentrale Nackenstütze", desc: "Optimale Wirbelsäulenausrichtung" },
      { label: "Satin-Bezug", desc: "Hautschonend, kühl, faltenminimierend" },
    ],
  },
  {
    id: "schlafer",
    image: "/images/products/kissen-feature-2.jpeg",
    alt: "Frau schläft auf dem MELYLA Kissen – Optimale Nackenstütze und Schulterentlastung",
    layout: "text-left" as const,
    eyebrow: "Für Seiten- und Rückenschläfer",
    title: "Schläfst du endlich so, wie dein Körper es verdient",
    text: "Ob Seitenschläferin oder Rückenposition — das ergonomische MELYLA Kissen passt sich deiner natürlichen Schlafhaltung an. Die spezielle Kontur entlastet gleichzeitig Nacken und Schultern für erholsamen Tiefschlaf ohne Verspannungen.",
    points: [
      { label: "Optimale Nackenstütze", desc: "Hält den Nacken in natürlicher Position" },
      { label: "Schulterentlastung", desc: "Reduziert Druck im Schulterbereich" },
      { label: "Für alle Schlafpositionen", desc: "Seiten- und Rückenlage" },
    ],
  },
  {
    id: "kein-druck",
    image: "/images/products/kissen-feature-3.jpeg",
    alt: "MELYLA Kissen auf Bett – Kein Druck auf das Gesicht, Ergonomische Form",
    layout: "text-right" as const,
    eyebrow: "Kein Druck. Keine Falten.",
    title: "Wach auf mit der Haut, die du verdienst",
    text: "Die patentierte ergonomische Form des MELYLA Kissens hält dein Gesicht vollständig frei vom Kissendruck. Keine Eindrücke mehr morgens, keine neuen Schlaffalten — nur glatte, ausgeruhte Haut.",
    points: [
      { label: "Kein Gesichtsdruck", desc: "Gesicht schwebt frei in der Aussparung" },
      { label: "Memory-Foam-Kern", desc: "Passt sich deiner individuellen Form an" },
      { label: "Sichtbare Ergebnisse", desc: "Glattere Haut bereits nach 2 Wochen" },
    ],
  },
];

export default function KissenFeatures() {
  return (
    <div className="bg-melyla-cream">
      {features.map((feature, idx) => {
        if (feature.layout === "full") {
          return (
            <section key={feature.id} className="section-padding bg-melyla-cream-warm">
              <div className="container-luxury">
                <ScrollReveal>
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <p className="text-melyla-gold-deep text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                      {feature.eyebrow}
                    </p>
                    <h2 className="font-serif text-[2.25rem] text-melyla-navy mb-4 text-balance">
                      {feature.title}
                    </h2>
                    <p className="text-melyla-muted leading-relaxed">{feature.text}</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="relative w-full flex justify-center py-4">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={1400}
                      height={787}
                      className="w-full h-auto"
                      style={{ mixBlendMode: "multiply" }}
                      sizes="(max-width: 1280px) 100vw, 80rem"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {feature.points.map((point) => (
                      <div
                        key={point.label}
                        className="bg-melyla-cream-warm rounded-2xl p-6 border border-melyla-border"
                      >
                        <div className="w-8 h-8 rounded-full bg-melyla-gold/15 flex items-center justify-center mb-3">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7l4 4 6-7" stroke="#CA8A04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="font-sans font-semibold text-melyla-navy text-sm mb-1">{point.label}</p>
                        <p className="text-melyla-muted text-xs leading-relaxed">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </section>
          );
        }

        const isTextLeft = feature.layout === "text-left";
        const bg = idx % 2 === 0 ? "bg-melyla-cream" : "bg-melyla-cream-warm";

        return (
          <section key={feature.id} className={`section-padding ${bg}`}>
            <div className="container-luxury">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isTextLeft ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <ScrollReveal delay={isTextLeft ? 0 : 100}>
                  <div className={isTextLeft ? "" : "lg:order-2"}>
                    <p className="text-melyla-gold-deep text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                      {feature.eyebrow}
                    </p>
                    <h2 className="font-serif text-[2rem] text-melyla-navy mb-5 text-balance leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-melyla-muted leading-relaxed mb-8">{feature.text}</p>
                    <div className="space-y-4">
                      {feature.points.map((point) => (
                        <div key={point.label} className="flex items-start gap-4">
                          <div className="w-9 h-9 rounded-xl bg-melyla-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M2 7l4 4 6-7" stroke="#CA8A04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-sans font-semibold text-melyla-navy text-sm">{point.label}</p>
                            <p className="text-melyla-muted text-xs mt-0.5 leading-relaxed">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={isTextLeft ? 100 : 0}>
                  <div className={`relative rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)] aspect-[16/10] ${isTextLeft ? "lg:order-2" : ""}`}>
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Banner */}
      <section className="bg-melyla-navy py-20 px-6">
        <div className="container-luxury text-center max-w-2xl mx-auto">
          <p className="text-melyla-gold-light text-xs tracking-[0.2em] uppercase font-semibold mb-4">
            Jetzt starten
          </p>
          <h2 className="font-serif text-[2.25rem] text-white mb-4 text-balance">
            Wach auf mit glatter, ausgeruhter Haut.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Das MELYLA Anti-Falten Kissen — entwickelt für Seiten- und Rückenschläferinnen. 30-Tage-Rückgabe inklusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/produkte/anti-falten-kissen"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-melyla-navy text-base cursor-pointer transition-all duration-300 shadow-[var(--shadow-cta)] hover:shadow-[0_8px_36px_rgba(201,151,62,0.55)] hover:scale-105"
              style={{ backgroundColor: "#C9973E" }}
            >
              Jetzt kaufen — €89,50
            </Link>
            <span className="text-white/40 text-xs">✓ Kostenloser Versand · ✓ 30 Tage Garantie</span>
          </div>
        </div>
      </section>
    </div>
  );
}
