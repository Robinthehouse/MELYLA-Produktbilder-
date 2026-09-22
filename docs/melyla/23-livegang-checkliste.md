# Auffindbarkeit nach dem Livegang — was noch im Admin zu tun ist

Stand 21.09.2026. Alles hier liegt **im Shopify-Admin oder bei Google und Bing**
und ist per Push nicht loesbar. Was im Theme zu tun war, ist erledigt — siehe
unten „Was schon durch ist".

## Das Ergebnis der Pruefung in einem Satz

Der Shop ist technisch gesund: alle 34 Adressen aus den Sitemaps antworten mit
200, nichts ist auf `noindex`, die Canonicals stimmen, `www` und `http` leiten
sauber weiter, die `.myshopify.com`-Adresse ist tot, und Google hat Startseite,
Produkte, Erklaerseiten, Kategorien und Blogbeitraege gelistet. **Es ist beim
Livegang nichts kaputtgegangen** — der Shop laeuft seit Jahren auf derselben
Domain und denselben Adressen, deshalb gibt es auch keine alten URLs, die
weitergeleitet werden muessten.

---

## 1. Dringend — zwei Links laufen live ins Leere

### 1.1 Die Ratgeberseite umbenennen

Zwei Produktseiten verweisen auf `/pages/falten-vermeiden`. Die Seite gibt es
nicht; die Ratgeberseite liegt unter
`/pages/wie-falten-entstehen-und-was-wirklich-dagegen-hilft`.

**Admin → Onlineshop → Seiten → „Wie Falten entstehen — und was wirklich dagegen
hilft" → Suchmaschineneintrag bearbeiten → URL und Handle** auf
`falten-vermeiden` aendern. Das Haekchen „Weiterleitung erstellen" stehen
lassen.

Die Seite ist am 18.09. entstanden und bei Google noch **nicht** im Index —
geprueft am 19.09. Es geht also keine Platzierung verloren.

> **Erledigt am 21.09.** Die Seite liegt unter `/pages/falten-vermeiden`, die
> alte Adresse leitet mit 301 dorthin weiter, und alle Verweise aus den
> Produktseiten stimmen.
>
> **Gelernt dabei:** Ein `shopify://pages/<handle>`-Verweis in einer Vorlage
> bricht beim Umbenennen **nicht**. Shopify schreibt die Vorlage selbst um —
> `templates/index.json`, Zeile 229 kam als „Update from Shopify"-Commit
> zurueck, mit dem neuen Handle drin. Es war also kein Push noetig. Die
> Befuerchtung stand vorher an dieser Stelle und war falsch. Die
> Zeile liegt bereit, sie wird direkt nach dem Umbenennen gepusht.

### 1.2 Toter Produktlink auf der Funktionsweise-Seite

Auf `/pages/funktionsweise` steht im Beschreibungsfeld ein Link auf
`/products/anti-falten-schlaf-bh`. Diese Adresse gibt es nicht — das Produkt
liegt unter `/products/melyla-anti-falten-schlaf-bh`.

**Admin → Seiten → Funktionsweise → im Inhaltsfeld** die Adresse korrigieren.
Der Link steht in einem eingesetzten HTML-Baustein, nicht im Theme.

---

## 2. Wichtig — die Funnel-Vorlagen sind gebaut, aber nicht zugewiesen

Beim Durchgehen am 21.09. aufgefallen: `/pages/funktionsweise` und
`/pages/melyla-anti-falten-kissen` rendern **nur den Abschnitt `main`**, also
die Standard-Seitenvorlage. Die dafuer gebauten Vorlagen
`page.funktionsweise.json` und `page.funktionsweise-kissen.json` mit Hero,
Funktionsweise-Sektion, FAQ und Garantie-Block sind im Theme vorhanden, aber
keiner Seite zugeordnet. Getragen werden die Seiten heute von eingesetzten
HTML-Bausteinen.

Das ist der Rest von `STAND.md`, Zeilen 776–780: Vorlagen liessen sich nicht
zuweisen, solange das Theme nicht veroeffentlicht war. **Das Theme ist jetzt
veroeffentlicht, also geht es.**

**Admin → Seiten → die Seite oeffnen → rechts unter „Onlineshop" → Theme-Vorlage**
auf `funktionsweise` beziehungsweise `funktionsweise-kissen` stellen.

