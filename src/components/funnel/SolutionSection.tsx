import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";
import { solutionIntro, solutionSteps } from "@/lib/funnel-bh";

/** Der Wirkmechanismus in drei Schritten — alternierendes Layout wie /funktionsweise. */
export default function SolutionSection() {
  return (
    <section id="loesung" className="section-padding bg-melyla-cream">
      <div className="container-luxury">
        <SectionHeading
          eyebrow={solutionIntro.eyebrow}
          title={solutionIntro.title}
          subtitle={solutionIntro.subtitle}
        />

        <div className="flex flex-col gap-14 lg:gap-20">
          {solutionSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 80}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)] aspect-[4/3]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-5xl font-bold text-melyla-gold/25 leading-none">
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-melyla-border" />
                  </div>
                  <h3 className="font-serif text-[1.75rem] text-melyla-navy leading-tight text-balance">
                    {step.title}
                  </h3>
                  <p className="text-melyla-stone leading-relaxed">{step.text}</p>
                  <ul className="flex flex-col gap-2.5 mt-1">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <Check size={16} className="text-melyla-gold shrink-0 mt-0.5" />
                        <span className="text-melyla-stone text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
