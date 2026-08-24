# MELYLA — Projektstand

Stand 24.08.2026. Eine Seite: Was ist fertig, was ist offen, wo hakt es.

---

## Fertig

**Theme** `Robinthehouse/melyla-shopify-theme`, über GitHub verbunden, **noch nicht veröffentlicht** —
der Shop von 2021 läuft unverändert weiter.

| | |
|---|---|
| Sektionen | 19 eigene MELYLA-Sektionen, alle im Editor bearbeitbar |
| Seiten | Startseite (13 Abschnitte), BH, Beauty Sleep Box, Kissen, zwei Erklärseiten |
| Bewegung | Scroll-Animationen in 17 von 18 Sektionen (Dawns eigene Technik) |
| Hero | Zugespitzte Aussage, Trust-Zeile, echte Zahlungsart-Icons, Bild-Hintergrund als Option |
| Kauf-Buttons | Alle verdrahtet, führen zum Angebotsabschnitt statt direkt in den Warenkorb |
| Formatierung | **237 von 268 Feldern** können fett, kursiv und Links |
| HTML-Bausteine | BH, Kissen, Beauty Sleep Box, Warum MELYLA, Funktionsweise |
| Werkzeuge | Vorlagenprüfer + Theme Check in der CI, lokale Vorschau auf Port 4010 |
| Skill-Bibliothek | 12 Skills in `~/.claude/skills` (Shopify offiziell + Marketing) |

## Die echten Adressen

Aus `melyla.de/sitemap.xml` geholt, Titel und Preise über `/products/<handle>.js` gegengeprüft.
**Nie raten** — geratene Adressen haben in der SimGym-Analyse 17 von 20 Besucherinnen gekostet.

| Seite | Adresse |
|---|---|
| Wie funktioniert der Anti-Falten BH | `/pages/funktionsweise` |
| Wie funktioniert das Anti-Falten Kissen | `/pages/melyla-anti-falten-kissen` |
| Warum MELYLA | `/pages/warum-melyla` |
| Kontakt | `/pages/kontakt` |
| Rückversand | `/pages/ruckversand` |
| Widerrufsformular | `/pages/widerruf-formular` |

| Produkt | Adresse | Preis |
|---|---|---|
| MELYLA Anti-Falten Schlaf BH | `/products/melyla-anti-falten-schlaf-bh` | 49,50 € |
| Anti-Falten Kissen | `/products/anti-falten-kissen` | 49,50 € |
| Anti-Falten Schlafmaske | `/products/anti-falten-schlaf-maske` | 10,00 € |
| ECO Reinigungsschwamm | `/products/schwamm` | 14,40 € |
| ECO Abschminkpads 10er-Pack | `/products/abschminkschwamme` | 6,80 € |
| Scrunchie/Haargummi 4er-Pack | `/products/haar-gummie` | 4,40 € |
| Kissenbezug grau | `/products/kissenbezug-fur-anti-falten-kissen-grau` | |
| Satin-Kissenbezug | `/products/satin-kissenbezug-fur-das-melyla-anti-falten-kissen` | |

Die **Beauty Sleep Box steht in keiner Sitemap** — das Produkt gibt es noch nicht.

Prüfen lässt sich das jederzeit: `node bin/links-pruefen.mjs https://melyla.de` meldet jeden
internen Link aus Vorlagen, Sektionsgruppen und HTML-Bausteinen mit seinem Statuscode.

## Offen — bei mir

| | Warum es noch nicht erledigt ist |
|---|---|
| **Problem-Sektion als Karussell** | Robins Wunsch, noch nicht umgesetzt |
| **Zwei dunkle Flächen aufhellen** | Vertrauensleiste und Vorher/Nachher haben dunklen Hintergrund |
| **Kundenstimmen: Karussell und zweites Video** | **Blockiert** — Shopify verweigert Änderungen an dieser Datei seit dem 23.08. |
| **Otto- und Amazon-Listings** | Wartet auf Material von Jochen, Gerüst steht in `10-marktplatz-listings.md` |

## Offen — nur im Shopify-Admin

- Im Abschnitt *MELYLA Angebot* die drei Produkte auswählen — setzt Links **und** Preise
- Vorlagen zuweisen: `melyla-bh`, `melyla-kissen`, `bundle`, `funktionsweise-kissen`
  (letztere an die Seite *Wie funktioniert das Anti-Falten Kissen?*)
