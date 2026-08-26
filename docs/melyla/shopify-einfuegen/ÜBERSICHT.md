# Wohin gehört was?

Es gibt **zwei völlig verschiedene Stellen**. Nie verwechseln:

## 1. Dateien auf `.html` → in ein Inhaltsfeld

Das ist **fertiger Code**. Er kommt dorthin, wo Shopify ein Textfeld mit dem
`</>`-Symbol anbietet:

- **Seiten:** Onlineshop → Seiten → Seite öffnen → Feld *Inhalt* → `</>`
- **Produkte:** Produkt öffnen → Feld *Beschreibung* → `</>`

Vorgehen: `</>` anklicken, alten Inhalt mit Cmd+A und Entf löschen, neuen Code
einfügen, **sofort speichern**. Nicht in die Textansicht zurückschalten.

| Datei | Wohin |
|---|---|
| `funktionsweise-FERTIG.html` | Seite *Wie funktioniert der Anti-Falten Schlaf BH?* → Inhalt |
| `funktionsweise-kissen.html` | Seite *Wie funktioniert das Anti-Falten Kissen?* → Inhalt |
| `produktbeschreibung-bh.html` | Produkt *Anti-Falten Schlaf BH* → Beschreibung |
| `produktbeschreibung-beauty-sleep-box.html` | Produkt *MELYLA Beauty Sleep Box* → Beschreibung |
| `produktbeschreibung-kissen.html` | Produkt *Anti-Falten Kissen* → Beschreibung |
| `warum-melyla.html` | Seite *Warum MELYLA* → Inhalt (enthält seit 25.08. die Gründergeschichte) |
| `falten-vermeiden.html` | Seite *Wie Falten entstehen* → Inhalt (Seite muss noch angelegt werden, Adresse `falten-vermeiden`) |
| `problem-passage.html` | Rückfalloption, falls ein Block nicht klappt |

## 2. Prompts an die Shopify-KI — **nicht mehr aktuell**

Die `prompt-*.txt` liegen jetzt in `docs/melyla/archiv/prompts-shopify-ki/`. Aus ihnen sind die
Blöcke entstanden, die seit dem 21.08.2026 als feste Sektionen im Theme-Repo
`Robinthehouse/melyla-shopify-theme` liegen.

**Blöcke werden nicht mehr per Prompt erzeugt.** Änderungen laufen über den Code im Theme-Repo:
Datei ändern → Push → Shopify zieht die Änderung ins Theme. Im Theme-Editor stehen alle Sektionen
unter *Abschnitt hinzufügen* mit vorbefüllten Texten bereit.

Was hier bleibt, sind die `.html`-Dateien aus Abschnitt 1 — die gehören weiterhin in Inhaltsfelder
von Seiten und Produkten, nicht ins Theme.

## Produktlinks prüfen

`warum-melyla.html` enthält zwei Buttons auf `/products/anti-falten-schlaf-bh` und
`/products/beauty-sleep-box`. **Die Handles sind geraten** — ich kenne die des Shops nicht.
Nach dem Einfügen einmal anklicken; wenn eine 404 kommt, den richtigen Pfad aus der Adresszeile
des jeweiligen Produkts übernehmen.

Dasselbe gilt für die beiden Querverweis-Abschnitte im Theme (BH-Seite → Kissen, Kissen-Seite → BH).
Die stehen vorerst auf `/collections/all`; im Theme-Editor beim Abschnitt *Bild mit Text* das
richtige Produkt hinterlegen.

## CLAIM-CHECK: „Hilft bei PMS-Symptomen"

Auf der alten Seite *Warum Melyla* stand, das Produkt helfe bei **PMS-Symptomen wie Mastodynie**
(Brustschmerzen). Das ist eine gesundheitsbezogene Aussage; sie fällt unter das
Heilmittelwerberecht und braucht Belege. **In `warum-melyla.html` ist sie nicht enthalten** und
sollte auch sonst nirgends stehen.

## CLAIM-CHECK: Aussagen im Kissen-Text

Drei Formulierungen aus der bisherigen Shop-Beschreibung stehen **nicht** mehr im neuen Text:

| Bisher | Grund |
|---|---|
| „Reduziert Schwellungen durch Vermeidung von Flüssigkeitsstau" | Körperfunktionsbezogene Wirkaussage, belegpflichtig |
| „Orthopädische Eigenschaften" | Rückt das Produkt Richtung Medizinprodukt, Nachweispflichten |
| „Moderner Kaltschaumkern" | Falsches Material — es ist viskoelastischer Memory Foam |

**„Kaltschaum" gehört auch aus den Produktdaten entfernt**, nicht nur aus der Beschreibung.

Die Aussagen zu Druckfalten („die Haut wird zur Seite geschoben und bleibt dort") sind bewusst über
den mechanischen Vorgang formuliert, nicht als Heilversprechen. Trotzdem vor dem Livegang
mitprüfen lassen.

## CLAIM-CHECK: Materialangabe des Schlaf BHs

Zwei Quellen widersprechen sich:

| Quelle | Angabe |
|---|---|
| `produktbeschreibung-bh.html` (steht so im Shop) | 82 % Elastan, 18 % Nylon |
| `docs/melyla/09-beauty-sleep-box.md` | 95 % Baumwolle, 5 % Elasthan, OEKO-TEX® |

In `produktbeschreibung-beauty-sleep-box.html` steht die veröffentlichte Variante
(82 % Elastan, 18 % Nylon). **Vor dem Livegang gegen Etikett oder Lieferantenangabe prüfen** —
Materialangaben sind nach der EU-Textilkennzeichnungsverordnung verpflichtend korrekt.

Die Siegel **OEKO-TEX®** und **GOTS** sind in der Box-Beschreibung bewusst **weggelassen**. Sie
dürfen nur genannt werden, wenn eine gültige Zertifizierung für genau diesen Artikel vorliegt.
Liegen die Zertifikate vor, können sie ergänzt werden — sie sind ein starkes Verkaufsargument.

## Bilder

Alles im Unterordner `bilder/`. In Shopify unter **Inhalte → Dateien** hochladen,
danach im Theme-Editor beim jeweiligen Abschnitt auswählen. Dateinamen nicht
ändern — bei einigen sind die Adressen bereits fest eingetragen.
