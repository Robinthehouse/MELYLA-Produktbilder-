import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – MELYLA",
};

const sections = [
  {
    title: "1. Verantwortliche Stelle",
    content:
      "Verantwortlich für die Datenverarbeitung auf dieser Website ist: Melyla UG (haftungsbeschränkt), Jülicher Str. 70 C, 41464 Neuss, Deutschland. E-Mail: hallo@melyla.de",
  },
  {
    title: "2. Erhebung und Speicherung personenbezogener Daten",
    content:
      "Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (Server-Log-Dateien): Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.",
  },
  {
    title: "3. Bestelldaten",
    content:
      "Bei einer Bestellung erheben wir Name, Anschrift, E-Mail-Adresse und Zahlungsdaten. Diese Daten verarbeiten wir ausschließlich zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) und löschen sie nach Ablauf der gesetzlichen Aufbewahrungsfristen.",
  },
  {
    title: "4. Weitergabe von Daten",
    content:
      "Ihre personenbezogenen Daten werden nur an Dritte weitergegeben, soweit dies zur Vertragserfüllung notwendig ist (z. B. Versanddienstleister) oder Sie ausdrücklich eingewilligt haben. Eine Weitergabe zu Werbezwecken ohne Ihre Einwilligung findet nicht statt.",
  },
  {
    title: "5. Cookies",
    content:
      "Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb erforderlich sind. Darüber hinaus setzen wir keine Tracking-Cookies ohne Ihre ausdrückliche Einwilligung ein.",
  },
  {
    title: "6. Ihre Rechte",
    content:
      "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie auf Datenübertragbarkeit. Außerdem haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren. Anfragen richten Sie bitte an: hallo@melyla.de",
  },
  {
    title: "7. Datensicherheit",
    content:
      "Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust oder unberechtigten Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.",
  },
];

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-20 bg-melyla-cream min-h-screen">
      <div className="container-luxury max-w-3xl">
        <h1 className="font-serif text-[2.5rem] text-melyla-navy mb-3">Datenschutzerklärung</h1>
        <p className="text-melyla-muted text-sm mb-12">Stand: Januar 2026</p>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-sans font-semibold text-melyla-navy text-base mb-2">{s.title}</h2>
              <p className="text-melyla-stone text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
