"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-melyla-navy/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-melyla-cream flex flex-col transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-melyla-border">
          <span className="font-serif text-xl tracking-widest text-melyla-navy font-bold uppercase">
            MELYLA
          </span>
          <button
            onClick={onClose}
            className="p-2 text-melyla-stone cursor-pointer"
            aria-label="Menü schließen"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-3 px-2 text-melyla-navy text-lg font-medium border-b border-melyla-border/50 hover:text-melyla-gold-deep transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 mt-auto">
          <Link
            href="/produkte/anti-falten-schlaf-bh"
            onClick={onClose}
            className="flex items-center justify-center bg-melyla-gold text-white font-medium py-3.5 rounded-full hover:bg-melyla-gold-light transition-colors duration-200 cursor-pointer w-full min-h-[44px]"
          >
            Jetzt shoppen
          </Link>
        </div>
      </div>
    </>
  );
}
