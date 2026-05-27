import { Truck, ShieldCheck, MapPin } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Gratis Versand",
    subtitle: "Kostenlos & CO₂-neutral",
  },
  {
    icon: ShieldCheck,
    title: "30 Tage Garantie",
    subtitle: "Geld-zurück ohne Fragen",
  },
  {
    icon: MapPin,
    title: "Designed in Germany",
    subtitle: "Qualität aus Deutschland",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-melyla-navy py-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-4 justify-center md:px-10"
            >
              <badge.icon size={22} className="text-melyla-gold shrink-0" />
              <div>
                <p className="text-white font-sans font-semibold text-sm">
                  {badge.title}
                </p>
                <p className="text-melyla-muted text-xs mt-0.5">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