Nebenwirkung, die das gleich mitloest: Beide Seiten tragen heute **zwei H1** —
eines aus der Standardvorlage mit dem Seitentitel, eines aus dem eingesetzten
Baustein. Auf `/pages/wie-falten-entstehen-und-was-wirklich-dagegen-hilft` steht
derselbe Satz dadurch sogar zweimal als H1 untereinander.

Bei den Produktseiten ist die Zuweisung uebrigens erfolgt — die tragen den
vollen Funnel.

---

## 3. Meta-Titel und -Beschreibungen eintragen

22 von 34 Seiten haben keine eigene Beschreibung, Google schneidet dort mitten
im Satz ab. Die fertigen Texte fuer alle 34 Adressen stehen in
[22-meta-texte.md](22-meta-texte.md), zum Kopieren.

**Admin → jeweilige Seite/Produkt/Kategorie/Beitrag → ganz unten
„Suchmaschineneintrag bearbeiten".**

### Stand 21.09.2026: 6 von 34 sind drin

Eingetragen und live nachgemessen: **Startseite · Schlaf BH · Anti-Falten Kissen ·
Funktionsweise · Kissen-Erklaerseite · Blog-Uebersicht.** Das sind die sechs mit
dem groessten Hebel.

Alle Titel liegen zwischen 45 und 58 Zeichen und werden vollstaendig angezeigt.
Bei den Beschreibungen ebenso — mit **einer bewussten Ausnahme**: Auf der
Startseite steht die laengere Fassung mit „Versandkostenfrei aus Deutschland"
(176 Zeichen). Google kappt davon die letzten rund 21 Zeichen. Robins
Entscheidung, kein Versehen — wer das spaeter im Suchergebnis sieht, muss es
nicht „reparieren".

**Die uebrigen 28 sind Fleissarbeit** und stehen fertig unten in
[22-meta-texte.md](22-meta-texte.md). Nicht doppelt eintragen.

---

## 4. Google Search Console ✅

> **✅ AM 22.09.2026 MIT JOCHEN EINGERICHTET.** Domain-Property bestaetigt,
> `https://melyla.de/sitemap.xml` eingereicht, Indexierung fuer die sechs
> Kernseiten beantragt. Die Berichte liefen an diesem Tag noch an. Protokoll
> mit allen Befunden: [25-suchmaschinen-einrichtung.md](25-suchmaschinen-einrichtung.md).

Die Verifizierung steht bereits — im `<head>` liegt ein gueltiges
`google-site-verification`-Tag. Es fehlt die Nutzung.

1. **Sitemaps** → pruefen, ob `sitemap.xml` eingereicht ist. Falls nicht,
   `sitemap.xml` eintragen. Shopify erzeugt und aktualisiert sie selbst.
2. **Seiten** → die Liste „Nicht indexiert" durchgehen. Hier steht, welche
   Adresse Google warum aussen vor laesst.
3. **URL-Pruefung → Indexierung beantragen** fuer die wichtigsten Seiten,
   nachdem die Meta-Texte drin sind:
   Startseite · `/products/melyla-anti-falten-schlaf-bh` ·
   `/products/anti-falten-kissen` · `/pages/funktionsweise` ·
   `/pages/melyla-anti-falten-kissen` · die Ratgeberseite
4. **Verbesserungen → Produkt-Snippets** beobachten. Dort tauchen in 3 bis 14
   Tagen die Sterne auf, die seit dem 21.09. ausgezeichnet werden.
5. **Verbesserungen → Breadcrumbs** — ebenfalls neu, gleicher Zeitraum.

## 5. Bing Webmaster Tools ✅

> **✅ AM 22.09.2026 MIT JOCHEN EINGERICHTET.** Sitemap-Status *Erfolg*, 35
> entdeckte URLs, 0 Fehler, 0 Warnungen. Dabei kam heraus: das Konto besteht
> seit **05.02.2021** und Bing crawlt die Seite aktiv — „gar nicht eingerichtet"
> stimmte nie. Protokoll:
> [25-suchmaschinen-einrichtung.md](25-suchmaschinen-einrichtung.md).

Verifiziert seit dem 21.09. — `msvalidate.01` liegt im `<head>` (Commit
`abbc637`, am 22.09. live nachgesehen). Genutzt wird es noch nicht. Bing
speist auch die Suche in ChatGPT und Copilot, das ist inzwischen mehr als eine
Nebenrolle.

1. `bing.com/webmasters` → **Importieren aus der Google Search Console**. Das
   ist der kuerzeste Weg: Verifizierung und Sitemap kommen mit.
