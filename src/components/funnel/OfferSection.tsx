"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Truck, RefreshCw, Lock } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/product/AddToCartButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { offerIntro, offerOptions } from "@/lib/funnel-bh";

/**
 * Angebotssektion mit Wertanker.
 *
 * Preise und Zusammenstellung des Nachtroutine-Sets stammen aus
 * docs/melyla/07-goto-market-kampagnenplan.md (Gesamtwert 134,60 € → 99 €).
 * Der Bundle-Preis ist dort als Arbeitspreis markiert, bis die
 * Einkaufspreise der Zubehörartikel vorliegen.
 */
export default function OfferSection() {
  const [selected, setSelected] = useState(
    offerOptions.find((o) => o.highlight)?.key ?? offerOptions[0].key
  );
  const active = offerOptions.find((o) => o.key === selected) ?? offerOptions[0];

  return (
    <section id="angebot" className="section-padding bg-melyla-cream-warm scroll-mt-24">
      <div className="container-luxury">
        <SectionHeading
          eyebrow={offerIntro.eyebrow}
          title={offerIntro.title}
          subtitle={offerIntro.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch max-w-5xl mx-auto">
          {offerOptions.map((option) => {
            const isActive = option.key === selected;
            const savings = Math.round(
              ((option.compareAt - option.price) / option.compareAt) * 100
            );

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => setSelected(option.key)}
                aria-pressed={isActive}
                className={cn(
                  "relative text-left rounded-3xl border-2 p-7 pt-8 transition-all duration-200 cursor-pointer flex flex-col gap-4 bg-white",
                  isActive
                    ? "border-melyla-gold shadow-[var(--shadow-luxury)] lg:scale-[1.02]"
                    : "border-melyla-border hover:border-melyla-gold/50 shadow-[var(--shadow-card)]"
                )}
              >
                {option.badge && (
                  <span
                    className={cn(
                      "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm",
                      isActive
                        ? "bg-melyla-gold text-white"
                        : "bg-white border border-melyla-border text-melyla-stone"
                    )}
                  >
                    {option.badge}
                  </span>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-xl text-melyla-navy leading-snug">
                      {option.title}
                    </h3>
                    <p className="text-melyla-muted text-xs mt-1">{option.subtitle}</p>
                  </div>
                  <span
                    className={cn(
                      "w-5 h-5 rounded-full border-2 shrink-0 mt-1 flex items-center justify-center transition-colors duration-200",
                      isActive ? "border-melyla-gold bg-melyla-gold" : "border-melyla-border"
                    )}
                  >
                    {isActive && <Check size={12} className="text-white" />}
                  </span>
                </div>

                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className="font-serif text-3xl font-bold text-melyla-navy">
                    {formatPrice(option.price)}
                  </span>
                  <span className="text-melyla-muted text-base line-through">
                    {formatPrice(option.compareAt)}
                  </span>
                  <span className="text-[11px] font-bold text-melyla-gold-deep bg-melyla-gold/10 px-2 py-0.5 rounded-full">
                    −{savings}%
                  </span>
                </div>
                <p className="text-melyla-stone text-xs -mt-2">{option.perUnitLabel}</p>

                <ul className="flex flex-col gap-2 pt-3 border-t border-melyla-border">
                  {option.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-melyla-gold shrink-0 mt-0.5" />
                      <span className="text-melyla-stone text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        {/* Abschluss */}
        <div className="max-w-md mx-auto mt-10 flex flex-col gap-4">
          <AddToCartButton productName={active.title} />

          <p className="text-center text-melyla-muted text-xs">
            Unsicher bei der Größe?{" "}
            <Link href="#groesse" className="text-melyla-gold-deep font-semibold hover:underline">
              Zum Größenberater
            </Link>
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
            {[
              { icon: Truck, label: "Gratis Versand" },
              { icon: RefreshCw, label: "30 Tage Rückgabe" },
              { icon: Lock, label: "Sichere Zahlung" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-melyla-stone text-xs"
              >
                <Icon size={13} className="text-melyla-gold" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
