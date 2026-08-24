# MELYLA Beauty Sleep Box — Produkttexte, Wertanker, Captions

Stand 21.08.2026. Verkaufsfertige Texte für das Bundle aus allen sechs Shop-Produkten.
Löst Punkt 1 aus der Robin-Tabelle in [07-goto-market-kampagnenplan.md](07-goto-market-kampagnenplan.md)
("Box-Positionierung, Name, Texte") ein.

Baut auf [03-entscheidungsvorlagen.md](03-entscheidungsvorlagen.md) (Vorlage B, Super-Bundle),
[07-goto-market-kampagnenplan.md](07-goto-market-kampagnenplan.md) (Abschnitt 2, Wertanker-Prinzip),
[08-bildbriefing-funnel.md](08-bildbriefing-funnel.md) (Tonalität) und dem
[Protokoll vom 12.08.](protokoll-2026-08-12.md) (Entscheidung #1: altes Kissen nur noch im Bundle) auf.

**CLAIM-CHECK-Konvention:** Wie in `src/lib/funnel-bh.ts` sind alle wirkungsbezogenen Aussagen mit
`[CLAIM-CHECK]` markiert. Diese Stellen vor dem Live-Gang gegen HWG/UWG prüfen lassen.

---

## 0. Eckdaten auf einen Blick

| | |
|---|---|
| **Name** | MELYLA Beauty Sleep Box |
| **Kurzname** | Beauty Sleep Box |
| **Vorgeschlagener Slug** | `beauty-sleep-box` |
| **Preis** | 79,00 € |
| **Streichpreis / Einzelwert** | 134,60 € |
| **Ersparnis** | 55,60 € = 41 % |
| **Inhalt** | Alle 6 MELYLA Produkte, je 1× |
| **Größe** | BH-Größe wählbar: S / M / L / XL |
| **Vertrieb** | Exklusiv über melyla.de — nicht Amazon, nicht Otto |

### ⚠️ Zwei offene Punkte, die nicht in diesem Dokument gelöst sind

1. **Preiskonflikt im Code.** `src/lib/funnel-bh.ts` (Z. 330–345) enthält bereits ein
   *"Nachtroutine-Set"* zu **99,00 €** gegen 134,60 €, das `src/components/funnel/OfferSection.tsx`
   auf der BH-Produktseite rendert. Sobald die Box zu 79 € beworben wird, stehen zwei Preise für
   denselben Warenkorb auf derselben Website. **To-do:** `offerOptions.routine` auf 79,00 € und den
   Namen auf "Beauty Sleep Box" angleichen — oder die Option ganz entfernen und auf die Box-Seite
   verlinken.
2. **Marge nicht abgesichert.** Die EKs von Schlafmaske, Scrunchie, Schwamm und Abschminkpads fehlen
   weiterhin (Go-to-Market Punkt 3, liegt bei Jochen). Bekannt sind nur BH 7,80 € + Kissen 12,00 € =
   19,80 €. Bei 79 € VK bleiben davor 59,20 € für Zubehör-EK, Verpackung, Fulfillment, Versand und
   ~40 % Retouren. Das ist mit hoher Wahrscheinlichkeit tragfähig, aber **erst nachrechnen, bevor
   Werbebudget fließt.**

---

## 1. Produkttexte

Aufgebaut im Schema von `src/types/product.ts`, damit sie sich 1:1 nach `src/lib/products.ts` oder in
den Shopify-Admin übertragen lassen.

### `name`
```
MELYLA Beauty Sleep Box
```

### `shortName`
```
Beauty Sleep Box
```

### `price` / `originalPrice`
```
79.00  /  134.60
```

### `description` (1 Satz, Teaser für Karten und Suchergebnisse)
```
Die komplette MELYLA Abendroutine in einer Box: alle sechs Produkte für 79 € statt 134,60 €.
```

### `longDescription` (2–3 Sätze, Fließtext)
```
Die MELYLA Beauty Sleep Box versammelt zum ersten Mal alles, was bei uns zur Nacht gehört — vom
Anti-Falten Schlaf BH über das ergonomische Kissen bis zu den kleinen Dingen, die den Abend zur
Routine machen. Jedes Produkt einzeln gekauft kostet zusammen 134,60 €; in der Box sind es 79 €.
Entwickelt in Deutschland, gepackt als Geschenk — für dich selbst oder für jemanden, dem du eine
ruhige Nacht gönnst.
```

### `benefits` (5 Bullets)
```
Alle sechs MELYLA Produkte in einer Box
Du sparst 55,60 € gegenüber dem Einzelkauf
Komplette Abendroutine — nichts fehlt, nichts doppelt
BH-Größe frei wählbar: S bis XL
Als Geschenk verpackt, gratis Versand aus Deutschland
```

### `materials` (Sammelangabe über alle sechs Artikel)
```
Schlaf BH 95% Baumwolle / 5% Elasthan, OEKO-TEX® zertifiziert · Kissen mit Memory-Foam-Kern und
Bezug aus 100% Bio-Baumwolle · Schlafmaske aus Seide mit weichem Futter · Scrunchies 88% Polyester /
12% Elasthan · Reinigungsschwamm aus Mikrofaser und Baumwolle · Abschminkpads aus 100% Bio-Baumwolle,
GOTS-zertifiziert
```

### `care` (Sammelangabe)
```
Textilien bei 30°C im Schonprogramm oder von Hand waschen, Abschminkpads bis 60°C · Kissenbezug bei
60°C waschbar, Memory-Foam-Kern nur lüften · Nichts in den Trockner
```

### `sizes` (die Box enthält den BH — Größenwahl ist Pflicht)
```
S (60–70 cm)
M (70–80 cm)
L (80–90 cm)
XL (90–100 cm)
```

**Größenhinweis für die Produktseite:**
> Maßgeblich ist dein Unterbrustumfang, nicht die Körbchengröße. Miss direkt unter der Brust, das
> Maßband liegt locker an. Zwischen zwei Größen? Nimm die größere — der BH soll nachts halten, nicht
> einschnüren.

---

## 2. Wertanker-Tabelle

Die zentrale Darstellung. Nach dem Prinzip aus `07-goto-market-kampagnenplan.md` Abschnitt 2: jede
Position mit Einzelpreis zeigen, summieren, durchstreichen, den Boxpreis dagegenstellen. Genau diese
Tabelle gehört auf die Produktseite, in die Ads und in das Influencer-Briefing.

| Was drin ist | Einzelpreis | Adresse im Shop |
|---|---|---|
| 1× Anti-Falten Schlaf BH | 49,50 € | `/products/melyla-anti-falten-schlaf-bh` |
| 1× Anti-Falten Kissen | 49,50 € | `/products/anti-falten-kissen` |
| 1× Anti-Falten Schlafmaske | 10,00 € | `/products/anti-falten-schlaf-maske` |
| 1× Scrunchie 4er-Pack | 4,40 € | `/products/haar-gummie` |
| 1× ECO Reinigungsschwamm | 14,40 € | `/products/schwamm` |
| 1× ECO Abschminkpads 10er-Pack | 6,80 € | `/products/abschminkschwamme` |
| **Einzeln gekauft** | **~~134,60 €~~** |
| **In der Beauty Sleep Box** | **79,00 €** |
| **Du sparst** | **55,60 € (41 %)** |

Alle sechs Preise sind am 24.08.2026 gegen den Livedatensatz des Shops geprüft — Titel und Preis
stimmen bei jeder Position überein. In der Sektion *MELYLA Box-Inhalt* ist jede Position auf ihre
Produktseite verlinkt.

---

## 3. "Was drin ist" — die sechs Positionen als Routine erzählt

Der entscheidende Rahmenwechsel: Jeder Artikel bekommt eine Rolle im Abend, keiner wirkt wie
Beipack. Reihenfolge = Ablauf des Abends, nicht Preisreihenfolge.

**Der Abend beginnt am Waschbecken.**

**1 · ECO Reinigungsschwamm** (14,40 €)
Der schwarze Chenille-Schwamm nimmt Make-up und den Tag mit einer Bewegung ab — ohne Zerren an der
empfindlichen Haut, ohne Wattepad im Müll. Ein Schwamm ersetzt viele Wochen Einweg.

**2 · ECO Abschminkpads, 10er-Pack** (6,80 €)
Für Augen und Feinarbeit. Bio-Baumwolle, GOTS-zertifiziert, mit Wäschenetz — bis 60 °C waschbar und
immer wieder verwendbar. [CLAIM-CHECK] Ersetzt bis zu 1.000 Einweg-Pads.

**3 · Scrunchie 4er-Pack** (4,40 €)
Haare aus dem Gesicht, ohne Knick am Morgen. Die seidenweiche Oberfläche zieht nicht am Ansatz und
schützt vor Bruch und Frizz. Vier Stück, damit nie einer fehlt.

**Dann wird es dunkel.**

**4 · Anti-Falten Schlafmaske** (10,00 €)
Seide außen, weiches Futter innen. Sie blockiert Licht vollständig und legt sich dabei so leicht auf
die Augenpartie, dass am Morgen kein Abdruck bleibt. [CLAIM-CHECK] Kein Druck auf die Augenlider.

**5 · Anti-Falten Kissen** (49,50 €)
Die ergonomische Kontur hält Wange und Dekolleté frei vom Kissendruck und stützt gleichzeitig den
Nacken. [CLAIM-CHECK] Reduziert Druckfalten im Gesicht. Memory-Foam-Kern, Bezug aus Bio-Baumwolle,
waschbar.

**6 · Anti-Falten Schlaf BH** (49,50 €)
Das Herzstück und unser Bestseller — 4,79 Sterne aus 52 Bewertungen. Er hält das Dekolleté nachts
sanft in Position. [CLAIM-CHECK] Verhindert neue Schlaffalten. So weich und atmungsaktiv, dass man
ihn kaum spürt. Größe frei wählbar.

**Und am Morgen ist die Routine schon passiert.**

---

## 4. Der Limitierungs-Rahmen

Nach der Vorgabe aus `07-goto-market-kampagnenplan.md` Abschnitt 2: **nicht** als Rabattaktion oder
Restposten framen, sondern als einmalige Zusammenstellung. Die Situation ist inhaltlich dieselbe, aber
nur die zweite Formulierung schützt die Marke.

**Für die Produktseite (Textbaustein):**
> Diese Zusammenstellung haben wir einmalig gepackt — **[XX] Boxen**, solange der Vorrat reicht.
> Danach gibt es die sechs Produkte wieder einzeln.

**Platzhalter `[XX]`** an den tatsächlichen Restbestand koppeln (Go-to-Market Punkt 8: wieviel Kissen
gehen in die Amazon/Otto-Aktion, wieviel bleibt für die Box reserviert). Vorschlag laut Kampagnenplan:
150 Stück, Zeitfenster 6–8 Wochen.

**Diese Formulierungen NICHT verwenden:**
- ❌ "Restposten", "Lagerräumung", "muss raus", "Abverkauf"
- ❌ "Wir schenken dir 41 %" — der Wert liegt in der Zusammenstellung, nicht im Nachlass
- ❌ Countdown-Timer, die nach Ablauf neu starten

---

## 5. Versand, Garantie, Vertrauen

Textbausteine, identisch zur bestehenden Website-Argumentation:

- Gratis Versand aus Deutschland, 2–4 Werktage, CO₂-neutral
- 30 Tage Geld-zurück-Garantie — auch auf die geöffnete Box
- Zahlung per PayPal, Klarna, Kauf auf Rechnung, Kreditkarte
  *(Rechnung ist bei der Hauptzielgruppe Pflicht — siehe `protokoll-2026-08-12.md`, Checkout-Abbruch)*
- Entwickelt in Deutschland

---

## 6. SEO

**Meta-Title** (58 Zeichen)
```
MELYLA Beauty Sleep Box — 6 Produkte für 79 € statt 134,60 €
```

**Meta-Description** (154 Zeichen)
```
Die komplette Anti-Falten Abendroutine in einer Box: Schlaf BH, Kissen, Schlafmaske, Scrunchies,
Schwamm und Abschminkpads. 79 € statt 134,60 €. Gratis Versand.
```

**Ziel-Suchbegriffe** (ergänzen die Bestandskampagne aus Kampagnenplan Abschnitt 6)
```
Geschenkset Anti-Aging · Schlaf-Set Falten · Beauty Box Geschenk Frau · Anti Falten Set ·
Schlaf BH Set · Beauty Sleep Geschenkset · Selfcare Box Geschenk
```

**Bild-Alt-Text**
```
MELYLA Beauty Sleep Box mit Anti-Falten Schlaf BH, Kissen, Schlafmaske, Scrunchies,
Reinigungsschwamm und Abschminkpads auf weißem Hintergrund
```

---

## 7. Bildmaterial

Erstellt mit Higgsfield aus den echten Produktfotos als Referenz (Nano Banana Pro für die Bilder,
Kling 3.0 für das Video). Alle Dateien liegen in `public/images/products/`.

| Datei | Format | Wofür |
|---|---|---|
| `MELYLA_BeautySleepBox_HeroShot_Studio-Weiss_1x1.jpg` | 1:1 | **Hauptbild** — Produktseite, Shopify-Thumbnail, Meta-Feed |
| `MELYLA_BeautySleepBox_HeroShot_Studio-Weiss_Grid_1x1.jpg` | 1:1 | Zweites Galeriebild — strengeres Raster, exakteste Kissen-Kontur |
| `MELYLA_BeautySleepBox_HeroShot_Studio-Weiss_9x16.jpg` | 9:16 | Reels/Stories-Standbild, Endframe des Videos, mit Logo |
| `MELYLA_BeautySleepBox_Box-geschlossen_9x16.jpg` | 9:16 | Geschlossene Box, Startframe des Videos |
| `MELYLA_BeautySleepBox_Video_Unboxing_9x16.mp4` | 9:16, 5 s | Reels/TikTok/Meta — Box springt auf, Produkte fliegen heraus, Logo blendet ein |

**Wichtig:** In keinem Bild sind Preise oder Claims eingebrannt. Die 79 € und die Ersparnis kommen als
Overlay dazu (Canva) oder stehen auf der Produktseite — so bleiben die Bilder bei einer Preisänderung
brauchbar.

**Bekannter Fehler im Video:** Kling färbt die Box beim Aufspringen von Creme nach Kraftpapier-Braun um
— Sekunde 0 stimmt, ab dem Öffnen ist sie braun. Für einen ersten Reel verkraftbar (die Box ist nur kurz
zu sehen, der Fokus liegt auf den Produkten), für eine bezahlte Ad sollte das Video mit mehr Credits neu
gerendert werden. Ebenso verformen sich BH und Schlafmaske im Flug leicht — typisch für KI-Video.

**Grenzen des Materials:** Es sind KI-Kompositionen aus den echten Produktfotos, keine Fotos einer real
existierenden Box. Die Verpackung ist ein Entwurf, kein Muster vom Fulfillment-Partner. Sobald die echte
Box steht, sollten diese Bilder durch echte Fotos ersetzt werden — für Ads und Seeding sind sie aber
sofort einsetzbar.

## 8. Captions

Alle Texte in Du-Ansprache, ruhig-premium, kein Jugendwahn, kein Defizit-Framing
(Vorgabe `08-bildbriefing-funnel.md`). Zielgruppe: Frauen Ende 30–55, Schwerpunkt 50–65.

### 8.1 Instagram / Facebook Feed — Variante A (Wertanker)

```
Sechs Produkte. Eine Box. 79 €.

Einzeln gekauft kostet unsere Abendroutine 134,60 €:
◦ Anti-Falten Schlaf BH — 49,50 €
◦ Anti-Falten Kissen — 49,50 €
◦ Schlafmaske aus Seide — 10,00 €
◦ Scrunchies, 4er-Pack — 4,40 €
◦ ECO Reinigungsschwamm — 14,40 €
◦ ECO Abschminkpads, 10er — 6,80 €

In der Beauty Sleep Box sind es 79 €. Du sparst 55,60 €.

Wir haben diese Zusammenstellung einmalig gepackt — solange der Vorrat reicht.
Link in der Bio 🤍

#MELYLA #BeautySleep #Antifalten #Abendroutine
```

### 8.2 Instagram / Facebook Feed — Variante B (Routine)

```
Was zwischen Abschminken und Einschlafen passiert, entscheidet mehr, als man denkt.

Deshalb gibt es jetzt alles, was bei uns zur Nacht gehört, in einer Box:
den Schwamm und die Pads fürs Waschbecken. Den Scrunchie, damit die Haare aus dem Gesicht sind.
Die Schlafmaske aus Seide. Das ergonomische Kissen. Und den Schlaf BH, unseren Bestseller.

Sechs Produkte, ein Abend, 79 € statt 134,60 €.

Die MELYLA Beauty Sleep Box — entwickelt in Deutschland, gepackt als Geschenk.
🤍 Link in der Bio

#MELYLA #Abendroutine #BeautySleep #SchlafDichSchön
```

### 8.3 Reel / TikTok (zum Unboxing-Video, siehe Abschnitt 7)

```
Alles, was bei uns zur Nacht gehört — in einer Box. 🤍

Schlaf BH · Kissen · Schlafmaske · Scrunchies · Schwamm · Abschminkpads
134,60 € einzeln. 79 € in der Box.

Einmalig gepackt, solange der Vorrat reicht.

#MELYLA #unboxing #beautysleep #antiaging #abendroutine #selfcare
```

**Hook-Alternativen für Zeile 1** (die erste Zeile entscheidet über die Verweildauer):
- „Wir haben zum ersten Mal alles in eine Box gepackt."
- „134,60 € einzeln. Oder 79 € so."
- „Sechs Produkte. Eine Nacht. Ein Preis."

### 8.4 Meta-Ad Primary Text — 3 Varianten für den Zielgruppen-Test

Drei Winkel für die parallelen Interessens-Sets aus Kampagnenplan Abschnitt 6.

**Ad 1 — Preis/Wert (breite Zielgruppe 35–60)**
```
Unsere sechs Produkte kosten einzeln 134,60 €. In der neuen Beauty Sleep Box kosten sie 79 €.

Drin: der Anti-Falten Schlaf BH (unser Bestseller, 4,79 ★ aus 52 Bewertungen), das ergonomische
Anti-Falten Kissen, eine Schlafmaske aus Seide, vier Scrunchies, der ECO Reinigungsschwamm und
zehn ECO Abschminkpads.

Gratis Versand aus Deutschland · 30 Tage Geld-zurück-Garantie
Einmalig gepackt, solange der Vorrat reicht.
```

**Ad 2 — Routine/Ritual (Interesse Skincare, Wellness)**
```
Die meisten Anti-Aging-Produkte verlangen, dass du etwas zusätzlich tust. Diese hier arbeiten,
während du schläfst.

Die MELYLA Beauty Sleep Box ist die komplette Abendroutine: abschminken, Haare hoch, Licht aus —
und ein Schlaf BH und ein Kissen, die dafür sorgen, dass die Nacht der Haut nichts anhaben kann.
[CLAIM-CHECK]

Sechs Produkte, 79 € statt 134,60 €. Entwickelt in Deutschland.
```

**Ad 3 — Geschenk (Q4, Lookalike auf Bestandskäuferinnen)**
```
Ein Geschenk, das nicht im Schrank landet.

Die MELYLA Beauty Sleep Box: Anti-Falten Schlaf BH, ergonomisches Kissen, Schlafmaske aus Seide,
Scrunchies, Reinigungsschwamm und Abschminkpads — als Geschenk verpackt.

79 € statt 134,60 € im Einzelkauf. BH-Größe frei wählbar, und wenn sie nicht passt, tauschen wir
sie innerhalb von 30 Tagen.
```

### 8.5 Influencer-DM (Erstkontakt)

Nach dem Ablauf in `07-goto-market-kampagnenplan.md` Abschnitt 4. Erste Welle: 10–15 Boxen.

```
Hallo [Name],

ich bin Robin von MELYLA — wir entwickeln in Deutschland Produkte, die nachts für die Haut
arbeiten: einen Anti-Falten Schlaf BH, ein ergonomisches Kissen und ein paar Kleinigkeiten
drumherum.

Wir haben gerade zum ersten Mal alles in eine Box gepackt und würden dir gern eine schicken —
kostenlos und ohne Gegenleistung, du musst nichts posten.

Falls sie dir gefällt und du sie zeigen möchtest, richten wir dir einen eigenen Rabattcode ein
([NAME]15), mit dem deine Community [XX] % bekommt, und du erhältst [XX] % Provision auf jede
Bestellung darüber.

Sag einfach Bescheid, wohin ich sie schicken darf.

Herzliche Grüße
Robin
```

**Platzhalter:** Rabatt- und Provisionshöhe stehen noch aus (Go-to-Market Punkt 7, Freigabe Jochen).
Vorschlag aus dem Kampagnenplan: 15–20 % Provision.

**Nachfassen** nach 2–3 Wochen, freundlich, kein Druck:
```
Hallo [Name], nur eine kurze Nachfrage — ist die Box gut bei dir angekommen? Falls du Fragen zu
den Produkten hast, melde dich jederzeit. Und falls sie nichts für dich ist, ist das völlig in
Ordnung. Viele Grüße, Robin
```

### 8.6 E-Mail-Betreffzeilen

```
1. Zum ersten Mal: alles in einer Box
2. 134,60 € einzeln. 79 € zusammen.
3. Deine Abendroutine — jetzt komplett
```

### 8.7 Hashtag-Sets

**Deutsch, breit**
```
#MELYLA #Antifalten #BeautySleep #Abendroutine #Hautpflege #SelfcareRoutine #GutSchlafen
#AntiAging #Schlafmaske #Naturkosmetik
```

**Nischig, für Reels**
```
#SchlafBH #Dekolletefalten #Schlaffalten #BeautySleepRoutine #Hautpflegeroutine #Abendritual
#MadeInGermany #Selfcare
```

---

## 9. Was jetzt noch fehlt

- [ ] EK-Preise der vier Zubehörartikel → echte DB-Rechnung für 79 € (Jochen)
- [ ] Stückzahl `[XX]` für die Limitierung festlegen (hängt an der Kissen-Reserve)
- [ ] Rabatt- und Provisionshöhe fürs Influencer-Programm (Jochen)
- [ ] Preiskonflikt `funnel-bh.ts` auflösen (siehe Abschnitt 0)
- [ ] CLAIM-CHECK-Stellen rechtlich prüfen lassen (HWG/UWG)
- [ ] Verpackung klären: Box, Seidenpapier, Grußkarte — laut Kampagnenplan Abschnitt 2 der
      eigentliche Hebel gegen die Resterampe-Wirkung (Fulfillment-Partner, Jochen)
- [ ] Bundle-Produktseite auf melyla.de bauen (Go-to-Market Punkt 9)
