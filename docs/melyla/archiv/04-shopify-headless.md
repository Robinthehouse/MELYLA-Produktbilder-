# Technikpapier — Warum das ZIP scheiterte und wie es richtig geht

Zwei Zielgruppen: Abschnitt 1–3 sind fürs Gespräch mit Jochen (ohne Fachjargon), Abschnitt 4–7 sind
die Umsetzungsanleitung für Robin.

---

## 1. Warum der Theme-Upload gescheitert ist

Das war **kein Bedienfehler.** Die Datei `melyla-shopify-theme.zip` kann von Shopify gar nicht
angenommen werden — aus zwei unabhängigen Gründen:

**Grund 1: Falsche Ordnerstruktur.**
Im ZIP liegt alles in einem Unterordner `melyla-shopify/`. Shopify erwartet die Ordner `layout/`,
`templates/`, `sections/`, `assets/`, `config/`, `locales/`, `snippets/` **direkt** im Wurzelverzeichnis
des Archivs. Ein macOS-ZIP schleppt außerdem oft einen versteckten `__MACOSX`-Ordner mit, den Shopify
ebenfalls bemängelt.

**Grund 2 (der schwerwiegendere): Pflichtdateien fehlen.**
Shopify prüft beim Upload, ob ein Theme vollständig ist. Vorhanden sind 32 Dateien — es fehlen unter anderem:

| Fehlende Datei | Wofür |
|---|---|
| `templates/404.json` | Fehlerseite |
| `templates/search.json` | Suchergebnisse |
| `templates/blog.json`, `templates/article.json` | Blog |
| `templates/list-collections.json` | Kategorieübersicht |
| `templates/customers/*.json` | Kundenkonto, Login, Bestellungen |
| `layout/password.liquid` | Passwortschutz-Seite |
| `templates/gift_card.liquid` | Geschenkkarten |

**Die eigentliche Erkenntnis:** Ein Shopify-Theme ist nicht „eine Website in einem ZIP". Es ist ein
vollständiges System mit Dutzenden Pflichtseiten, die alle in Shopifys Template-Sprache (Liquid) neu
gebaut werden müssten. Die vorhandene Next.js-Website nachzubauen hieße: **alles ein zweites Mal bauen** —
und danach zwei Fassungen derselben Website pflegen, die auseinanderdriften.

Deshalb ist der Vorschlag nicht, das ZIP zu reparieren.

---

## 2. Der bessere Weg, in einem Satz

> **Die schöne Website wird das Schaufenster, Shopify bleibt die Kasse.**

Die Website läuft weiter als Next.js unter `melyla.de` und fragt bei Shopify live nach: Welche Produkte
gibt es, was kosten sie, ist etwas auf Lager, was liegt im Warenkorb. Beim Klick auf „Kaufen" geht es in
den **normalen Shopify-Checkout** — genau denselben wie heute.

Fachbegriff dafür: *Headless Commerce*. Große Marken machen es seit Jahren so, Shopify unterstützt es
offiziell und stellt die Schnittstelle dafür bereit (Storefront API).

---

## 3. Jochens Sorge — die Antwort zum Vorlesen

> „Aber funktionieren dann die Payment-Verbindungen noch richtig?"

**Wir schreiben keine einzige Zeile Zahlungslogik.** Zahlungen laufen weiterhin vollständig über Shopify:
Shop Pay, PayPal, Klarna, Kreditkarte, Betrugsprüfung, Steuerberechnung, Rechnungen, Gutscheincodes,
Bestellbestätigungen. Unsere Website darf gar nicht an Zahlungsdaten heran und bekommt sie nie zu sehen —
die Kundin landet zum Bezahlen auf Shopifys eigener Seite.

Was das praktisch bedeutet:

