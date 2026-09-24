# MELYLA — Projektstand

Stand 24.09.2026. Eine Seite: Was ist fertig, was ist offen, wo hakt es.

---

## Audit von Laufwerk.Cloud — 23.09.2026

Ein Kollege hat über Laufwerk.Cloud ein 360-Grad-Audit erstellen lassen: 67 Seiten,
Gesamtnote **58 von 100**. Eingeordnet — Befund für Befund, mit unserem eigenen
Urteil — in [27-audit-laufwerk.md](27-audit-laufwerk.md).

**Zwei Fristen daraus:**

| Frist | Was |
|---|---|
| **27.09.2026** | „Versand CO₂-neutral" streichen oder belegen — danach ohne unabhängigen Nachweis unzulässig |
| **30.09.2026** | `/pages/widerruf-formular` kündigt ein Formular an und enthält keines; der Widerrufsbutton ist seit dem 19.06.2026 Pflicht |

Beides liegt im Admin. Der wichtigste Befund darüber hinaus steht nicht im Audit,
sondern fiel beim Abgleich auf: **Der Shop betreibt zwei Bewertungssysteme.** Live
steht auf der BH-Seite Judge.mes „4,79 aus 52" — rechnerisch genau unsere 49
Bewertungen plus die drei, die wir wegen Inhaber-Adressen bewusst draußen haben.
Das braucht eine Entscheidung, siehe Abschnitt 8 der Audit-Datei.

Was das Audit als **gut** bestätigt: Cookie-Abfrage 88, Tracking-Hygiene 82
(vor der Einwilligung lädt nichts), KI-Crawler-Zugang 90, Zitierbarkeit 84, und
die echten Google-Felddaten sind grün (LCP 1,47 s, INP 139 ms, CLS 0,00). Die oft
zitierten „4,8 Sekunden" sind ein Laborwert für ein gedrosseltes Handy.

---

## „CO₂-neutral" ist raus — 24.09.2026, vor der Frist

Die **EmpCo-Richtlinie (EU) 2024/825** gilt ab dem **27.09.2026**. Sie verbietet
Aussagen, etwas sei klimaneutral, **wenn sie auf Kompensation beruht** — also auf
Klimaprojekten außerhalb der eigenen Lieferkette. Verstöße gelten **per se als
unlauter, ohne Einzelfallprüfung**; auch versehentliche sind abmahnfähig.

**Zwölf Fundstellen, alle entfernt:** zweimal `melyla-funnel-faq.liquid`
(Kommentar und `default`), `answer_8` in fünf Vorlagen, vier
`produktbeschreibung-*.html` und `warum-melyla.html:87`. Der Satz lautet jetzt
schlicht „Versand aus Deutschland, in der Regel 2–4 Werktage. Der Versand ist
kostenlos."

**Noch offen — nur im Admin:** Sechs Stellen stehen weiter live, davon zwei,
die niemand auf dem Zettel hatte. Die Arbeitsliste steht direkt unten unter
„Sechs Umweltaussagen stehen noch live".

### DHL hat das alte GoGreen selbst abgeschafft

Das ändert die Frage an Jochen. **GoGreen** (Kompensation über Wind in Ägypten,
Wasserkraft in Vietnam) wurde zum **31.08.2026 eingestellt** und durch **GoGreen
Plus** ersetzt: Reduktion im eigenen Netz über E-Fahrzeuge, Güterzüge und
Photovoltaik, zugeteilt über ein zertifiziertes Book-and-Claim-Verfahren. Das ist
*Insetting*, nicht Offsetting — und damit die Kategorie, die zulässig bleibt.

> Die Frage ist also nicht „zahlt Jochen dafür", sondern **„ist er schon auf
> GoGreen Plus umgestellt"**. Robin klärt das im Telefonat.

**Auch mit GoGreen Plus bleibt „CO₂-neutral" verboten.** Es trägt eine
*Reduktions*aussage, keine *Neutralitäts*aussage. Wenn Jochen bestätigt, lautet
die Formulierung „Versand mit DHL GoGreen Plus" plus einem Satz, der die
**Maßnahme** nennt statt ein Ergebnis zu behaupten. DHLs eigene Werbezahl „bis zu
95 % weniger CO₂e" bleibt draußen — „bis zu" ist eine Spitzenaussage.

Einzige verbliebene Fundstelle im Repo ist das Wort „Nachhaltig" im Wortlaut
einer echten Kundenbewertung. Fremdtext, keine eigene Werbeaussage.

## Sechs Umweltaussagen stehen noch live — 24.09.2026, Frist 27.09.

Der Theme-Teil ist seit dem Push sauber. **Die Inhaltsfelder im Admin sind es
nicht** — dort ändert ein Push nichts. Am 24.09. alle 36 Adressen aus der
Sitemap durchgegangen; sechs Stellen stehen noch. Zwei davon kannte niemand:
Die Schwamm-Seiten haben **keinen Baustein im Repo**, das ist reiner
Admin-Text.

### Produktbeschreibung — Baustein neu einsetzen

Vier Seiten. Der Baustein in `shopify-einfuegen/` ist schon richtig; er muss
nur ins Beschreibungsfeld **neu eingesetzt** werden.

| Seite | Baustein |
|---|---|
| `/products/anti-falten-kissen` | `produktbeschreibung-kissen.html` |
| `/products/antifalten-set-kissen-bh` | `produktbeschreibung-set-bh-kissen.html` |
| `/products/2-x-melyla-anti-falten-bh` | `produktbeschreibung-set-2x-bh.html` |
| `/pages/warum-melyla` | `warum-melyla.html` |

Wer es lieber von Hand ändert, sucht genau das:

```
Gratis aus Deutschland, in der Regel 2–4 Werktage, CO₂-neutral.
→  Gratis aus Deutschland, in der Regel 2–4 Werktage.

Versand aus Deutschland, in der Regel 2–4 Werktage, kostenlos und CO₂-neutral.
→  Versand aus Deutschland, in der Regel 2–4 Werktage, kostenlos.
```

### Die beiden Schwamm-Seiten — nur im Admin, kein Baustein

`/products/schwamm` sagt **fünfmal** „umweltfreundlich" und einmal
„nachhaltige Methode"; `/products/abschminkschwamme` einmal „nachhaltige
Alternative" und einmal „umweltfreundlich" — **acht Stellen auf zwei Seiten.**
Auch das fällt unter die EmpCo-Richtlinie: pauschale Umweltbegriffe ohne
belastbaren Nachweis.

**Der Ausweg ist eine Tatsache statt einer Wertung.** „Wiederverwendbar" ist
nachprüfbar, „umweltfreundlich" ist eine Bewertung, die belegt sein müsste:

```
umweltfreundlich*  →  wiederverwendbar*   (gleiche Endung, 5x auf /schwamm)
eine nachhaltige Methode      →  eine schonende Methode
eine nachhaltige Alternative  →  eine wiederverwendbare Alternative
was sowohl umweltfreundlich als auch hautschonend ist
                              →  was sie langlebig und hautschonend macht
```

### Danach nachmessen

```bash
python3 - <<'ENDE'
import urllib.request, re, gzip
def hole(u):
    d = urllib.request.urlopen(urllib.request.Request(
        u, headers={'User-Agent': 'Mozilla/5.0'}), timeout=30).read()
    return (gzip.decompress(d) if d[:2] == b'\x1f\x8b' else d).decode('utf-8', 'replace')
karten = [m for m in re.findall(r'<loc>([^<]+)</loc>', hole('https://melyla.de/sitemap.xml'))
          if 'sitemap_' in m]
adressen = [a for k in karten for a in
            re.findall(r'<loc>([^<]+)</loc>', hole(k.replace('&amp;', '&')))
            if not a.endswith('.jpg')]
muster = re.compile(r'CO.?.?-neutral|klimaneutral|umweltfreundlich|nachhaltig', re.I)
treffer = [(a, m) for a in adressen for m in set(muster.findall(hole(a)))]
print(f'{len(adressen)} Adressen, {len(treffer)} Fundstelle(n)')
for a, m in treffer: print(' ', m, a)
ENDE
```

Muss leer sein. **Der Theme-Prüfer sieht davon nichts** — dieselbe Lücke wie am
21.09. bei den Bewertungszahlen.

## Angebotsstaffel: Karte 3 im Rabatt — 24.09.2026

Der Preisprüfer meldete vier Abweichungen, Karte 3 auf 69,50 € statt 89,00 €.
**Kein Rückfall** — Robin hat am 24.09. bestätigt, dass ein Rabatt läuft.
Streichpreis 99,00 € ist korrekt: Das Set stand in den letzten 30 Tagen nie auf
89,00 €, die Senkung ging direkt von 99,00 € auf 69,50 €. Damit ist § 11 PAngV
gewahrt.

`bin/preise-pruefen.mjs` kann jetzt **befristete Aktionen**. Sie überschreiben
`SOLL`, solange sie laufen; nach dem Stichtag meldet der Prüfer von selbst, dass
der Preis zurück muss — niemand muss daran denken. Der Grund steht als Kommentar
im Prüfer: Ein Abverkauf darf nicht dauerhaft als Ermäßigung laufen (§ 5 UWG),
dieselbe Frist, die hier schon für den Kissenpreis steht.

