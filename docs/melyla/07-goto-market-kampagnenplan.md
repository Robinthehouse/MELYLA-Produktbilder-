# MELYLA — Go-to-Market: Box, Website-Kampagnen, Influencer-Seeding

Stand 17.08.2026. Antwort auf Robins Strategieskizze nach dem Partnergespräch: Bundle exklusiv über die
eigene Website, Meta- und Google-Kampagnen, Micro-Influencer-Seeding mit Rabattcodes, Restposten-Goodies
als Wertsteigerung im Bundle, befristeter Kissen-Abverkauf auf Amazon/Otto.

Baut auf [00-briefing.md](00-briefing.md), [01-kennzahlen.md](01-kennzahlen.md),
[03-entscheidungsvorlagen.md](03-entscheidungsvorlagen.md), [04-shopify-headless.md](04-shopify-headless.md),
[05-mvp-fahrplan.md](05-mvp-fahrplan.md), [06-rentabilitaet.md](06-rentabilitaet.md) und dem
[Protokoll vom 12.08.](protokoll-2026-08-12.md) auf.

---

## 0. Die zentrale Tabelle — wer liefert was

Das ist das Kernstück dieses Dokuments. Alles andere hängt davon ab, dass diese Liste abgearbeitet wird.

### Jochen liefert

| # | Was | Warum es blockiert |
|---|---|---|
| 1 | **Website-Freigabe-Entscheidung**: neue Next.js-Website als `melyla.de` nutzen? | Ohne diese Entscheidung kann keine Kampagne sauber starten — siehe Abschnitt 1 |
| 2 | Fulfillment-Partner: Name/Kontakt, Kapazität (Boxen/Woche), Kosten pro Box, Logistikablauf | Ohne das keine verlässliche Box-Kalkulation und kein Versandstart |
| 3 | Einkaufspreise Schlafmaske, Scrunchie, Schwamm, Abschminkpads | Ohne EK keine echte Deckungsbeitragsrechnung fürs Super-Bundle |
| 4 | Genaue Amazon-Gebühren (Referral-Fee, FBA-Fee je Produkt) | Der Kissen-Floor-Preis (Abschnitt 3) nutzt sonst nur Schätzwerte |
| 5 | Otto-Gebühren (Verkaufsprovision) | Gleicher Grund, für den Otto-Teil der Kissen-Aktion |
| 6 | Rezensionsexport Otto/Amazon (weiterhin offen aus dem Interview) | Schärft die Meta/Google-Zielgruppen-Definition in Abschnitt 6 |
| 7 | Freigabe Provisionshöhe fürs Influencer-Programm | Ohne Zahl kein Angebot an Influencer möglich |
| 8 | Menge/Zeitraum für die befristete Kissen-Aktion (wieviel vom Restbestand über Marktplätze raus, wieviel fürs Bundle reserviert) | Sonst konkurriert die Aktion mit dem Bundle um dieselbe Ware |

### Robin bereitet vor

| # | Was | Ergebnis |
|---|---|---|
| 1 | Box-Positionierung, Name, Texte (Wertanker-Darstellung, Limited-Edition-Rahmen) | Verkaufsfertige Produktseite für das Bundle |
| 2 | Deckungsbeitragsrechnung Super-Bundle (sobald EK-Daten von Jochen da sind) | Belastbarer Bundle-Preis |
| 3 | Kissen-Floor-Preis-Kalkulation für Amazon/Otto (Abschnitt 3, vorläufig mit Schätzwerten steht bereits) | Aktionspreis, der nicht in den Verlust läuft |
| 4 | Meta Business Suite + Google Ads Konto anlegen | Kampagnenfähigkeit hergestellt, noch ohne Ausgabe |
| 5 | Meta-Pixel + Google-Tag auf der neuen Website einbauen | Teil von `04-shopify-headless.md`, Schritt 6 |
| 6 | Creative-Bedarf für Box-Fotos/Unboxing-Content planen und produzieren | Kampagnenmaterial, das aktuell nicht existiert |
| 7 | Influencer-Longlist (Nische, Followerzahl, Kontaktweg) | Startbereite Seeding-Liste |
| 8 | Rabattcode-System in Shopify vorbereiten (Namensschema, Trackingtabelle) | Sofort einsatzbereit, sobald erste Influencer zusagen |
| 9 | Bundle-Produktseite auf der neuen Website bauen | Landingpage, auf die die Kampagnen zeigen |

