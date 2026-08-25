import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StarRating from "@/components/shared/StarRating";
import { BadgeCheck, Quote } from "lucide-react";
import { reviews, ratingBreakdown, pressQuote } from "@/lib/funnel-bh";

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
}

export default function ReviewsSection({ rating, reviewCount }: ReviewsSectionProps) {
  return (
    <section id="bewertungen" className="section-padding bg-melyla-cream-warm scroll-mt-24">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-melyla-gold-deep text-xs tracking-[0.2em] uppercase font-semibold mb-3">
            Bewertungen
          </p>
          <h2 className="font-serif text-[2.25rem] text-melyla-navy leading-tight text-balance">
            Was Kundinnen nach der ersten Woche sagen
          </h2>
        </div>

        {/* Aggregat + Verteilung */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-8 shadow-[var(--shadow-card)] flex flex-col items-center justify-center text-center">
            <p className="font-serif text-6xl font-bold text-melyla-navy leading-none">
              {rating.toFixed(2).replace(".", ",")}
            </p>
            <StarRating rating={rating} size={20} className="mt-3" />
            <p className="text-melyla-muted text-sm mt-3">
              {reviewCount} verifizierte Bewertungen
            </p>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-[var(--shadow-card)] flex flex-col justify-center gap-2.5">
            {ratingBreakdown.map(({ stars, count }) => {
              const pct = reviewCount > 0 ? (count / reviewCount) * 100 : 0;
              return (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-melyla-stone text-xs w-10 shrink-0">{stars} Sterne</span>
                  <div className="flex-1 h-2 rounded-full bg-melyla-rose overflow-hidden">
                    <div
                      className="h-full rounded-full bg-melyla-gold"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-melyla-muted text-xs w-6 text-right shrink-0">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Einzelbewertungen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 70}>
              <article className="h-full bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <StarRating rating={r.rating} size={14} />
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-melyla-gold-deep">
                    <BadgeCheck size={12} />
                    Verifizierter Kauf
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-melyla-navy text-sm leading-snug">
                  {r.title}
                </h3>
                <p className="text-melyla-stone text-sm leading-relaxed flex-1">{r.text}</p>
                <div className="pt-3 border-t border-melyla-border flex items-center justify-between gap-2">
                  <p className="text-melyla-navy text-xs font-semibold">
                    {r.name}, {r.age}
                    <span className="text-melyla-muted font-normal"> · {r.location}</span>
                  </p>
                  <p className="text-melyla-muted text-[10px] text-right leading-tight">
                    Größe {r.size}
                    <br />
                    {r.duration}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Presse */}
        <ScrollReveal delay={100}>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 items-center bg-white rounded-3xl p-6 lg:p-8 shadow-[var(--shadow-card)]">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={pressQuote.image}
                alt={pressQuote.source}
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
            <div>
              <p className="text-melyla-gold-deep text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Bekannt aus
              </p>
              <Quote size={22} className="text-melyla-gold/40 mb-2" />
              <p className="font-serif text-xl lg:text-2xl text-melyla-navy leading-snug text-balance">
                „{pressQuote.quote}“
              </p>
              <p className="text-melyla-muted text-sm mt-3">{pressQuote.source}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
