# Search Console und Bing einrichten — Protokoll

Stand 22.09.2026. Gemeinsamer Termin Robin und Jochen. Vorgeschichte:
[23-livegang-checkliste.md](23-livegang-checkliste.md), Abschnitte 4 und 5 —
beide standen seit dem 21.09. auf ⏸, weil die Konten bei Jochen liegen und ein
halb eingerichtetes Konto schlechter ist als gar keines.

## Ausgangslage, vor dem Termin live nachgemessen

| | |
|---|---|
| Adressen in der Sitemap | **35**, alle antworten mit 200 — kein toter Link, keine Weiterleitung, kein `noindex` |
| Verteilung | 10 Produkte + Startseite · 7 Seiten · 3 Kategorien · Blog-Übersicht + 13 Beiträge |
| Teilkarten | **fünf**: Produkte, Seiten, Kategorien, Blog, `sitemap_agentic_discovery.xml` |
| `google-site-verification` | liegt im `<head>`, von Shopify über `content_for_header` eingespritzt — **nicht** im Theme, im Repo danach zu suchen ist vergeblich |
| `msvalidate.01` | liegt im `<head>`, `layout/theme.liquid` Zeile 4, seit Commit `abbc637` vom 21.09. |
| `robots.txt` | Shopify-Standard, `Allow: /`, `Sitemap: https://melyla.de/sitemap.xml` am Ende |

Damit war vor dem Termin nichts vorzubereiten: die Sitemap war einreichbereit,
und beide Verifizierungen standen bereits.

## Was eingerichtet wurde

### Google Search Console

- Art der Property: **Domain-Property** (`melyla.de`). Deckt `www`, `http` und
  Subdomains mit ab — die bessere der beiden Varianten, da war nichts zu ändern.
- Sitemap-Liste vorher: **leer**, es war noch nie eine eingereicht.
- Sitemap eingereicht: **ja, am 22.09.** als `https://melyla.de/sitemap.xml`.
  Status direkt danach: *Konnte nicht abgerufen werden* — der erwartbare erste
  Zustand. **Nicht erneut einreichen**, jedes Senden setzt den Zähler zurück.
  → Nachschau am 23.09., siehe unten.
- „Nicht indexiert" — die genannten Gründe: **am 22.09. nicht auswertbar.** Unter
  *Seitenindexierung* stand „Die Daten werden verarbeitet – bitte versuch es in
  einem Tag noch einmal", die Tabelle *Warum Seiten nicht indexiert werden* war
  leer. Das ist der Anlaufzustand einer frisch angelegten Property und kein
  Fehler; dieselbe Ursache erklärt den Sitemap-Status oben. → Nachschau 23.09.
- Indexierung beantragt für: **alle sechs Kernseiten am 22.09.** eingereicht.

> **Stolperstein, der uns Zeit gekostet hat.** Bei einer **Domain**-Property ist
> dem Eingabefeld **kein Präfix vorangestellt**. Dort muss die vollständige
> Adresse rein:
>
> ```
> https://melyla.de/sitemap.xml
> ```
>
> Die verbreitete Anleitung „nur `sitemap.xml` eintragen, ohne Domain davor"
> gilt ausschließlich für eine **URL-Präfix**-Property, wo das Präfix schon
> grau im Feld steht. Bei MELYLA ist es eine Domain-Property.
>
> Dass es nicht am Shop lag, wurde am 22.09. gegengeprüft: Abruf als Googlebot
> liefert 200 und `application/xml`, ohne jede Weiterleitung; `www.` und
> `http://` leiten per 301 auf genau diese Adresse.

### Bing Webmaster Tools

- Weg: **von Hand**, nicht über den Import aus der Search Console.
- Verifizierung: **am 22.09. durchgegangen.** Der `content`-Wert, den Bing
  anzeigte, war identisch mit dem im Shop (`B6D1E89C7757115FD42108A560E5458D`,
  `layout/theme.liquid` Zeile 4) — das am 21.09. eingebaute Tag stammt also aus
  genau diesem Microsoft-Konto. Es war nichts zu ändern und nichts zu pushen.