---

## 1. Prämisse: Die Website-Entscheidung ist das Nadelöhr

Alles in diesem Dokument setzt voraus, dass `melyla.de` auf die neue, bereits gebaute Next.js-Website
zeigt — nicht auf den bestehenden Shopify-Shop, den Robin selbst als "schrecklich" beschreibt. Diese
Entscheidung ist laut Protokoll vom 12.08. **noch nicht gefallen** und war Jochen im Gespräch auch nicht
das dringlichste Thema (seine Sorge galt der Rentabilität, nicht der Technik — siehe Protokoll,
Abschnitt "Jochens Bedenken").

**Das macht die Entscheidung nicht weniger dringend, nur anders zu begründen:** Bezahlte Werbung auf eine
Seite zu lenken, die schlecht aussieht, verbrennt das ohnehin knappe Budget (1.000–5.000 € laut
Interview) unabhängig davon, ob die Zahlungsanbindung funktioniert. Die Empfehlung bleibt: **beim
nächsten Check-in als erste Frage klären**, mit dem Argument aus `04-shopify-headless.md` Abschnitt 3
(Rückweg jederzeit offen, Shopify-Shop bleibt als Fallback live).

**Was nicht auf diese Entscheidung wartet:** Punkte 2–8 aus "Robin bereitet vor" oben laufen unabhängig
davon — Konten anlegen, Box konzipieren, Influencer-Liste bauen kostet nichts und verliert nichts an
Wert, falls die Entscheidung sich verzögert.

---

## 2. Die Box — warum "viele Goodies" nicht billig wirken muss

Robins Sorge ist berechtigt: Vier fast unverkäufliche Zubehörartikel in ein Bundle zu packen, kann wie
Resterampe wirken statt wie ein durchdachtes Geschenk-Set. Ob es das eine oder das andere wird, hängt
nicht davon ab, was drin ist, sondern **wie es dargestellt und verpackt wird.**

### Wertanker-Darstellung

Aus der Beauty-Box-Branche geliehenes Prinzip: Jeder Bestandteil wird mit Einzelpreis gezeigt, durchgestrichen
summiert, gegen den Bundle-Preis gestellt.

| Bestandteil | Einzelpreis |
|---|---|
| Anti-Falten Schlaf-BH | 49,50 € |
| Anti-Falten Kissen | 49,50 € |
| Anti-Falten Schlafmaske | 10,00 € |
| Scrunchie / Haargummi 4er-Pack | 4,40 € |
| ECO Reinigungsschwamm | 14,40 € |
| ECO Abschminkpads 10er-Pack | 6,80 € |
| **Gesamtwert** | **134,60 €** |

Gegen einen Bundle-Preis von z. B. **99 €** gestellt, wird aus "wir geben Ladenhüter dazu" ein "du sparst
35,60 € und bekommst eine komplette Abendroutine". Das ist der entscheidende Rahmenwechsel — die Artikel
bleiben dieselben, die Wahrnehmung kippt durch die Darstellung, nicht durch die Auswahl.

*Die genaue Deckungsbeitragsrechnung für den Preis 99 € folgt, sobald Jochen die Einkaufspreise der vier
Zubehörartikel liefert (Punkt 3 in der Tabelle oben) — bis dahin ist 99 € ein Arbeitspreis, kein
finaler.*

### Namensgebung

Arbeitstitel: **„MELYLA Self-Care Box"** oder **„MELYLA Nachtroutine-Set"**. Wird final benannt, sobald
`/melyla-branding` nachgeholt ist (Modul Slogan/Salient Idea) — der Name soll zur noch zu findenden
Markenidee passen, nicht isoliert erfunden werden.

### Limitierung als Verkaufsargument, nicht als Entschuldigung

