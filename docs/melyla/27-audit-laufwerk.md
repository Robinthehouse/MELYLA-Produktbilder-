# Audit von Laufwerk.Cloud — eingeordnet

Stand 24.09.2026.

Ein Kollege hat über **Laufwerk.Cloud** am 23.09.2026 ein 360-Grad-Audit für
`melyla.de` erstellen lassen: 67 Seiten, Gesamtnote **58 von 100**, 22 Maßnahmen,
Fristen ab dem 26.09.2026.

**Diese Datei ist nicht das Audit.** Sie ist unser Urteil darüber. Jeder Befund
steht hier mit einer von fünf Einordnungen:

| | |
|---|---|
| **Bestätigt** | Stimmt, und wir können es lösen — mit Fundstelle im Repo |
| **Nur im Admin** | Stimmt, liegt aber in Shopify, nicht im Theme |
| **Erledigt** | Stimmt nicht mehr — das Audit ist vom 23.09., wir haben seitdem gearbeitet |
| **Widerspruch** | Der Ratschlag geht bei uns nicht, und wir wissen warum |
| **Nicht bei uns** | Braucht Zugänge, die Jochen hat |

Das Audit hat von außen gemessen. Es kennt unsere Doku nicht, es kennt die
Vorgeschichte nicht, und an drei Stellen empfiehlt es etwas, das wir schon
gemessen und verworfen haben. Deshalb dieser Abgleich statt einer Abschrift.

---

## Die Noten im Überblick

| Bereich | Note | |
|---|---|---|
| SEO (Google-Ranking) | 59 | ausbaufähig |
| GEO (KI-Sichtbarkeit) | 57 | ausbaufähig |
| AEO (Antwort-Engines) | 48 | ausbaufähig |
| DSGVO und Recht | 58 | ausbaufähig |
| Domain- und E-Mail-Sicherheit | 74 | gut |
| SEA (bezahlte Anzeigen) | — | Startplan, keine Anzeige läuft |

Die 58 entstehen laut Audit nicht durch einen großen Fehler, sondern durch eine
Reihe mittlerer Lücken. Der Satz, der es trifft: **die Website ist gut, außerhalb
der Website ist die Marke fast nicht vorhanden.**

---

## 1. Was das Audit als gut bestätigt

Das steht bewusst zuerst — es sagt, was wir **nicht** anfassen.

| Was | Note | |
|---|---|---|
| KI-Crawler-Zugang | 90 | alle acht geprüften Bots zugelassen, nichts gesperrt |
| AI-Zitierbarkeit | 84 | fünf Textblöcke der Produktseite sind wörtlich zitierfähig |
| Cookie-Abfrage (§ 25 TDDDG) | 88 | „Ok", „Nein, danke" und „Konfigurationen verwalten" gleichrangig auf der ersten Ebene |
| Tracking-Hygiene | 82 | **vor der Einwilligung lädt nichts** — kein Facebook, kein Google, keine Fonts von Google |
| Verschlüsselung, Zertifikat, Sperrlisten | 80–85 | TLS 1.3, alte Protokolle abgelehnt, Server nicht auf Spamhaus |

Wörtlich aus dem Audit: *„Beim Consent steht der Shop besser da als die meisten
Online-Shops."* Alle 35 Seiten antworten mit 200 und sind serverseitig gerendert,
die Produktseiten haben 4.199 und 4.672 Wörter — mehr als jeder Wettbewerber.

### Der Wert, der am häufigsten falsch zitiert werden wird

Das Audit nennt **4,8 Sekunden Ladezeit**. Das ist ein *Laborwert* für ein
gedrosseltes Mittelklasse-Handy ohne Cache. Die echten Google-Felddaten von
echten Besuchern stehen im selben Kapitel und sind **grün**:

| | Wert | |
|---|---|---|
| LCP (Hauptinhalt sichtbar) | 1,47 s | grün |
| INP (Reaktion auf Eingaben) | 139 ms | grün |
| CLS (Layout-Sprünge) | 0,00 | grün |

