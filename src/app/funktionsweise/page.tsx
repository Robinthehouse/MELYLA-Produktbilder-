import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqAccordion from "@/components/funktionsweise/FaqAccordion";
import { Moon, Zap, TrendingUp, Shield, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Funktionsweise",
  description: "Wie der MELYLA Anti-Falten Schlaf BH wirkt und warum er so effektiv gegen Dekolleté-Falten ist.",
};

const steps = [
  {
    number: "01",
    icon: Moon,
    title: "Das Problem: Schlaffalten",
    subtitle: "Was jede Nacht passiert",
    content:
      "Jede Nacht verbringen wir 6–8 Stunden in Seitenlage. Dabei wird das Dekolleté zusammengedrückt, und mit der Zeit entstehen tiefe Längsfalten — sogenannte Schlaffalten. Diese sind im Gegensatz zu mimischen Falten rein mechanisch bedingt.",
    image: "/images/products/bh-seitlich-model.jpg",
    imageAlt: "Frau schläft auf der Seite mit MELYLA Schlaf BH",
    stat: "6–8h",
    statLabel: "Schlaf pro Nacht",
  },
  {
    number: "02",
    icon: Zap,
    title: "Die Lösung: Sanfte Unterstützung",
    subtitle: "Wie MELYLA hilft",
    content:
      "Der MELYLA Schlaf BH hält dein Dekolleté sanft und komfortabel in Position — ganz ohne Druck. Das weiche, atmungsaktive Material umhüllt dich wie eine zweite Haut und verhindert das Zusammenfalten beim Schlafen.",
    image: "/images/products/bh-produkt-1.jpeg",
    imageAlt: "MELYLA Anti-Falten Schlaf BH",
    stat: "100%",
    statLabel: "Druckfreie Pflege",
    reverse: true,
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Die Wirkung: Sichtbare Verbesserung",
    subtitle: "Ergebnisse nach Wochen",
    content:
      "Bereits nach wenigen Wochen berichten Kundinnen von einer sichtbar glatteren Haut. Bestehende Falten werden reduziert, und neue entstehen gar nicht erst. Die Haut erholt sich nachts optimal — ohne Faltenstress.",
    image: "/images/products/bh-cream-frontal.webp",
    imageAlt: "Frau morgens strahlend mit MELYLA Schlaf BH",
    stat: "2–4 Wo.",
    statLabel: "Erste Ergebnisse",
  },
  {
    number: "04",
    icon: Shield,
    title: "Langzeitpflege: Prävention",
    subtitle: "Investition in die Zukunft",
    content:
      "Wer früh beginnt, bewahrt sich langjährige Ergebnisse. MELYLA ist nicht nur für Frauen mit Falten — sondern auch für alle, die gar keine bekommen möchten. Prävention ist die wirksamste Anti-Aging-Strategie.",
    image: "/images/products/bh-nude-logo.jpeg",
    imageAlt: "Frau mit gepflegter Haut und MELYLA Schlaf BH",
    stat: "Ab 25",
    statLabel: "Ideal beginnen",
    reverse: true,
  },
];

const stats = [
  { value: "52+", label: "Zufriedene Kundinnen" },
  { value: "4.79", label: "Sterne Bewertung", icon: Star },
  { value: "2–4", label: "Wochen bis zu ersten Ergebnissen" },
  { value: "30", label: "Tage Geld-zurück-Garantie" },
];

const faqs = [
  {
    q: "Ab welchem Alter sollte ich mit MELYLA beginnen?",
    a: "Ab dem 25. Lebensjahr beginnt die Hautelastizität langsam nachzulassen. Je früher du anfängst, desto besser das Langzeitergebnis — aber auch Kundinnen ab 50 berichten von sichtbaren Verbesserungen.",
  },
  {
    q: "Ist der Schlaf BH den ganzen Winter tragbar?",
    a: "Ja, das Material ist ganzjährig geeignet. Im Sommer empfehlen wir das leichtere Modell. Bei Kälte kann er auch unter dem Pyjama getragen werden.",
  },
  {
    q: "Wie lange dauert es bis erste Ergebnisse sichtbar sind?",
    a: "Die meisten Kundinnen berichten nach 2–4 Wochen von ersten Verbesserungen. Für optimale Ergebnisse empfehlen wir mindestens 8 Wochen regelmäßige Anwendung.",
  },
  {
    q: "Kann ich den Schlaf BH zusammen mit dem Anti-Falten Kissen verwenden?",
    a: "Absolut — die Kombination aus Schlaf BH und Anti-Falten Kissen ist unsere empfohlene Premium-Pflegeroutine für maximale Ergebnisse.",
  },
  {
    q: "Wie pflege ich den Schlaf BH richtig?",
    a: "Handwäsche oder Schonprogramm bei 30°C. Nicht in den Trockner geben. So bleibt das Material dauerhaft weich und elastisch.",
  },
];

