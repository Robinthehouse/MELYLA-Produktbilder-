import Button from "@/components/ui/Button";
import { ShieldCheck } from "lucide-react";
import { guarantee } from "@/lib/funnel-bh";

/** Risiko-Umkehr direkt vor dem letzten CTA. */
export default function GuaranteeCta() {
  return (
    <section className="py-24 px-6 bg-melyla-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-melyla-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-melyla-gold/5 blur-3xl" />
      </div>

      <div className="container-luxury max-w-2xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-melyla-gold/15 border border-melyla-gold/30 mb-6">
          <ShieldCheck size={26} className="text-melyla-gold" />
        </span>

        <p className="text-melyla-gold-light text-xs tracking-[0.25em] uppercase font-semibold mb-4">
          {guarantee.eyebrow}
        </p>
        <h2 className="font-serif text-[2.5rem] text-white mb-5 text-balance leading-tight">
          {guarantee.title}
        </h2>
        <p className="text-melyla-on-dark mb-10 leading-relaxed">{guarantee.text}</p>

        <Button size="lg" href="#angebot">
          Jetzt Set wählen
        </Button>

        <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10">
          {guarantee.points.map((point) => (
            <div key={point} className="flex items-center gap-2 text-white/60 text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-melyla-gold" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
