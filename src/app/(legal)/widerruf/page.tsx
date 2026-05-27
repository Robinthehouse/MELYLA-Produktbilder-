import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widerrufsrecht & Rückgabe – MELYLA",
};

export default function WiderrufPage() {
  return (
    <section className="pt-32 pb-20 bg-melyla-cream">
      <div className="container-luxury max-w-2xl">
        <p className="text-melyla-gold text-xs tracking-[0.25em] uppercase font-semibold mb-3">Rechtliches</p>
        <h1 className="font-serif text-4xl text-melyla-navy mb-4">Widerrufsrecht & Rückgabe</h1>
        <p className="text-melyla-stone text-sm mb-10">
          Wir bieten dir mehr als gesetzlich vorgeschrieben: 30 Tage Rückgabe ohne Angabe von Gründen.
        </p>

        {/* Highlight-Box */}
        <div className="bg-melyla-rose border border-melyla-border rounded-2xl p-6 mb-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-melyla-gold flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <div>
            <p className="font-semibold text-melyla-navy text-sm mb-1">30 Tage Rückgabegarantie</p>
            <p className="text-melyla-stone text-sm leading-relaxed">
              Zusätzlich zur gesetzlichen 14-Tage-Frist nehmen wir Produkte ohne Begründung
              innerhalb von 30 Tagen zurück.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "Gesetzliches Widerrufsrecht (14 Tage)",
              content: (
                <p>
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag
                  zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder
                  ein von Ihnen benannter Dritter die Ware in Besitz genommen haben.
                </p>
              ),
            },
            {
              title: "Freiwillige 30-Tage-Rückgabegarantie",
              content: (
                <p>
                  Über das gesetzliche Widerrufsrecht hinaus bieten wir Ihnen eine freiwillige
                  30-Tage-Rückgabegarantie. Produkte können innerhalb von 30 Tagen ab Warenerhalt
                  zurückgegeben werden, sofern sie originalverpackt, unbeschädigt und ungebraucht sind.
                </p>
              ),
            },
            {
              title: "So widerrufen Sie",
              content: (
                <div className="space-y-2">
                  <p>
                    Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen
                    Erklärung über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren:
                  </p>
                  <ul className="space-y-1 mt-3">
                    <li><strong>E-Mail:</strong> happyorder@melyla.de</li>
                    <li><strong>Adresse:</strong> Jülicher Str. 70c, 41464 Neuss</li>
                    <li><strong>Telefon:</strong> +49 (0) 2822 7189383</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Rückzahlung",
              content: (
                <p>
                  Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen, die wir
                  von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem
                  Tag, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist. Wir verwenden
                  für diese Rückzahlung dasselbe Zahlungsmittel, das Sie bei der ursprünglichen
                  Transaktion eingesetzt haben.
                </p>
              ),
            },
            {
              title: "Rücksendung der Ware",
              content: (
                <p>
                  Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen
                  ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns
                  zurückzusenden. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
                  vierzehn Tagen absenden. Die unmittelbaren Kosten der Rücksendung der Waren trägt
                  der Kunde.
                </p>
              ),
            },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 border border-melyla-border shadow-[var(--shadow-card)]">
              <h2 className="font-sans font-semibold text-melyla-navy text-base mb-3 pb-3 border-b border-melyla-border">
                {s.title}
              </h2>
              <div className="text-melyla-stone text-sm leading-relaxed">
                {s.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
