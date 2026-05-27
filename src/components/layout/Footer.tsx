import Link from "next/link";
import Image from "next/image";
import PaymentIcons from "@/components/shared/PaymentIcons";

const shopLinks = [
  { href: "/produkte/anti-falten-schlaf-bh", label: "Anti-Falten Schlaf BH" },
  { href: "/produkte/anti-falten-kissen", label: "Anti-Falten Kissen" },
  { href: "/produkte/anti-falten-schlafmaske", label: "Schlafmaske" },
  { href: "/produkte/eco-abschminkpads", label: "ECO Abschminkpads" },
];

const infoLinks = [
  { href: "/funktionsweise", label: "Funktionsweise" },
  { href: "/blog", label: "Blog" },
  { href: "mailto:hallo@melyla.de", label: "Kontakt" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
  { href: "/widerruf", label: "Widerrufsrecht & Rückgabe" },
];

export default function Footer() {
  return (
    <footer className="bg-melyla-navy text-melyla-cream">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Image
              src="/white_logo_on_black.png"
              alt="MELYLA"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-melyla-muted text-sm leading-relaxed">
              Gemütlich faltenfrei schlafen. Anti-Falten Produkte für ein strahlendes Ich — Designed in Germany.
            </p>
            <div className="flex gap-4 mt-5">
              <span className="text-xs text-melyla-muted bg-white/5 rounded-full px-3 py-1">
                ✓ 30-Tage-Garantie
              </span>
              <span className="text-xs text-melyla-muted bg-white/5 rounded-full px-3 py-1">
                ✓ CO₂-neutral
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-melyla-gold font-semibold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-melyla-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-melyla-gold font-semibold mb-5">
              Info
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-melyla-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-melyla-gold font-semibold mb-5">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-melyla-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-melyla-muted">
            © {new Date().getFullYear()} MELYLA. Alle Rechte vorbehalten.
          </p>
          <PaymentIcons />
        </div>
      </div>
    </footer>
  );
}
