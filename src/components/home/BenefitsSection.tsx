import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#CA8A04" strokeWidth="1.5" />
        <path d="M10 17c2-3 4-4 6-4s4 1 6 4" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 8v3M13 9l1.5 2.5M19 9l-1.5 2.5" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Falten reduzieren",
    description:
      "Der Anti-Falten Schlaf BH hält das Dekolleté während des Schlafs sanft zusammen — so entstehen keine neuen Druckfalten.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#CA8A04" strokeWidth="1.5" />
        <path d="M10 20s2-6 6-6 6 6 6 6" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="11" r="2" stroke="#CA8A04" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Sofortige Straffung",
    description:
      "Nach regelmäßiger Anwendung berichten Kundinnen von sichtbar strafferer Haut — ganz ohne Cremes oder Injektionen.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" stroke="#CA8A04" strokeWidth="1.5" />
        <path d="M12 16l3 3 5-6" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Vorbeugung & Schutz",
    description:
      "Prävention ist die beste Anti-Aging-Strategie. Mit MELYLA schützt du deine Haut bereits bevor Falten entstehen.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-melyla-cream-warm">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Das Ergebnis"
          title="Ein strafferes Dekolleté — jede Nacht"
          subtitle="Drei Wirkprinzipien, die wissenschaftlich belegt sind und sichtbar wirken."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 120}>
              <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-luxury)] transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-5">{b.icon}</div>
                <h3 className="font-serif text-xl text-melyla-navy mb-3">{b.title}</h3>
                <p className="text-melyla-muted text-sm leading-relaxed">{b.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