- Sichtbare Stückzahl kommunizieren ("nur 150 Boxen", an den tatsächlichen Restbestand gekoppelt)
- Zeitfenster nennen (z. B. 6–8 Wochen), das gleichzeitig mit der Kissen-Abverkaufsfrist zusammenfällt
- **Nicht** als Rabattaktion framen ("Restposten müssen raus"), sondern als **einmaliges Angebot**
  ("Diese Zusammenstellung gibt es nur, solange der Vorrat reicht") — beides ist inhaltlich dieselbe
  Situation, aber nur die zweite Formulierung schützt die Marke

### Verpackung ist der eigentliche Hebel

Eine Beauty-Box in schöner, stabiler Verpackung mit Seidenpapier und einer kleinen Karte wirkt wie ein
Geschenk. Dieselben Artikel lose im Karton wirken wie eine Reklamation. **Das ist der Punkt, an dem der
Fulfillment-Partner (Punkt 2 in der Tabelle) über Erfolg oder Misserfolg der ganzen Positionierung
entscheidet** — deshalb sind Verpackungsmaterial-Optionen (Box-Design, Füllmaterial, Grußkarte) Teil der
Fragen an Jochen, nicht ein Detail am Rand.

---

## 3. Altes Kissen — befristeter Restverkauf auf Amazon und Otto

Zusätzlich zum Bundle (das exklusiv über die Website läuft) bekommt das alte Kissen einen **befristeten,
reduzierten Einzelpreis auf Amazon und Otto**, um Restbestand parallel zu räumen. Muss profitabel
bleiben — der 20-€-Ramschpreis aus der ursprünglichen Überlegung ist bereits als Verlustgeschäft
widerlegt (siehe [03-entscheidungsvorlagen.md](03-entscheidungsvorlagen.md), Vorlage B).

### Floor-Preis-Rechnung

```
Erwarteter Deckungsbeitrag = P × (1 − r) − EK − FBA-Fixgebühr − (Retourenbearbeitung × r)
```

Mit den bekannten und geschätzten Werten (EK 12 €, Amazon-Retourenquote Kissen 39 % laut Interview
[41 verkauft/16 retour], FBA-Fixgebühr ~4,50 € *(geschätzt)*, Retourenbearbeitung ~5 € *(geschätzt)*,
Referral-Fee ~15 % *(geschätzt)* auf behaltene Verkäufe):

| Preis P | Deckungsbeitrag (erwartet) |
|---|---|
| 20,00 € | **−4,80 €** (Verlust, wie bereits gezeigt) |
| 29,90 € | −0,50 € (Nullrunde, noch nicht sicher profitabel) |
| **34,90 €** | **+2,60 €** |
| **36,90 €** | **+3,90 €** |
| 44,90 € (fast regulär) | +9,50 € |

**Empfehlung: Aktionspreis 34,90–36,90 €**, befristet auf 3–4 Wochen oder bis ein vorab festgelegtes
Kontingent verkauft ist (z. B. 150 Stück — der Rest bleibt für die Verpackung im Bundle reserviert, siehe
Punkt 8 in der Tabelle oben). Auf Otto gilt dieselbe Logik; die Otto-Retourenquote für das Kissen ist mit
45,3 % sogar exakt gemessen (nicht geschätzt) — der Floor-Preis dort liegt also eher am oberen Ende dieser
Spanne, bis Jochen die Otto-Gebühren liefert und die Rechnung präzisiert werden kann.

**Wichtig:** Diese Rechnung ist ein Startpunkt, kein letztes Wort. Sobald Jochen die echten Amazon- und
Otto-Gebühren liefert (Punkte 4–5 in der Tabelle), wird sie nachgerechnet. Bis dahin: **nicht unter
34,90 € gehen.**

---

## 4. Influencer-/Affiliate-Programm

### Mechanik: individuelle Rabattcodes statt Zusatz-Tool

Jeder Micro-Influencer bekommt einen persönlichen Shopify-Rabattcode (z. B. `ANNA15` für 15 % Rabatt).
Das ist gleichzeitig die Trackingmethode — Shopify zeigt in den Berichten, wie viele Bestellungen über
welchen Code kamen, ganz ohne zusätzliches Affiliate-Tool oder laufende Kosten. Passt zur bestehenden
Entscheidung, keine Zusatzsoftware für Dinge einzuführen, die Shopify bereits kann (vgl. den
Headless-Ansatz in `04-shopify-headless.md`, der aus demselben Grund kein SDK verwendet).

