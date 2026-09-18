# MELYLA

Dokumentation, Textbausteine und Bildmaterial für den Shop **melyla.de** —
Anti-Falten Schlaf BH, Anti-Falten Kissen und Zubehör.

Der Shop läuft auf Shopify. Das Theme liegt in einem **eigenen Repository**
(`Robinthehouse/melyla-shopify-theme`) und ist über GitHub mit Shopify
verbunden; lokal liegt es als Unterordner `shopify-theme/`.

## Inhalt

| Ordner | Was drin ist |
|---|---|
| [`docs/melyla/`](docs/melyla/) | Die Dokumentation. Einstieg: [`STAND.md`](docs/melyla/STAND.md) |
| [`docs/melyla/shopify-einfuegen/`](docs/melyla/shopify-einfuegen/) | Fertige HTML-Bausteine für Shopify-Seiten und Produktbeschreibungen, mit Bildern |
| `public/` | Bildmaterial; die lokale Theme-Vorschau serviert daraus |
| `exports/` | Bilder für Amazon und Otto (nicht in git) |
| `shopify-theme/` | Das aktive Theme (eigenes Repository) |
| `shopify-theme-live/` | Abzug des alten Themes von 2021, nur zum Nachschlagen |

## Womit man anfängt

- **Was ist der Stand?** → [`docs/melyla/STAND.md`](docs/melyla/STAND.md)
- **Wie kommen Bewertungen in den Shop?** → [`docs/melyla/17-bewertungen.md`](docs/melyla/17-bewertungen.md)
- **Wie setze ich einen HTML-Baustein ein?** → [`docs/melyla/shopify-einfuegen/README.md`](docs/melyla/shopify-einfuegen/README.md)

## Prüfer

Drei kleine Node-Skripte im Theme, ohne Abhängigkeiten:

```bash
cd shopify-theme
node bin/vorlagen-pruefen.mjs                    # zeigt jede Vorlage auf existierende Sektionen?
node bin/zahlen-pruefen.mjs                      # stimmen die getippten Bewertungszahlen?
node bin/links-pruefen.mjs https://melyla.de     # führt jeder interne Link irgendwohin?
```

Die ersten beiden laufen auch in der CI des Theme-Repositories.

## Lokale Vorschau des Themes

```bash
cd shopify-theme/preview && npm start      # http://localhost:4010
```
