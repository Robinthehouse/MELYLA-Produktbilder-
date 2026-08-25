"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { ChevronDown, CheckCircle2, Sparkles, Shirt, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [open, setOpen] = useState<string | null>("vorteile");

  const sections = [
    {
      id: "beschreibung",
      label: "Produktbeschreibung",
      icon: Sparkles,
      content: (
        <p className="text-melyla-stone text-sm leading-relaxed">{product.longDescription}</p>
      ),
    },
    {
      id: "vorteile",
      label: "Vorteile auf einen Blick",
      icon: Star,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {product.benefits.map((b) => (
            <div
              key={b}
              className="flex items-start gap-3 bg-melyla-cream-warm rounded-xl p-3.5 border border-melyla-border"
            >
              <CheckCircle2 size={16} className="text-melyla-gold shrink-0 mt-0.5" />
              <span className="text-melyla-stone text-sm leading-snug">{b}</span>
            </div>
          ))}
        </div>
      ),
    },
    ...(product.materials
      ? [
          {
            id: "material",
            label: "Material & Pflege",
            icon: Shirt,
            content: (
              <div className="space-y-4">
                <div className="bg-melyla-rose rounded-xl p-4">
                  <p className="text-xs font-semibold text-melyla-gold-deep uppercase tracking-wider mb-1">Material</p>
                  <p className="text-melyla-stone text-sm">{product.materials}</p>
                </div>
                <div className="bg-melyla-rose rounded-xl p-4">
                  <p className="text-xs font-semibold text-melyla-gold-deep uppercase tracking-wider mb-1">Pflege</p>
                  <p className="text-melyla-stone text-sm">{product.care}</p>
                </div>
              </div>
            ),
          },
        ]
      : []),
  ];

  return (
    <section className="py-12 bg-melyla-cream">
      <div className="container-luxury max-w-3xl">
        <div className="rounded-3xl border border-melyla-border overflow-hidden shadow-[var(--shadow-card)]">
          {sections.map((s, idx) => {
            const Icon = s.icon;
            const isOpen = open === s.id;
            return (
              <div key={s.id} className={cn("bg-white", idx > 0 && "border-t border-melyla-border")}>
                <button
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group hover:bg-melyla-cream transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-melyla-rose flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-melyla-gold" />
                    </div>
                    <span className="font-sans font-semibold text-melyla-navy group-hover:text-melyla-gold-deep transition-colors duration-200">
                      {s.label}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "text-melyla-muted transition-transform duration-200 shrink-0",
                      isOpen ? "rotate-180 text-melyla-gold" : ""
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 bg-melyla-cream">
                    {s.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
