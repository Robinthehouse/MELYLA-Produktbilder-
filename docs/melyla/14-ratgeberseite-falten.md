# Ratgeberseite: Wie Falten entstehen

Stand 25.08.2026. Gehört zu `shopify-einfuegen/falten-vermeiden.html`.

## Wozu die Seite da ist

Sie beantwortet die Fragen, die Kundinnen ohnehin googeln — und gibt dem Shop einen Grund, für
**Schlaffalten** zu ranken. Diesen Begriff besetzen bisher Ratgeberportale, obwohl MELYLA das
Produkt dazu verkauft.

Von Startseite, BH- und Kissen-Seite wird auf sie verlinkt. Sie verkauft nicht, sie erklärt —
das ist Absicht. Eine Ratgeberseite, die zur Verkaufsseite wird, verliert Vertrauen und
Ranking zugleich.

## Was Robin tun muss

1. **Zuerst** die vier Illustrationen unter **Inhalte → Dateien** hochladen —
   Dateinamen nicht ändern, sie stehen so im HTML (erledigt am 18.09.)
2. In Shopify **Inhalte → Seiten → Seite hinzufügen**
3. Titel: `Wie Falten entstehen — und was wirklich dagegen hilft`
4. Adresse prüfen: sie muss **`falten-vermeiden`** lauten (im Feld *Suchmaschinen-Eintrag*).
   **Stand 18.09. stimmt sie nicht:** Die Seite ist angelegt und sichtbar, aber
   weder `/pages/falten-vermeiden` noch `/pages/wie-falten-entstehen` antworten —
   beide 404. Solange die Adresse nicht `falten-vermeiden` lautet, laufen die
   Verweise aus den anderen Seiten ins Leere
5. Im Inhaltsfeld auf **`</>`**, den Code aus `falten-vermeiden.html` einfügen, speichern —
   **nicht** zurück in die Textansicht schalten
6. Suchmaschinen-Eintrag ausfüllen (siehe unten)
7. Ins Menü aufnehmen, am besten unter einem Punkt *Ratgeber*

## Die vier Faltenarten tragen jetzt Bilder — 18.09.2026

In den vier Karten standen Unicode-Zeichen als Symbole: ☪ ☰ ☼ ↓. Das erste wird
je nach Schriftart als „C" mit Strich gezeichnet, keines hatte mit Falten zu tun.
Ersetzt durch je ein Bildfeld in **derselben Größe** — 44 × 44 px, gleiche
Rundung, gleiche lila Fläche dahinter.

**Den Zuschnitt macht Shopify.** Die vier Illustrationen liegen als
Hochformat-PNG unter *Inhalte → Dateien*. Statt sie von Hand zu beschneiden,
hängt das HTML die Parameter direkt an die Adresse:

```
…/mimikfalten-ausdruckslinien.png?width=88&height=88&crop=top
```

`width`/`height` geben die gelieferte Größe (88 px = doppelt für scharfe
Darstellung auf Retina), `crop` bestimmt, welcher Ausschnitt des Hochformats
übrig bleibt. Shopify rechnet das einmal und liefert danach aus dem Cache —
und schickt modernen Browsern automatisch WebP statt PNG.

| Karte | Datei in Shopify | Ausschnitt |
|---|---|---|
| Mimikfalten | `mimikfalten-ausdruckslinien.png` | `crop=top` — Stirn und Augenpartie mit den Linien |
| Schlaffalten | `schlaffalten-sleep-wrinkles.png` | `crop=center` |
| Lichtfalten | `lichtfalten-photoaging-variante-2.png` | `crop=center` |
| Erschlaffungsfalten | `erschlaffungsfalten-gravitational-aging.png` | `crop=center` |

**Warum nicht die zugeschnittenen Dateien?** Die gab es kurz (`falte-*.webp`,
je 1,5 KB), aber hochgeladen wurden die Originale. Der Weg über die Parameter
kommt auf dasselbe heraus, ohne dass irgendwo zwei Fassungen desselben Bildes
liegen, die auseinanderlaufen können.

Wenn ein Ausschnitt nicht passt, ist es ein Wort im HTML: `crop=top`, `center`,
`bottom`, `left` oder `right`. Für die Lichtfalten zeigt `bottom` die feinen
Linien an Wange und Hals deutlicher, schneidet dafür die Augen ab.