| | |
|---|---|
| Fehlendes Enddatum | **Erinnerung**, kein Abbruch — sonst blockiert es jeden Push |
| Abgelaufene Aktion | **Abbruch.** Der Soll-Preis fällt auf 89,00 € zurück |
| Ersatzfelder der Vorlage | werden gegen `SOLL` geprüft, nicht gegen die Aktion. Ein Rabatt lebt in den Shopify-Produktdaten, nicht in einer Vorlage, die beim Push sofort live geht |

> **Offen: das Enddatum.** Solange es fehlt, meldet der Prüfer es bei jedem Lauf.

## Werkzeuge für Texte — 24.09.2026

Gesucht war ein Top-Repo für Shopify-Funnel und Produkttexte. **Das gibt es
nicht.** Unter `github.com/topics/conversion-copywriting` liegen sieben Repos,
sechs mit 0 oder 1 Stern; das einzige mit Zugkraft ist auf Chinesisch und
arbeitet mit Angstappell und Preis-Anker — die Kategorie, die hier am 25.08.
bewusst entfernt wurde.

Stattdessen drei Lücken geschlossen:

**Achter Prüfer: `bin/texte-pruefen.mjs`.** Misst als einziger die
Formulierung. `FLOSKEL` ist eine Wortliste (hochwertig, innovativ,
Premium-Qualität, „perfekt für", „besticht durch" …) und bricht ab; `LANG`
meldet Sätze über 25 Wörtern und Ketten aus drei `-ung`-Nomen, bricht aber
nur mit `--streng` ab. Läuft in der CI.

Er fand beim ersten Lauf fünf Floskeln. Zwei davon waren eigener Text —
„Hochwertiges Material trifft auf durchdachte Formgebung" stand unter der
Überschrift *Jedes Detail hat seinen Grund*, ohne ein Detail zu nennen.
Ersetzt durch „Kein Bügel, kein Haken im Rücken, flache Nähte — jede dieser
Entscheidungen stammt aus einer Nacht, in der etwas gestört hat."

Die dritte ist **Fremdtext und bleibt stehen**: der Redaktionstext des BARBARA
Magazins in `melyla-funnel-presse` enthält „innovative". Ein Zitat zu glätten
und weiter als Redaktionsempfehlung auszuzeichnen wäre schwerer als die
Floskel. Sie steht mit Begründung in `bin/texte-ausnahmen.txt`.

> **Offen für Robin:** Ist das der wörtliche Text aus Ausgabe Nr. 61? Wenn
> nein, darf er dort nicht unter „Redaktionsempfehlung" stehen (§ 5 UWG).

**`.agents/product-marketing.md` angelegt.** Die Skills `copywriting`, `cro`,
`offers` und `emails` lesen diese Datei zuerst — sie fehlte, also fing jeder
Text bei Zielgruppe, Einwänden und Ton wieder bei null an. Sie zieht
Positionierung, Mechanismus, Kundensprache und Belege aus dem Bestand zusammen.
**Die Zielgruppe steht darin als offen**, mit allen drei Hypothesen; die
Datenquelle, die das entscheidet, liegt seit dem 12.08. bei Jochen.
`.gitignore` schloss `.agents/` komplett aus — für diese eine Datei
ausgenommen, der Rest bleibt draussen.

