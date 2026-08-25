"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

/**
 * Dauerhaft sichtbarer CTA auf Mobile (62 % des Traffics).
 *
 * Auf Desktop übernimmt das die sticky Produktspalte im ProductHero, deshalb
 * lg:hidden. Blendet sich aus, sobald die Angebotssektion im Bild ist — dort
 * steht der echte Button.
 */
export default function StickyAddToCart({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);
  const [offerInView, setOfferInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const offer = document.getElementById("angebot");
    if (!offer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOfferInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(offer);
    return () => observer.disconnect();
  }, []);

  const show = visible && !offerInView;

  return (
    <div
      aria-hidden={!show}
      className={`lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-melyla-border bg-white/95 backdrop-blur-md transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 bg-melyla-cream-warm">
          <Image src={product.imageSrc} alt="" fill className="object-cover" sizes="44px" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-melyla-navy text-xs font-semibold truncate">{product.shortName}</p>
          <p className="text-melyla-navy text-sm font-bold">
            {formatPrice(product.price)}
            {product.originalPrice && (
              <span className="text-melyla-muted text-xs line-through font-normal ml-1.5">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </p>
        </div>

        <a
          href="#angebot"
          tabIndex={show ? 0 : -1}
          className="inline-flex items-center gap-2 shrink-0 rounded-full bg-melyla-cta text-melyla-navy font-semibold text-sm px-6 min-h-[44px] hover:bg-melyla-cta-dark transition-colors duration-200 shadow-[var(--shadow-cta)]"
        >
          <ShoppingBag size={16} />
          Jetzt sichern
        </a>
      </div>
    </div>
  );
}
