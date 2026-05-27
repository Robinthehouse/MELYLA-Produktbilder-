"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/shared/StarRating";
import AddToCartButton from "./AddToCartButton";
import { ShieldCheck, RefreshCw, Truck, Leaf, Zap, CheckCircle2 } from "lucide-react";

interface ProductHeroProps {
  product: Product;
}

const trustBadges = [
  {
    icon: Truck,
    label: "Gratis Versand",
    sub: "CO₂-neutral",
  },
  {
    icon: RefreshCw,
    label: "30 Tage",
    sub: "Rückgabe",
  },
  {
    icon: ShieldCheck,
    label: "Sicher bezahlen",
    sub: "Visa, PayPal & mehr",
  },
  {
    icon: Leaf,
    label: "Nachhaltig",
    sub: "Öko-zertifiziert",
  },
];

export default function ProductHero({ product }: ProductHeroProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes?.[0]);
  const allImages = product.images?.length ? product.images : product.imageSrc ? [product.imageSrc] : [];
  const [activeImage, setActiveImage] = useState(0);

  const savings = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <section className="pt-28 pb-16 bg-melyla-cream">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Bildgalerie */}
        <div className="flex flex-col gap-3">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-melyla-cream-warm shadow-[var(--shadow-luxury)]">
            {allImages.length > 0 ? (
              <Image
                src={allImages[activeImage]}
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-serif text-9xl text-melyla-gold/20 select-none">M</span>
              </div>
            )}
            {savings && (
              <div className="absolute top-4 left-4 bg-melyla-gold text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                -{savings}%
              </div>
            )}
          </div>
          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {allImages.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-none w-20 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer hover:opacity-90 ${
                    activeImage === i ? "border-melyla-gold shadow-[var(--shadow-gold)]" : "border-transparent opacity-70"
                  }`}
                >
                  <Image src={src} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Produktinfo */}
        <div className="lg:sticky lg:top-32 flex flex-col gap-5">

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {product.isBestseller && (
              <span className="inline-flex items-center gap-1.5 bg-melyla-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <Zap size={11} />
                Bestseller
              </span>
            )}
            {product.isSale && (
              <span className="inline-flex items-center gap-1.5 bg-melyla-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Sale
              </span>
            )}
            {product.isNew && (
              <span className="inline-flex items-center gap-1.5 border border-melyla-gold text-melyla-gold text-xs font-semibold px-3 py-1.5 rounded-full">
                Neu
              </span>
            )}
          </div>

          {/* Titel & Bewertung */}
          <div>
            <h1 className="font-serif text-[2.5rem] leading-tight text-melyla-navy mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} size={16} />
              <span className="text-melyla-stone text-sm font-medium">{product.rating}</span>
              <span className="text-melyla-muted text-sm">({product.reviewCount} Bewertungen)</span>
            </div>
          </div>

          {/* Preis */}
          <div className="relative flex items-baseline gap-3 py-3 px-4 bg-melyla-rose rounded-2xl">
            {product.slug === "anti-falten-schlaf-bh" && (
              <span className="absolute -top-3 right-4 inline-flex items-center gap-1 bg-white border border-melyla-border text-melyla-navy text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="#E85D75">
                  <path d="M5 8.5C5 8.5 1 5.8 1 3.3A2 2 0 0 1 5 2.1 2 2 0 0 1 9 3.3C9 5.8 5 8.5 5 8.5Z" />
                </svg>
                Kundenliebling
              </span>
            )}
            <span className="font-serif text-3xl text-melyla-navy font-bold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-melyla-muted text-lg line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="text-xs font-bold text-melyla-gold bg-melyla-gold/10 px-2 py-0.5 rounded-full">
                  {savings}% gespart
                </span>
              </>
            )}
            <span className="ml-auto text-xs text-melyla-muted">inkl. MwSt.</span>
          </div>

          {/* Beschreibung */}
          <p className="text-melyla-stone leading-relaxed text-sm">
            {product.description}
          </p>

          {/* Top-Benefits */}
          {product.benefits && product.benefits.length > 0 && (
            <div className="grid grid-cols-1 gap-2">
              {product.benefits.slice(0, 3).map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-melyla-gold shrink-0" />
                  <span className="text-sm text-melyla-stone">{b}</span>
                </div>
              ))}
            </div>
          )}

          {/* Größenauswahl */}
          {product.sizes && (
            <div>
              <p className="text-sm font-semibold text-melyla-navy mb-3">Größe wählen:</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 cursor-pointer min-h-[40px] font-medium ${
                      selectedSize === size
                        ? "border-melyla-gold bg-melyla-gold text-white shadow-[var(--shadow-gold)]"
                        : "border-melyla-border text-melyla-stone hover:border-melyla-gold hover:text-melyla-gold"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Urgency-Widget */}
          <div className="flex items-center gap-2.5 bg-melyla-gold/8 border border-melyla-gold/20 rounded-xl px-4 py-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
            <p className="text-sm text-melyla-stone">
              <span className="font-semibold text-melyla-navy">Auf Lager</span> · Versand heute bei Bestellung bis 14:00 Uhr
            </p>
          </div>

          {/* CTA */}
          <AddToCartButton productName={product.name} selectedSize={selectedSize} />

          {/* Trust Badges */}
          <div className="grid grid-cols-4 gap-3 pt-4 border-t border-melyla-border">
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <div className="w-9 h-9 rounded-xl bg-melyla-rose flex items-center justify-center">
                  <Icon size={16} className="text-melyla-gold" />
                </div>
                <p className="font-semibold text-melyla-navy text-[11px] leading-tight">{label}</p>
                <p className="text-melyla-muted text-[10px] leading-tight">{sub}</p>
              </div>
            ))}
          </div>

          {/* Zahlungsarten */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-melyla-muted text-xs">Zahlung:</span>
            <div className="flex gap-2 flex-wrap">
              {["PayPal", "Visa", "Mastercard", "Klarna", "Apple Pay"].map((m) => (
                <span key={m} className="text-[10px] font-medium bg-white border border-melyla-border text-melyla-stone px-2 py-0.5 rounded-md">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
