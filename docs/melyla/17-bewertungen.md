# Bewertungen im Shop

Stand 16.09.2026. Ersetzt den offenen Punkt „Otto-/Amazon-Rezensionen auswerten"
aus dem Protokoll vom 12.08. **teilweise** — die Shop-Bewertungen sind jetzt drin,
Amazon und Otto stehen weiter aus.

## Was jetzt live geht

Die Bewertungs-Sektionen waren seit dem Qualitätsdurchgang leer und blendeten sich
aus. Auf der Seite stand „4,79 · 52 Bewertungen", ohne dass eine einzige Stimme zu
sehen war. Das ist behoben: 79 echte Shop-Bewertungen liegen im Theme.

| Seite | Sektion | Zeigt |
|---|---|---|
| Startseite | MELYLA Stimmen | BH, ab 5 ★, 10 Karten, neueste zuerst |
| BH-Seite | MELYLA Bewertungen | BH, ab 4 ★, 12 Karten, beste zuerst |
| Kissen-Seite | MELYLA Bewertungen | Kissen, ab 4 ★, 12 Karten, beste zuerst |

## Zwei Blöcke, eine Wahrheit

**MELYLA Bewertungen** (`sections/melyla-bewertungen.liquid`) — die große Variante
für Produktseiten. Schnitt, Sterne und Verteilungsbalken im Kopf, darunter die
Karten als Karussell oder Raster.

**MELYLA Stimmen** (`sections/melyla-stimmen.liquid`) — die kompakte für
Landingpages. Bild links aus eigenem Material, rechts eine Schnittzeile und
Zitatkarten im Karussell. Kein Verteilungsbalken.

Beide rendern dasselbe Snippet (`snippets/melyla-bewertungen-liste.liquid`) und
lesen dieselbe Datei (`snippets/melyla-bewertungen-daten.liquid`). Der Schnitt kann
deshalb zwischen zwei Sektionen nicht auseinanderlaufen. Beide sind über den Editor
auf jeder Seite platzierbar und dort einzeln einstellbar: Produkt, Quelle,
Mindeststerne, Anzahl, Reihenfolge, Farben.

**Keine Blöcke mehr zum Eintippen.** 79 Bewertungen von Hand in den Editor zu
tippen wäre unzumutbar, und dieselbe Bewertung müsste auf jeder Seite erneut
eingetippt werden — Blöcke sind zwischen Vorlagen nicht kopierbar. Neue
Bewertungen kommen in die Datendatei und stehen dann überall gleichzeitig richtig.

### Eine Bewertung nachtragen

Eine Zeile in `snippets/melyla-bewertungen-daten.liquid`, mit `§` getrennt,
Zeilenende `§§`:

```
produkt § quelle § sterne § datum § name § titel § text
```

`produkt`: bh · kissen · bezug · maske · set · schwamm
`quelle`: shop · amazon · otto
Zeilenumbrüche im Text als `[br]`.

Schnitt, Anzahl und Balken rechnen sich daraus. Es gibt keine getippte Zahl, die
abdriften könnte.

## Der Mindeststerne-Filter filtert die Karten, nicht den Schnitt

Der Wunsch war ursprünglich „nur die Top-5-Sterne-Bewertungen". Der Filter kann
das — aber der ausgewiesene Schnitt zählt bewusst **immer alle** Bewertungen des
Produkts.

Sonst stünde bei `min_sterne = 5` eine glatte 5,00 auf der Seite, obwohl es
Vier-Sterne-Bewertungen gibt. Das wäre eine falsche Angabe, und genau die Konstruktion
— nur positive Stimmen zeigen und daraus einen Schnitt ableiten — ist nach
§ 5b Abs. 3 UWG angreifbar. Die Startseite zeigt deshalb 5-Sterne-Karten über der
ehrlichen 4,78.

Jede Sektion hat ein Pflichtfeld **Herkunftshinweis**. Das ist die Angabe nach
§ 5b Abs. 3 UWG, ob und wie die Echtheit geprüft wird. Nicht leer lassen.

## Was bewusst nicht im Theme steht

**E-Mail-Adressen.** Stehen im Export, gehören nicht ins Theme. Geprüft: null
Adressen in der Datendatei.

**Nachnamen.** Auf den Anfangsbuchstaben gekürzt — „Stella Leibnitz" wird
„Stella L.". Datenminimierung.

