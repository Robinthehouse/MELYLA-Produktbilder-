"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  productName: string;
  selectedSize?: string;
  className?: string;
}

export default function AddToCartButton({
  productName,
  selectedSize,
  className,
}: AddToCartButtonProps) {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = async () => {
    setState("loading");
    await new Promise((r) => setTimeout(r, 800));
    setState("success");
    setTimeout(() => setState("idle"), 2500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={state === "loading"}
      aria-label={`${productName} in den Warenkorb legen`}
      className={cn(
        "w-full flex items-center justify-center gap-3 min-h-[52px] rounded-full font-medium text-base transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-melyla-gold focus-visible:outline-offset-3 disabled:cursor-not-allowed",
        state === "success"
          ? "bg-green-600 text-white shadow-none"
          : "bg-[#C9973E] text-white hover:bg-[#A87B2E] shadow-[0_6px_28px_rgba(201,151,62,0.45)] hover:shadow-[0_8px_36px_rgba(201,151,62,0.6)] hover:scale-[1.02]",
        className
      )}
    >
      {state === "loading" && (
        <svg className="animate-spin" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" strokeDasharray="25 50" />
        </svg>
      )}
      {state === "success" && <Check size={20} />}
      {state === "idle" && <ShoppingBag size={20} />}
      {state === "loading" ? "Wird hinzugefügt…" : state === "success" ? "Im Warenkorb!" : "In den Warenkorb"}
    </button>
  );
}
