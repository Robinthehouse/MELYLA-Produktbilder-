"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-melyla-border overflow-hidden bg-white shadow-[var(--shadow-card)]"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group hover:bg-melyla-cream transition-colors duration-200"
            aria-expanded={open === i}
          >
            <span className="font-sans font-semibold text-melyla-navy text-sm pr-4 group-hover:text-melyla-gold-deep transition-colors duration-200">
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                "text-melyla-muted shrink-0 transition-transform duration-300",
                open === i ? "rotate-180 text-melyla-gold" : ""
              )}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-melyla-stone text-sm leading-relaxed border-t border-melyla-border bg-melyla-cream">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