| Sorge | Realität |
|---|---|
| „Zahlungen könnten kaputtgehen" | Unmöglich — wir ändern nichts daran. Der Checkout ist Byte für Byte derselbe |
| „Bestellungen kommen nicht an" | Bestellungen entstehen in Shopify wie bisher, im gewohnten Backend |
| „Kreditkartendaten auf unserer Seite" | Nein. PCI-Verantwortung bleibt vollständig bei Shopify |
| „Wenn die Website ausfällt, ist der Shop weg" | Nein. Der Shopify-Shop bleibt live unter `shop.melyla.de`. DNS zurückdrehen = alter Zustand in ~10 Minuten |
| „Otto und Amazon" | Völlig unberührt, laufen separat weiter |
| „Wir verlieren die KI-Sichtbarkeit bei ChatGPT" | Nein — die hängt am Shopify-Produktkatalog, nicht am Theme |

**Der Rückweg ist jederzeit offen.** Das ist das stärkste Argument: Wir riskieren nichts, was sich nicht
in Minuten rückgängig machen ließe.

---

## 4. Architektur (für Robin)

```
Kundin
  │
  ├─► melyla.de ............ Next.js auf Vercel (unser Frontend)
  │      │
  │      └─► Storefront API (GraphQL) ──► Shopify: Produkte, Preise, Bestand, Warenkorb
  │
  └─► Klick "Kaufen"
         │
         └─► cart.checkoutUrl ──► Shopify-Checkout (gehostet) ──► Bestellung im Shopify-Backend
```

**Arbeitsteilung der Datenquellen:**

| Was | Wo gepflegt | Warum |
|---|---|---|
| Marketingtexte, Vorteile, Bildauswahl, Reihenfolge | Lokal in [src/lib/products.ts](../../src/lib/products.ts) | Volle gestalterische Kontrolle, versionierbar |
| **Preis, Verfügbarkeit, Varianten-ID** | **Shopify** | Eine einzige Wahrheit — beendet die aktuelle Divergenz (Kissen: 89,50 € auf der Website vs. 49,50 € im Shop) |

Verknüpft wird über den Shopify-`handle`, der dem bestehenden `slug` entspricht.

---

## 5. Umsetzungsschritte

### Schritt 1 — Zugang einrichten (15 Min., Shopify-Admin)

Einstellungen → Apps → App entwickeln → neue App „MELYLA Website". Storefront-API-Berechtigungen:

- `unauthenticated_read_product_listings`
- `unauthenticated_read_product_inventory`
- `unauthenticated_write_checkouts` / `unauthenticated_read_checkouts`

Token als `SHOPIFY_STOREFRONT_TOKEN` und Domain als `SHOPIFY_STORE_DOMAIN` in `.env.local` **und** bei
Vercel hinterlegen. Der Storefront-Token ist für den Browser gedacht und darf öffentlich sein — der
Admin-API-Token wäre es nicht, den brauchen wir hier gar nicht.

> ⚠️ `.env.local` gehört in `.gitignore` (ist bereits vorhanden — vor dem ersten Commit prüfen).

### Schritt 2 — `src/lib/shopify.ts` anlegen

Schlanker `fetch`-Wrapper auf `https://{domain}/api/{version}/graphql.json`. Kein SDK nötig — spart
eine Abhängigkeit. Vor dem Bau die aktuelle stabile API-Version in der Shopify-Doku nachsehen
(nicht raten, Shopify verwirft Versionen nach 12 Monaten).

Funktionen: `getProducts()`, `getProductByHandle(handle)`, `createCart()`, `addToCart()`,
`updateCartLine()`, `getCart()`.

### Schritt 3 — Produktdaten zusammenführen

[src/lib/products.ts](../../src/lib/products.ts) behält die redaktionellen Inhalte, bekommt aber
Preis/Bestand/Varianten-IDs zur Laufzeit aus Shopify dazu. Wichtig: Wenn Shopify nicht antwortet, muss
die Seite trotzdem rendern (lokale Daten als Rückfallebene, Kauf-Button dann deaktiviert) — eine
Produktseite, die wegen einer API-Störung weiß bleibt, kostet mehr als ein grauer Button.

