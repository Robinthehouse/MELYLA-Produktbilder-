# MELYLA — Rentabilität: Werbekosten gegen Marge

Stand 17.08.2026. Antwort auf den offenen Punkt aus dem Protokoll vom 12.08.: „Fixkosten/Werbekosten
gegen Marge je Kanal rechnen." Basis sind die am 17.08. nachgereichten Otto- und Amazon-Ads-Daten.

**Wichtiger Vorbehalt vorweg:** Diese Rechnung nutzt bekannte Einkaufspreise, aber **keine exakten
Amazon-Gebühren** (Verkaufsprovision, FBA-Fulfillment, Lagergebühren) — die hat Jochen noch nicht
geliefert. Wo geschätzt wird, steht es dabei. Die Kernaussage ist trotzdem belastbar, weil sie auch bei
optimistischen Annahmen zum gleichen Ergebnis kommt.

---

## 1. Die Rechenlogik: Wann trägt sich eine Werbekampagne?

Eine Kampagne ist erst profitabel, wenn der Umsatz, den sie bringt, **nach Abzug aller Kosten** mehr
einbringt, als die Kampagne kostet — nicht schon, wenn der Umsatz höher ist als die Werbekosten.

```
Nötiger ROAS für Kostendeckung = 1 ÷ Nettomarge
```

Beispiel: Bei 10 % Nettomarge muss ein Euro Werbekosten mindestens 10 Euro Umsatz bringen, damit sich
die Werbung aus der Marge selbst finanziert (10 € × 10 % = 1 €). Bei 20 % Marge reicht ein ROAS von 5.
Die Nettomarge ist damit die einzige Zahl, die entscheidet, ob eine Kampagne gut oder schlecht ist —
nicht der ROAS allein.

---

## 2. Was wir über die tatsächliche Marge wissen — und was nicht

### BH — die Rechnung, die wir führen können

| | Wert |
|---|---|
| Verkaufspreis (Otto/Shop) | 49,50 € |
| Einkaufspreis | 7,80 € |
| **Rohertrag vor Gebühren** | **41,70 € (84 %)** |
| Amazon-Verkaufsprovision *(Branchenschätzung Bekleidung/Wäsche, ca. 15 %)* | ≈ −7,43 € |
| Amazon-FBA-Fulfillment *(geschätzt, Größe/Gewicht BH, nicht bestätigt)* | ≈ −4,50 € |
| Verpackung/Versand (Otto/Shop, Eigenversand) *(geschätzt)* | ≈ −3,50 € |
| **Marge nach Gebühren, vor Retoure** | **≈ 26–30 € (53–61 %)** |

### Der Punkt, der die Rechnung kippt: Retouren sind darin noch nicht drin

Bei einer Retourenquote von 38,5–45,3 % (Otto, exakt gemessen) und ~41 % (Amazon BH Gr. M) geht bei
**fast jedem zweiten Verkauf** die volle Marge wieder verloren — plus die Kosten für Rückversand und
Prüfung/Aufbereitung obendrauf. Eine grobe Modellrechnung:

```
Effektive Marge = (Marge nach Gebühren × Behalt-Quote) − (Retourenquote × Retourenkosten)
```

Mit Behalt-Quote ≈ 60 % (Kehrwert von ~40 % Retoure) und geschätzten Retourenkosten von ~15 € pro
retourniertem Stück (Rückversand + Prüfung, EK meist nicht komplett verloren):

```
BH: (28 € × 0,60) − (0,40 × 15 €) = 16,80 € − 6,00 € = ca. 10,80 € effektive Marge pro Bestellung
```

Das ist eine **effektive Nettomarge von rund 22 %** auf den ursprünglichen Verkaufspreis (49,50 €) —
deutlich mehr als Jochens grobe Zielgröße von 10 %, aber auch deutlich weniger als die 84 % Rohertrag,
die man beim Blick auf EK vs. VK zuerst vermutet.