- Sitemap eingereicht: **ja — Status *Erfolg*, 35 entdeckte URLs, 0 Fehler,
  0 Warnungen.** Das ist die Gegenprobe zur eigenen Messung vom selben Tag und
  stimmt auf die Adresse genau.
- URL-Einreichung für die Kernseiten: **nicht gemacht** — der Menüpunkt
  *URL-Übermittlung* war in der Oberfläche nicht auffindbar (Bing hat ihn
  verschoben, er steckt je nach Version unter *Indexverwaltung* oder als Knopf
  auf der Startseite). **Bewusst gelassen, kein Verlust:** Bing hat alle 35
  Adressen über die Sitemap fehlerfrei erfasst und crawlt die Seite ohnehin
  aktiv. Die Übermittlung hätte nur wenige Tage gespart. Optionaler Nachzügler.

> **Bing war nie „gar nicht eingerichtet".** In den Sitemap-Details steht
> *Letztes Senden 05.02.2021* und *Letzter Crawl 20.09.2026*: Die Site liegt
> seit über fünf Jahren in diesem Konto, und Bing crawlt sie aktiv. Die
> Checkliste und STAND.md behaupteten beides — kein `msvalidate.01` und keine
> Einrichtung —, und beides stimmte nicht. Es hat nur nie jemand hineingesehen.
> Für ChatGPT und Copilot, die ihre Websuche über Bing beziehen, heißt das:
> die Grundlage stand die ganze Zeit.

> **Abweichung von der Checkliste, begründet.**
> [23-livegang-checkliste.md](23-livegang-checkliste.md) empfahl den Import aus
> der Search Console als „kürzesten Weg". Das war am 21.09. richtig, ist es am
> 22.09. nicht mehr: Damals stand das `msvalidate.01`-Tag noch nicht im Shop,
> der Import hätte die Verifizierung mitgebracht. Inzwischen steht das Tag drin,
> und die GSC-Property ist frisch und liefert noch keine Daten — ein Import
> würde aus einer Quelle ziehen, die selbst erst anläuft. Der direkte Weg über
> das Meta-Tag ist unabhängig davon und sofort wirksam.

Die sechs Kernseiten, für die die Indexierung beantragt wird:

```
/
/products/melyla-anti-falten-schlaf-bh
/products/anti-falten-kissen
/pages/funktionsweise
/pages/melyla-anti-falten-kissen
/pages/falten-vermeiden
```

**Die URL-Prüfung ist kein Bericht**, sondern eine Live-Abfrage — sie
funktioniert auch bei einer Property ohne Berichtsdaten. Deshalb war dieser
Schritt trotz des Anlaufzustands am 22.09. durchführbar. Auch hier gilt die
Domain-Property-Regel: **vollständige Adresse**, nicht nur der Pfad.

Fünf davon haben ihren Meta-Text bereits, siehe
[22-meta-texte.md](22-meta-texte.md). Offen ist nur `/pages/falten-vermeiden` —
entweder vorher eintragen oder diese eine Seite später nachmelden.

## Warum IndexNow nicht geht

IndexNow bräuchte eine Schlüsseldatei im Wurzelverzeichnis der Domain,
`melyla.de/<key>.txt`. Shopify lässt dort keine eigenen Dateien zu — ein Theme
kann `robots.txt.liquid` überschreiben, aber keine freie Route im Wurzelpfad
anlegen. Die manuelle URL-Einreichung in den Bing Webmaster Tools ersetzt das
vollständig. **Hier ist nichts vergessen worden**, es geht schlicht nicht.

## GEO — was an dieser Stelle zu holen ist und was nicht

**Bing einzurichten ist die GEO-Maßnahme.** ChatGPT und Copilot ziehen ihre
Websuche über Bing. Abschnitt 5 der Checkliste ist deshalb kein SEO-Nebengleis,
sondern der eine Hebel, den man tatsächlich anschalten kann.

