# MELYLA — Briefing (Stand 09.08.2026)

Geordnete Fassung dessen, was Robin am 09.08.2026 erzählt hat. Ergänzt um Befunde aus dem Repo und
den Shopify-Screenshots. **Alles, was hier steht, ist Ausgangslage — keine Entscheidung.**

---

## 1. Unternehmen & Rollen

| | |
|---|---|
| **Marke** | MELYLA |
| **Rechtsform** | UG |
| **Gegründet** | 2022 von Jochen Schweizer |
| **Gründer / Produkt** | Jochen Schweizer — hat den Anti-Falten-BH selbst designt |
| **Partner / Digital** | Robin Liebzeit — Website, Technik, Content |
| **Betriebsform** | Nebenberuflich, beide |

**Jochens Situation:** Hauptjob + Airbnb-Vermietung + einjähriges Kind. Er ist froh über jede Aufgabe,
die er abgeben kann. Wörtlich von Robin: *„Er weiß gerade gar nicht richtig, wohin."*
Was er sich wünscht: Automatisierungen, Überblick, und dass Robin Posting/Reels/Content komplett übernimmt.

**Daraus folgt für Mittwoch:** Der Termin darf Jochen keine Arbeit aufhalsen. Jede Entscheidung sollte
mit „das übernimmt Robin" oder „das kostet dich 10 Minuten im Monat" enden — sonst kippt die Motivation.

---

## 2. Produkte

| Produkt | Rolle | Status |
|---|---|---|
| **Anti-Falten Schlaf-BH** | Hauptprodukt, Umsatzträger (74 % des Gesamtumsatzes) | Läuft, eigenes Design |
| **Anti-Falten Kissen (alt, Kaltschaum)** | Zweites Hauptprodukt | **Problemfall** — Modell ist alt, hohe Retourenquote, Material geht mit der Zeit kaputt. Soll abverkauft werden |
| **Anti-Falten Kissen (neu, italienisch)** | Nachfolger | Liegt bereit. Deutlich bequemer und hochwertiger als das alte |
| Satin-Kissenbezug | Zubehör | Kleiner, aber existierender Umsatz (401 € gesamt) |
| Schlafmaske, Scrunchies, Reinigungsschwamm, Abschminkpads | Zubehör | Im Website-Katalog gepflegt, kaum Umsatz |

**Der Kissen-Konflikt (Kernproblem):** Das alte Kissen soll unbedingt weg. Ein simpler Preissturz auf ~20 €
scheidet aus, weil bei der hohen Retourenquote der Deckungsbeitrag ins Negative kippt — eine Retoure
kostet Rückversand, Prüfung, Wiederaufbereitung oder Vernichtung, und das frisst eine 20-€-Marge sofort auf.
Gleichzeitig blockiert das alte Kissen den Launch des neuen: Zwei Anti-Falten-Kissen nebeneinander im
Sortiment verwirren, und das schlechtere beschädigt die Bewertungen des besseren.

---

## 3. Vertriebskanäle

| Kanal | Lage |
|---|---|
| **Otto** | Läuft am besten |
| **Amazon** | Läuft weiterhin recht gut |
| **Eigener Shopify-Shop** | Läuft aktuell schlecht — es wird so gut wie keine Werbung mehr geschaltet |
| **ChatGPT / KI-Agenten** | Läuft überraschend gut, siehe Abschnitt 6 |

**Wichtig:** Die genauen Otto- und Amazon-Zahlen fehlen mir. Alle Zahlen, die ich habe, stammen
ausschließlich aus Shopify — das ist der **schwächste** der drei Kanäle. Das Gesamtbild von MELYLA ist
also besser als `01-kennzahlen.md` aussieht. Diese Zahlen muss Jochen am Mittwoch liefern (Block 2).

---

## 4. Saisonalität — ein bestätigtes Muster

Robins Beobachtung: Die Conversion-Rate ist **im Sommer gut** und steigt auf ~2,5 %, weil Menschen im
Sommer ihre Falten sehen und dann gezielt nach Anti-Falten-Produkten suchen.

Das ist ein wertvoller Befund: 2,5 % Conversion-Rate ist für einen Shop in diesem Zustand ein sehr guter
Wert und beweist, dass die Nachfrage da ist. Die Marketing-Konsequenz ist ebenso klar wie unbequem —
**der Content-Aufbau muss im Frühjahr stehen, nicht im Sommer beginnen.** Wer erst im Juni anfängt zu
posten, verpasst genau das Fenster, in dem gekauft wird.

---

## 5. Website & Shop — der technische Bruch