Cache: `revalidate` ~60 Sekunden für Preise, Bestand beim Klick live prüfen.

### Schritt 4 — Echten Warenkorb bauen

[AddToCartButton.tsx](../../src/components/product/AddToCartButton.tsx) ist heute eine Attrappe
(Zeile 20–25: 800 ms warten, dann „Im Warenkorb!" melden — es passiert nichts). Ersetzen durch:

- Cart-Context (React) mit Cart-ID im Cookie
- `cartLinesAdd`-Mutation bei Klick
- Warenkorb-Drawer mit Menge ändern und entfernen
- Zähler im [Navbar](../../src/components/layout/Navbar.tsx)
- „Zur Kasse" → `window.location.href = cart.checkoutUrl`

Der Größenwähler beim BH muss die echte Shopify-Varianten-ID mitgeben, nicht nur den Anzeigetext.

### Schritt 5 — Live gehen

1. Deploy auf Vercel, testen unter der Vorschau-URL
2. **Testbestellung mit echter Karte** durchführen und stornieren — Jochen soll dabei zusehen. Das ist
   die überzeugendste Antwort auf seine Sorge, die es gibt
3. `melyla.de` per DNS auf Vercel zeigen lassen
4. Shopify-Shop unter `shop.melyla.de` als Fallback live lassen
5. Weiterleitungen der alten Shop-URLs (`/products/...` → `/produkte/...`) setzen, damit die vorhandene
   Suchmaschinen-Sichtbarkeit nicht verloren geht
6. Rechtstexte prüfen: Impressum, AGB, Widerruf und Datenschutz liegen bereits unter
   [src/app/(legal)/](../../src/app/(legal)/) — Inhalte gegen die Shopify-Seiten abgleichen, damit es
   keine zwei abweichenden Fassungen gibt

### Schritt 6 — Nacharbeiten

- Bewertungen: heute „(0 Bewertungen)" auf der Kissen-Seite. Über die Bewertungs-App per API einbinden
  oder ersetzen
- Analytics: Shopify-Tracking greift auf der eigenen Website nicht mehr automatisch — sauberes
  Consent-Banner plus Ereignis-Tracking neu aufsetzen
- Newsletter-Anmeldung anbinden

---

## 6. Risiken, ehrlich benannt

| Risiko | Wie schlimm | Gegenmittel |
|---|---|---|
| Shopify-Apps mit Storefront-Widgets (Bewertungen, Upsell-Popups) funktionieren nicht mehr | **Mittel** | Vor dem Umbau Liste aller installierten Apps durchgehen und je Fall entscheiden |
| Rechtstexte doppelt gepflegt und driften auseinander | Mittel | Eine Fassung als führend festlegen |
| API-Version veraltet nach 12 Monaten | Gering | Kalendereintrag zur jährlichen Aktualisierung |
| Robin ist Single Point of Failure | **Hoch** | Zugänge dokumentieren, Jochen bekommt alle Logins in einem Passwortmanager |

Das letzte Risiko ist das ernsteste und hat nichts mit Technik zu tun. Es gehört in Block 7 des Interviews.

---

## 7. Aufwand

| Schritt | Zeit |
|---|---|
| Zugang + `shopify.ts` | 2–3 Std. |
| Produktdaten zusammenführen | 2–3 Std. |
| Warenkorb + Drawer | 4–6 Std. |
| Deploy, DNS, Weiterleitungen, Tests | 3–4 Std. |
| Nacharbeiten (Bewertungen, Analytics) | 4–6 Std. |
| **Summe** | **~2–3 Arbeitstage** |

Laufende Kosten: Vercel im Hobby-Tarif kostenlos, bei Bedarf 20 $/Monat. Shopify-Abo läuft unverändert
weiter — es wird weiterhin als Backend, Lagerverwaltung und Kasse gebraucht.