- Seite *Funktionsweise* umbenennen in *Wie funktioniert der Anti-Falten Schlaf BH?* —
  **nur den Titel, nicht die Adresse** `/pages/funktionsweise`, daran hängen vier Vorlagen
- Beide Erklärseiten ins Menü aufnehmen
- Beauty Sleep Box als Produkt anlegen: 79,00 €, Vergleichspreis 134,60 €, Größen S–XL
- Die vier HTML-Bausteine in die Beschreibungsfelder einsetzen
- Bilder je Sektion auswählen
- „Kaltschaum" aus den Kissen-Produktdaten entfernen — es ist Memory Foam

## Offen — bei Jochen

| | Wofür es gebraucht wird |
|---|---|
| **Amazon-Top-Bewertungen** | Ersetzen die erfundenen Beispielstimmen. Blockiert außerdem die Sternebewertung in Google |
| **Amazon-Verkaufsdaten** | Belegen „über 1.000 verkauft" |
| **Retourengründe je Produkt** | Wichtigster Input für die Marktplatz-Listings |
| **Aktuelle Otto-/Amazon-Listings** | Ausgangslage für die Überarbeitung |
| **Rechnungskauf im Checkout** | Der 44-%-Hebel, seit dem 13.08. offen |

## Rechtlich, vor dem Livegang

| Was | Wo |
|---|---|
| Die vier Beispielstimmen sind **erfunden** — unzulässig nach UWG, Anhang Nr. 23 | Sektion *MELYLA Stimmen* |
| „Über 1.000 verkauft" — belegt sind ~822 (Otto 353, Amazon Gr. M 197, Shop ~272) | Vertrauenszeile, Stimmen |
| **Widersprüchliche Materialangabe BH**: „82 % Elastan / 18 % Nylon" gegen „95 % Baumwolle" | Produktbeschreibungen |
| OEKO-TEX® und GOTS weggelassen, bis Zertifikate vorliegen | Box-Beschreibung |
| Alle `CLAIM-CHECK`-Stellen | `src/lib/funnel-bh.ts`, `09-beauty-sleep-box.md` |

## SEO und GEO — Stand

| | |
|---|---|
| `Product` mit Preis und Verfügbarkeit | **vorhanden** — Shopifys `structured_data` in Dawns Produktbereich |
| `FAQPage` | **vorhanden** — unsere FAQ-Sektion gibt sie aus |
| `Organization` | **vorhanden** — aus Dawns Header |
| **`AggregateRating`** | **fehlt** — und darf erst rein, wenn echte Bewertungen auf der Seite stehen. Sonst verstößt es gegen Googles Richtlinien und gegen das UWG. Das ist der Grund, warum eure 4,79 Sterne heute **nicht** in den Suchergebnissen erscheinen |

## Bekannter Fehler

**Shopify verweigert seit dem 23.08. still Änderungen an `melyla-funnel-kundenstimmen.liquid` — und
komplett neue Sektionsdateien.** Der Sync läuft ansonsten normal; Änderungen an bestehenden Dateien
kommen an. Drei Erklärungsversuche haben nicht getroffen.

**Arbeitsweise daraus:** Neue Funktionen kommen in **bestehende** Dateien, nicht in neue. Der
Bild-Hero ist so gelöst und funktioniert.

Ungeklärt bleibt die Ursache. Ein Blick in Themes → „Protokolle anzeigen" würde sie vermutlich zeigen.

## Der größte Hebel bleibt

**44 % Checkout-Abbruch.** Verdacht: fehlender Kauf auf Rechnung. Kein Layout und kein Text lösen das.

Zweiter Hebel: **Otto konvertiert mit 6,4 %** — sechsmal so gut wie der eigene Shop — bei nur
4.191 Besuchen in zwei Jahren. Sichtbarkeit dort ist billiger als Reichweite hier.

## Nicht mehr aktiv

- `src/` — die Next.js-Seite, seit dem 19.08. nur noch visuelle Vorlage
- `shopify-theme-live/` — Abzug des alten Custom-Themes, nur Nachschlagewerk
- `docs/melyla/archiv/` — verworfene Wege: Headless, Prompts für Shopifys Block-KI