Dazu ein Verbesserungstrend seit März 2026 (LCP minus 19 Prozent). Wer sagt, die
Seite sei langsam, meint den Laborwert. Die Kundinnen erleben das nicht.

---

## 2. Dringend — zwei Fristen

| Frist | Was | Wo |
|---|---|---|
| ~~**27.09.2026**~~ ✅ | **Am 24.09. im Repo erledigt** — an allen zwölf Fundstellen gestrichen, siehe [STAND.md](STAND.md). **Im Admin offen:** die vier HTML-Bausteine neu einsetzen. „Versand CO₂-neutral" streichen oder mit unabhängigem Nachweis belegen. Ab diesem Tag sind Klimaneutralitäts-Aussagen ohne geprüften Nachweis unzulässig | Admin — Startseite und Produktseite |
| **30.09.2026** | `/pages/widerruf-formular` kündigt ein Formular an und enthält keines. Der Widerrufsbutton ist seit dem 19.06.2026 Pflicht | Admin |

**Zur CO₂-Aussage:** Streichen ist der schnelle Weg. Wenn eine Aussage bleiben
soll, muss sie belegt sein — das Audit schlägt „Versand mit DHL GoGreen Plus" vor,
*falls* das zutrifft. Das ist bei Jochen zu klären, nicht zu behaupten.

