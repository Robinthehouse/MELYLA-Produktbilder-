import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Anziehen",
    description: "Den Schlaf BH vor dem Einschlafen anziehen — in 10 Sekunden.",
  },
  {
    number: "02",
    title: "Schlafen",
    description: "Das weiche Material hält das Dekolleté sanft zusammen.",
  },
  {
    number: "03",
    title: "Strahlen",
    description: "Morgens aufwachen mit glatterer, strafferer Haut.",
  },
];

export default function HowItWorksTeaser() {
  return (
    <section className="section-padding bg-melyla-cream">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Funktionsweise"
          title="So einfach funktioniert's"
          subtitle="Drei Schritte — und deine Haut dankt es dir jeden Morgen."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="flex gap-5 items-start">
                <span className="font-serif text-5xl text-melyla-gold/25 font-bold leading-none shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-melyla-navy mb-2">{step.title}</h3>
                  <p className="text-melyla-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/produkte/anti-falten-schlaf-bh">
            Jetzt kaufen
          </Button>
          <Button variant="outline" href="/funktionsweise">
            Mehr erfahren
          </Button>
        </div>
      </div>
    </section>
  );
}