### Kissen — die gleiche Rechnung, schlechter

| | Wert |
|---|---|
| Verkaufspreis | 49,50 € |
| Einkaufspreis (altes Kissen) | 12,00 € |
| Rohertrag vor Gebühren | 37,50 € (76 %) |
| Marge nach Gebühren (analog geschätzt) | ≈ 25–28 € |
| **Retourenquote (Otto, exakt)** | **45,3 %** |
| Effektive Marge (Behalt-Quote 55 %, Retourenkosten ~15 €) | (26 € × 0,55) − (0,453 × 15 €) = 14,30 € − 6,80 € = **ca. 7,50 €**, also **≈ 15 % effektive Marge** |

Das Kissen liegt damit näher an Jochens 10-%-Zielmarge — was die Entscheidung aus Vorlage B (Bundle
statt Ramsch, altes Modell auslaufen lassen) zusätzlich stützt.

---

## 3. Die Amazon-Ads-Kampagnen gegen diese effektive Marge geprüft

Mit ~15–22 % effektiver Nettomarge statt der groben 10 %-Zielgröße liegt die Gewinnschwelle bei einem
**ROAS von ca. 4,5–6,5** (statt 10). Das verändert die Bewertung der Kampagnen spürbar:

| Kampagne | ROAS | Bei 22 % effektiver Marge (BH-artige Produkte) | Bei 15 % (Kissen-artig) |
|---|---|---|---|
| Low Bid Kissen | 6,83 | über Gewinnschwelle (~4,5) | knapp über Gewinnschwelle (~6,7) |
| Kampagne Low Bid | 5,53 | über Gewinnschwelle | **unter Gewinnschwelle** |
| Dekoltee Pads Antifalten | 2,45 | **klar unter Gewinnschwelle** | **klar unter Gewinnschwelle** |
| Herbst 2025 (bereits pausiert) | 1,34 | **klar unter Gewinnschwelle** | **klar unter Gewinnschwelle** |
| **Gesamt** | **3,68** | **unter Gewinnschwelle** | **unter Gewinnschwelle** |

**Fazit:** Selbst mit der realistischeren, höheren Margenschätzung (22 % statt 10 %) ist die
Amazon-Werbung **in Summe nicht profitabel** — sie kauft Umsatz und Sichtbarkeit, aber verbrennt dabei
Geld. Einzig „Low Bid Kissen" (ROAS 6,83, allerdings nur 331 € Gesamtumsatz — kleine Kampagne) liegt
sicher im grünen Bereich.

**Was das für die Kampagnen konkret heißt:**

1. **„Herbst 2025" bleibt zu Recht pausiert.** Nicht reaktivieren.
2. **„Dekoltee Pads Antifalten" (3.693,79 € Kosten, ROAS 2,45) ist der größte Verlustbringer in Euro.**
   Das ist der erste Kandidat zum Reduzieren oder Stoppen — hier verbrennt am meisten Geld am
   schnellsten.
3. **„Kampagne Low Bid" (ROAS 5,53, größter Umsatzbringer mit 14.623 €) ist der Grenzfall.** Ob sie sich
   trägt, hängt genau davon ab, ob die BH- oder die Kissen-Marge zutrifft — das muss mit Jochens
   genauen Gebühren-Daten nachgerechnet werden, bevor hier mehr Budget reingeht.
4. **„Low Bid Kissen" ist profitabel, aber zu klein**, um das Geschäft zu tragen (nur 331 € Umsatz).
   Kandidat zum vorsichtigen Hochskalieren, sobald das Bundle steht.

---

## 4. Was als Nächstes gebraucht wird, um diese Rechnung scharf zu stellen

