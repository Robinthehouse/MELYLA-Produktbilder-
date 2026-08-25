import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Ruler, Info } from "lucide-react";
import { sizeGuide } from "@/lib/funnel-bh";

/**
 * Größenberater. Passform ist der mit Abstand häufigste Retourengrund
 * (Otto BH 38,5 %, Amazon Gr. M ~41 %) — die Sektion arbeitet gegen genau das.
 */
export default function SizeGuideSection() {
  return (
    <section id="groesse" className="section-padding bg-melyla-cream scroll-mt-24">
      <div className="container-luxury max-w-4xl">
        <SectionHeading
          eyebrow={sizeGuide.eyebrow}
          title={sizeGuide.title}
          subtitle={sizeGuide.subtitle}
        />

        <ScrollReveal>
          <div className="bg-white rounded-3xl shadow-[var(--shadow-card)] overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-5 border-b border-melyla-border bg-melyla-cream-warm">
              <Ruler size={18} className="text-melyla-gold shrink-0" />
              <p className="font-sans font-semibold text-melyla-navy text-sm">
                Unterbrustumfang messen — direkt unter der Brust, Maßband locker anlegen
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[420px]">
                <thead>
                  <tr className="border-b border-melyla-border">
                    <th className="px-6 py-3.5 text-melyla-muted text-xs font-semibold uppercase tracking-wider">
                      Größe
                    </th>
                    <th className="px-6 py-3.5 text-melyla-muted text-xs font-semibold uppercase tracking-wider">
                      Unterbrustumfang
                    </th>
                    <th className="px-6 py-3.5 text-melyla-muted text-xs font-semibold uppercase tracking-wider">
                      Konfektion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sizeGuide.rows.map((row) => (
                    <tr
                      key={row.size}
                      className="border-b border-melyla-border last:border-0 hover:bg-melyla-cream transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center min-w-[42px] h-8 px-3 rounded-full bg-melyla-rose text-melyla-navy font-semibold text-sm">
                          {row.size}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-melyla-navy font-medium text-sm">
                        {row.unterbrust}
                      </td>
                      <td className="px-6 py-4 text-melyla-muted text-sm">{row.entspricht}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-start gap-3 px-6 py-5 bg-melyla-gold/8 border-t border-melyla-gold/20">
              <Info size={17} className="text-melyla-gold shrink-0 mt-0.5" />
              <p className="text-melyla-stone text-sm leading-relaxed">{sizeGuide.hint}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
