import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – MELYLA",
};

const sections = [
  {
    title: "Angaben gemäß § 5 TMG",
    content: (
      <>
        <p>MELYLA UG (haftungsbeschränkt)</p>
        <p>Jülicher Str. 70 C</p>
        <p>41464 Neuss</p>
        <p>Deutschland</p>
      </>
    ),
  },
  {
    title: "Handelsregister",
    content: (
      <>
        <p>Registergericht: Amtsgericht Neuss</p>
        <p>Registernummer: HRB 21639</p>
      </>
    ),
  },
  {
    title: "Geschäftsführung",
    content: <p>Marie-Theres Gruyters</p>,
  },
  {
    title: "Kontakt",
    content: (
      <>
        <p>Telefon: +49 (0) 2822 7189383</p>
        <p>E-Mail: info@melyla.de</p>
      </>
    ),
  },
  {
    title: "Umsatzsteuer-ID",
    content: (
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
        <br />
        DE 343104871
      </p>
    ),
  },
  {
    title: "Haftungsausschluss",
    content: (
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
        externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
        verantwortlich.
      </p>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20 bg-melyla-cream">
      <div className="container-luxury max-w-2xl">
        <p className="text-melyla-gold-deep text-xs tracking-[0.25em] uppercase font-semibold mb-3">Rechtliches</p>
        <h1 className="font-serif text-4xl text-melyla-navy mb-10">Impressum</h1>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 border border-melyla-border shadow-[var(--shadow-card)]">
              <h2 className="font-sans font-semibold text-melyla-navy text-base mb-3 pb-3 border-b border-melyla-border">
                {s.title}
              </h2>
              <div className="text-melyla-stone text-sm leading-relaxed space-y-1">
                {s.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