**`llms.txt` ist nicht anpassbar.** Shopify liefert sie seit Kurzem selbst aus,
inhaltsgleich mit `/agents.md`. Sie ist rein transaktional — UCP-Discovery,
MCP-Endpunkt, Shop-Pay-Checkout, Hinweise zur Kaufabwicklung durch Agenten.
Über die Marke, das Problem oder die Produkte steht dort kein Wort, und
überschreiben lässt sie sich nicht. Festgestellt, notiert, weiter.

**Was stattdessen greift, läuft schon:** die Ratgeberseite mit ihren
Kurzantwort-Blöcken ([14-ratgeberseite-falten.md](14-ratgeberseite-falten.md)),
das FAQ-Schema, `AggregateRating` und `BreadcrumbList` seit dem 21.09.

**Der offene GEO-Punkt** ist der Shopify-Katalog für Agentic Storefronts. Laut
[03-entscheidungsvorlagen.md](03-entscheidungsvorlagen.md) stehen dort kaputte
Maschinen-Übersetzungen („satinzucht bh schlaff für fettlose fettleibigkeit").
Das ist ein eigener Arbeitsblock, nicht Teil dieses Termins.

## In 3 bis 14 Tagen nachsehen

| Wo | Worauf |
|---|---|
| Search Console → Sitemaps | **Zuerst:** ist *Konnte nicht abgerufen werden* auf *Erfolgreich* umgesprungen? Danach: „Erkannte URLs" bei 35? |
| Search Console → Seiten | wächst „Indexiert"? Welche Adressen bleiben außen vor? |
| Search Console → Verbesserungen → Produkt-Snippets | erscheinen die Sterne aus `AggregateRating`? |
| Search Console → Verbesserungen → Breadcrumbs | nimmt Google die Brotkrumen an? |
| Bing → Websiteexplorer | sind die 35 Adressen bekannt? |

Der Sitemap-Durchlauf lässt sich jederzeit wiederholen:

```bash
for s in sitemap_products_1 sitemap_pages_1 sitemap_collections_1 sitemap_blogs_1; do
  curl -s "https://melyla.de/$s.xml"; done \
  | grep -oE '<loc>[^<]*</loc>' | sed -E 's#</?loc>##g' | sort -u \
  | while read -r u; do echo "$(curl -s -o /dev/null -w '%{http_code}' "$u")  $u"; done
```

## Fazit des Termins

**Beide Suchmaschinen kennen jetzt alle 35 Adressen.** Bing bestätigt das
bereits schwarz auf weiß — Status *Erfolg*, 35 URLs, 0 Fehler, 0 Warnungen.
Google läuft noch an; dort steht das Ergebnis am 23.09. fest.

Der eigentliche Ertrag war ein anderer: **drei Annahmen der Dokumentation
haben nicht gestimmt.** Das `msvalidate.01`-Tag war längst im Shop, Shopify
liefert inzwischen `llms.txt` und `agents.md` aus, und das Bing-Konto besteht
seit 2021 statt gar nicht. Wer den Termin nach der alten Checkliste gefahren
hätte, hätte Zeit in drei Dinge gesteckt, die erledigt waren. Alle drei Stellen
sind in [STAND.md](STAND.md) und
[23-livegang-checkliste.md](23-livegang-checkliste.md) richtiggestellt.

**Was jetzt den Ausschlag gibt, ist nicht mehr die Technik.** Die Sitemap ist
fehlerfrei, die Auszeichnungen stehen, beide Konten laufen. Der nächste Hebel
sind die **28 offenen Meta-Texte** aus [22-meta-texte.md](22-meta-texte.md) —
sie entscheiden, ob Google die Seiten aus *Gecrawlt, zurzeit nicht indexiert*
herausholt — und der **Shopify-Katalog für Agentic Storefronts** mit seinen
kaputten Maschinen-Übersetzungen.