### Auswahlkriterien

- **Nische:** Beauty, Anti-Aging, Skincare, Wellness, Schlaf/Self-Care
- **Zielgruppe der Influencerin selbst:** 35–55, passend zur Interview-Hypothese (Frauen Ende 30 bis 55)
  — wird geschärft, sobald die Rezensionsauswertung vorliegt
- **Reichweite:** 2.000–50.000 Follower. Kleiner ist hier bewusst besser als größer: günstiger,
  glaubwürdiger, und die Community reagiert stärker auf Empfehlungen als bei großen Accounts
- **Engagement vor Reichweite:** Ein Account mit 5.000 Followern und echten Kommentaren schlägt einen
  mit 50.000 Followern und wenig Interaktion

### Ablauf

1. Longlist erstellen (Robin) — 20–30 Kandidatinnen, mehr als gebraucht, weil nicht alle antworten
2. Direktnachricht mit konkretem Angebot: Box gratis + individueller Rabattcode + Provision auf Verkäufe
   über den Code
3. Versand über den Fulfillment-Partner, sobald der steht (Punkt 2 in der Tabelle)
4. Nachverfolgung nach 2–3 Wochen — freundliche Erinnerung, kein Druck

### Noch offen

- **Provisionshöhe** (Vorschlag: 15–20 % vom Nettoverkaufspreis — bei Website-Verkäufen fällt keine
  Amazon-Referral-Fee an, die Marge ist dort höher als auf dem Marktplatz, das gibt Spielraum für eine
  attraktive Provision) — Freigabe durch Jochen nötig
- **Erste Welle: 10–15 Boxen** als Startgröße, bevor skaliert wird

---

## 5. Fulfillment-Partner — offene Fragen an Jochen

Robin nennt einen bereits bekannten Partner ("Familienunternehmen") für Packung und Versand. Damit die
Box-Kalkulation und der Zeitplan stehen, werden folgende Angaben gebraucht (Punkt 2 in der Tabelle):

- Name und Kontakt
- Kapazität: wie viele Boxen pro Woche sind realistisch packbar?
- Kosten pro gepackter und versendeter Box
- Logistikablauf: Liefern Jochen/Robin die Ware dorthin, oder holt der Partner sie ab?
- Verpackungsmaterial: stellt der Partner Box, Füllmaterial und Grußkarte, oder muss das separat
  beschafft werden? (Relevant für Abschnitt 2 — die Verpackung entscheidet über die Premium-Wirkung)

---

## 6. Kampagnenplan Meta + Google

### Vorbereitungsphase — läuft parallel zum Website-Bau, kostet noch nichts

| Aufgabe | Wer |
|---|---|
| Meta Business Suite anlegen | Robin |
| Google Ads Konto anlegen | Robin |
| Meta-Pixel auf der neuen Website einbauen | Robin, Teil von `04-shopify-headless.md` Schritt 6 |
| Google-Tag auf der neuen Website einbauen | Robin |
| Zielgruppen-Hypothese definieren (vorläufig: Frauen Ende 30–55) | Robin, geschärft sobald Rezensionen ausgewertet sind |
| Bundle-Produktseite bauen (Landingpage für beide Kanäle) | Robin |

### Meta (Instagram/Facebook)

- **Creative-Bedarf:** Vorhandenes Material (84 Bilder, 8 Videos aus dem Projektordner) reicht für BH
  und Kissen einzeln, aber **es gibt noch keine Box-/Unboxing-Aufnahmen** — eigener Produktionspunkt
  (Punkt 6 in der Tabelle).
- **Kampagnentyp:** Conversion-Kampagne, Ziel = Käufe auf der Bundle-Seite. Placement: Feed + Reels,
  beide Formate, da 62 % des gesamten Website-Traffics mobil ist (siehe `01-kennzahlen.md`).
- **Zielgruppen-Test:** zwei bis drei Interessens-Sets parallel (z. B. Anti-Aging/Skincare-Interesse,
  Lookalike auf bestehende Käuferinnen sobald genug Daten da sind, breite Altersgruppe 35–60 als
  Kontrollgruppe).

### Google

