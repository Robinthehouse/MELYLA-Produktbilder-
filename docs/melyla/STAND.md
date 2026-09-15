# MELYLA — Projektstand

Stand 15.09.2026 (zweiter Durchgang). Eine Seite: Was ist fertig, was ist offen, wo hakt es.

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

Die **Beauty Sleep Box steht in keiner Sitemap** — das Produkt gibt es nicht, und es ist seit
dem 15.09. zurückgestellt. Die Vorarbeit bleibt in `09-beauty-sleep-box.md`.

Prüfen lässt sich das jederzeit: `node bin/links-pruefen.mjs https://melyla.de` meldet jeden
internen Link aus Vorlagen, Sektionsgruppen und HTML-Bausteinen mit seinem Statuscode.

## Offen — bei mir

| | Warum es noch nicht erledigt ist |
|---|---|
| **Problem-Sektion als Karussell** | Robins Wunsch, noch nicht umgesetzt |
| **Kundenstimmen: Karussell und zweites Video** | **Blockiert** — Shopify verweigert Änderungen an dieser Datei seit dem 23.08. |
| **Otto- und Amazon-Listings** | Wartet auf Material von Jochen, Gerüst steht in `10-marktplatz-listings.md` |

## Zwei Aussagen korrigiert — 25.08.

Beim Schreiben der Videoprompts für die Ergebnis-Sektion sind zwei Widersprüche aufgefallen:

**Die Mechanik stand falsch herum.** An vier Stellen hieß es, der BH halte das Dekolleté „sanft
**zusammen**". Er hält die Brüste **auseinander** — der Mittelsteg legt sich dazwischen. Überall
sonst stand es richtig. Korrigiert; „sanft zusammen" kommt im Theme nicht mehr vor.

**„Straffer" ist eine Wirkaussage, die ein Textil nicht einlösen kann.** Straffen heißt: die
Haut wird fester. Ein BH verhindert Verformung, mehr nicht. Die Aussage stand an sechs Stellen,
unter anderem als Überschrift „Ein strafferes Dekolleté — jede Nacht" und auf der BH-Seite als
„Morgens aufwachen mit glatterer, strafferer Haut".

Das widersprach dem, was auf denselben Seiten steht: *Warum MELYLA* sagt „Vorhandene Falten
glättet kein Textil", die Ratgeberseite dasselbe. Ersetzt durch das, was das Produkt tatsächlich
leistet — „Ein glatteres Dekolleté — Morgen für Morgen", „Morgens ohne frische Linien".
Gegengeprüft: „straffer" kommt im gesamten Theme nicht mehr vor.

**Videoprompts** für die drei Ergebnis-Karten stehen in `12-bildbriefing-mechanik.md`, Teil 3.
Die Videofelder sind bereits vorhanden — Robin wählt nur die Dateien aus.


## Gründergeschichte — neu erzählt am 25.08.

Auf *Warum MELYLA* stand bisher ein Satz über den Gründer, der „neben Hauptjob und kleinem Kind“
entworfen habe. Ersetzt durch einen Erzählbogen in vier Abschnitten: der Morgen im Spiegel, die
vergebliche Suche, die eigene Entwicklung, das Wachsen des Sortiments. **226 Wörter.**

Erzählt wird die **echte** Geschichte, aber **anonym** — die Gründerin hat zugestimmt, möchte
aber nicht genannt werden, ihr Partner ebenso wenig. Kein Name, kein Berufstitel, genau eine
Jahreszahl (2022).

Eine erfundene Gründergeschichte wäre eine Irreführung nach § 5 UWG gewesen, dort ausdrücklich
als Angabe über die Person des Unternehmers genannt. Quellenzuordnung Satz für Satz in
`15-gruendergeschichte.md`.

**Offen bei Robin:** Baustein einsetzen und die Gründerin gegenlesen lassen. Vier Bild-Prompts
liegen bereit — sie zeigen bewusst **keine Person**, weil ein Gesicht neben der Passage als
„das ist sie“ gelesen würde.

## Ratgeberseite „Wie Falten entstehen" — neu am 25.08.

