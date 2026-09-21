# MELYLA — Arbeitsanweisungen

Dieses Repository ist **keine Anwendung**. Es enthält die Dokumentation, die
Einfüge-Bausteine und das Bildmaterial für den Shopify-Shop von MELYLA
(`melyla.de`). Bis zum 18.09.2026 lag hier zusätzlich eine Next.js-Vorstufe;
sie ist gelöscht, siehe `docs/melyla/20-next-vorstufe.md`.

## Wo was liegt

| | |
|---|---|
| `docs/melyla/` | Die gesamte Dokumentation. **`STAND.md` ist die Statusseite** — was fertig ist, was offen ist, wo es hakt |
| `docs/melyla/shopify-einfuegen/` | HTML-Bausteine zum Einsetzen in Shopify-Seiten und Produktbeschreibungen, plus die zugehörigen Bilder |
| `shopify-theme/` | **Eigenes git-Repository** (`Robinthehouse/melyla-shopify-theme`), hier per `.gitignore` ausgeschlossen. Das ist das aktive Theme |
| `shopify-theme-live/` | Abzug des alten Themes von 2021, nur zum Nachschlagen |
| `public/` | Bildmaterial. Die lokale Theme-Vorschau serviert daraus, siehe `shopify-theme/preview/serve.mjs` |
| `exports/` | Marktplatz-Bilder, nicht in git |

## Das Theme

Dawn-Basis mit eigenen MELYLA-Sektionen. Verbunden über GitHub: **ein Push auf
`main` landet im Theme in Shopify.**

**Vor jedem Commit im Theme-Repo `git fetch`.** Jede Bearbeitung im
Shopify-Editor erzeugt einen eigenen Commit („Update from Shopify for theme …") —
an einem Tag waren es 29. Wer ohne Abgleich committet, arbeitet gegen eine
veraltete Fassung.

**Der Editor schreibt immer die ganze Vorlage zurück**, nicht nur das geänderte
Feld. Alte Werte in Feldern, die niemand angefasst hat, kommen dadurch zurück.
Genau so sind die Bewertungszahlen dreimal zurückgefallen.

### Prüfer — laufen mit blankem Node, ohne jedes Paket

```bash
cd shopify-theme
node bin/vorlagen-pruefen.mjs                         # Sektionen und Schemata
node bin/skripte-pruefen.mjs                          # JS-Bezeichner aus Abschnitts-IDs
node bin/zahlen-pruefen.mjs                           # getippte Zahlen gegen die Bewertungsdaten
node bin/zahlen-pruefen.mjs       https://melyla.de   # dasselbe zusätzlich am Live-HTML
node bin/links-pruefen.mjs        https://melyla.de   # interne Links
node bin/preise-pruefen.mjs       https://melyla.de   # Angebotsstaffel
node bin/auszeichnung-pruefen.mjs https://melyla.de   # Sterne gegen den sichtbaren Text
```

Die Prüfer ohne Adresse laufen in der CI bei jedem Push. **`zahlen-pruefen.mjs`
ist Pflicht, sobald irgendwo eine Bewertungszahl steht:** Schnitt und Anzahl
werden aus `snippets/melyla-bewertungen-daten.liquid` gerechnet, und der Prüfer
meldet jede getippte Zahl, die nicht dazu passt. Theme Check sieht davon nichts.

**Mit Adresse prüft er zusätzlich das ausgelieferte HTML** — und das ist nicht
dasselbe. Die Zahlen stehen nicht nur im Theme, sondern auch in HTML-Bausteinen,
die im Shopify-Admin in Inhaltsfelder eingesetzt werden. Am 21.09.2026 standen
auf zwei Seiten „52+ Bewertungen" und „4,79 Sterne" — Zahlen, die in keiner
Theme-Datei vorkamen, weil dort ein alter Einsetz-Stand klebte. Wer einen
Baustein in `docs/melyla/shopify-einfuegen/` ändert, muss ihn im Admin **neu
einsetzen**; die Datei zu ändern reicht nicht.

`auszeichnung-pruefen.mjs` vergleicht das `aggregateRating` im JSON-LD mit der
sichtbaren Kopfzahl. Google zeigt Sterne nur für Werte, die auf derselben Seite
stehen — das ist die Prüfung, die diese Regel am HTML misst statt am Quelltext.

Lokale Vorschau: `cd shopify-theme/preview && npm start` (Port 4010).

## Schreibweise

- Dokumentation und sichtbare Texte auf **Deutsch**.
- Kommentare in `.liquid`-Dateien **ohne Umlaute** (`ue`, `ae`, `oe`, `ss`) —
  so sind sie durchgehend geschrieben.
- Zahlen im Shop müssen belegbar sein. Bewertungen, Verkaufszahlen und
  Wirkaussagen sind nach UWG angreifbar; was nicht belegt ist, kommt nicht auf
  die Seite. Die offenen Punkte stehen in `STAND.md` unter „Rechtlich, vor dem
  Livegang".