**Zum Widerruf:** Hier hängt ein zweiter Befund dran, den wir schon kennen — die
Widerrufsbelehrung nennt keine gültige E-Mail, was die Widerrufsfrist nach
§ 356 Abs. 3 BGB verlängert ([21-ki-inhalte.md](21-ki-inhalte.md)). Beides gehört
in einen Arbeitsgang. Das Formular muss zweistufig sein (ausfüllen, dann „Widerruf
bestätigen") und den Eingang automatisch per E-Mail bestätigen. Fertiger Baustein
im Audit, Seite 25.

---

## 3. Bestätigt und im Theme lösbar

Nachgeprüft am 24.09.2026, mit Fundstelle.

### 3.1 Organization-Schema — acht leere Verknüpfungen

**Bestätigt, punktgenau.** `sections/header.liquid:473-492` gibt neun `sameAs`-
Felder aus. Gefüllt ist genau eines: Instagram
(`config/settings_data.json:112-120`). Die anderen acht stehen als leere
Zeichenketten im JSON-LD — Twitter, Facebook, Pinterest, TikTok, Tumblr, Snapchat,
YouTube, Vimeo.

Dazu fehlen Angaben, die im Impressum längst stehen: `legalName`, `address`,
`vatID`, `foundingDate`, `founder`, `contactPoint`.

Das ist der Block, mit dem sich die Firma gegenüber Google und KI-Systemen
ausweist. Er ist Dawns Standard, unverändert. Ein fertiger Ersatz steht im Audit
auf Seite 22 — **mit Vorbehalt zu prüfen:** Er nennt eine Facebook-Adresse und
eine Otto-Produktseite. Beide müssen wirklich existieren, sonst zeigt `sameAs` ins
Leere und richtet mehr Schaden an als der leere Zustand.

Aufwand rund 3 Stunden. Wirkung laut Audit die höchste im ganzen GEO-Kapitel.

### 3.2 Titel-Vorlage mit Zeilenumbruch

**Bestätigt.** `layout/theme.liquid:19-24`:

```liquid
<title>
  {{ page_title }}
  {%- if current_tags %} ... {% endif -%}
  {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
</title>
```

Der Zeilenumbruch und die Einrückung landen im ausgelieferten HTML — auf 32 von
35 Seiten. Das ist Dawns Standard, kein eigener Fehler, aber es sieht im Quelltext
nach einer kaputten Vorlage aus. Eine Zeile, wirkt auf alle Seiten.

### 3.3 Drei animierte GIFs auf der Startseite

**Bestätigt, mit Korrektur.** Das Audit zählt vier GIFs mit zusammen 3,6 MB. Im
aktuellen Stand sind es **drei** — `templates/index.json:394, 401, 415`:

| Feld | Datei |
|---|---|
| `card_1_image` | `download_3.gif` |
| `card_2_image` | `Closeup_macro_photograph_of_the_du00e9colle.gif` |
| `card_4_image` | `download_2.gif` |

`card_3_image` trägt kein GIF mehr. Der vierte aus dem Audit ist seit dem 23.09.
weg. Der Rest stimmt: GIFs sind das teuerste Bildformat, das es gibt, und für eine
Schleife von zwei Sekunden ist WebM oder MP4 um ein Vielfaches kleiner.

In `exports/scroll-video/` liegt bereits Videomaterial — bevor hier konvertiert
wird, gehört geprüft, ob das schon die Ersatzclips sind.

### 3.4 Ladepriorität für das Scroll-Video

**Bestätigt.** `sections/melyla-funnel-hero-video.liquid:272` setzt
`fetchpriority="high"`, `sections/melyla-scroll-video.liquid` nicht. Auf der
Startseite ist das Scroll-Video laut Audit das LCP-Element — also genau das
Element, das die Priorität braucht. Rund 2 Stunden.

### 3.5 Definition „Was sind Schlaffalten?"

**Bestätigt.** Start- und Produktseite erklären Schlaffalten nur erzählerisch.
Eine KI, die „Was sind Schlaffalten?" beantworten will, findet bei uns keinen
Absatz zum Zitieren und weicht auf fremde Seiten aus. 40 bis 60 Wörter auf
`/pages/funktionsweise` und der Startseite, Baustein im Audit Seite 23. Passt
inhaltlich zu [14-ratgeberseite-falten.md](14-ratgeberseite-falten.md).

### 3.6 Rückgabe und Versand im Angebot — mit Vorbehalt

**Bestätigt als Lücke, aber nicht als einfache Aufgabe.** In keinem der elf
Produktangebote stehen `hasMerchantReturnPolicy` oder `shippingDetails`, obwohl
„30 Nächte testen, Geld zurück" unser stärkstes Verkaufsargument ist.

Der Haken: Das Produkt-JSON-LD kommt aus Shopifys eigenem Filter
(`sections/main-product.liquid:809`, `{{ product | structured_data }}`). Diesen
Block können wir nicht von innen erweitern. Es gibt zwei Wege — einen eigenen
zusätzlichen Offer-Block ausgeben, oder die Angaben im Merchant Center pflegen.
**Das ist vor der Umsetzung zu entscheiden, nicht währenddessen.**

---

## 4. Bestätigt, aber nur im Shopify-Admin

Nichts davon liegt im Repo. Die Admin-Arbeit ist in
[23-livegang-checkliste.md](23-livegang-checkliste.md) gesammelt.

| Was | Warum es drängt |
|---|---|
| **Datenschutzerklärung neu aufbauen** | Sie nennt Google Analytics, das gar nicht eingebunden ist, und verschweigt acht Dienste, die laufen: Google Ads Conversion, Meta Conversions API, reCAPTCHA, Judge.me, EcomSend, Zoho, PayPal, Klarna. Beim Meta-Tracking sprechen Gerichte 2026 Schadensersatz zu (OLG Dresden 1.500 €, LG Leipzig 5.000 €) |
| **Impressum: § 5 TMG → § 5 DDG** | Das Telemediengesetz gilt seit dem 14.05.2024 nicht mehr. Typischer Aufhänger in Abmahnschreiben. Die Pflichtangaben selbst sind vollständig |
| **Zwei Telefonnummern** | Impressum nennt +49 2822 7189383, die Kontaktseite +49 176 82007778. Eine festlegen |
| **Versandkosten widersprüchlich** | „Gratis Versand" im Kopfband, „wird beim Checkout berechnet" auf der Produktseite, „zzgl. Versandkosten" in den AGB. Gilt als Irreführung |
| **GTIN für S, L und XL** | Nur Größe M hat eine (4270002647381). Drei von vier Größen riskieren die Ablehnung im Merchant Center |
| **Alt-Texte** | Startseite 7 von 34 fehlen, BH 7 von 31, Set 5 von 30, Kissen 6 von 21, Maske 5 von 10 |
| **Cookie-Fenster auf dem Handy** | Verdeckt auf der Produktseite Preis, Größenwahl und beide Kaufbuttons vollständig. Rechtlich in Ordnung, aber die erste Antwort, die eine Kundin bekommt, ist ein Cookie-Fenster. Als schmalen Streifen unten konfigurieren |
| **Linktext „Privacy Policy"** | Englisch im deutschen Banner. 15 Minuten |
| **Formulare ohne Datenschutzhinweis** | Kontakt- und Newsletterformular, dazu Double-Opt-in aktivieren. Werbemails ohne nachweisbare Einwilligung sind nach § 7 UWG abmahnbar |

---

## 5. Erledigt oder überholt — das Audit ist vom 23.09.

### 5.1 Die zwei widersprüchlichen Bewertungswerte — und was dahinter steckt

Das Audit fand auf der BH-Seite zwei sich widersprechende Auszeichnungen:
**4,78 aus 49** (Shopifys Produkt-Schema) und **4,79 aus 52** (Judge.me).

**Der Widerspruch ist behoben.** `sections/main-product.liquid:792-808` nimmt seit
dem 24.09.2026 unser eigenes `aggregateRating` heraus. Die Gegenprobe am selben
Tag bestätigt es:

```
node bin/auszeichnung-pruefen.mjs https://melyla.de
  ok ★ /products/melyla-anti-falten-schlaf-bh  4.79 aus 52 Bewertungen, sichtbar und ausgezeichnet
  ok ★ /products/anti-falten-kissen            4.74 aus 23 Bewertungen, sichtbar und ausgezeichnet
Auszeichnung und sichtbarer Text stimmen ueberein.
```

**Aber der Befund dahinter ist größer als der, den das Audit gefunden hat.**

Unsere 49 Bewertungen mit Schnitt 4,78 rechnen sich aus
`snippets/melyla-bewertungen-daten.liquid` — 38 mal fünf Sterne, 11 mal vier,
Summe 234, Schnitt 4,7755. Woher kommen dann Judge.mes 52?

Rechnet man **drei Bewertungen mit je fünf Sternen** dazu: Summe 249, n = 52,
Schnitt 4,7885 — **gerundet 4,79.** Die Zahl geht exakt auf.

Genau drei BH-Bewertungen haben wir bewusst nicht übernommen. Sie stehen in
[17-bewertungen.md](17-bewertungen.md): *Lena* (16.04.2021), *Ingrid* (16.04.2021)
und *Miga* (15.11.2022), abgegeben aus `schweizer.j.c@gmail.com`,
`Jochen__Schweizer@web.de` und `j.schweizer@creditreform-rating.de`. Alle drei mit
fünf Sternen.

**Das heißt: Auf der BH-Seite steht heute live eine Bewertungszahl, die drei
selbst abgegebene Bewertungen einrechnet — und sie ist für Google ausgezeichnet.**
Selbst abgegebene Bewertungen sind nach UWG Anhang Nr. 23b unzulässig. Der Weg
dorthin ist Judge.me, nicht unser Theme; unsere Seite hatte die drei bewusst
draußen.

Das ist die offene Entscheidung in Abschnitt 8. **Die Rechnung ist ein starkes
Indiz, kein Beweis** — sie stimmt auf die zweite Nachkommastelle, aber
nachsehen lässt es sich nur im Judge.me-Konto.

### 5.2 Weitere überholte Punkte

| Audit sagt | Stand bei uns |
|---|---|
| „kein Zugang zu Search Console und Analytics" (Datenlücke) | **Search Console und Bing sind seit 22.09. eingerichtet** — Sitemap eingereicht, 35 URLs, 0 Fehler. [25-suchmaschinen-einrichtung.md](25-suchmaschinen-einrichtung.md). Das war eine Lücke des Auditors, kein Mangel des Shops |
| „vier animierte GIFs" | Drei, siehe 3.3 |
| Bewertungs-Widerspruch | Behoben am 24.09., siehe 5.1 |

Was das Audit **nicht** bemängelt, weil es seit dem 21.09. steht: `AggregateRating`,
`BreadcrumbList`, ein H1 je Seite, `og:image` über https.

---

## 6. Wo wir dem Audit widersprechen

### 6.1 Die „kuratierte llms.txt" geht bei uns nicht

Das Audit führt sie zweimal als Quick Win: *„Kuratierte llms.txt statt
Shopify-Agentenanleitung hinterlegen — 2 Stunden, Entwickler."*

**Das ist bei Shopify nicht umsetzbar.** Shopify liefert `/llms.txt` selbst aus,
und ein Theme kann diese Route nicht überschreiben. Gemessen am 22.09., steht in
[STAND.md](STAND.md) unter „Auffindbarkeit": `robots.txt.liquid` ginge,
`llms.txt` nicht.

Der Befund selbst stimmt — was dort ausgeliefert wird, ist die transaktionale
Shopify-Datei über UCP/MCP-Endpunkte, kein Wort über Marke, Problem oder
Produkte. Nur die Lösung stimmt nicht.

**Der Ersatz ist die Faktenseite `/pages/fakten`**, die das Audit an anderer
Stelle ohnehin empfiehlt: Firma in einem Satz, Kernprodukt in einem Satz, belegte
Kennzahlen, Vertriebskanäle, Kontakt, sichtbares Stand-Datum. Die ist bei uns
umsetzbar, und sie trägt denselben Zweck.

### 6.2 HSTS — das Audit sagt es selbst

*„Diese Header setzt Shopify zentral; MELYLA kann sie nicht selbst ändern."*
Kein Handlungspunkt. Steht hier nur, damit niemand ihn aus der Maßnahmenliste
zieht.

### 6.3 Zugriffssteuerung für KI-Bots

Content-Signals in der robots.txt lässt Shopify derzeit nicht zu. Das Audit
vermerkt es korrekt als „bis dahin kein Handlungsdruck".

---

## 7. Nicht bei uns — bei Jochen

### 7.1 DMARC steht auf `p=none` — der einzige echte Sicherheitsbefund

Der DMARC-Eintrag der Domain lautet `v=DMARC1; p=none`. Übersetzt: **Jeder kann
heute E-Mails verschicken, die als Absender `info@melyla.de` oder
`happyorder@melyla.de` tragen, und sie landen bei den Kundinnen im Posteingang.**

Bei einem Shop, der Bestellbestätigungen, Versandmails und künftig
Widerrufsbestätigungen verschickt, ist das ein direktes Betrugsrisiko — gefälschte
Zahlungsaufforderungen im Firmennamen.

Braucht DNS-Zugang. Schrittweise, nicht auf einmal:

```
Schritt 1 (sofort), TXT auf _dmarc.melyla.de:
v=DMARC1; p=quarantine; rua=mailto:dmarc@melyla.de; pct=100; adkim=r; aspf=r

Schritt 2 (nach 4 Wochen ohne Fehlalarme):
v=DMARC1; p=reject; rua=mailto:dmarc@melyla.de; pct=100; adkim=s; aspf=s
```

Dazu: Es existiert ein DKIM-Schlüssel für Shopify, aber Shopify steht nicht im
SPF (`v=spf1 include:zoho.eu ~all`). Wenn Shopify mit Absender `@melyla.de`
verschickt, gehört `include:shops.shopify.com` dazu. Erst im Admin nachsehen,
dann ändern — sonst brechen die Bestellmails.

### 7.2 Der größte Hebel des Audits: Drittquellen

In **4 von 6** echten Suchproben zu Kundenfragen ohne Markennamen taucht MELYLA
gar nicht auf. Wer fragt, was gegen Dekolleté-Falten beim Seitenschlafen hilft,
bekommt Eucerin, Für Sie und Banderellas „Traumfisch". Der Wettbewerber
banderella.com kommt in drei von sechs Fragen mit fünf Treffern vor.

Die Marken- und Entitäts-Autorität steht bei **25 von 100** — der schwächste Wert
im ganzen Audit. Presse, Magazine, Blogs und Foren liefern bei einer Markensuche
keinen Treffer; gefunden werden nur Otto, Amazon, testberichte.de, ein
Instagram-Beitrag und der Registereintrag.

Ziele, die KI-Systeme real zitieren: schlafzimmer.de, vergleichspot.de,
skincareinspirations.com, testergebnis24.de, fuersie.de, gofeminin.de. Muster
versenden, Gründerinnen-Geschichte anbieten. 12 Stunden, der teuerste und laut
Audit wirksamste Punkt.

Das deckt sich mit dem, was in [STAND.md](STAND.md) unter „Der größte Hebel
bleibt" steht — nur aus anderer Richtung.

### 7.3 Weitere Punkte bei Jochen

- **Otto- und Amazon-Bewertungen öffentlich beantworten.** Das Markenbild, das
  KI-Systeme wiedergeben, stammt aus gemischten Händlerbewertungen (Kritik an
  Polster, Passform, Halt) — nicht aus unseren eigenen Sternen
- **Das Kissen bei Amazon listen**, weil die Vergleichsportale über Amazon-Links
  arbeiten
- **Google-Ads-Konto absichern**, bevor eine Anzeige startet. Das Conversion-Tag
  AW-379651025 liegt auf der Seite, aber in keiner der vier Anzeigen-Bibliotheken
  war eine aktive Anzeige belegbar
- **BARBARA-Beleg.** „Bekannt aus BARBARA Nr. 61" ist ein selbstgehostetes Bild
  ohne Link. Scan oder Link beschaffen

---

## 8. Eine Entscheidung, die nur Robin treffen kann

**Der Shop betreibt zwei Bewertungssysteme nebeneinander.**

| | |
|---|---|
| **Unsere Theme-Sektionen** | 79 echte Datensätze in `snippets/melyla-bewertungen-daten.liquid`, gepflegt, dokumentiert in [17-bewertungen.md](17-bewertungen.md), mit bewussten Ausschlüssen: drei Bewertungen aus Inhaber-Adressen, fünf mit Platzhalter-Adressen, Nachnamen gekürzt, E-Mails nie übernommen |
| **Judge.me** | Eine App, die in keiner unserer Dateien vorkommt und in keinem Dokument erwähnt wird. Sie schreibt ihr eigenes `aggregateRating` ins HTML — und zeigt auf der BH-Seite 52 statt 49 Bewertungen |

Das war die Ursache der doppelten Auszeichnung, die das Audit gefunden hat.
Gelöst ist bisher nur das Symptom: Wir haben unsere Auszeichnung zurückgezogen.
Damit ist **Judge.me jetzt die Quelle, die Google sieht** — inklusive der drei
Bewertungen, die wir aus gutem Grund draußen hatten (siehe 5.1).

Drei Wege:

1. **Judge.me deinstallieren.** Unsere Sektionen tragen die Bewertungen, die Zahl
   ist belegt und nachrechenbar, `bin/zahlen-pruefen.mjs` wacht darüber. Dann
   muss unser `aggregateRating` zurück ins Theme.
2. **Unsere Sektionen zurückbauen, Judge.me übernimmt.** Dann fällt die
   Nachvollziehbarkeit weg, und die drei Inhaber-Bewertungen müssen **in
   Judge.me** gelöscht werden.
3. **Beides lassen, wie es ist.** Dann stehen zwei Zahlen im Haus, und der
   nächste Editor-Klick bringt den Widerspruch zurück.

**Empfehlung: Weg 1.** Wir haben die Daten, die Dokumentation und einen Prüfer,
der in der CI mitläuft. Judge.me bringt nichts, was wir nicht hätten — kostet aber
Kontrolle über eine Zahl, die rechtlich angreifbar ist.

Egal welcher Weg: **Die drei Bewertungen aus Jochens Adressen gehören geklärt.**
Waren es echte Käuferinnen, die über eine Familienadresse bestellt haben, können
sie zurück. War es anders, dürfen sie nirgends stehen.

---

## Reihenfolge

Nach Frist, dann nach Wirkung durch Aufwand.

| # | Was | Wer | Bis |
|---|---|---|---|
| 1 | ~~CO₂-Aussage streichen~~ ✅ im Repo — **Bausteine im Admin neu einsetzen** | Admin | **27.09.** |
| 2 | Widerrufsformular in Betrieb nehmen, dabei die E-Mail in der Belehrung | Admin | **30.09.** |
| 3 | Bewertungssystem entscheiden, drei Inhaber-Bewertungen klären | Robin + Jochen | sofort, blockiert 4 |
| 4 | Organization-Schema füllen | Theme | 07.10. |
| 5 | Impressum, Telefonnummer, Versandkosten vereinheitlichen | Admin | 07.10. |
| 6 | Titel-Vorlage reparieren | Theme | 07.10. |
| 7 | Datenschutzerklärung neu aufbauen | Admin, am besten mit Generator | 07.10. |
| 8 | DMARC auf `p=quarantine` | Jochen, DNS | 14.10. |
| 9 | Faktenseite `/pages/fakten` (Ersatz für die llms.txt) | Admin + Theme | 14.10. |
| 10 | GIFs durch Videos, Ladepriorität fürs Scroll-Video | Theme | 14.10. |
| 11 | GTINs, Alt-Texte, Definitionsabsatz | Admin + Theme | 24.10. |
| 12 | Vergleichsportale und Presse anschreiben | Jochen | 22.12. |

Punkt 3 steht vor Punkt 4, weil beide am selben `aggregateRating` hängen.

---

## Gegenprobe vom 24.09.2026

Vor dem Schreiben dieser Datei einmal gegen die Live-Seite gemessen:

| Prüfer | Ergebnis |
|---|---|
| `zahlen-pruefen.mjs https://melyla.de` | 35 Seiten geprüft, **keine ungedeckte Bewertungszahl live**. Zwei geduldete Stellen auf der Startseite (4,78 aus 49), die laut Robin vorerst stehen bleiben |
| `auszeichnung-pruefen.mjs https://melyla.de` | 10 Seiten, **Auszeichnung und sichtbarer Text stimmen überein** — der doppelte Block ist weg |
| `links-pruefen.mjs https://melyla.de` | alle 9 internen Links mit 200 |
| `preise-pruefen.mjs https://melyla.de` | **4 Abweichungen**: Karte 3 (BH + Kissen) steht in allen vier Größen auf 69,50 € statt 89,00 € |

Die Preisabweichung gehört nicht zum Audit, fiel aber bei der Gegenprobe auf.
Entweder ist der Preis bewusst gesenkt worden — dann müssen Soll-Wert im Prüfer,
`STAND.md` und Shopify gemeinsam nachziehen — oder die Staffel ist zum fünften Mal
weggelaufen. **Das ist vor dem nächsten Editor-Besuch zu klären.**

---

## Was das Audit nicht messen konnte

Der Vollständigkeit halber, damit niemand diese Lücken für Befunde hält:
Backlinks (Domain nicht im Common Crawl), Suchvolumen und Rankings (kein
DataForSEO-Zugang), echte Besucherdaten (kein Kundenzugang), die Antwortprobe
direkt bei ChatGPT, Gemini, Perplexity, Copilot und der Google-KI-Übersicht (alle
fünf sperrten den automatischen Zugriff — ersatzweise acht echte Suchproben), das
Domain-Ablaufdatum (gibt die DENIC nicht heraus). Das TLS-Zertifikat steht unter
Messvorbehalt, weil die Virenschutz-Software auf dem Prüfrechner die Verbindung
aufbricht.

Das Audit führt diese Lücken selbst und ausdrücklich als Lücken. Das spricht für
seine Sorgfalt.