**Shopify-Skills auf das offizielle Plugin umgestellt.**
`shopify-ai-toolkit@claude-plugins-official`
([Shopify/Shopify-AI-Toolkit](https://github.com/Shopify/Shopify-AI-Toolkit),
MIT, seit 09.04.2026 offen): 22 Skills, Schema-Validierung, aktualisiert sich
selbst. Die drei handkopierten Skills vom 23.08. blieben dagegen stehen.

**Nur einer der drei war wirklich abgelöst.** `shopify-liquid-themes` ja;
`liquid-theme-a11y` und `liquid-theme-standards` nicht — das Plugin widmet WCAG
eine einzige Zeile, und BEM und Design-Tokens kommen dort nur in `shopify-pos-ui`
vor, einer anderen Plattform. Beide bleiben von Hand gepflegt.

Die Telemetrie des Plugins ist abgeschaltet (`~/.config/shopify-ai-toolkit/opt-out`);
es schickt sonst Anfragen und Code an shopify.dev.

## Fertig

**Theme** `Robinthehouse/melyla-shopify-theme`, über GitHub verbunden und
**veröffentlicht** — `melyla.de` läuft auf diesem Theme. Jeder Push auf `main` ist
damit sofort im Shop, ohne Zwischenschritt.

| | |
|---|---|
| Sektionen | 19 eigene MELYLA-Sektionen, alle im Editor bearbeitbar |
| Seiten | Startseite (13 Abschnitte), BH, Beauty Sleep Box, Kissen, zwei Erklärseiten |
| Bewegung | Scroll-Animationen in 17 von 18 Sektionen (Dawns eigene Technik) |
| Hero | Zugespitzte Aussage, Trust-Zeile, echte Zahlungsart-Icons, Bild-Hintergrund als Option |
| Kauf-Buttons | Alle verdrahtet: die CTAs führen zum Angebotsabschnitt, dessen drei Buttons legen in den Warenkorb |
| Formatierung | **237 von 268 Feldern** können fett, kursiv und Links |
| HTML-Bausteine | BH, Kissen, Beauty Sleep Box, Warum MELYLA, Funktionsweise |
| Werkzeuge | Vorlagenprüfer + Theme Check in der CI, lokale Vorschau auf Port 4010 |
| Skill-Bibliothek | 12 Skills in `~/.claude/skills` (Shopify offiziell + Marketing) |

## Lösung-Passage als Scroll-Erzählung — 21.09.2026

Die Lösung-Passage waren drei Bild-Text-Reihen untereinander. Sie *behauptete*
die Mechanik, sie zeigte sie nicht — dabei ist die Mechanik eine Bewegung: Man
dreht sich auf die Seite, und der Mittelsteg hält die Brüste auf Abstand.

Neu ist die Sektion **`melyla-funnel-loesung-scroll`** (*MELYLA Lösung
(Scroll)*). Jedes Kapitel klebt im Bild, während man daran vorbeiscrollt;
Überschrift, Text und die drei Häkchen fahren nacheinander ein. Liegt ein Clip
im Kapitel, folgt er dem Scrollen vor und zurück. Kapitel 1 steht auf **hin und
zurück**: runterscrollen dreht sie auf die Seite, hochscrollen dreht sie
zurück.

**Die alte Sektion bleibt liegen und ist unverändert.** Sie ist der Rückweg,
bis die neue im Shop bestanden hat. `templates/index.json` ist bewusst nicht
von Hand angefasst — Bilder lassen sich nur im Admin wählen, und ein Push mit
leeren Feldern stellte Platzhalter auf die Startseite. Das Preset bringt alle
drei Kapitel mit den heutigen Texten samt Fettungen mit; Einsetzen im Editor
ist ein Klick plus drei Bildauswahlen.

### Warum drei kurze Clips und nicht ein langer

Ein durchgehendes Scroll-Video über die ganze Passage schied aus. Gemessen an
`exports/scroll-video/melyla-scroll-mobil-1170.mp4`:

| | |
|---|---|
| Laufzeit | 4,5 s |
| Größe | 5,56 MB |
| Bilder | 135, **jedes ein Keyframe** |
| Ergebnis | rund **1240 KB je Sekunde** |

Jedes Bild muss ein Keyframe sein, sonst kann der Browser beim Scrollen nicht
an jede Stelle springen — siehe „Scroll-Video stand still auf dem Handy" weiter
unten. 25 Sekunden durchgehend wären also **rund 31 MB**, die geladen sein
müssen, bevor sich überhaupt etwas rührt. Drei Clips im Kachelformat liegen bei
je 1,5–2 MB, und **es lädt nur das Kapitel, das gerade dran ist** — nachgemessen
im Browser: das sichtbare Kapitel steht auf `preload=auto`, das übernächste
noch auf `none`.

### Zwei Dinge, die beim Messen auffielen

**Das Handy-Layout hätte abgeschnitten.** Eine geklebte Fläche, die höher ist
als das Fenster, hängt mit der Oberkante fest — ihr unteres Ende bekommt
niemand mehr zu sehen. Auf 375 × 667 (iPhone SE) blieb der ersten Fassung
**genau ein Pixel Luft**; eine Zeile mehr im Text, und der letzte Haken wäre
unsichtbar gewesen, ohne dass es jemandem aufgefallen wäre.

Jetzt *muss* die Bühne nicht passen, sie *passt*: Sie ist auf Fensterhöhe
festgelegt, der Text nimmt sich, was er braucht, das Bild gibt den Rest her.
Mit absichtlich verdoppeltem Text schrumpfte das Bild von 251 auf 86 px — der
Text stand vollständig. Am Rechner bleibt es beim Nebeneinander.

**Der Video-Wähler ist in Blöcken verboten.** Eine `video`-Einstellung in einem
Block lässt Shopify die ganze Sektion still aus dem Editor weg;
`bin/vorlagen-pruefen.mjs` hat das abgefangen. Erlaubt wäre dort nur
`video_url`, und das nimmt bloß YouTube und Vimeo — für eine MP4, an der
gescrubbt wird, also nutzlos. Darum trägt hier allein die Video-Adresse, und
fällt sie aus, bleibt das Bild stehen.

### Was noch fehlt

Die Clips. Die Bildbriefings dafür stehen in
[24-bildbriefing-model.md](24-bildbriefing-model.md) — dieselben Elements
(`melyla-model`, `melyla-bh`) liefern die Standbilder **und** die Startbilder
der Clips. Bis dahin läuft die Sektion mit den drei vorhandenen Bildern.

**Vor dem Livegang auf einem echten iPhone in Safari prüfen.** Der Standstill
des Startseiten-Videos am 20.09. war am Rechner unsichtbar und nur auf dem
Handy da.

## Ankündigungsleiste neu gebaut — 21.09.2026

Über dem Shop lief die **unveränderte Dawn-Leiste**. Vier Dinge machten sie
unprofessionell, alle im Code nachweisbar:

- Die Botschaft trug Dawns Klasse `h5` — Montserrat SemiBold auf der
  Überschriften-Skala, dazu `letter-spacing: 0.1rem`. Eine Leiste, die schreit.
- `min-height: 3.8rem` plus `1rem` Innenabstand ≈ **58 px**. Üblich sind 30–50 px.
- Dawn rendert die **Schieberegler-Pfeile** fest ein, je 44 px breit, bei nur
  60 % Leistenbreite. Das war das „›" neben dem Text.
- `scheme-5` (`#8151a3`) als Vollfläche über dem hellen Header — ein Block
  statt eines feinen Streifens.

**Und sie saß an der falschen Stelle.** In `header-group.json` stand die
Reihenfolge `["header", "announcement_bar"]` — die Leiste lief also *unter* dem
Header. Am ausgelieferten HTML nachgemessen, nicht vermutet.

**Inhaltlich** standen vier Botschaften drin, davon zwei mit demselben
Versprechen in beiden strittigen Fassungen: „↩ 30 Nächte testen, Geld zurück"
und „30 Tage Testschlafen". Dazu „Barbara das Magazin No.61", während die Quelle
überall sonst „BARBARA Magazin — Ausgabe Nr. 61" heißt. Kein einziger Link.
Emoji statt Symbole.

### Was jetzt dort steht

`sections/melyla-ankuendigung.liquid`, gebaut aus dem Entwurf, der seit Langem
unbenutzt in `docs/melyla/shopify-einfuegen/ankuendigungsleiste-code.liquid` lag.

| | |
|---|---|
| Höhe | rund **36 px**, Inter 13 px, normale Sperrung, keine Überschriftenklasse |
| Farbe | `#3d2645` mit weißer Schrift (13,4:1), Symbole und Trennpunkte `#b08ac8` (4,7:1) |
| Desktop | drei Angaben nebeneinander, **keine Pfeile**, nichts wechselt |
| Handy | eine Angabe zur Zeit, alle 4 s. Ohne Skript steht dauerhaft die erste da |
| Position | **über** dem Header, bündig |

**Zugänglichkeit besser als bei Dawn.** Dawn hängt `aria-live="polite"` an den
Slider und liest jede rotierende Botschaft neu vor. Hier stehen alle Angaben
immer im DOM; auf dem Handy werden die anderen nur per CSS ausgeblendet. Ein
Screenreader bekommt alle drei auf einmal und wird nie unterbrochen.

### Die drei Angaben

| Symbol | Text | Link |
|---|---|---|
| Versand | Gratis Versand aus Deutschland | `/policies/shipping-policy` |
| Rückgabe | 30 Nächte testen, Geld zurück | — |
| Auszeichnung | Bekannt aus BARBARA Nr. 61 | — |

**Genau ein Link**, wie es die Recherche zu Ankündigungsleisten empfiehlt —
mehrere Ziele zersplittern die Aufmerksamkeit. Er geht auf die
Versandrichtlinie, weil die von **jeder** Seite aus stimmt. Ursprünglich sollte
BARBARA verlinkt werden; die Presse-Sektion existiert aber nur auf der Startseite
und der BH-Seite, ein shopweiter Link dorthin liefe von überall sonst ins Leere.

**Der Rückgabe-Punkt bleibt bewusst unverlinkt.** AGB Ziffer 8 (1) verlangt noch
„vollständig und originalverpackt … ungebraucht" — wer 30 Nächte trägt, erfüllt
das nicht (`21-ki-inhalte.md`). Das Versprechen einen Klick neben seinen
Widerspruch zu legen, wäre die schlechtere Lösung. Link nachrüsten, sobald
Ziffer 8 angeglichen ist.

**„30 Nächte" ist hier gesetzt**, nicht im ganzen Shop. Der Punkt aus „Offen
geblieben" (44× „Tage", 25× „Nächte") bleibt offen.

**Keine Bewertungszahl in der Leiste.** Falls sie später doch hineinsoll: nicht
tippen, sondern `melyla-bewertungen-liste.liquid` um einen Modus erweitern, der
nur Schnitt und Anzahl ausgibt. Sonst ist es die vierte Stelle, an der eine Zahl
zurückfallen kann.

---

## Neuer Startseiten-Hero — 21.09.2026

Die Startseite begann mit dem Scroll-Video. Hook, Bewertung, Kaufweg und
Vertrauenssignale standen erst zehn Abschnitte weiter unten im *MELYLA Hero* —
genau die Lücke, die weiter oben unter „Zwischen Hero und Angebot gab es keinen
einzigen Kaufweg" steht.

Neu ist **`sections/melyla-hero-start.liquid`** — *MELYLA Startseiten-Hero*:
Text links, wischbares Bildkarussell rechts, darunter Bewertung, zwei Buttons,
Vertrauenszeile und echte Zahlungsart-Icons. Der alte *MELYLA Hero* bleibt
unverändert an seinem Platz weiter unten.

| | |
|---|---|
| Aufbau | Zwei Spalten ab 750 px über `grid-template-areas`. Auf dem Handy rutscht das Karussell zwischen Überschrift und Fließtext — über Grid-Felder, nicht über `order`, damit Vorlese- und Sichtreihenfolge gleich bleiben |
| Karussell | Wischen über Scroll-Snap, dazu Pfeile und Punkte. **Kein Autoplay** — nichts bewegt sich ungefragt, also braucht es auch keinen Pausenknopf |
| Ladeverhalten | Erste Folie `eager` mit `fetchpriority="high"`, sie ist das LCP-Element der Seite. Jede Folie hat ein festes Seitenverhältnis, damit beim Laden nichts nachspringt |
| Bilder | Bis zu sechs Blöcke, je mit Bildbeschreibung und eigenem KI-Hinweis |
| Zahlungsarten | Aus `shop.enabled_payment_types`, nicht aus hinterlegten Logos — gezeigt wird nur, was im Checkout wirklich aktiv ist |

**Was bewusst nicht im Preset steht:** „Über 5.000 verkaufte BHs" (der Beleg
steht unter „Rechtlich, vor dem Livegang" noch aus) und „30 Nächte testen"
(kollidiert mit AGB Ziffer 8 Abs. 1). Stattdessen „30 Tage
Geld-zurück-Garantie". Die Bewertung steht auf **4,78 aus 49** und ist damit
von `zahlen-pruefen.mjs` gedeckt.

**Ein Kontrastfehler ist dabei aufgefallen und behoben:** die inaktiven
Karussell-Punkte hätten auf `--mel-border` gestanden — 1,58:1 gegen den
Seitengrund. Ein Bedienelement braucht nach WCAG 1.4.11 mindestens 3:1. Sie
tragen jetzt die Fließtextfarbe (5,40:1) und unterscheiden sich vom aktiven
Punkt zusätzlich in der Größe, nicht allein in der Farbe.

### Das Bildporträt mit Kamerablick gehört nicht hinein

`MELYLA_Lifestyle_Portrait_Frau-Kamerablick-Schwarz_3x4.webp` darf in diesem
Abschnitt **nicht** eingesetzt werden. Die Regel aus
[21-ki-inhalte.md](21-ki-inhalte.md) lautet „kein Name, kein Zitat, keine
Sterne" neben diesem Bild — sonst liest es sich als erfundene
Verbraucherbewertung (UWG Anhang Nr. 23). Der neue Hero zeigt die Sterne direkt
daneben. Die drei Editorial-Motive sind unbedenklich.

### Offen — nur von Hand im Admin

1. Die drei WebPs aus `public/images/lifestyle/` unter *Inhalte → Dateien*
   hochladen. Shopify liest `public/` nicht, das geht nicht über git.
2. Im Theme-Editor *MELYLA Startseiten-Hero* auf Platz 1 einsetzen, die Bilder
   je Folie wählen, **Häkchen „KI-Hinweis" setzen** und das Scroll-Video unter
   „Problem" ziehen.
3. Erst danach den Commit „Alter Hero traegt h2" pushen. Vorher hätte die
   Startseite **gar keine** h1 — der neue Abschnitt trägt sie ab jetzt, der alte
   gibt sie ab.

`templates/index.json` ist bewusst **nicht** von Hand geändert worden: Die
Bilder können nur im Admin gewählt werden, und ein Push mit leeren Folien hätte
Platzhalter auf Platz 1 der Startseite gestellt. Das Preset bringt alle Texte
schon mit, das Einsetzen im Editor ist damit ein Klick.

## Lifestyle-Bilder — 21.09.2026

Drei Higgsfield-Aufnahmen sind aufbereitet und liegen in
`public/images/lifestyle/`. Aus je 4–5 MB PNG sind 190–365 KB WebP geworden,
benannt nach dem Schema aus `public/images/products/`.

**Es sind keine neuen Sektionsdateien entstanden.** Beide Bausteine gab es
schon, sie haben nur gefehlt, was Bilder brauchen:

- ***MELYLA Video-Karussell*** rendert seit jeher eine reine Bildkachel, wenn
  der Video-Link leer bleibt — nur war die Kachel auf 9:16 festgenagelt, und
  die Pfeile hießen für einen Screenreader „Vorheriges Video". Neu sind ein
  **Kachelformat** (9:16, 3:4, 1:1), eine **Medienart**, die nur die
  Pfeilbeschriftung umschaltet, und der **KI-Hinweis je Kachel**.
- ***MELYLA Hero*** kann jetzt ein **zweites Hintergrundbild fürs Handy** —
  dasselbe Muster wie bei den beiden Hintergrundvideos, weil ein Querformat
  auf dem Handy die Mitte wegschneidet und ein Hochformat am Desktop fast nur
  Schulter zeigt. Ist keins gesetzt, läuft alles wie vorher. Dazu der
  **KI-Hinweis** unten rechts über dem Bild.

Auf der Startseite steht ein neuer Abschnitt *Dekolleté im Alltag* zwischen
den Stimmen und den Fragen — **bewusst ausgeblendet**, weil ein Push auf
`main` sofort live ist und die Kacheln noch kein Bild haben.

**Offen bei Robin:** Die drei Dateien unter *Inhalte → Dateien* hochladen, im
Abschnitt auswählen, dann das Häkchen „Abschnitt ausblenden" entfernen.

Warum der Streifen so weit unten sitzt und was an den Bildern **nicht**
danebenstehen darf, steht in [21-ki-inhalte.md](21-ki-inhalte.md) — Stichwort
§ 5 UWG und Anhang Nr. 23.

## Scroll-Video stand still auf dem Handy — 20.09.2026

**Shopify rechnet jedes über den Video-Wähler gewählte Video um und wirft die
Keyframes dabei weg.** Das Scroll-Video braucht aber jedes Bild als Keyframe,
sonst kann der Browser beim Scrollen nicht an jede Stelle springen.

Gemessen an der Live-Seite:

| | ausgeliefert | Original auf dem CDN |
|---|---|---|
| Desktop | 1288×720, **2 von 132 Keyframes** | 1600×894, **132 von 132** |
| Mobil | 594×1080, 7,2 Mbps, **2 von 135** | HEVC 1440×2618, 17,6 Mbps, **5 von 135** |

Die Desktop-Datei war also richtig kodiert — die Umrechnung hat sie zerstört.
Am Rechner fiel das kaum auf, auf dem Handy stand das Bild still. Und weil die
Bühne über die halbe Scrollstrecke klebt, wirkte die ganze Startseite
eingefroren: Man wischt und nichts bewegt sich.

**Der Ausweg ist die Direkt-Adresse.** Shopify liefert das unveränderte Original
unter

    https://cdn.shopify.com/videos/c/o/v/KENNUNG.mp4

aus — das `o` steht für original. Gibt der Admin beim Kopieren einen Link mit
`/vp/` heraus, ist das die umgerechnete Fassung; dann die Kennung daraus in die
Form oben einsetzen. **Diese Form ist von Shopify nicht dokumentiert.** Die
Sektion fängt das ab: Die Adresse steht als erste Quelle, die Quellen des
Wählers bleiben darunter. Fällt die Adresse aus, nimmt der Browser von allein
die nächste. Erkennungszeichen wäre dann, dass das Scrubben wieder ruckelt,
ohne dass jemand etwas geändert hat.

Das Muster läuft im Theme schon länger: `melyla-funnel-hero-video` hat das Feld
`video_adresse` seit jeher.

Neue Mobil-Datei in `exports/scroll-video/`: 810×1472, 2,7 MB, 135 von 135
Keyframes. Daneben ein eigenes Vorschaubild im Hochformat — das Querformat
wurde auf dem Handy hart beschnitten.

**Offen, bewusst nicht angefasst:** Die Schrift über dem Video ist weiß
(`heading_color`, `text_color`, `accent_color` alle `#ffffff`) bei
Schleier-Stärke 0. Der BH wird vor weißem Studiohintergrund gefilmt, „Anti-Falten
BH" ist dort kaum zu lesen. Robin will die Farbe so.

---

## Tote Kauf-Buttons — 19.09.2026 abends

**Im Shop hat kein einziger Kauf-Button funktioniert.** Dazu kein FAQ-Aufklapper, kein
Größenberater, keine Feature-Karten. Sechs Sektionen gleichzeitig, auf jeder Seite.

Ursache war eine einzige Zeile, dreimal neun Mal kopiert:

```liquid
class ProductSets{{ ai_gen_id }} extends HTMLElement {
```

`ai_gen_id` ist die Abschnitts-ID. Auf dem Storefront heißt die **immer**
`template--25642652631307__angebot` — und `--` ist in einem JavaScript-Bezeichner ein
Syntaxfehler. Der Browser parst das ganze Skript nicht mehr, also hängt kein einziger
Klick-Handler. Belegt mit `node --check` über alle 45 Inline-Skripte der Startseite:
sechs davon brachen ab.

**Warum es nie auffiel:** Theme Check prüft Liquid, nicht das erzeugte JavaScript — für
Liquid ist die Zeile einwandfrei. Und in der lokalen Vorschau heißt der Abschnitt schlicht
`angebot`, ohne Bindestrich. Der Fehler existiert nur im echten Shop.

**Behoben** in allen neun Sektionen: `js_id` ist dieselbe ID ohne Bindestriche und wird
für Bezeichner benutzt, Elementname und CSS-Klassen behalten `ai_gen_id` — dort sind
Bindestriche gültig, im Elementnamen sogar Pflicht. Dazu ein Wächter gegen doppeltes
`customElements.define`, das der Editor beim Nachrendern auslöst.

**`bin/skripte-pruefen.mjs` ist neu und läuft in der CI.** Er meldet jede Stelle, an der
ein JS-Bezeichner an einer Abschnitts-ID hängt. Gegenprobe gegen den Stand von vorher:
findet alle neun, danach keine.

### Und dann kam die Reparatur nicht im Shop an

Der Push ging durch, fünf der sechs Sektionen waren sofort live — die Angebotssektion
nicht. Zweimal hintereinander. Im selben ausgelieferten HTML standen fünf neue Skripte
und eines in der alten, kaputten Fassung.

Das Protokoll der GitHub-Integration (Theme-Karte → neben „Zuletzt gespeichert" auf
**Protokolle anzeigen**) nannte den Grund:

```
Fehler: sections/melyla-funnel-angebot.liquid, Validation failed:
  Invalid schema: setting with id="card_1_hinweis" default can't be blank,
  ... card_3_savings ... card_3_hinweis ...
1 erfolgreich, 0 Warnungen, 2 fehlgeschlagen
```

**Ein `"default": ""` macht für Shopify das ganze Schema ungültig — und damit wird die
komplette Datei beim Sync verworfen.** Im Shop bleibt die letzte gültige Fassung stehen,
ohne dass irgendwo ein Fehler sichtbar wird: Im Repo ist die Datei unauffällig, Theme
Check und CI laufen grün, der Editor zeigt nichts. Nur dieses Protokoll verrät es.

Eingebracht haben die drei Werte `0d48ac9` von heute Mittag. **Seitdem kam aus dieser
Datei nichts mehr im Shop an** — weder die Ersparnis-Anzeige von heute noch die Reparatur
der Buttons. Wer keinen Vorgabewert will, lässt den Schlüssel `default` ganz weg.

`bin/vorlagen-pruefen.mjs` meldet leere Vorgabewerte jetzt mit demselben Wortlaut wie
Shopify. Gegenprobe gegen `0d48ac9`: findet alle drei.

**Merksatz: Bleibt eine Änderung im Shop aus, obwohl sie auf GitHub liegt — zuerst ins
Protokoll der GitHub-Integration schauen.** Nicht raten, nicht nochmal pushen.

### Reihenfolge beim Ausrollen

Danach fehlte am Doppelpack immer noch das zweite Größenfeld. Grund: Shopify hatte die
**Vorlage** übernommen, während die **Sektion** noch die alte war — und dabei jedes Feld
verworfen, dessen Einstellung das damalige Schema nicht kannte. Auf GitHub standen die
Felder, in Shopifys Kopie nicht.

**Also immer: erst die Sektionsdatei im Shop ankommen lassen, dann die Vorlage.** Und den
Theme-Editor dabei geschlossen halten. Als Notiz steht das auch in der Sektion selbst.

### 13 tote Sprungmarken auf den Produktseiten

Der Knopf der Sticky-Kaufleiste („Schlaf BH · 49,50 € · Jetzt sichern") tat nichts.
Dieselbe Ursache wie bei den Kauf-Buttons, nur an anderer Stelle: eine hartkodierte
Abschnitts-ID ohne den Vorsatz, den der Storefront vergibt.

Im Vorlagen-JSON heißt der Abschnitt schlicht `main_product`, also steht dort
`#shopify-section-main_product`. Ausgeliefert wird aber
`shopify-section-template--25642652467467__main_product`. Die kurze Fassung gibt es auf
der Seite nicht — der Sprung geht ins Leere, und im JSON sieht die Zeile völlig richtig aus.

Betroffen waren **13 Links auf den vier Produktseiten**: vier Sticky-Leisten, sechs
CTA-Buttons, zwei Sterne-Bewertungen im Hero und „Zum Größenberater".

**`snippets/melyla-anker.liquid`** fängt solche Klicks ab und sucht den Abschnitt über die
Endung `__<name>`. Eingebunden in `layout/theme.liquid`, gilt es auf jeder Seite — auch für
Dawns `main_product`, dem wir keinen eigenen Anker geben können. Findet es nichts, bleibt
der Link unangetastet.

`bin/vorlagen-pruefen.mjs` prüft zusätzlich, dass jede Sprungmarke einen Abschnitt trifft,
den es in **dieser** Vorlage wirklich gibt. Ein Tippfehler im Namen bliebe sonst unsichtbar.
Gegenprobe mit `#shopify-section-bewertunge`: wird gemeldet.

Am Shop nachgewiesen: auf BH- und Kissenseite lösen sich alle Marken auf echte
Abschnitts-IDs auf.

### Nachgewiesen am echten Shop

- **45 Inline-Skripte der Startseite, 0 mit Syntaxfehler** (vorher 6)
- Kauf-Button auf allen drei Karten vorhanden
- Karte 2 zeigt „Größe 1. BH" und „Größe 2. BH"
- `POST /cart/add.js` antwortet sauber: Variante L, 89,00 €, kein überflüssiger
  Bestellhinweis. (Mit dem zweiten Feld, solange es an war, ebenso: Variante M plus
  Hinweis „Größe 2. BH: L".)

### Zweite Größe beim Doppelpack

Das Produkt `2-x-melyla-anti-falten-bh` hat in Shopify nur **eine** Option mit S–XL. Die
Kundin bekommt zwei BHs, konnte aber nur eine Größe wählen — während die Karte
„Größen frei kombinierbar" versprach.

Karte 2 hat jetzt zwei Felder: **Größe 1. BH** wählt die Variante, **Größe 2. BH** fährt
als Bestellhinweis an der Warenkorbzeile mit. Beide Größen stehen damit im Warenkorb, in
der Bestätigung und auf dem Lieferschein — **die Bestellabwicklung muss auf den Hinweis
„Größe 2. BH" schauen, die Variante allein nennt nur die erste Größe.**

Der Bestand je Größe des zweiten BHs wird dabei nicht einzeln geführt. Das Doppelpack hat
ohnehin einen eigenen Bestand, es geht also nichts verloren, was vorher da gewesen wäre.
Einschaltbar je Karte über „Zweite Größe abfragen".

**Nachtrag, am selben Abend wieder abgeschaltet.** Robins Entscheidung: Die Kundin wählt
einmal eine Größe, **beide BHs kommen in dieser Größe**. Karte 2 zeigt deshalb wieder ein
einziges Auswahlfeld. Der Listenpunkt „Größen frei kombinierbar" musste damit weg — er
wäre ein leeres Versprechen — und heißt jetzt „Beide BHs in deiner Größe".

Die Sektion kann das zweite Feld weiterhin, je Karte über „Zweite Größe abfragen". Es ist
nur nirgends eingeschaltet. Wer es je wieder anschaltet: die zweite Größe steht dann als
Bestellhinweis an der Warenkorbzeile, nicht in der Variante.

### Die Preisstaffel lief unbemerkt weg — vierter Rückfall

Seit die Bundles echte Shopify-Produkte sind, kommen Preis und Vergleichspreis **aus den
Produktdaten**. Die Ersatzfelder in der Vorlage greifen nicht mehr. In den Produkten stand
aber kein Vergleichspreis — also zeigten Karte 2 und Karte 3 weder Streichpreis noch
Prozent-Pille noch Spar-Band, und Karte 3 stand bei 99,00 € statt 79,00 €.

`bin/preise-pruefen.mjs` meldete trotzdem „die Staffel stimmt": Er las die Ersatzfelder,
die live niemand mehr sieht. Deshalb hat er jetzt einen zweiten Modus, der die echten
Produkte liest:

```bash
node bin/preise-pruefen.mjs https://melyla.de
```

Er prüft Preis **und** Vergleichspreis jeder einzelnen Variante und meldet auch
ausverkaufte. **Nach jeder Änderung im Shopify-Admin laufen lassen** — die Vorlagenprüfung
allein sagt über den Shop nichts mehr aus.

### Die Staffel, wie sie gilt

| Karte | Produkt | Preis | Einzeln | Ersparnis |
|---|---|---|---|---|
| 1 | `melyla-anti-falten-schlaf-bh` | 49,50 € | — | — |
| 2 | `2-x-melyla-anti-falten-bh` | 89,00 € | 99,00 € | 10,00 € (−10 %) |
| 3 | `antifalten-set-kissen-bh` | 89,00 € | 99,00 € | 10,00 € (−10 %) |

**Karte 2 und Karte 3 kosten beide 89,00 € — das ist so entschieden und kein Rückfall.**
Zwei BHs einzeln sind 99,00 €, BH plus Kissen ebenfalls 99,00 €; beide Sets sparen also
dieselben 10,00 €. Die frühere Vorgabe 79,00 € für Karte 3 gilt nicht mehr. Wer diese
Gleichheit „repariert", macht sie kaputt — der Prüfer hat sie bis heute als Fehler
gemeldet, diese Regel ist entfernt.

Weil beide Sets gleich viel sparen, trägt Karte 3 nicht mehr **Bester Wert**, sondern
**Komplett-Set**. Ein Superlativ ohne größeren Nachlass ist nach UWG nicht zu halten.

## Angebotsstaffel — dritter Rückfall, 19.09.2026 nachmittags

**Es ist wieder passiert, keine zwei Stunden nach der Reparatur.** Karte 2 und Karte 3
standen erneut beide bei 89,00 €, ohne Streichpreis, ohne Prozent-Pille, ohne Spar-Band.

Verursacher diesmal: Editor-Commit `8ce65e2`. Er hat dieselben Felder mitgenommen wie
`d49afe6` am 17.09. — plus die drei `card_N_hinweis`, die im JSON danach gar nicht mehr
existierten. Wiederhergestellt mit `8d1257e`, gepusht und damit live.

**Die Sektion selbst war nie betroffen.** `melyla-funnel-angebot.liquid` hält die
Prozent-Pille, das Spar-Band und die Hinweiszeile unverändert. Der Editor schreibt nur
Vorlagen zurück, keinen Sektionscode. Der Schaden entsteht ausschließlich in
`templates/index.json`.

**`bin/preise-pruefen.mjs` hat funktioniert** — er meldete alle vier Symptome, sauber
benannt. Nur nützt das wenig: Ein Editor-Commit landet direkt auf `main` und damit
sofort im Shop, die CI läuft erst danach. Der Prüfer findet den Rückfall, er verhindert
ihn nicht.

**Was den Kreislauf wirklich beenden würde**, ist keins der bisherigen Mittel:

1. Die Bundles als echte Shopify-Produkte anlegen. Dann kommen Preis und Vergleichspreis
   aus den Produktdaten statt aus getippten Ersatzfeldern, und der Editor hat nichts mehr
   zurückzuschreiben. Das ist die eigentliche Lösung — die Ersatzfelder waren immer nur
   ein Notbehelf, weil die Sets noch Entwürfe sind.
2. Solange das nicht steht: **nach jeder Editor-Sitzung `node bin/preise-pruefen.mjs`
   laufen lassen**, bevor irgendwas anderes passiert.

Dreimal derselbe Rückfall in drei Tagen heißt: Der vierte kommt.

## Angebotsstaffel sichtbar gemacht — 19.09.2026

Auf der Startseite konnte niemand erkennen, dass die Sets günstiger sind. Karte 2
und Karte 3 standen beide bei 89,00 € — ohne Streichpreis, ohne Prozentangabe,
Karte 3 ohne jede Zusatzzeile.

**Ursache war ein Rückfall, kein fehlendes Feature.** Commit `d49afe6` vom 17.09.
(„Update from Shopify for theme“) hat in `templates/index.json` zwei Werte
gelöscht, die am 15.09. schon einmal gesetzt waren:

```
"card_2_fallback_compare": "99,00 €"  →  ""
"card_3_fallback_price":   "79,00 €"  →  "89,00 €"
```

Damit war der 10-€-Nachlass unsichtbar und das Band „Bester Wert“ auf Karte 3
nicht mehr gedeckt. Es ist derselbe Mechanismus wie bei den Bewertungszahlen:
Wer im Editor irgendetwas anfasst, schreibt die ganze Vorlage zurück. Die
Staffel aus der Tabelle weiter unten (15.09.) ist wiederhergestellt.

**Eine echte Lücke im Abschnitt war daneben.** Die Prozent-Pille wurde nur
gerendert, wenn ein Shopify-Produkt verknüpft ist. Karte 2 und 3 haben keins —
die Bundles liegen als Entwurf —, also blieb sie auch mit richtigem Streichpreis
weg. `melyla-funnel-angebot.liquid` rechnet Nachlass und Ersparnis jetzt genauso
aus den getippten Ersatzpreisen wie aus den Produktdaten, ein Rechenweg statt
zwei.

Neu auf den Karten:

| | |
|---|---|
| Prozent-Pille | − 10 % und − 20 %, auch ohne verknüpftes Produkt |
| Spar-Band | „Du sparst 10,00 € gegenüber dem Einzelkauf“, gerechnet, hervorgehoben |
| Zusatzzeile | trägt nur noch den Stückpreis: „44,50 € statt 49,50 € pro Stück“ |
| Hinweiszeile | neues Feld `card_N_hinweis`, auf Karte 2 „Über 5.000 verkaufte BHs“ |

**Kein „Top Seller“.** Robin hatte ein solches Band gewünscht. „Nr. 1 Bestseller“
wurde am 25.08. als Spitzenstellungsbehauptung aus dem Hero entfernt — „Top
Seller“ wäre dieselbe Aussage in anderen Worten. Stattdessen die eigene
Stückzahl, eine Tatsachenbehauptung. **Deren Beleg ist weiter offen**, siehe
„Rechtlich, vor dem Livegang“; die Zahl steht damit jetzt an einer Stelle mehr.

Das Spar-Band sagt ausdrücklich „gegenüber dem Einzelkauf“. Ein Streichpreis
behauptet nach § 11 PAngV den früheren Preis *dieses* Produkts; bei einem Set
ist es der Preis bei Einzelkauf. Ohne den Zusatz läse sich die Prozent-Pille als
befristeter Nachlass.

**Neu: `bin/preise-pruefen.mjs`**, das Gegenstück zu `zahlen-pruefen.mjs`. Es
hält die Soll-Staffel und meldet abweichende Preise, einen fehlenden
Vergleichspreis, zwei Karten zum selben Preis, einen Stückpreis, der nicht zum
Setpreis passt, und ein Band „Bester Wert“ ohne den größten Nachlass. Läuft in
der CI bei jedem Push. Gegen den echten Rückfall von `d49afe6` getestet: er
meldet alle drei Symptome.

Der Alt-Text von Karte 3 hieß noch „Produktbild MELYLA Beauty Sleep Box“ — die
Box ist seit dem 15.09. zurückgestellt. Jetzt „Anti-Falten Schlaf BH und
Anti-Falten Kissen“.

**Unverändert offen:** Die beiden Bundle-Produkte sind in Shopify weiter
Entwürfe. Bis sie verknüpft sind, zeigen Karte 2 und 3 kein Größen-Dropdown und
„Jetzt kaufen“ führt auf `/collections/all`.

## Durchgang vor dem Start — 18.09.2026

**Verkaufte Stück: über 5.000.** Im Theme standen vier verschiedene Zahlen
(1.000 · 1000+ · 6000+). Jetzt überall „Über 5.000 verkaufte BHs", auch in den
Vorgabewerten der Abschnitte. Beleg für die Zahl gehört noch abgelegt, siehe
`17-bewertungen.md`.

**Bewertungszahlen zum dritten Mal richtiggestellt.** Startseite und BH-Seite
trugen wieder 4,79 · 52 · 150+ · +400. Ursache: Jede Bearbeitung im
Shopify-Editor schreibt die ganze Vorlage zurück, samt alter Zahlen in Feldern,
die gar nicht angefasst wurden. Neu deshalb `bin/zahlen-pruefen.mjs` — rechnet
aus den Rohdaten und meldet jede getippte Zahl, die nicht dazu passt. Läuft in
der CI bei jedem Push.

**Versanddauer war widersprüchlich.** Der Startseiten-Hero versprach „1-3 Tage",
alle acht anderen Stellen und der Fußbereich „2–4 Werktage". Auf 2–4 Werktage
vereinheitlicht.

**Sternreihe über dem Schnitt** zeigte vier von fünf Sternen bei 4,78. Rundet
jetzt kaufmännisch.

**Bewertungsblöcke entzerrt** — auf Doppelpack- und Set-Seite. Dort standen zwei
Bewertungsabschnitte direkt hintereinander und trugen dieselbe 4,78 zweimal.
Beide bleiben, einer ist jeweils weiter nach unten gerückt.

**Die Startseite sieht seit dem 17.09. anders aus als hier beschrieben.** Im
Editor umgebaut: *MELYLA Scroll-Video* an Platz 1, der Hero nach hinten auf
Platz 7. **Entfernt wurden dabei *MELYLA Stimmen* und *MELYLA Bewertungen*** —
also genau die beiden Abschnitte, die ihre Zahlen rechnen. An ihrer Stelle steht
jetzt eine zweite Sektion *MELYLA Kundenstimmen*, direkt hinter der ersten.

Zwei Folgen, beide offen:

**Beides ist am 18.09. erledigt.** Robin hat im Editor eine *MELYLA Stimmen*
hinter die Produktliste gesetzt — sie stand auf der Voreinstellung `produkt =
alle` und wies damit 4,78 aus **79** Bewertungen aus, während zwei Felder weiter
oben auf derselben Seite „aus 49 Bewertungen" steht. Auf `bh` gestellt: Jetzt
sagt die Seite überall dasselbe, und die Karten zeigen nur Stimmen zum BH statt
auch zu Kissen, Maske und Schwamm.

Die beiden *MELYLA Kundenstimmen* standen direkt hintereinander. Die mit den vier
Stimmen sitzt jetzt hinter der Größenhilfe, die mit Zahlen und Unboxing-Video
bleibt vorn. Zwischen den drei Bewertungsstellen liegen jetzt jeweils mehrere
Abschnitte.

**Ersparnis-Zeile im Angebot rechnet jetzt.** Auf der Startseite stand beim
Anti-Falten Duo „Du sparst 45,60 €" — eine Zahl, die zu keiner Preiskombination
passt. Bleibt das Feld leer, rechnet der Abschnitt Ersparnis und Prozentsatz aus
Preis und Vergleichspreis des verknüpften Produkts.

**Offen vor dem Start:** Die beiden Angebotskarten *2× Schlaf BH* und
*Anti-Falten Duo* zeigen auf kein Produkt — Preis steht als Handtext drin,
„Jetzt kaufen" führt auf `/collections/all`. Die Produkte liegen als **Entwurf**
in Shopify. Sobald sie auf *aktiv* stehen: im Editor unter *Dein Angebot* bei
Produkt 2 und Produkt 3 auswählen. Dann ziehen Preis, Streichpreis, Varianten
und der Kaufen-Knopf von allein mit.

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
| **Kundenstimmen: Karussell und zweites Video** | Blockade am 21.09. aufgelöst — Ursache war ein `"default"` an einem `url`-Feld, siehe „Gelöst: der bekannte Fehler vom 23.08.". Noch nicht nachgeprüft, ob Änderungen jetzt ankommen |
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

**Karte 3 „Vorbeugung & Schutz" neu bebildert am 19.09.** Das alte Video zeigte eine deutlich
ältere Frau; der Zielgruppenschnitt liegt bei Anfang 40. Neu: Frau Anfang 40 auf einer Terrasse,
glattes gepflegtes Dekolleté, Strohhutschatten auf der Haut — **die Sonne als sichtbarer Grund
fürs Vorbeugen.** Fertige Datei `public/images/ergebnis/vorbeugung-schutz.mp4` (871 KB),
drei weitere Motive daneben als `.webp`. **Offen: hochladen unter *Inhalte → Dateien* und in
der Kachel auswählen.**


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
ein umbenanntes Template wäre eine *neue* Datei, und die galt damals als von Shopify verweigert. Diese Annahme ist am 21.09. widerlegt worden — neue Dateien kommen an, siehe „Gelöst: der bekannte Fehler vom 23.08.".
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

- ~~**Materialangabe BH**~~ — **am 18.09.2026 geklärt.** Es war tatsächlich vertauscht.
  Richtig ist **„Obermaterial: 90 % Polyamid, 10 % Elasthan"** (Robin, 18.09.). Im Theme und
  in den Einfüge-Bausteinen überall richtiggestellt. **Offen: die Shopify-Produktbeschreibung
  des BHs** — dort steht die alte Angabe noch, und sie ist das, was Kundinnen heute lesen.
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
Die Ratgeberseite existiert also — aber unter einem anderen Handle als die Verweise im
Theme, die weiter auf `/pages/falten-vermeiden` zeigen. **Die laufen ins Leere.**

**Erledigt am 21.09.** Der Seiten-Handle steht auf `falten-vermeiden`, die alte Adresse leitet
mit 301 weiter, und ein vollstaendiger Durchlauf ueber alle Live-Seiten findet keinen toten
Verweis darauf mehr.

**Wissenswert fuer das naechste Mal:** Ein `shopify://pages/<handle>`-Verweis in einer Vorlage
bricht beim Umbenennen **nicht**. Shopify schreibt die Vorlage selbst um — `templates/index.json`,
Zeile 229 kam als „Update from Shopify"-Commit mit dem neuen Handle zurueck. Ein Push war nicht
noetig. Fuer fest getippte Pfade wie `/pages/...` in einem Rich-Text-Feld gilt das **nicht**, die
bleiben stehen.

Am Rande: `bin/links-pruefen.mjs` hat den Link jahrelang nicht gemeldet, weil er in einem
Rich-Text-Feld escaped steht und das Muster ein Anfuehrungszeichen dahinter verlangte. Am
21.09. repariert — er prueft jetzt auch `shopify://`-Verweise.

## Offen — nur im Shopify-Admin

- Im Abschnitt *MELYLA Angebot* die drei Produkte auswählen — setzt Links **und** Preise
- ~~Zwei Bundle-Produkte anlegen~~ — **erledigt**, sie heißen `2-x-melyla-anti-falten-bh` und `antifalten-set-kissen-bh`
- **Vergleichspreise eintragen, sonst zeigt keine Karte eine Ersparnis:**
  - `2-x-melyla-anti-falten-bh`, alle vier Varianten: Preis 89,00 € bleibt, **Vergleichspreis 99,00 €**
  - `antifalten-set-kissen-bh`, alle vier Varianten: **Preis 89,00 €** (steht auf 99,00 €), **Vergleichspreis 99,00 €**
  - danach `node bin/preise-pruefen.mjs https://melyla.de` — er meldet heute genau diese zwölf Abweichungen
- **Store auf „New customer accounts" umstellen.** Dawn 16 hat die alten Kundenkonto-Vorlagen entfernt — ohne Umstellung brechen die Kundenkonten. *Stand 21.09.: ob das erledigt ist, weiß nur der Admin — von außen nicht prüfbar. Bitte nachsehen.*
- ~~**Vorlagen zuweisen geht noch nicht.**~~ Galt, solange das Theme nicht veröffentlicht war
  (belegt am 24.08.). **Seit der Veröffentlichung geht es** — und bei den Produktseiten ist es
  auch passiert, die tragen den vollen Funnel.
  **Offen sind die beiden Erklärseiten:** `/pages/funktionsweise` und
  `/pages/melyla-anti-falten-kissen` rendern am 21.09. nur den Abschnitt `main`, also die
  Standard-Seitenvorlage. `page.funktionsweise.json` und `page.funktionsweise-kissen.json` sind
  gebaut, aber keiner Seite zugewiesen; getragen werden die Seiten weiter von den
  HTML-Bausteinen. Nebenwirkung: beide haben dadurch **zwei H1**.
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
| **Amazon-Top-Bewertungen** | Ersetzen die erfundenen Beispielstimmen. ~~Blockiert außerdem die Sternebewertung in Google~~ — **stimmt seit 21.09. nicht mehr**, `aggregateRating` ist live und speist sich aus den 79 echten Shop-Bewertungen. Amazon-Stimmen bleiben wünschenswert, blockieren aber nichts |
| **Amazon-Verkaufsdaten** | Belegen „über 1.000 verkauft" |
| **Retourengründe je Produkt** | Wichtigster Input für die Marktplatz-Listings |
| **Aktuelle Otto-/Amazon-Listings** | Ausgangslage für die Überarbeitung |
| **Rechnungskauf im Checkout** | Der 44-%-Hebel, seit dem 13.08. offen |
| ~~**Google Search Console**~~ ✅ | **Am 22.09. mit Jochen eingerichtet.** Domain-Property, Sitemap eingereicht, sechs Kernseiten zur Indexierung angemeldet. Protokoll: [25-suchmaschinen-einrichtung.md](25-suchmaschinen-einrichtung.md) |
| ~~**Bing Webmaster Tools**~~ ✅ | **Am 22.09. mit Jochen eingerichtet**, Sitemap-Status *Erfolg* mit 35 URLs, 0 Fehler. Das Konto bestand bereits seit 05.02.2021 — „gar nicht eingerichtet“ stimmte nie |

## Rechtlich, vor dem Livegang

| Was | Wo |
|---|---|
| ~~Erfundene Beispielstimmen~~ — **am 25.08. entfernt.** Die neue Sektion *MELYLA Bewertungen* blendet sich aus, solange keine echte Bewertung eingetragen ist | erledigt |
| **„Über 5.000 verkaufte BHs"** — Stand 18.09.2026 nach Robins Angabe über alle Kanäle. Die frühere Angabe „Über 800" beruhte auf dem Teilstand 08/2026 (Otto 353, Amazon Gr. M 197, Shop ~272, ohne Amazon S/L/XL). **Offen: Beleg ablegen** — Summe aus Billbee und Seller Central mit Stichtag | offen |
| ~~„Nr. 1 Bestseller"~~ im Hero — **am 25.08. entfernt.** Eine Spitzenstellungsbehauptung, die wir nicht belegen können | erledigt |
| ~~Streichpreis Kissen~~ — **am 25.08. geklärt.** Senkung Anfang August 2026, also innerhalb der Frist. 89,50 € ist der korrekte Bezugspreis nach § 11 PAngV und wird mit Hinweis angezeigt. **Zu beobachten:** Ein Abverkauf darf nicht dauerhaft als „Ermäßigung" laufen (§ 5 UWG) | erledigt, mit Frist |
| ~~Widersprüchliche Materialangabe BH~~ — **am 18.09. geklärt**, richtig ist „Obermaterial: 90 % Polyamid, 10 % Elasthan". Im Theme erledigt; **in der Shopify-Produktbeschreibung noch nachzuziehen** | teils offen |
| OEKO-TEX® und GOTS weggelassen, bis Zertifikate vorliegen | Box-Beschreibung |
| Alle `CLAIM-CHECK`-Stellen | `09-beauty-sleep-box.md`. Die Konvention stand ursprünglich in `src/lib/funnel-bh.ts`, dort war aber keine Stelle markiert — siehe [20-next-vorstufe.md](20-next-vorstufe.md) |

## SEO und GEO — Stand

| | |
|---|---|
| `Product` mit Preis und Verfügbarkeit | **vorhanden** — Shopifys `structured_data` in Dawns Produktbereich |
| `FAQPage` | **vorhanden** — unsere FAQ-Sektion gibt sie aus |
| `Organization` | **vorhanden** — aus Dawns Header |
| **`AggregateRating`** | **seit 21.09. vorhanden.** Die Bedingung ist erfüllt: seit dem 16.09. stehen echte Einzelbewertungen mit Name, Datum, Text und Herkunftshinweis auf den Produktseiten. Ausgezeichnet werden genau die drei Seiten, die einen sichtbaren Bewertungskopf tragen — BH, Doppelpack, Kissen. Schnitt und Anzahl kommen aus denselben Variablen wie der sichtbare Kopf, es gibt weiterhin nur eine Rechnung |
| `BreadcrumbList` | **seit 21.09. vorhanden** — in `sections/header.liquid`, für alle Seitentypen außer der Startseite |
| `Review` (Einzelbewertungen) | **fehlt bewusst.** Die gezeigten Karten hängen an `min_sterne`, `anzahl` und `sortierung` aus der Vorlage — Werte, die ein Editor-Klick ändert. Die Sterne im Suchergebnis entstehen ohnehin allein aus `AggregateRating` |

## Auffindbarkeit — Prüfung vom 19./21.09.

Die Live-Seite wurde einmal vollständig durchgemessen: alle 34 Adressen aus den
vier Sitemaps abgerufen, 2.077 interne Links auf ihren Statuscode geprüft, dazu
robots.txt, Domainvarianten, strukturierte Daten, Meta-Angaben und Ladezeiten.

**Es ist beim Livegang nichts kaputtgegangen.** Alle 34 Adressen antworten mit
200, nichts steht auf `noindex`, die Canonicals stimmen, `www` und `http`
leiten weiter, die `.myshopify.com`-Adresse antwortet 404. Google hat
Startseite, Produkte, Erklärseiten, Kategorien und Blogbeiträge gelistet. Alte
URLs gibt es nicht — der Shop lief die ganze Zeit auf derselben Domain und
denselben Adressen, es braucht also auch keine 301-Liste.

| Werkzeug | Stand |
|---|---|
| Google Search Console | Verifiziert, und **seit 22.09. auch genutzt**: Domain-Property, Sitemap eingereicht, sechs Kernseiten angemeldet |
| Bing Webmaster Tools | **Eingerichtet, Sitemap auf *Erfolg*** — 35 URLs, 0 Fehler. Konto besteht seit 05.02.2021, Bing crawlt aktiv. Speist auch die Suche in ChatGPT und Copilot |
| `sitemap.xml` | Von Shopify erzeugt und automatisch aktuell. **Fünf** Teilkarten: Produkte, Seiten, Kategorien, Blog und `sitemap_agentic_discovery.xml` (verweist auf `/agents.md`) |
| `robots.txt` | Shopify-Standard, `Allow: /`, Sitemap eingetragen. Keine eigene `robots.txt.liquid` nötig |

**Am Theme erledigt, gepusht am 21.09.:** `AggregateRating`, `BreadcrumbList`,
zwei latente Fehler im FAQ-Schema, ein H1 je Seite statt zwei auf der
Startseite, `og:image` über https plus `twitter:image`, und die Lücke im
Link-Prüfer.

**Offen und nur im Admin lösbar** — zwei tote Links, die beiden nicht
zugewiesenen Seitenvorlagen, 22 fehlende Meta-Beschreibungen, zwei verwaiste
Seiten. ~~Search Console und Bing~~ **am 22.09. erledigt**, siehe
[25-suchmaschinen-einrichtung.md](25-suchmaschinen-einrichtung.md). Der Rest in
[23-livegang-checkliste.md](23-livegang-checkliste.md), die fertigen Texte in
[22-meta-texte.md](22-meta-texte.md).

**Nachtrag 22.09.2026 — vor dem Termin mit Jochen nachgemessen.** Die Sitemap
hat inzwischen **fünf** Teilkarten und **35** Adressen, eine mehr als am 19.09.;
alle antworten mit 200. Zwei Angaben oben waren überholt: Bing ist seit dem
21.09. verifiziert, und Shopify liefert jetzt `llms.txt` und `agents.md` aus.
Beide sind rein transaktional — UCP/MCP-Endpunkte und Shop-Pay-Checkout —, über
Marke, Problem oder Produkte steht dort kein Wort. Ein Theme kann diese Route
nicht überschreiben; `robots.txt.liquid` ginge, `llms.txt` nicht.

**Wie lange Google braucht:** Neue und geänderte Seiten sind bei einer
etablierten Domain meist nach wenigen Tagen bis zwei Wochen im Index, Sterne
und Brotkrumen erscheinen in der Search Console nach 3 bis 14 Tagen. Bing ist
ohne eingerichtete Webmaster Tools deutlich langsamer.

## Gelöst: der „bekannte Fehler" vom 23.08. — 21.09.2026

Einen Monat lang stand hier, Shopify verweigere still Änderungen an
`melyla-funnel-kundenstimmen.liquid` **und komplett neue Sektionsdateien**, die
Ursache sei ungeklärt, drei Erklärungsversuche hätten nicht getroffen. Daraus
war die Arbeitsweise „neue Funktionen kommen nur in bestehende Dateien"
abgeleitet.

Beides war falsch. **Die Ursache ist ein `"default"` an einem `url`-Feld im
Schema.** Shopify weist die Datei dann still ab: kein Fehler im Repo, keiner in
der CI, die Sektion fehlt im Editor unter *Abschnitt hinzufügen* — und bei einer
bestehenden Datei bleibt die letzte gültige Fassung im Shop stehen.

Die Beweiskette steht im eigenen Verlauf:

| Datum | Was passierte |
|---|---|
| 22.08. (`fc012a4`) | `melyla-funnel-kundenstimmen.liquid` bekommt einen Vorgabewert auf `video_link` |
| **23.08.** | Ab genau diesem Tag verweigert Shopify diese Datei |
| 23.08. (`c7ef369`) | `melyla-funnel-hero-video.liquid` entsteht mit zwei `url`-Vorgabewerten — und war seither in keiner Vorlage einsetzbar |
| 21.09. | Der neue `melyla-hero-start.liquid` erscheint aus demselben Grund nicht im Editor |

Im ganzen Theme waren es genau diese drei Felder plus die zwei neuen. Alle fünf
sind raus, das gemeinte Ziel steht jetzt im `info`-Text. Wo ein Rückfallziel
gebraucht wird, steht es als `default`-Filter in Liquid — dort ist derselbe Wert
unproblematisch.

**`bin/vorlagen-pruefen.mjs` kennt die Regel jetzt** und meldet jedes `url`-Feld
mit `default`. Sie steht neben der für leere Vorgabewerte: dieselbe Bauart von
Fehler, im Repo unauffällig, in der CI grün, im Shop still verworfen.

**Neue Sektionsdateien kommen sehr wohl an** — `melyla-scroll-video.liquid`
(17.09.), `melyla-hero-start.liquid` und `melyla-ankuendigung.liquid` (21.09.)
belegen es. Die Regel „neue Funktionen nur in bestehende Dateien" ist damit
hinfällig.

Damit sollte auch der Punkt **„Kundenstimmen: Karussell und zweites Video"**
wieder bearbeitbar sein, der seit dem 23.08. als blockiert geführt wurde.

## Der größte Hebel bleibt

**44 % Checkout-Abbruch.** Verdacht: fehlender Kauf auf Rechnung. Kein Layout und kein Text lösen das.

Zweiter Hebel: **Otto konvertiert mit 6,4 %** — sechsmal so gut wie der eigene Shop — bei nur
4.191 Besuchen in zwei Jahren. Sichtbarkeit dort ist billiger als Reichweite hier.

## Nicht mehr aktiv

- ~~`src/` — die Next.js-Seite~~ **am 18.09.2026 gelöscht.** Was darin stand und wo es heute lebt: [20-next-vorstufe.md](20-next-vorstufe.md). Die unveröffentlichten Blogtexte daraus: [19-blogtexte.md](19-blogtexte.md)
- `shopify-theme-live/` — Abzug des alten Custom-Themes, nur Nachschlagewerk
- `docs/melyla/archiv/` — verworfene Wege: Headless, Prompts für Shopifys Block-KI

### Bewertungen sind drin — 16.09.2026

Robin hat den Bewertungsexport des Shops gefunden. Damit sind die
Bewertungs-Sektionen nicht mehr leer: **79 echte Shop-Bewertungen** liegen jetzt
im Theme, auf Startseite, BH-Seite und Kissen-Seite.

Gebaut sind zwei Sektionen, die sich eine Datenquelle teilen — `MELYLA Bewertungen`
(groß, Produktseiten) und `MELYLA Stimmen` (kompakt, Landingpages). Der Schnitt
wird aus den Daten **gerechnet**, nicht eingetippt. Details, Einschränkungen und
der Weg für Amazon/Otto stehen in `17-bewertungen.md`.

**Drei Zahlen sind mitkorrigiert.** Der gerechnete BH-Schnitt ist **4,78 aus 49**,
nicht 4,79 aus 52 — die Differenz sind drei Bewertungen aus Inhaber-Mailadressen,
die draußen sind. Das ist an 30 Stellen in 11 Dateien nachgezogen. Die Kissen-Seite
trug die BH-Zahl 4,79 neben „23 Bewertungen"; jetzt 4,74 aus 23. Und im BH-Hero
stand „150+ Bewertungen" bei aria-Label „52 Bewertungen" — die 150+ war durch nichts
belegt und steht jetzt auf 49.

Damit ist der Protokollpunkt „Rezensionen auswerten" zur Hälfte erledigt. Amazon
bleibt offen: ein Crawl ist technisch geblockt (HTTP 503) und rechtlich nicht
sauber, der Weg läuft über Jochens Export aus Seller Central. Otto ist öffentlich
lesbar und zeigt 3,7 (BH) und 3,8 (Kissen) — die Kritik dort ist konkret und
gehört eher in die Produktverbesserung als auf die Produktseite.

### Hero: Video als Hintergrund — 17.09.2026

Das Startseiten-Hero (`melyla-funnel-hero`) kannte zwei Aufbauten: Text links mit
Medium rechts, oder Bild als Hintergrund. Dazu kommt ein dritter:
**Video als Hintergrund, Text mittig.** Die beiden alten bleiben unverändert.

Zwei getrennte Videofelder, Desktop und Mobil. Grund: ein Querformat-Video
schneidet auf dem Handy die Bildmitte weg, dort gehört ein Hochformat hin. Ist nur
eine Datei gesetzt, läuft sie auf allen Geräten.

Welche Fassung läuft, entscheidet eine CSS-Regel am 750-px-Breakpoint — **nicht**
Liquid im Style-Block. Der Kommentar in der Datei warnt ausdrücklich davor;
Steuerlogik dort drin war das, was Shopify diese Datei schon einmal verweigern
ließ. Beide Videoelemente stehen auf `preload="none"`, gestartet wird nur das
sichtbare. Auf dem Handy wird die Desktop-Datei also nie geladen.

Das Video ist Dekoration: stumm, in Schleife, `aria-hidden`, nicht fokussierbar.
Ohne JavaScript und bei „Bewegung reduzieren" bleibt das Vorschaubild stehen.

**Zu wissen:** Im Hintergrund-Aufbau blendet Zeile 85 das rechte Spaltenvideo aus —
und damit auch Badge und Bewertungskarte, die darin sitzen. Das galt schon für
„Bild als Hintergrund" und gilt jetzt genauso fürs Video. Wer die 4,78 im Hero
behalten will, bleibt beim klassischen Aufbau.