2. Geht der Import nicht, die Site von Hand hinzufuegen und ueber das
   Meta-Tag verifizieren — das Tag liegt bereits im `<head>`, es ist nichts
   anzufordern und nichts zu pushen. Danach `sitemap.xml` manuell eintragen.
3. **URL-Einreichung** fuer dieselben sechs Kernseiten wie bei Google. Das
   Tageskontingent ist grosszuegig, das geht schneller als abzuwarten.
4. **IndexNow entfaellt.** Es braucht eine Schluesseldatei im
   Wurzelverzeichnis (`melyla.de/<key>.txt`), und Shopify laesst dort keine
   eigenen Dateien zu. Die manuelle URL-Einreichung ersetzt es vollstaendig.

Bing arbeitet langsamer als Google. Ohne Einrichtung dauert es Wochen, mit
Einrichtung sind die Adressen sofort bekannt.

### Zwei Befunde, die beim Termin gebraucht werden

Beides am 21.09. nachgesehen, damit im Gespraech nicht danach gesucht werden muss:

- **Das `google-site-verification`-Tag steht nicht im Theme.** Shopify spritzt es
  ueber `content_for_header` ein. Wer im Repo danach sucht, findet nichts und
  haelt die Verifizierung faelschlich fuer fehlend — sie ist da.
- **Fuer Bing hat Shopify kein Eingabefeld** — das Tag musste von Hand ins
  Theme. ~~Steht aus.~~ **Am 21.09. erledigt**: `msvalidate.01` steht in
  `layout/theme.liquid`, Zeile 4, ueber Commit `abbc637`. Fuer den Termin ist
  an dieser Stelle nichts mehr zu tun.

---

## 6. Seiten, die niemand findet

Beide stehen in der Sitemap, sind aber von **keiner** Seite des Shops verlinkt.
Suchmaschinen finden sie, Kundinnen nicht.