Das vierte Bild ist als einziges in Graustufen. Wenn es zwischen den drei warmen
stören sollte, sag Bescheid.

## Suchmaschinen-Eintrag

**Seitentitel** (unter 60 Zeichen):

```
Wie entstehen Falten? Ursachen und was hilft | MELYLA
```

**Beschreibung** (unter 155 Zeichen):

```
Mimikfalten, Schlaffalten, Lichtfalten: wie sie entstehen, woran du sie erkennst und was
wirklich dagegen hilft — sortiert nach Beleglage.
```

## Wie die Seite für KI-Antwortmaschinen gebaut ist

| | |
|---|---|
| **Vier Kurzantwort-Blöcke** | Direkt unter jeder Hauptüberschrift steht die Antwort in ein bis zwei Sätzen, hervorgehoben. Genau solche Passagen zitieren ChatGPT, Perplexity und Googles KI-Übersicht. |
| **Fragen als Überschriften** | „Welche Arten von Falten gibt es?", „Wie wird aus einem Knick eine bleibende Falte?" — so, wie Menschen tippen. |
| **Acht Fragen zum Aufklappen** | Jede mit einer vollständigen, für sich stehenden Antwort. |
| **Zwei Tabellen** | Maßnahmen nach Beleglage und Zuordnung zur Faltenart. Tabellen werden von KI-Systemen gut ausgewertet. |

Umfang: **1.155 Wörter**, eine H1, sechs H2.

## Die Aussagen und ihre Grundlage

| Aussage auf der Seite | Grundlage |
|---|---|
| Zwei Ursachengruppen: altersbedingt und mechanisch | eucerin.de |
| Beim Seitenschlafen drückt das Körpergewicht die Haut gegen das Kissen | hannasacher.com, m1-beauty.de |
| Betroffen: Wange und Nasolabialbereich, Schläfe und Augenpartie, Dekolleté | hannasacher.com |
| Verstärker: UV, Nikotin, Alkohol, Stress, zu heißes Duschen | eucerin.de |
| Abdruck verschwindet bei junger Haut in Minuten bis ca. 1,5 Stunden | bcshome.de, frag-mutti.de |
| Seide verringert Reibung, nicht Druck | hannasacher.com, eigene Herleitung |
| Rückenlage ist wirksam, wird aber selten durchgehalten | hannasacher.com |

**Bewusst weggelassen:** Prozentzahlen ohne Studie, Fristen für sichtbare Ergebnisse,
Heilungs- und Behandlungsaussagen. Am Seitenende steht ein Hinweis, dass der Text keine
ärztliche Beratung ersetzt.

**Geprüft:** keine der Formulierungen „heilt", „garantiert", „entfernt Falten",
„wissenschaftlich bewiesen"; keine einzige Prozentangabe.

## Fotos nachrüsten

Die Seite ist ohne Fotos vollständig — die Schaubilder tragen sie. Wer trotzdem Bilder möchte,
fügt diesen Baustein in der HTML-Ansicht an der gewünschten Stelle ein und ersetzt die Adresse:

```html
<img src="BILD-URL" alt="BESCHREIBUNG"
     style="width:100%;height:auto;display:block;border-radius:20px;margin:0 0 32px;">
```

Zwei Stellen bieten sich an: direkt nach dem lila Kopfbereich und vor dem Abschluss.

**Prompts** (Higgsfield `soul_2`, 4:3 quer, in jedem Prompt
`no text, no watermark, no logo, no label`):

**F1 — nach dem Kopfbereich**

> Close-up of the face of a woman in her late 40s resting on a white pillow, seen from above,
> soft morning window light. Visible pillow crease line on the cheek, natural unretouched skin
> texture. Calm, neutral expression, eyes closed. Warm neutral colour palette, editorial beauty
> photography, shallow depth of field, horizontal 4:3.
> no text, no watermark, no logo, no label

**F2 — vor dem Abschluss**

> Woman in her early 50s in a bright bathroom applying sunscreen to her décolleté, seen from the
> side, calm everyday morning atmosphere. Natural unretouched skin, warm cream and linen tones,
> soft diffused light. Editorial lifestyle photography, horizontal 4:3.
> no text, no watermark, no logo, no label