**Was existiert:**
- Eine neue, fertig gebaute Next.js-Website (Home, Produktseiten, Funktionsweise, Blog, Rechtstexte),
  optisch auf dem aktuellen Stand, Brand-Farben sauber eingebaut.
- Der alte Shopify-Shop, der laut Robin *„schrecklich aussieht"*.

**Was nicht funktioniert:**
1. Der Versuch, die Website als Shopify-Theme (ZIP) hochzuladen, ist gescheitert.
2. Der Warenkorb der neuen Website ist eine **Attrappe** — der Button simuliert nur einen Erfolg,
   es gibt weder Warenkorb noch Kasse.
3. Die Produktpreise auf der Website und in Shopify stimmen nicht überein (Kissen: 89,50 € vs. 49,50 €).

**Jochens Sorge:** dass bei einer solchen Konstruktion *„die Payment-Verbindungen nicht richtig funktionieren."*

Diese Sorge ist berechtigt und muss ernst genommen werden — sie ist auch vollständig auflösbar.
Die technische Antwort steht in [04-shopify-headless.md](04-shopify-headless.md).

---

## 6. KI-Sichtbarkeit — der unterschätzte Vorsprung

Aus den Screenshots:

- **ChatGPT empfiehlt MELYLA bereits organisch.** In einer Kaufberatung zu Anti-Falten-Schlaf-BHs
  erscheint MELYLA als Nr. 2 der drei Favoriten, neben La Decollette und L'UNĒ, mit Preis und Direktlink.
- Shopifys **Agentic Storefronts sind aktiv**: 8 Produkte synchronisiert, Richtlinien-Prüfung grün,
  Kanäle ChatGPT, Microsoft Copilot und Shop eingeschaltet.
- In 30 Tagen wurden 2 Käufer:innen von KI-Agenten weitergeleitet, Umsatz daraus bisher 0 €.

Das ist ein Vorsprung, den die wenigsten Marken dieser Größe haben — und er kostet nichts.
Wie er ausgebaut wird, steht in [03-entscheidungsvorlagen.md](03-entscheidungsvorlagen.md), Vorlage D.

---

## 7. Marke & Zielgruppe — die offenen Fragen

**Branding-Stand:** Farben und Logo sind fertig und gefallen (Brand-Kit liegt vor, Farbwerte sind in der
Website hinterlegt). Was fehlt, ist alles darüber: **kein klares Thema, kein Markensatz, keine Haltung.**
Ein Kandidat steht im Raum — *„Schlaf dich schön"* — mit der offenen Frage, ob das zu provokant ist.

**Zielgruppe:** Bisherige Annahme war die 50- bis 60-Jährige: hat das Problem, hat Geld, hat Zeit.
Robin zweifelt inzwischen selbst und nennt eine zweite Hypothese: **frisch operierte Frauen** (Brust-OP)
— eine Gruppe mit hohem Leidensdruck, konkretem Anlass und ärztlicher Empfehlung als Multiplikator.

Beides sind Hypothesen. Es gibt eine Datenquelle, die beide beantworten kann und die noch nie
ausgewertet wurde: **die Otto- und Amazon-Rezensionen.** Wer dort schreibt, wie alt die Person ist und
warum sie gekauft hat, steht in den Bewertungen. Das ist Block 5 am Mittwoch.

---

## 8. Was am Mittwoch (12.08.2026) passieren soll

Ablauf: Jochen ist remote per Kamera zugeschaltet. Robin sitzt am Rechner und bekommt die Fragen
blockweise gestellt, gibt Jochens Antworten ein. Am Ende entsteht automatisch ein Protokoll für Jochen
mit allen besprochenen Problemen und den offenen To-dos. Danach beginnt die Umsetzung Schritt für Schritt.

Gestartet wird das Gespräch mit `/melyla-interview`.

**Ziele des Termins:**
1. Die fehlenden Zahlen bekommen (Otto, Amazon, Marge, Lager, Retourengründe)
2. Vier Entscheidungen treffen: Shop-Weg · altes Kissen · Zielgruppe · Rollenverteilung
3. Jochen ein Gefühl von Richtung und Entlastung geben — das ist der eigentliche Zweck

---

## 9. Offene Punkte, die ich noch nicht beantworten kann

- Otto- und Amazon-Umsätze, -Margen und -Retourenquoten
- Einkaufspreise aller Produkte, damit Deckungsbeiträge
- Lagerbestand altes Kissen (Stück) und gebundenes Kapital
- Retourengründe, aufgeschlüsselt nach Produkt
- Konditionen des neuen italienischen Kissens (Preis, MOQ, Lieferzeit)
- Laufende Fixkosten der UG
- Wieviel Zeit und Budget beide monatlich realistisch investieren können
