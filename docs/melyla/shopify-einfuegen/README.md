# Funktionsweise-Seite zum Einfügen

`funktionsweise.html` ist so gebaut, dass es **direkt in das Inhaltsfeld einer Shopify-Seite**
kopiert werden kann. Es enthält bewusst **keine** `<style>`-Blöcke, `<script>`-Tags, Klassen oder
IDs — Shopify entfernt die beim Speichern. Alle Gestaltungsangaben stehen direkt am Element.

Der Umbruch auf schmalen Bildschirmen passiert über `flex-wrap`, nicht über Medienabfragen — auch
die werden im Seiteninhalt nicht zuverlässig gespeichert.

## So gehst du vor

1. **Bilder hochladen:** Inhalte → Dateien → die vier Motive hochladen. Danach je Bild auf
   *Link kopieren*.
2. **Platzhalter ersetzen** in `funktionsweise.html`:

   | Platzhalter | Motiv | Datei |
   |---|---|---|
   | `BILD-1-URL` | Frau in Seitenlage | `public/images/problem/seitenlage.webp` |
   | `BILD-2-URL` | Produktfoto Schlaf BH | `public/images/products/bh-produkt-1.jpeg` |
   | `BILD-3-URL` | Dekolleté am Morgen | `public/images/problem/morgens-glatt.webp` |
   | `BILD-4-URL` | Frau am Spiegel | `public/images/problem/spiegel.webp` |

3. **Einfügen:** Seite *Funktionsweise* öffnen → im Inhaltsfeld auf `</>` (HTML-Ansicht) →
   **den alten Inhalt vollständig löschen** → den neuen Code einfügen → speichern.

## Wichtig

- Der alte Seiteninhalt wird ersetzt, nicht ergänzt. Falls du Passagen behalten willst, sichere
  sie vorher.
- Die beiden Buttons am Ende zeigen auf `/products/anti-falten-schlaf-bh` und
  `/products/anti-falten-kissen`. Stimmen deine Produkt-Adressen nicht überein, passe sie an.
- Wenn du die HTML-Ansicht wieder auf den Texteditor umschaltest, kann Shopify die Formatierung
  durcheinanderbringen. Nach dem Einfügen also direkt speichern und nicht zurückschalten.

## Alternative

Es gibt denselben Inhalt auch als **Theme-Vorlage** (`templates/page.funktionsweise.json` plus die
`melyla-*`-Sektionen). Die ist im Theme-Editor bearbeitbar und braucht keine HTML-Bastelei — dafür
muss die Seite dort auf die Vorlage *funktionsweise* umgestellt werden. Beide Wege führen zum
gleichen Ergebnis; der HTML-Weg geht sofort, der Vorlagen-Weg ist auf Dauer pflegeleichter.