| Seite | Was zu tun ist |
|---|---|
| `/pages/ruckversand` | In den Footer unter *Service*. Eine Rueckgabeseite, die niemand findet, ist auch rechtlich unschoen |
| `/collections/anti-falten-produkte` („Kundenlieblinge", 7 Produkte) | Entweder ins Menue aufnehmen oder die Kategorie stilllegen. Beides ist in Ordnung — nur so stehenlassen nicht |

Dazu aus `STAND.md`, Zeile 783, weiterhin offen: **„Wie funktioniert das
Anti-Falten Kissen?" fehlt im Menue**, obwohl die BH-Variante drinsteht. Die
Seite haengt heute an einem einzigen Link von der Produktseite aus.

---

## 7. Zur Entscheidung: Kategorieseiten ohne Ueberschrift

Alle drei Kategorieseiten haben **kein H1**. Der Grund ist eine bewusste
Einstellung: In `templates/collection.json` steht der Abschnitt `banner` auf
`"disabled": true` — jemand hat den Kategoriekopf im Editor abgeschaltet.

Deshalb wurde das nicht einfach geaendert. Zwei Wege:

- **Kopf wieder einschalten** (Editor → Kategorieseite → Abschnitt „Kategorie
  Banner" aktivieren). Der Kategoriename steht dann sichtbar und als H1 da.
- **So lassen.** Bei drei Kategorien, von denen eine ohnehin stillgelegt werden
  koennte, ist der Verlust ueberschaubar.

Empfehlung: einschalten, wenn die Kategorien im Menue bleiben sollen.

---

## 8. Aus STAND.md, was zum Livegang gehoert und noch offen ist

| Was | Fundstelle |
|---|---|
| Vergleichspreise fuer `2-x-melyla-anti-falten-bh` und `antifalten-set-kissen-bh` — sonst zeigt keine Karte eine Ersparnis. Danach `node bin/preise-pruefen.mjs https://melyla.de` | STAND.md 771–774 |
| Store auf „New customer accounts" umstellen — Dawn 16 hat die alten Kundenkonto-Vorlagen entfernt | STAND.md 775 |
| „Kaltschaum" aus den Kissen-Produktdaten entfernen, es ist Memory Foam | STAND.md 787 |
| Materialangabe BH in der **Shopify-Produktbeschreibung** nachziehen (im Theme erledigt) | STAND.md 807 |
| Beleg fuer „ueber 5.000 verkaufte BHs" ablegen — Summe aus Billbee und Seller Central mit Stichtag | STAND.md 804 |
| AGB-Ziffer 8 gegen die Werbung „30 Naechte testen" | 21-ki-inhalte.md 118–128 |
| Widerrufsbelehrung nennt keine gueltige E-Mail — verlaengert die Frist nach § 356 Abs. 3 BGB | 21-ki-inhalte.md 130–137 |

---

## Was schon durch ist

Gepusht am 21.09., live gegengeprueft:

| | |
|---|---|
| **Sterne fuer Google** | `aggregateRating` aus den 79 echten Bewertungen, auf den drei Seiten mit sichtbarem Bewertungskopf. `bin/auszeichnung-pruefen.mjs` vergleicht Auszeichnung und sichtbaren Text am ausgelieferten HTML |
| **Brotkrumen** | `BreadcrumbList` auf allen Seitentypen ausser der Startseite, sichtbare Leiste auf Seiten und Blogartikeln |
| **FAQ-Schema** | Zwei latente Fehler entschaerft, die bei einer geleerten Frage das ganze Schema ungueltig gemacht haetten |
| **Ein H1 je Seite** | Das Logo im Header ist kein H1 mehr. Startseite von zwei auf eins |
| **Vorschaubilder** | `og:image` jetzt ueber https statt http, dazu `twitter:image`. Alle 34 Seiten geprueft |
| **Link-Pruefer** | Fand escapte Links in Vorlagen nicht — genau deshalb blieb `/pages/falten-vermeiden` unentdeckt. Prueft jetzt auch `shopify://`-Verweise |

## Wie lange das jetzt dauert

**Shopify** erzeugt die Sitemap selbst und aktualisiert sie sofort, sobald eine
Seite angelegt oder geaendert wird. Da ist nichts zu tun.

**Google** holt sie von allein — bei einer etablierten Domain taeglich bis alle
paar Tage. Neue Seiten sind meist nach wenigen Tagen bis zwei Wochen im Index,
geaenderte Meta-Texte und die neuen Sterne brauchen aehnlich lang. Ueber
*Indexierung beantragen* geht es fuer einzelne Seiten schneller.

**Bing** ist langsamer und arbeitet nicht mit der Google-Sitemap. Ohne
eingerichtete Webmaster Tools dauert es Wochen.

Abwarten reicht also — aber nur, wenn jemand in die Search Console schaut.
Sonst merkt niemand, wenn eine Seite nicht indexiert wird.

## Nachpruefen

```bash
cd shopify-theme
node bin/links-pruefen.mjs        https://melyla.de   # muss nach Punkt 1 gruen sein
node bin/zahlen-pruefen.mjs       https://melyla.de   # Bewertungszahlen am Live-HTML
node bin/auszeichnung-pruefen.mjs https://melyla.de   # Sterne gegen sichtbaren Text
node bin/preise-pruefen.mjs       https://melyla.de   # nach Punkt 8
```

## Nachtrag 21.09. — warum der Live-Modus dazukam

Beim Umstellen der Vorlagen fiel auf einem Bildschirmfoto auf, dass auf
`/pages/funktionsweise` **„52+ Bewertungen"** und **„4,79 Sterne"** standen und
auf `/pages/warum-melyla` **„4,79 aus 52 Bewertungen zum Schlaf BH"**. Belegt
sind fuer den BH 49 Bewertungen bei 4,78.

Keine dieser Zahlen kam in einer Theme-Datei vor. Sie steckten in einem
HTML-Baustein, der vor Monaten ins Inhaltsfeld eingesetzt und seitdem nie
erneuert wurde — die Fassung in `docs/melyla/shopify-einfuegen/` war laengst
richtig. `zahlen-pruefen.mjs` war deshalb gruen, waehrend der Shop falsche
Zahlen auslieferte.

**Die Regel daraus:** Wer einen Baustein in `shopify-einfuegen/` aendert, muss
ihn im Admin **neu einsetzen**. Die Datei zu aendern reicht nicht. Und
`node bin/zahlen-pruefen.mjs https://melyla.de` gehoert in jede Runde, in der
etwas an Bewertungen oder Inhaltsfeldern angefasst wurde.

Beides ist am 21.09. bereinigt: Die Funktionsweise-Seite laeuft jetzt auf ihrer
Funnel-Vorlage, das Inhaltsfeld wird nicht mehr ausgeliefert. Bei
*Warum MELYLA* wurde der Baustein neu eingesetzt.

Extern: [Rich Results Test](https://search.google.com/test/rich-results) auf die
drei Produktseiten — muss Sterne und Brotkrumen zeigen.
