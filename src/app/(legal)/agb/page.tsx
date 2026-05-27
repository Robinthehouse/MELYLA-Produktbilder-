import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – MELYLA",
};

const sections = [
  {
    num: "§ 1",
    title: "Geltungsbereich und Anbieter",
    content:
      "Anbieter ist die Melyla UG (haftungsbeschränkt), Jülicher Str. 70c, 41464 Neuss. Das Angebot richtet sich ausschließlich an Personen, die das 18. Lebensjahr vollendet haben. Vertragssprache ist Deutsch.",
  },
  {
    num: "§ 2",
    title: "Vertragsschluss",
    content:
      "Die Produktdarstellungen auf unserer Website sind unverbindliche Angebote. Ein Kaufvertrag kommt erst durch explizite Annahme seitens des Unternehmens oder durch den Versand der Ware zustande, nicht durch die automatisierte Eingangsbestätigung.",
  },
  {
    num: "§ 3",
    title: "Preise",
    content:
      "Die auf den Produktseiten genannten Preise enthalten die gesetzliche Mehrwertsteuer und verstehen sich zuzüglich der jeweils angegebenen Versandkosten.",
  },
  {
    num: "§ 4",
    title: "Zahlungsbedingungen",
    content:
      "Akzeptierte Zahlungsmethoden: Vorkasse, Lastschrift, Kreditkarte und PayPal. Das Unternehmen behält sich vor, bestimmte Zahlungsarten anzubieten oder auszuschließen. Bei Vorkasse ist die Zahlung innerhalb von 10 Tagen nach Bestelleingang erforderlich.",
  },
  {
    num: "§ 5",
    title: "Aufrechnung und Zurückbehaltungsrecht",
    content:
      "Der Kunde ist zur Aufrechnung nur berechtigt, wenn seine Gegenforderungen rechtskräftig festgestellt oder unbestritten sind. Ein Zurückbehaltungsrecht kann der Kunde nur geltend machen, wenn sein Gegenanspruch auf demselben Vertragsverhältnis beruht.",
  },
  {
    num: "§ 6",
    title: "Lieferung und Eigentumsvorbehalt",
    content:
      "Lieferungen erfolgen ausschließlich nach Deutschland in haushaltsüblichen Mengen. Die gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum des Unternehmens. Versanddienstleister: DHL, GPS oder Hermes.",
  },
  {
    num: "§ 7",
    title: "Gesetzliches Widerrufsrecht",
    content:
      "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Rücksendung muss innerhalb von 14 Tagen nach Widerrufserklärung erfolgen. Die Kosten der Rücksendung trägt der Käufer.",
  },
  {
    num: "§ 8",
    title: "Freiwillige 30-Tage-Rückgabegarantie",
    content:
      "Über das gesetzliche Widerrufsrecht hinaus gewähren wir eine freiwillige 30-Tage-Rückgabegarantie, sofern die Ware originalverpackt, unbeschädigt und ungebraucht ist.",
  },
  {
    num: "§ 9",
    title: "Gewährleistung",
    content:
      "Es gelten die gesetzlichen Gewährleistungsbestimmungen. Für gebrauchte Waren beträgt die Verjährungsfrist ein Jahr ab Ablieferung der Ware.",
  },
  {
    num: "§ 10",
    title: "Haftung",
    content:
      "Das Unternehmen haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Bei leichter Fahrlässigkeit haftet das Unternehmen nur bei Verletzung wesentlicher Vertragspflichten.",
  },
  {
    num: "§ 11",
    title: "Schlussbestimmungen",
    content:
      "Es gilt das Recht der Bundesrepublik Deutschland. Die Kommunikation mit dem Unternehmen erfolgt ausschließlich per E-Mail. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
  },
];

export default function AgbPage() {
  return (
    <section className="pt-32 pb-20 bg-melyla-cream">
      <div className="container-luxury max-w-2xl">
        <p className="text-melyla-gold text-xs tracking-[0.25em] uppercase font-semibold mb-3">Rechtliches</p>
        <h1 className="font-serif text-4xl text-melyla-navy mb-4">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="text-melyla-stone text-sm mb-10">
          Melyla UG (haftungsbeschränkt) · Jülicher Str. 70c · 41464 Neuss
        </p>
        <div className="space-y-4">
          {sections.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-2xl p-6 border border-melyla-border shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-melyla-border">
                <span className="text-xs font-bold text-melyla-gold bg-melyla-rose px-2.5 py-1 rounded-full">
                  {s.num}
                </span>
                <h2 className="font-sans font-semibold text-melyla-navy text-base">
                  {s.title}
                </h2>
              </div>
              <p className="text-melyla-stone text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