| Fehlende Zahl | Warum wichtig |
|---|---|
| Exakte Amazon-Verkaufsprovision und FBA-Gebühren pro Produkt | Ersetzt die 15 %/4,50 €-Schätzung durch echte Zahlen |
| Tatsächliche Retourenkosten pro Stück (nicht nur -quote) | Die 15-€-Schätzung ist der unsicherste Wert in der ganzen Rechnung |
| Zeitraum der Amazon-Ads-Tabelle (Wochen? Monate? seit Kampagnenstart?) | Ohne Zeitraum lässt sich der ROAS nicht mit dem 1.170-€/Monat-Wert aus dem Interview abgleichen |

**Empfehlung für den nächsten Check-in:** Bevor irgendein Werbebudget erhöht wird — insbesondere für
„Kampagne Low Bid" — sollte diese Tabelle mit echten Gebühren- und Retourenkosten-Zahlen von Jochen
nachgerechnet werden. Bis dahin: **kein zusätzliches Werbebudget freigeben**, „Dekoltee Pads
Antifalten" im Auge behalten oder drosseln.

---

## 5. Verbindung zur Lieferpünktlichkeit (Otto: nur ~35 %)

Ein Befund aus den nachgereichten Otto-Daten gehört hierher, weil er direkt Geld kostet, ohne dass
dafür Werbebudget draufgeht: Die **Lieferpünktlichkeitsquote liegt bei nur 35,0 % (BH) / 34,3 %
(Kissen)**. Zwei mögliche Folgen, beide relevant für diese Rechnung:

1. Otto-Marktplätze werten Lieferpünktlichkeit in ihrem Ranking-Algorithmus — schlechte Werte können
   die organische Sichtbarkeit senken, was wie unsichtbare „Werbekosten" wirkt.
2. Verspätete Lieferungen sind ein plausibler Mit-Grund für die hohe Retourenquote (Ungeduld,
   Vertrauensverlust, Ablehnung bei Zustellung).

Das ist ein **operativer Hebel ohne Werbebudget**: Wenn die Ursache (Versanddienstleister, Lagerprozess)
gefunden und behoben wird, sinken potenziell sowohl Retouren als auch die Notwendigkeit, über Werbung
zusätzliche Sichtbarkeit einzukaufen. Sollte vor der nächsten Werbebudget-Entscheidung geprüft werden.

---

## 6. Floor-Preis für den befristeten Kissen-Restverkauf (Amazon/Otto)

Ergänzung vom 17.08.2026, im Zusammenhang mit der Go-to-Market-Strategie
([07-goto-market-kampagnenplan.md](07-goto-market-kampagnenplan.md)): Zusätzlich zum Super-Bundle (nur
über die Website) soll das alte Kissen befristet auch auf Amazon und Otto zum reduzierten Einzelpreis
weg — muss dabei profitabel bleiben.

```
Erwarteter Deckungsbeitrag = P × (1 − r) − EK − FBA-Fixgebühr − (Retourenbearbeitung × r)
```

Werte: EK 12 €, Amazon-Retourenquote Kissen 39 % (41 verkauft/16 retour, aus dem Interview), FBA-Fixgebühr
≈ 4,50 € *(geschätzt)*, Retourenbearbeitung ≈ 5 € *(geschätzt)*, Referral-Fee ≈ 15 % *(geschätzt)* auf
behaltene Verkäufe:

| Preis P | Deckungsbeitrag (erwartet) |
|---|---|
| 20,00 € | −4,80 € |
| 29,90 € | −0,50 € |
| **34,90 €** | **+2,60 €** |
| **36,90 €** | **+3,90 €** |
| 44,90 € | +9,50 € |

**Empfehlung: Aktionspreis 34,90–36,90 €, befristet.** Für Otto gilt dieselbe Grundlogik; dort ist die
Retourenquote mit 45,3 % sogar exakt gemessen statt geschätzt, der reale Floor-Preis liegt dort eher am
oberen Ende dieser Spanne. Beide Zahlen (Amazon-Gebühren, Otto-Gebühren) sind noch offene Punkte an
Jochen — die Rechnung wird nachgeschärft, sobald sie vorliegen. Bis dahin: nicht unter 34,90 € gehen.
