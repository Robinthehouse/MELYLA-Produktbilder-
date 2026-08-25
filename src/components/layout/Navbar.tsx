"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const productLinks = [
  { href: "/produkte/anti-falten-schlaf-bh", label: "Anti-Falten Schlaf BH", badge: "Bestseller" },
  { href: "/produkte/anti-falten-kissen", label: "Anti-Falten Kissen", badge: "Bestseller" },
  { href: "/produkte/anti-falten-schlafmaske", label: "Schlafmaske", badge: null },
  { href: "/produkte/eco-abschminkpads", label: "ECO Abschminkpads", badge: "Sale" },
  { href: "/produkte/haar-gummie", label: "Scrunchie 4er-Pack", badge: "Sale" },
  { href: "/produkte/schwamm", label: "ECO Reinigungsschwamm", badge: "Sale" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/funktionsweise", label: "Funktionsweise" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-melyla-cream/95 backdrop-blur-md shadow-[0_1px_20px_rgba(28,25,23,0.08)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-luxury flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/color_logo_transparent.png"
              alt="MELYLA"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-melyla-stone hover:text-melyla-gold-deep transition-colors duration-200 tracking-wide"
            >
              Home
            </Link>

            {/* Products dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-melyla-stone hover:text-melyla-gold-deep transition-colors duration-200 tracking-wide cursor-pointer"
                aria-expanded={dropdownOpen}
              >
                Produkte
                <ChevronDown
                  size={14}
                  className={cn("transition-transform duration-200", dropdownOpen && "rotate-180")}
                />
              </button>

              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                  dropdownOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
                )}
              >
                <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(28,25,23,0.14)] border border-melyla-border w-64 py-2 overflow-hidden">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-between px-5 py-3 text-sm text-melyla-navy hover:bg-melyla-cream-warm hover:text-melyla-gold-deep transition-colors duration-150"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className={cn(
                          "text-[10px] font-semibold px-2 py-0.5 rounded-full",
                          link.badge === "Bestseller" ? "bg-melyla-gold/15 text-melyla-gold" : "bg-melyla-rose/30 text-melyla-navy/70"
                        )}>
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-melyla-stone hover:text-melyla-gold-deep transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/produkte/anti-falten-schlaf-bh"
              className="hidden md:inline-flex items-center gap-2 bg-melyla-gold text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-melyla-gold-light transition-colors duration-200 cursor-pointer min-h-[44px]"
            >
              <ShoppingBag size={15} />
              Zum Shop
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-melyla-navy cursor-pointer"
              aria-label="Menü öffnen"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={[
          { href: "/", label: "Home" },
          ...productLinks.map((p) => ({ href: p.href, label: p.label })),
          { href: "/funktionsweise", label: "Funktionsweise" },
          { href: "/blog", label: "Blog" },
        ]}
      />
    </>
  );
}