export default function FunktionsweisePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-melyla-cream-warm to-melyla-cream overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-melyla-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-melyla-rose/80 blur-3xl" />
        </div>
        <div className="container-luxury text-center max-w-3xl mx-auto relative z-10">
          <p className="text-melyla-gold text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Wissenschaftlich erklärt
          </p>
          <h1 className="font-serif text-[3.5rem] lg:text-[4.5rem] text-melyla-navy mb-6 text-balance leading-[1.08]">
            Wie MELYLA<br />
            <em className="not-italic text-melyla-gold">wirklich wirkt</em>
          </h1>
          <p className="text-melyla-stone text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Die Wissenschaft hinter dem Schlaf BH — und warum er so effektiv gegen Dekolleté-Falten ist.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-melyla-border shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {Icon && <Icon size={14} className="text-melyla-gold" />}
                  <p className="font-serif text-2xl font-bold text-melyla-navy">{value}</p>
                </div>
                <p className="text-melyla-muted text-xs leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps — alternierend */}
      <section className="py-8 bg-melyla-cream">
        <div className="container-luxury space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={i * 60}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${step.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>

                  {/* Bild */}
                  <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)] aspect-[4/3]">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Stat-Overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                      <p className="font-serif text-2xl font-bold text-melyla-navy">{step.stat}</p>
                      <p className="text-melyla-muted text-xs">{step.statLabel}</p>
                    </div>
                    {/* Step-Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-melyla-gold rounded-full flex items-center justify-center shadow-md">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-5xl font-bold text-melyla-gold/20 leading-none">
                        {step.number}
                      </span>
                      <div className="h-px flex-1 bg-melyla-border" />
                    </div>
                    <p className="text-melyla-gold text-xs tracking-[0.2em] uppercase font-semibold">
                      {step.subtitle}
                    </p>
                    <h2 className="font-serif text-[2rem] text-melyla-navy leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-melyla-stone leading-relaxed">
                      {step.content}
                    </p>
                    {i === steps.length - 1 && (
                      <Link
                        href="/produkte/anti-falten-schlaf-bh"
                        className="inline-flex items-center gap-2 text-melyla-gold font-semibold text-sm hover:gap-3 transition-all duration-200 mt-2"
                      >
                        Jetzt starten <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-melyla-cream-warm">
        <div className="container-luxury max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-melyla-gold text-xs tracking-[0.25em] uppercase font-semibold mb-3">Häufige Fragen</p>
            <h2 className="font-serif text-[2.25rem] text-melyla-navy">Alles, was du wissen möchtest</h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-melyla-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-melyla-gold/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-melyla-gold/5 blur-3xl" />
        </div>
        <div className="container-luxury max-w-2xl mx-auto text-center relative z-10">
          <p className="text-melyla-gold text-xs tracking-[0.25em] uppercase font-semibold mb-4">Kein Risiko</p>
          <h2 className="font-serif text-[2.5rem] text-white mb-4 text-balance">
            Bereit für deine erste Nacht?
          </h2>
          <p className="text-melyla-muted mb-10 leading-relaxed">
            30 Tage Geld-zurück-Garantie — wenn du nicht begeistert bist, bekommst du jeden Cent zurück.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" href="/produkte/anti-falten-schlaf-bh">
              Jetzt entdecken
            </Button>
            <Button size="lg" variant="ghost" href="/produkte/anti-falten-kissen">
              Zum Anti-Falten Kissen
            </Button>
          </div>

          {/* Trust-Punkte */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10">
            {["30 Tage Garantie", "Gratis Versand", "Sicher bezahlen", "Deutsches Qualitätsprodukt"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-white/60 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-melyla-gold" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