**Drei BH-Bewertungen aus Inhaber-/Firmenadressen.** Im Export stammen die
Bewertungen von *Lena* (16.04.2021), *Ingrid* (16.04.2021) und *Miga* (15.11.2022)
aus `schweizer.j.c@gmail.com`, `Jochen__Schweizer@web.de` und
`j.schweizer@creditreform-rating.de`. Alle drei mit 5 Sternen. Sie sind nicht
übernommen. **Mit Jochen klären** — wenn das echte Käuferinnen waren, die über eine
Familienadresse bestellt haben, können sie zurück. Selbst abgegebene Bewertungen
sind nach UWG Anhang Nr. 23b unzulässig.

**Fünf Schwamm-Bewertungen** mit Platzhalter-Adressen (`@email.com`), die eine
fremde Marke („Methode ECO") nennen. Herkunft unklar, bis zur Klärung draußen.

## Zwei Zahlen wurden korrigiert — 16.09.2026

Der Schnitt wird gerechnet, nicht getippt. Dadurch fielen drei Widersprüche auf,
die vorher unsichtbar waren. Alle drei sind behoben, 30 Ersetzungen in 11 Dateien:

**BH: 4,79 · 52 → 4,78 · 49.** Die 52 enthielten die drei Bewertungen aus
Inhaber-Adressen. Ohne sie sind es 49 Bewertungen mit Schnitt 4,78. Angepasst in
Hero, Hero-Video, Seitenkopf, Box-Inhalt, Kundenstimmen, Ankündigungsleiste sowie
in Startseite, Funktionsweise-Seite, Bundle- und BH-Vorlage.

**Die Kissen-Seite trug die BH-Zahl.** Dort stand „4,79" neben „23 Bewertungen" —
zwei Produkte in einer Angabe. Jetzt 4,74 aus 23, was mit dem Export exakt
übereinstimmt.

**Im BH-Hero stand „150+ Bewertungen".** Dieselbe Verlinkung trug im aria-Label
„52 Bewertungen ansehen" und im sichtbaren Text „(150+ Bewertungen)". Die 150+ war
durch nichts belegt — weder durch den Export noch durch Otto oder Amazon. Jetzt 49,
und Label und Text sagen dasselbe.

Unangetastet blieben die `"default": 52` in `rich-text.liquid`,
`custom-liquid.liquid` und `newsletter.liquid` — das sind Abstände in Pixeln.

**Sobald Jochens Amazon- und Otto-Exporte in der Datendatei stehen, steigen diese
Zahlen wieder.** Dann sind sie an denselben Stellen erneut nachzuziehen. Der
gerechnete Schnitt in den Sektionen zieht von allein mit — die getippten Zahlen in
Hero und Leisten nicht.

## Dritter Durchgang — 18.09.2026

Die Korrektur vom 16.09. war am 18.09. wieder weg. Nicht in allen Dateien, aber
in den beiden wichtigsten: Startseite und BH-Seite trugen erneut „4,79", „aus 52
Bewertungen", „aus  150+ Bewertungen" und in der Ankündigungsleiste „+400
Bewertungen".

**Die Ursache steht in der Versionsgeschichte.** Zwischen dem 16. und dem 17.09.
liegen vierzehn Commits „Update from Shopify for theme melyla-shopify-theme/main".
Wer im Editor irgendeinen Abschnitt anfasst, schreibt die **ganze Vorlage** zurück
— samt der alten Zahl, die in einem anderen Feld derselben Datei noch stand. Das
ist der dritte Umlauf: 16.09. korrigiert, 17.09. „Vom Editor überschriebene
Korrekturen wiederhergestellt", 18.09. erneut.

**Deshalb prüft das jetzt eine Maschine.** `bin/zahlen-pruefen.mjs` liest die
Rohdaten, rechnet Anzahl und Schnitt je Produkt und meldet jede getippte Zahl im
Theme, die dazu nicht passt. Der Prüfer läuft in der CI bei jedem Push:

```
node bin/zahlen-pruefen.mjs
```

Theme Check sieht davon nichts — eine falsche Zahl ist syntaktisch einwandfrei.

**Die Sternreihe über dem Schnitt zeigte vier Sterne.** Sie verglich gegen die
Vorkommastelle, bei 4,78 also gegen die 4. Jetzt wird kaufmännisch gerundet: fünf
Sterne über der 4,78, wie es die Karten darunter auch tun.

## Verkaufte Stück — 18.09.2026

Im Theme standen vier verschiedene Zahlen nebeneinander: „Über 1.000 verkaufte
BHs", „Über 1000+ verkaufte Schlaf BHs", „Über 1.000 verkauft" und auf der
Startseite „Über 6000+ verkaufte BH´s".

Nach Robins Angabe vom 18.09.2026 sind es **über 5.000 Stück** über alle Kanäle.
Einheitlich als **„Über 5.000 verkaufte BHs"** im ganzen Theme, auch in den
Vorgabewerten der Abschnitte, damit ein neu eingesetzter Block nicht wieder mit
1.000 startet.

**Noch zu hinterlegen:** Woraus die 5.000 stammen — Summe aus Shop, Amazon und
Otto zu einem Stichtag. Eine Mengenangabe ist eine geschäftliche Angabe nach
§ 5 UWG; sie muss im Streitfall belegbar sein. Ein Screenshot der Summe aus
Billbee plus Seller Central genügt, gehört aber abgelegt.

## Amazon und Otto

**Amazon lässt sich nicht crawlen.** Geprüft am 15.09.2026: sowohl
`amazon.de/product-reviews/B0957YXVDB` als auch die Produktseite antworten mit
HTTP 503. Amazon blockt Server-IPs. Die Apps im App-Store lösen das über
gemietete Proxy-Netze — das ist der Grund für den Preis, und es bricht bei jedem
Amazon-Update. Nicht eingebaut.

Dazu käme: Rezensionstexte gehören ihren Verfasserinnen, Kundinnenfotos auf Amazon
erst recht. Übernehmen ginge über Amazons Nutzungsbedingungen hinaus.

**Der saubere Weg** läuft über Seller Central → Markenrechte →
Produktbewertungen. MELYLA ist Verkäufer der eigenen ASINs
(BH `B0957YXVDB`, Kissen `B095234CZF`) und darf die eigenen Rezensionen dort
einsehen und exportieren. Steht als To-do bei Jochen.

**Otto ist öffentlich lesbar.** Abgerufen am 15.09.2026:

| | Otto-Schnitt | Rezensionen |
|---|---|---|
| BH (`S0B3Y04G`) | 3,7 | 7 |
| Kissen (`S0N4R00G`) | 3,8 | 5 |

Beide deutlich unter dem Shop-Schnitt. Das ist kein Fehler, sondern ein Befund:
auf Otto bewerten andere Kundinnen als im Shop, und die Kritik dort ist konkret —
Verschluss scharfkantig, Träger hinterlassen Abdrücke, Größe M fällt zu groß aus.
Das deckt sich mit dem Retourengrund aus dem Protokoll. **Diese Rezensionen sind
für die Produktverbesserung wertvoller als für die Produktseite.**

Sobald Jochens Exporte da sind, kommen sie mit `quelle = amazon` bzw. `otto` in
dieselbe Datei und tragen dann automatisch das richtige Siegel
(„Verifizierter Kauf über Amazon"). Bis dahin trägt jede Karte
„Verifizierter Kauf im MELYLA Shop" — weil das der Wahrheitsgehalt ist.

## Zwei Entscheidungen von Robin — 18.09.2026

Damit sie nicht bei jedem Durchgang neu aufkommen:

**Die vier Stimmen in *MELYLA Kundenstimmen* bleiben, wie sie sind.** Auf
Startseite und BH-Seite stehen dort *Sandra (32, Dortmund)*, *Petra (51,
Bremen)*, *Melanie (38, Leipzig)* und *Kerstin (27, Nürnberg)* mit Foto, Größe
und Siegel „Verifizierter Kauf über Otto/Amazon". Keiner dieser Texte steht in
den 79 echten Bewertungen. Melanies Zitat ist eine geglättete Fassung einer
echten Bewertung von *S. Günther* (4 ★, 27.09.2021, Shop) — unter anderem Namen
und auf 5 ★ gesetzt. Der Kopfkommentar der Sektion warnt davor (UWG Anhang
Nr. 23), sie sind über den Editor zurückgekommen. **Robin hat entschieden, dass
sie bleiben.** Nicht erneut anfassen.

**Die Angabe „Über 5.000 verkaufte BHs" bleibt.** Beleg wird nachgereicht, siehe
oben unter „Verkaufte Stück".

## Noch offen

- `AggregateRating` fehlt weiterhin. Die 4,79-Frage ist entschieden — es sind
  4,78 aus 49 —, also wäre es jetzt zulässig und sollte vor dem Start rein.
- Auf Doppelpack- und Set-Seite standen zwei Bewertungsabschnitte direkt
  hintereinander; einer ist jeweils nach unten gerückt. Auf der Startseite
  ebenso, am 18.09. erledigt.
- Die getippten Felder in *MELYLA Kundenstimmen*, *Trust* und Hero rechnen
  nicht mit. Solange sie Textfelder sind, hält sie nur `bin/zahlen-pruefen.mjs`
  zusammen. Sauber wäre: leeres Feld = gerechneter Wert aus der Datendatei.
- Bild für MELYLA Stimmen auf der Startseite ist noch nicht gesetzt (Feld leer =
  Karussell über volle Breite). Material liegt in `exports/marktplatz/`.
