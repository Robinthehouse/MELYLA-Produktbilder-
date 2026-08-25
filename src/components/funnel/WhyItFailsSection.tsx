import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { X } from "lucide-react";
import { failIntro, failCards } from "@/lib/funnel-bh";

/**
 * Entkräftet die drei Lösungen, die Kundinnen vor uns probiert haben.
 * Ohne diesen Schritt bleibt der Einwand "ich creme doch schon" stehen.
 */
export default function WhyItFailsSection() {
  return (
    <section className="section-padding bg-melyla-cream-warm">
      <div className="container-luxury">
        <SectionHeading
          eyebrow={failIntro.eyebrow}
          title={failIntro.title}
          subtitle={failIntro.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {failCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 110}>
              <div className="h-full bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] flex flex-col gap-4">
                <span className="w-9 h-9 rounded-full bg-melyla-rose flex items-center justify-center shrink-0">
                  <X size={17} className="text-melyla-gold" />
                </span>
                <h3 className="font-serif text-lg text-melyla-navy leading-snug">
                  {card.title}
                </h3>
                <p className="text-melyla-muted text-sm leading-relaxed">{card.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Überleitung zur Lösung */}
        <ScrollReveal delay={140}>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[240px]">
              <Image
                src="/images/problem/creme-fail.webp"
                alt="Cremetiegel auf dem Nachttisch"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 lg:p-10">
              <p className="text-melyla-gold-deep text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Der eigentliche Hebel
              </p>
              <h3 className="font-serif text-[1.75rem] text-melyla-navy leading-tight mb-4 text-balance">
                Schlaffalten sind kein Pflegeproblem. Sie sind ein Haltungsproblem.
              </h3>
              <p className="text-melyla-stone text-sm leading-relaxed">
                Solange dein Dekolleté jede Nacht acht Stunden lang gefaltet wird, arbeitet jede
                Creme gegen einen Gegner, den sie nicht erreicht. Setz an der Ursache an — und die
                Pflege, die du ohnehin machst, wirkt endlich in dieselbe Richtung.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