- **Search-Kampagne** auf Bestandssuchbegriffe, die laut Interview bereits testweise beworben werden
  (~150 €/Monat: "Anti Falten BH", "Schlaf BH gegen Falten" u. ä.) — wird um Suchbegriffe ergänzt, die
  gezielt auf das Bundle abzielen ("Geschenkset Anti-Aging", "Schlaf-Set Falten").
- Führt nicht auf einzelne Produktseiten, sondern auf die neue Bundle-Landingpage.

### Budget — gestaffelt, nicht auf einmal

Rahmen laut Interview: 1.000–5.000 € über 6 Monate.

| Phase | Wann | Budget | Bedingung |
|---|---|---|---|
| Test | Monat 1 nach Website-Live | ~300–400 € (Meta/Google je die Hälfte) | Website + Bundle + Checkout laufen nachweislich |
| Skalieren | ab Monat 2 | schrittweise erhöhen | nur wenn Kosten pro Bestellung unter der effektiven Marge liegen (~22 % beim BH, ~15 % beim Kissen laut `06-rentabilitaet.md`) |
| Stopp/Umsteuern | jederzeit | — | wenn eine Kampagne die Marge nicht deckt (gleiche Logik wie bei den bestehenden Amazon-Kampagnen in `06-rentabilitaet.md`) |

**Die Regel bleibt unverändert:** Kein Geld auf einen ungetesteten Funnel. Der Unterschied zum alten Plan
ist nur der **Zeitpunkt** — sobald Website und Bundle stehen (realistisch Okt/Nov 2026), nicht erst im
März 2027, weil Jochens 100.000-€-Ziel keine sechs Monate Wartezeit erlaubt.

### TikTok — bewusst zurückgestellt

Kein Kanal zum Start. Wird erwogen, falls Meta/Google-Daten zeigen, dass eine jüngere Zielgruppe stärker
reagiert als die Interview-Hypothese annimmt. Ein dritter Kanal von Anfang an verdünnt Budget und
Lernfähigkeit, ohne dass jemand die Zeit hat, ihn zusätzlich zu pflegen (Jochens Zeitbudget: 5–10
Std./Woche, Robins Kapazität ist ebenfalls begrenzt).

---

## 7. Zeitplan — Einordnung in den bestehenden Fahrplan

Diese Strategie ersetzt keine neue, zusätzliche Phase, sondern **konkretisiert Phase 2, 4 und 7** aus
[05-mvp-fahrplan.md](05-mvp-fahrplan.md):

| Bestehende Phase | Ergänzung durch dieses Dokument |
|---|---|
| Phase 2 (MVP-Shop, Sep 2026) | Bundle-Produktseite, Meta-Pixel/Google-Tag werden Teil des Website-Baus |
| Phase 4 (Kissen alt→neu, Sep–Nov 2026) | Befristete Amazon/Otto-Aktion zum Floor-Preis läuft **zusätzlich** zum bereits beschlossenen Bundle-Abverkauf über die Website |
| Phase 7 (Werbung, bisher "erst März 2027") | **Ersetzt durch:** erster Werbetest, sobald Website + Bundle + Checkout live und getestet sind — realistisch Okt/Nov 2026 |

`05-mvp-fahrplan.md` sollte an dieser einen Stelle (Phase 7, Datum) entsprechend angepasst werden, sobald
die Website-Entscheidung (Abschnitt 1) gefallen ist und ein reales Datum feststeht.

---

## 8. Offene Punkte im Überblick

Identisch mit der Tabelle in Abschnitt 0 — hier als Kurzliste zum schnellen Abhaken:

- [ ] Website-Freigabe durch Jochen
- [ ] Fulfillment-Partner: Kontakt, Kapazität, Kosten, Logistik
- [ ] Einkaufspreise Schlafmaske, Scrunchie, Schwamm, Abschminkpads
- [ ] Genaue Amazon-Gebühren (Referral-Fee, FBA-Fee)
- [ ] Otto-Gebühren (Verkaufsprovision)
- [ ] Rezensionsexport Otto/Amazon
- [ ] Provisionshöhe Influencer-Programm
- [ ] Menge/Zeitraum befristete Kissen-Aktion vs. Bundle-Reserve
