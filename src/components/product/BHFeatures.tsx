import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    id: "material",
    image: "/images/products/bh-beschreibung-neu-1.jpeg",
    alt: "MELYLA Anti-Falten Schlaf BH — Produktbeschreibung 1",
    layout: "full" as const,
    eyebrow: "Durchdachtes Design",
    title: "Jedes Detail hat seinen Grund",
    text: "Der MELYLA Anti-Falten Schlaf BH wurde für maximalen Tragekomfort und effektive Faltenprävention entwickelt. Hochwertiges Material trifft auf ergonomische Formgebung — für Nächte, die für deine Haut arbeiten.",
    points: [
      { label: "Verstellbarer Verschluss", desc: "Einfach anzupassen für optimalen Sitz" },
      { label: "Eingenähte Polsterung", desc: "Unterstützt das Hautgewebe sanft von innen" },
      { label: "95 % Baumwolle, 5 % Elasthan", desc: "Atmungsaktiver Stoff für optimalen Tragekomfort" },
    ],
  },
  {
    id: "passform",
    image: "/images/products/bh-beschreibung-neu-2.jpeg",
    alt: "MELYLA Anti-Falten Schlaf BH — Produktbeschreibung 2",
    layout: "text-left" as const,
    eyebrow: "Perfekte Passform",
    title: "Individuelle Unterstützung für jede Körperform",
    text: "Verstellbare Schultergurte und eine optimale Unterbruststütze sorgen dafür, dass der MELYLA Schlaf BH jeder Körperform gerecht wird. Er stützt sanft, ohne zu engen — und hält das Dekolleté auch im Liegen in Form.",
    points: [
      { label: "Verstellbare Schultergurte", desc: "Individuell anpassbar für perfekten Sitz" },
      { label: "Optimale Unterbruststütze", desc: "Hält die Brust natürlich in Position" },
      { label: "Kein Einschneiden", desc: "Weiche Kanten für störungsfreien Schlaf" },
    ],
  },
  {
    id: "wirkung",
    image: "/images/products/bh-beschreibung-neu-3.jpeg",
    alt: "MELYLA Anti-Falten Schlaf BH — Produktbeschreibung 3",
    layout: "text-right" as const,
    eyebrow: "Sichtbare Ergebnisse",
    title: "Wach auf mit glattem Dekolleté",
    text: "Nacht für Nacht schützt der MELYLA Schlaf BH dein Dekolleté vor Falten durch Seitenlage. Die sanfte Stütze hält die Haut gleichmäßig und verhindert das Entstehen neuer Schlaffalten — ganz ohne Aufwand.",
    points: [
      { label: "Individuelle Unterbruststütze", desc: "Passt sich deiner natürlichen Form an" },
      { label: "Faltenprävention", desc: "Schützt das Dekolleté in jeder Schlafposition" },
      { label: "Sichtbare Ergebnisse", desc: "Glattere Haut bereits nach 2 Wochen" },
    ],
  },
];

export default function BHFeatures() {
  return (
    <div className="bg-melyla-cream">
      {features.map((feature, idx) => {
        if (feature.layout === "full") {
          return (
            <section key={feature.id} className="section-padding">
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
                  <div className="relative w-full rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={1400}
                      height={787}
                      className="w-full h-auto object-cover"
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

    </div>
  );
}