Eine Wissensseite, die erklärt statt zu verkaufen: vier Faltenarten, der Mechanismus vom Knick
zur bleibenden Linie, Maßnahmen nach Beleglage sortiert, acht häufige Fragen. **1.155 Wörter**,
Schaubilder direkt im HTML, keine Bilddateien nötig.

Der Zweck: für **Schlaffalten** ranken. Diesen Begriff besetzen bisher Ratgeberportale, obwohl
MELYLA das Produkt dazu verkauft. Vier Kurzantwort-Blöcke und acht Fragen mit vollständigen
Antworten liefern das, was KI-Antwortmaschinen zitieren.

Verlinkt wird von der Startseite, beiden Produktseiten und beiden Funktionsweise-Seiten.

**MELYLA taucht erst im letzten Abschnitt auf**, dort als eine Möglichkeit unter mehreren. Eine
Ratgeberseite, die zur Verkaufsseite wird, verliert Vertrauen und Ranking zugleich.

**Offen bei Robin:** Seite in Shopify anlegen mit der Adresse `falten-vermeiden`, HTML einsetzen,
Suchmaschinen-Eintrag übernehmen, ins Menü aufnehmen. Alles Nötige steht in
`14-ratgeberseite-falten.md`. Bis dahin melden fünf Verweise erwartungsgemäß 404.

## Videosektionen — Stand 25.08.

Zwei Sektionen mit unterschiedlicher Aufgabe:

| | |
|---|---|
| **MELYLA Video-Karussell** | Große Kacheln, eine füllt das Handy, wird angetippt. Trägt die Erklärvideos und das Unboxing. |
| **MELYLA Video-Reihe** *(neu)* | Kleine Kacheln, drei nebeneinander, laufen stumm von selbst. Vorbild ist die Leiste von CALMONT. |

Die Video-Reihe gibt es **doppelt**, und das ist Absicht:

- **Als Block** in den Produktinformationen — dort lässt sie sich zwischen Kaufen-Knopf und
  Aufklappern schieben. So steht sie jetzt auf beiden Produktseiten, direkt unter dem
  Kaufen-Knopf. Drei feste Clips.
- **Als Abschnitt** für alle anderen Seiten, dort mit beliebig vielen Clips.

Beide teilen sich denselben Code (`snippets/melyla-video-kachel.liquid` und
`snippets/melyla-video-reihe-huelle.liquid`) — eine Änderung wirkt an beiden Stellen.

**Offen bei Robin — das Unboxing liegt als `.mov` vor** (7,9 MB, `video/quicktime`). Chrome und
Firefox spielen das nicht ab, nur Safari. Muss als MP4 neu hochgeladen werden; Anleitung und
Exportvorgaben stehen in `12-bildbriefing-mechanik.md`. Ebenso offen: Die drei Videos wiegen
zusammen 17,6 MB, Zielgröße sind rund 1 MB je Clip.

Die Kacheln der Video-Reihe sind auf beiden Seiten angelegt, aber ohne Dateien — **die Sektion
bleibt unsichtbar, bis Videos oder Standbilder ausgewählt sind.**

## Problem-Sektion — bewegt seit 25.08.

Jede der vier Karten hat jetzt ein Feld **Video-Link**. Liegt eines vor, läuft dort eine stumme
Schleife mit dem Bild als Standbild; ohne Video bleibt alles beim Standbild. Die Schleifen
starten erst beim Hereinscrollen und halten an, sobald die Karte aus dem Bild ist. Wer
*Bewegung reduzieren* eingestellt hat, sieht nur das Standbild.

Die vier Prompts stehen in `12-bildbriefing-mechanik.md`, Teil 2. **MP4, nicht GIF** — ein GIF
derselben Länge ist rund zwanzigmal so groß und kann nur 256 Farben, was bei Hauttönen streift.

**Offen:** Auf Karte 1 steht ein Canva-Grafik-GIF mit „Falsches Kissen" ins Bild eingebrannt.
Es zeigt ein Kissenproblem, obwohl der Kartentext vom Dekolleté handelt. Sollte auch dann
ersetzt werden (Prompt S1), wenn die anderen drei noch Standbilder sind.

