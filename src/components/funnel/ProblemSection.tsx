import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";
import { problemIntro, problemTiles, painChecklist } from "@/lib/funnel-bh";

/**
 * Problem-Sektion: macht sichtbar, was nachts passiert.
 *
 * Bewusst auf dunklem Navy — der Bruch zum cremefarbenen Rest der Seite
 * signalisiert "hier geht es um dich, nicht um das Produkt".
 */
export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-melyla-navy">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-melyla-gold-light text-xs tracking-[0.2em] uppercase font-semibold mb-3">
            {problemIntro.eyebrow}
          </p>
          <h2 className="font-serif text-[2.25rem] lg:text-[2.75rem] text-white leading-tight text-balance">
            {problemIntro.title}
          </h2>
          <p className="mt-4 text-melyla-on-dark text-base leading-relaxed">
            {problemIntro.subtitle}
          </p>
        </div>

        {/* Bildkacheln */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problemTiles.map((tile, i) => (
            <ScrollReveal key={tile.title} delay={i * 90}>
              <article className="h-full flex flex-col rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-melyla-navy/85 backdrop-blur-sm rounded-xl px-3 py-2">
                    <p className="font-serif text-lg font-bold text-white leading-none">
                      {tile.stat}
                    </p>
                    <p className="text-melyla-on-dark text-[10px] mt-1">{tile.statLabel}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-serif text-lg text-white leading-snug">{tile.title}</h3>
                  <p className="text-melyla-on-dark text-sm leading-relaxed">{tile.text}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Identifikation */}
        <ScrollReveal delay={120}>
          <div className="mt-14 max-w-2xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10">
            <h3 className="font-serif text-2xl text-white text-center mb-7">
              {painChecklist.title}
            </h3>
            <ul className="flex flex-col gap-3.5">
              {painChecklist.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-md border border-melyla-gold/50 bg-melyla-gold/10 flex items-center justify-center shrink-0">
                    <Check size={13} className="text-melyla-gold" />
                  </span>
                  <span className="text-white/85 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 pt-6 border-t border-white/10 text-center font-serif text-lg text-melyla-gold-light leading-snug text-balance">
              {painChecklist.conclusion}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
