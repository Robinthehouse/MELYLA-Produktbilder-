import Button from "@/components/ui/Button";
import HeroVideo from "@/components/home/HeroVideo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-melyla-cream via-melyla-cream-warm to-melyla-rose pt-24" style={{background: "linear-gradient(135deg, #FAF7FF 0%, #F2E8F8 50%, #EDE0F5 100%)"}}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-melyla-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-melyla-rose/60 blur-3xl" />
      </div>

      <div className="container-luxury relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16">
        <div className="order-2 lg:order-1">
          <p className="text-melyla-gold-deep text-xs tracking-[0.25em] uppercase font-semibold mb-5">
            Designed in Germany · Anti-Aging · Schlafpflege
          </p>

          <h1 className="font-serif text-[3rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.08] text-melyla-navy mb-6 text-balance">
            Weniger Falten,<br />
            <em className="not-italic text-melyla-gold">mehr Lächeln</em>
          </h1>

          <p className="text-melyla-stone text-lg leading-relaxed mb-10 max-w-md">
            Schlaf dich jung. Mit dem MELYLA Anti-Falten Schlaf BH pflegst du dein Dekolleté sanft und effektiv — Nacht für Nacht.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" href="/produkte/anti-falten-schlaf-bh">
              Jetzt entdecken
            </Button>
            <Button size="lg" variant="ghost" href="/funktionsweise">
              Wie funktioniert&apos;s?
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-melyla-border">
            <div>
              <p className="font-serif text-2xl text-melyla-navy font-bold">4.79</p>
              <p className="text-xs text-melyla-muted mt-0.5">von 5 Sternen</p>
            </div>
            <div className="w-px h-10 bg-melyla-border" />
            <div>
              <p className="font-serif text-2xl text-melyla-navy font-bold">52+</p>
              <p className="text-xs text-melyla-muted mt-0.5">Bewertungen</p>
            </div>
            <div className="w-px h-10 bg-melyla-border" />
            <div>
              <p className="font-serif text-2xl text-melyla-navy font-bold">30</p>
              <p className="text-xs text-melyla-muted mt-0.5">Tage Garantie</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <HeroVideo />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-melyla-muted text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8l5 5 5-5" stroke="#78716C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