Die vier Bildbeschreibungen waren leer und sind gefüllt.

## Preisnachlass Kissen — Stand 25.08.2026

Das Kissen wurde **Anfang August 2026** von 89,50 € auf 49,50 € gesenkt (Robin, 25.08.:
„vor 2–3 Wochen"). Damit ist der Streichpreis zulässig: § 11 PAngV verlangt den niedrigsten
Gesamtpreis der **30 Tage vor der Senkung** — und das war 89,50 €.

Der Baustein `snippets/melyla-ersparnis.liquid` rechnet das aus den Shopify-Produktdaten aus:
**Du sparst 40,00 € (44 %)** plus den vorgeschriebenen Hinweis. Ohne Vergleichspreis gibt er
nichts aus, der BH bleibt also unberührt.

> **Eine Korrektur an meiner eigenen Aussage vom 25.08.:** Ich hatte geschrieben, der
> Streichpreis müsse nach 30 Tagen weg. Das stimmt so nicht. Die 30 Tage sind der
> Rückblickzeitraum **vor** der Senkung, keine Verfallsfrist für die Anzeige. Ein Enddatum gibt
> es nicht — riskant wird es erst, wenn 49,50 € faktisch der normale Preis geworden ist. Dann
> ist es keine Ermäßigung mehr, sondern eine irreführende Angabe nach § 5 UWG.

**Praktisch:** Das Kissen ist laut Protokoll vom 12.08. ein **Abverkauf** vor dem italienischen
Nachfolgemodell. Genau dafür ist ein anhaltender Nachlass gedacht. Sobald der Restbestand weg
ist oder das neue Kissen startet, gehört der Vergleichspreis in Shopify gelöscht — dann
verschwindet die Anzeige von selbst.

## Produktseiten — Umbau am 25.08.

| | |
|---|---|
| **BH-Seite** | 15 → 9 Abschnitte. Der Fließtext aus *Produktdetails* und *Warum nichts geholfen hat* liegt jetzt in vier Aufklappern direkt in der Kaufbox: sichtbar für Google, unsichtbar beim Scrollen. |
| **Kissen-Seite** | 13 → 7 Abschnitte. Die drei identischen Produktdetail-Sektionen sind zu Aufklappern geworden. |
| **Neu in der Kaufbox** | Mengenwähler, Zahlungsart-Icons, vier Aufklapper. Der PayPal-Knopf kommt aus Dawns dynamischem Checkout und war schon aktiv. |
| **Zwei neue Sektionen** | *MELYLA Video-Karussell* (hochkant, lädt erst beim Antippen) und *MELYLA Bewertungen* (rechnet Schnitt und Verteilung selbst) |

**Jede Sektion lässt sich überall einsetzen.** Alle 21 haben ein Preset und keine
Seitenbeschränkung: *Abschnitt hinzufügen* im Editor, auf jeder Seite. Das galt schon vorher —
es war nur nicht dokumentiert.

## Farben, Links und Buttons — seit dem 25.08. im Editor

| | |
|---|---|
| **Textfarben** | Alle Sektionen haben jetzt *Überschriften* und *Fließtext* unter **Farben**. Vorher fehlte das in 7 von 19 — deshalb ging „dunkle Flächen aufhellen" nicht: Beim Aufhellen verschwand der weiße Text. |
| **Links im Fließtext** | Erben die Textfarbe statt Browser-Blau. Die Regel `a:not([class])` trifft nur Textlinks, weil Buttons und Kartenlinks immer eine Klasse haben. |
| **CTA-Button** | 13 Sektionen haben unten *Button-Text*, *Button-Link* und *Button-Stil*. Text leer = kein Button. |
| **Button-Texte abgesichert** | Ein versehentlicher Link im Button-Text wird zu normalem Text, statt den Button zu zerreißen (verschachtelte `<a>`). Fett und Kursiv bleiben. |

Ohne CTA-Feld bleiben nur **Kundenstimmen** (Shopify lehnt die Datei ab) — dort gibt es dafür
bereits eigene Schaltflächen.

## Angebotsstaffel neu — 15.09.2026

Jochen hat die Seite gesehen und freigegeben. Eine Sache musste weg: **Die Beauty Sleep Box ist
nicht lieferbar** — es gibt nicht genug Artikel für ein Sechser-Set. Sie stand als dritte
Angebotskarte auf der Startseite und hatte eine eigene Produktseite.

Die Staffel jetzt:

| | Angebot | Preis | Streichpreis | Ersparnis |
|---|---|---|---|---|
| 1 | 1× Anti-Falten Schlaf BH | 49,50 € | — | — |
| 2 | 2× Anti-Falten Schlaf BH | 89,00 € | 99,00 € | 10,00 € (10 %) |
| 3 | **BH + Anti-Falten Kissen** | **79,00 €** | **99,00 €** | **20,00 € (20 %)** |

Karte 3 ist damit das stärkste Angebot und trägt zu Recht das Band „Bester Wert".

**Drei Preise für dasselbe Angebot aufgelöst.** Das Schema sagte 79,00 € / „Du sparst 55,60 €",
`index.json` sagte 89,00 € / „Du sparst 45,60 €", die Doku 79,00 € / 134,60 €. Jetzt steht
überall 79,00 € gegen 99,00 €. Karte 2 hatte gar keinen Streichpreis — der 10-€-Nachlass war
unsichtbar.

**`product.bundle.json` trägt jetzt das Set „BH + Kissen".** Die Datei behält ihren Namen —
ein umbenanntes Template wäre eine *neue* Datei, und genau die verweigert Shopify seit dem 23.08.
Von sechs Positionen im Set-Inhalt bleiben zwei. Der Wertanker rechnet sich aus den Blöcken:
99,00 € einzeln gegen 79,00 € im Set.

**Offen bei Robin:** Zwei Bundle-Produkte in Shopify anlegen (`melyla-bh-doppelpack` 89,00 € /
99,00 €, `melyla-bh-kissen-set` 79,00 € / 99,00 €) und in *MELYLA Angebot* verknüpfen. Bis dahin
zeigen die Karten Ersatz-Preise aus dem Editor. **Die müssen mit den späteren Produktpreisen
übereinstimmen** — sonst steht auf der Startseite ein anderer Preis als im Warenkorb.

Ebenfalls offen: **ein Produktfoto, das BH und Kissen zusammen zeigt.** Karte 3 trägt als
Zwischenlösung das Kissen-Hero. Das alte Box-Mockup musste weg — es zeigte sechs Produkte für
ein Set aus zweien.

## Drei Rechtsrisiken behoben — 15.09.2026

**Erfundene Bewertungen, zweiter Fundort.** Am 25.08. waren sie auf der Startseite entfernt
worden. Sie standen weiter (a) in `product.bundle.json` als vier ausgerollte Blöcke und (b) im
**Preset** von `melyla-funnel-kundenstimmen.liquid` — ein Preset trägt sie bei jedem Einfügen
neu ein. Beides entfernt; das Preset startet jetzt ohne Stimmen. Unzulässig nach UWG Anhang Nr. 23.

**Vier verschiedene Bewertungszahlen auf derselben Seite.** Die Startseite nannte „150+
Bewertungen" und „aus über +400 Bewertungen", die BH-Seite „150+", die Set-Seite „52". Belegt
sind **52**. Die Verkaufszahl stand an drei Stellen noch auf „Über 1000+", obwohl am 25.08. auf
„Über 800" korrigiert worden war (belegt: ~822). Alles auf die belegten Werte gezogen.

**Erfundene Knappheit.** Die Set-Seite behauptete „150 Boxen, solange der Vorrat reicht" — eine
Zahl, die an keinem Bestand hing. Entfernt, auch als Vorgabewert. Der Hinweistext im Editor sagt
jetzt: leer lassen, solange keine echte Stückzahl vorliegt.

## Schriftarten geprüft — 15.09.2026

Robins Vorgabe: höchstens drei Schriften. **Es sind zwei** — Playfair Display für Überschriften,
Inter für Fließtext, beide über Shopifys Schrift-Einstellungen. Keine Google Fonts, kein eigenes
`@font-face`, keine Schriftdateien im Theme. Vorgabe erfüllt, nichts wild gewachsen.

Drei Dinge stimmten trotzdem nicht:

| | Was | Behoben |
|---|---|---|
| **57 harte Angaben** in 18 Dateien | Die Schrift stand direkt im CSS statt als Theme-Variable. Der Schriftwähler im Editor war für **alle** MELYLA-Sektionen wirkungslos — ein Wechsel im Admin hätte Header und Warenkorb geändert, aber keine einzige eigene Sektion | alle auf `var(--font-heading-family)` / `var(--font-body-family)` |
| **Verzerrtes Fett** | Playfair wurde nur in Gewicht 400 geladen, vier Stellen forderten 700 an — der Browser rechnete daraus ein künstliches Fett | echtes Playfair Bold wird jetzt mitgeladen, in `theme.liquid`, `password.liquid` und `gift_card.liquid` |
| **`font-family: Times`** | Dawns Sternchen-Zeichen, die einzige dritte Familie | auf `inherit` |

Gegenprobe: Jede `font-family` im ausgelieferten Theme ist jetzt eine Variable oder `inherit`.

Dabei fiel eine Nebenwirkung an: Die lokale Vorschau definierte die beiden Variablen nicht und
hätte alle Sektionen schriftlos gerendert. `preview/serve.mjs` spiegelt sie jetzt.


## Qualitätsdurchgang vor dem Livegang — 15.09.2026

Kompletter Durchgang durch Texte, Aufbau und Produkttexte. 17 Vorlagen, 22 Sektionen,
8 HTML-Bausteine gelesen und gegeneinander geprüft.

### Schriften: Montserrat statt Playfair Display

**Die Markenrichtlinien legen keine Fließtext-Schrift fest.** Seite 8 nennt genau eine
Schrift — **Noah Bold**, und die gilt nur fürs Logo. Das Dokument selbst ist in **Montserrat**
gesetzt. Beide sind geometrische Grotesk-Schriften.

Playfair Display war das Gegenteil davon: eine Didone mit hohen Strichkontrasten. Dazu eine
der meistgenutzten Google-Schriften überhaupt — sie liest sich als Vorlage, nicht als Marke.
Und ihre Haarlinien brechen bei 14–16 px weg, was bei einer Zielgruppe zwischen 45 und 60
zählt.

Jetzt: **Montserrat SemiBold** für Überschriften, **Inter** für Fließtext. Zwei Schriften,
beide über Shopifys Schrift-Einstellungen, Gewichte 400/600/700 echt geladen. Logo,
Markenbuch und Website sprechen zum ersten Mal dieselbe Formensprache.

### Falsche Produktangaben — die Kissen-Seiten bewarben den BH

| Was | Wo |
|---|---|
| Garantietext „Trag den MELYLA **Schlaf BH** 30 Nächte lang" | Kissen-Produktseite **und** Kissen-Erklärseite |
| Kaufbox-Nutzen 1:1 vom BH kopiert, inkl. „Sanfte Unterstützung **ohne Bügel**" | Kissen-Produktseite |
| BH-Kennzahlen 52 Bewertungen / 4,79 Sterne | Kissen-Erklärseite (Kissen hat 23 / 4,74) |
| 4,79 in der Kaufbox über 4,74 im Trust-Badge — auf **derselben** Seite | Kissen-Produktseite |
| Kissen „hält Wange **und Dekolleté** frei" | Set-Seite — die BH-Seite sagt ausdrücklich „An dein Dekolleté kommt es gar nicht heran" |

Alle behoben. Die Arbeitsteilung steht jetzt überall gleich: **Kissen schützt das Gesicht,
BH schützt das Dekolleté.** Genau das ist das Argument für das Set.

### Drei weitere Falschaussagen

- **„4,79 aus über 400 Bewertungen"** lief in der Ankündigungsleiste über dem **gesamten
  Shop** — direkt über „aus 52 Bewertungen" auf der Startseite. Auf 52 gezogen.
- **„8 von 10 Kundinnen empfehlen diesen Bh"** — quantitative Werbeaussage ohne jeden Beleg
  im Projekt. Ersetzt durch „Was Kundinnen nach vier Wochen sagen".
- **„Versand 1-3 Tage"** auf der Startseite gegen „2–4 Werktage" an zwölf anderen Stellen.

### Kontrast: ein Text war praktisch unsichtbar

Auf der **BH-Produktseite** stand die Vertrauensleiste auf hellem Flieder (`#f2e8f8`) —
die Textfarbe war aber beim dunklen Entwurf geblieben (`#c9b8d4`). Kontrast **1,57:1**.
WCAG-Minimum ist 4,5:1. Die vier Trust-Sublines waren auf der wichtigsten Produktseite
nicht lesbar.

Insgesamt fünf Sektionen unter dem Minimum, dazu zwei Schema-Defaults. Alle behoben:
heller Grund → `#775c88`, dunkler Grund → `#c9b8d4`. **Jede Textfarbe im Theme besteht
jetzt WCAG AA.**

### Wirkungsversprechen entschärft

Die Ratgeberseite sagt: „Seriöse Anbieter versprechen hier keine Fristen." Vier
Formulierungen taten genau das — **13 Fundstellen**:

| Vorher | Jetzt |
|---|---|
| „Sichtbare Veränderung nach 4 Wochen" | „Was Kundinnen nach vier Wochen berichten" |
| „zeigt **messbare** Ergebnisse" | „Kundinnen berichten nach zwei bis vier Wochen von weniger frischen Linien am Morgen" |
| „Was der Schlaf BH aus der Box **bewirkt**" | „Was Kundinnen nach vier Wochen berichten" |
| „für maximalen Tragekomfort und **wirksame** Faltenvorbeugung" | „dafür entwickelt, nachts bequem zu sitzen und das Dekolleté in Position zu halten" |

Der Unterschied: Was Kundinnen **berichten**, ist belegbar. Was ein Textil **bewirkt**,
müsste man messen.

### Einheitlichkeit

| | Vorher | Jetzt |
|---|---|---|
| Farben | 28, davon 9 Fast-Dubletten (`#1c1916` gegen `#1c1917`, sieben helle Lila) | **19**, alle klein geschrieben (386 Werte vereinheitlicht) |
| Abstände | 12 willkürliche Werte | **7** auf einer Skala (0/12/24/32/48/64/96) |
| Umbruchpunkte | 7 Werte aus zwei Systemen (Dawn 749/989 **und** Tailwind 640/768/1024) | **2** — Dawns 749/750 und 989/990 |
| Fette Leerzeichen | 21 `<strong> </strong>` und Leerzeichen im Fett-Tag | 0 |
| Englische Kundentexte | „You may also like", „Share", „Opening soon", „Subscribe to our emails" | alle deutsch |
| Alt-Texte | 8 leer (Problem- und Lösungs-Karten der Startseite) | 0 |

**Zitate blieben unangetastet.** Die Kleinschreibung „Melyla" und „Schlaf-BH" steht in den
BARBARA-Zitaten — ein Zitat zu glätten wäre eine Verfälschung. Die Quelle ist als
„BARBARA Magazin — Ausgabe Nr. 61" ausgewiesen.

### Aufbau

- **Die Kissen-Seite war die schwächste Seite im Shop** — sechs aktive Abschnitte gegen
  dreizehn beim BH, und die Vertrauensleiste war **abgeschaltet**. Jetzt: Vertrauensleiste
  an, Funktionsweise-Abschnitt ergänzt, Reihenfolge wie auf den anderen Seiten.
- **Die BH-Seite war der Ausreißer** bei der Beweisführung: FAQ stand *vor* Bewertungen und
  Presse. Jetzt überall gleich: Beweis → Einwände → Garantie.
- **Der Footer war komplett leer** — keine Menüspalte, kein Link. Marke, Menü und
  Service-Spalte angelegt. Rechtstexte kommen über Shopifys Richtlinien-Einstellung.
- **Die Erklärseite war unsichtbar verlinkt**: Der Button trug einen Link, aber keine
  Beschriftung — auf drei Seiten. Jetzt „Wie der BH funktioniert".
- **Zwischen Hero und Angebot gab es keinen einzigen Kaufweg** — zehn Abschnitte
  Scrollstrecke. Zwei Abschnitte haben jetzt „Zu den Angeboten".
- **Zwei Sektionen hatten keine einzige Mobilregel** — darunter die Garantie, die auf
  **allen sechs Seiten** läuft. Ergänzt.
- **Barrierefreiheit:** Die Vertrauensleiste hatte keine Überschrift und war in der
  Vorlesereihenfolge unsichtbar — unsichtbare `h2` ergänzt, im Editor änderbar. Die
  Produktdetails starteten bei `h3` direkt nach der `h1`; auf `h2` gezogen.

### Zahlen: Stand vor dem Jochen-Gespräch

Nach dem Durchgang sind die Zahlen widerspruchsfrei. **Belegt ist nur die Verkaufszahl**
(~822, daher „Über 800"). Sterne und Bewertungsanzahl warten auf Jochens Amazon- und
Otto-Rezensionen.

| Angabe | Wert | Fundstellen |
|---|---|---|
| Sterne BH | 4,79 | 15 |
| Bewertungen BH | 52 | 11 |
| Sterne Kissen | 4,74 | 3 |
| Bewertungen Kissen | 23 | 2 |
| Verkaufszahl | Über 800 | 10 |

**Wichtig:** `AggregateRating` fehlt weiterhin bewusst — die Sterne stehen nur als Text auf
der Seite, nicht maschinenlesbar. Sobald echte Bewertungen eingetragen sind, darf es rein.
Die Bewertungs-Sektionen sind aktuell **leer** und blenden sich aus; die Zahl 52 steht also
auf der Seite, ohne dass eine einzige Stimme zu sehen wäre. Das löst sich mit Jochens Material.

### Offen geblieben

- **Materialangabe BH: „82 % Elastan, 18 % Nylon" an fünf Stellen.** Ein Gestrick mit 82 %
  Elastan gibt es nicht — die Zahlen sind mit hoher Wahrscheinlichkeit **vertauscht**
  (82 % Nylon / 18 % Elastan). Eine dritte Quelle nennt „95 % Baumwolle / 5 % Elasthan".
  **Gegen das Etikett prüfen**, bevor die Seite live geht — eine falsche Materialangabe ist
  nach TextilKennzVO abmahnfähig. Ich habe nichts geraten.
- **„30 Tage" gegen „30 Nächte"** — auf deinen Wunsch offengelassen, gehört an die
  Rückgabebedingungen im Shop gekoppelt. 44× „Tage", 25× „Nächte".
- **Der Material-Tab des BHs nennt kein Material** — die Prozentangabe steht erst weiter
  unten auf der Seite.

### Zusammenfuehrung mit dem Shopify-Editor — 15.09.2026

Beim Push lagen **29 Commits aus dem Theme-Editor** auf dem Remote, die genau die drei
Vorlagen aus dem Durchgang betrafen. Zusammengefuehrt statt ueberschrieben.

Aus dem Editor uebernommen: neue Abschnittsreihenfolge der Startseite, Video-Karussell von
BH- und Kissen-Seite entfernt, neue Videosektion auf der Kissen-Seite, CTA der
Loesungs-Sektion auf die Ratgeberseite, Badge-Hintergrund auf Markenviolett, diverse
Fettungen. 75 Einstellungen aus dem Qualitaetsdurchgang blieben erhalten.

**Zwei Entscheidungen von Robin:**

- **Groessenempfehlung umgedreht.** Der Editor sagte neu „Nimm die Kleinere. Der BH muss eng
  anliegen", acht andere Stellen sagten weiter „im Zweifel die groessere". Die neue Fassung
  gilt und steht jetzt an **zehn** Stellen inklusive HTML-Baustein. Der Satzbau der
  Editor-Fassung war fehlerhaft und wurde neu gesetzt. Relevant, weil falsche Groesse laut
  Protokoll ein Hauptruecksendegrund ist.
- **Verkaufszahl auf „Ueber 1.000".** Der Editor hatte „Ueber 6000+", alle anderen Stellen
  „Ueber 800". Vereinheitlicht auf 1.000. **Der Beleg steht aus** — dokumentiert sind ~822
  (Otto 353, Amazon Gr. M 197, Shop ~272). Robin klaert die echte Zahl mit Jochen. Bis dahin
  ist das eine Angabe, die im Streitfall nicht belegbar waere.

**Gefunden beim Zusammenfuehren:** Die Angebotskarte 3 hatte im Editor noch die
Sechser-Box-Liste, waehrend Titel und Preis schon „BH + Kissen" zu 79 € zeigten. Auf den
Set-Inhalt zurueckgesetzt.

**Ebenfalls aufgefallen:** Der neue CTA zeigt auf `shopify://pages/wie-falten-entstehen-und-was-wirklich-dagegen-hilft`.
Die Ratgeberseite existiert also — aber unter einem anderen Handle als die fuenf Verweise im
Theme, die weiter auf `/pages/falten-vermeiden` zeigen. **Die laufen ins Leere.** Entweder den
Seiten-Handle in Shopify auf `falten-vermeiden` aendern oder die fuenf Verweise nachziehen.

## Offen — nur im Shopify-Admin

- Im Abschnitt *MELYLA Angebot* die drei Produkte auswählen — setzt Links **und** Preise
- **Zwei Bundle-Produkte anlegen:** `melyla-bh-doppelpack` (89,00 € / 99,00 €) und `melyla-bh-kissen-set` (79,00 € / 99,00 €), je Größen S–XL
- **Vor Veröffentlichung: Store auf „New customer accounts" umstellen.** Dawn 16 hat die alten Kundenkonto-Vorlagen entfernt — ohne Umstellung brechen die Kundenkonten.
- **Vorlagen zuweisen geht noch nicht.** Das Dropdown im Seiten-Editor listet nur die Vorlagen
  des **veröffentlichten** Themes — unseres ist es nicht. Belegt am 24.08.: dort stehen
  `landing-kissen` und `ueber-melyla`, die es bei uns gar nicht gibt, während keine unserer fünf
  Vorlagen auftaucht. Betrifft `melyla-bh`, `melyla-kissen`, `bundle`, `funktionsweise-kissen`
  gleichermaßen. Bis zur Veröffentlichung tragen die HTML-Bausteine die Seiten.
- Seite *Funktionsweise* umbenennen in *Wie funktioniert der Anti-Falten Schlaf BH?* —
  **nur den Titel, nicht die Adresse** `/pages/funktionsweise`, daran hängen vier Vorlagen
- Beide Erklärseiten ins Menü aufnehmen
- ~~Beauty Sleep Box als Produkt anlegen~~ — **zurückgestellt am 15.09.**, nicht genug Artikel
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
| ~~Erfundene Beispielstimmen~~ — **am 25.08. entfernt.** Die neue Sektion *MELYLA Bewertungen* blendet sich aus, solange keine echte Bewertung eingetragen ist | erledigt |
| ~~„Über 1.000 verkauft"~~ — **am 25.08. auf „Über 800" korrigiert**, belegt sind ~822 (Otto 353, Amazon Gr. M 197, Shop ~272) | erledigt |
| ~~„Nr. 1 Bestseller"~~ im Hero — **am 25.08. entfernt.** Eine Spitzenstellungsbehauptung, die wir nicht belegen können | erledigt |
| ~~Streichpreis Kissen~~ — **am 25.08. geklärt.** Senkung Anfang August 2026, also innerhalb der Frist. 89,50 € ist der korrekte Bezugspreis nach § 11 PAngV und wird mit Hinweis angezeigt. **Zu beobachten:** Ein Abverkauf darf nicht dauerhaft als „Ermäßigung" laufen (§ 5 UWG) | erledigt, mit Frist |
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
