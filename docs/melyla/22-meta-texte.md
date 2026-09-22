# Meta-Titel und Meta-Beschreibungen

Stand 21.09.2026. Vorlage zum Eintragen in Shopify. Kein Push noetig — das
sind alles Admin-Felder.

## Warum das hier steht

Am 19.09. hatten **22 von 34 Seiten keine eigene Meta-Beschreibung**. Shopify
nimmt dann die ersten 320 Zeichen des Fliesstextes. In den Suchergebnissen
stand deshalb auf der Kissen-Seite:

> „So wirkt es Wie das Anti-Falten Kissenwirklich wirkt Acht Stunden lang traegt
> deine Wange das Gewicht deines Kopfes — Nacht fuer Nacht auf derselben Seite.
> Was dabei mit der Haut passiert, und was die Mulden daran aendern. 62 × 38 × 10 …"

Abgeschnitten mitten im Satz, mit zusammengelaufenen Woertern aus dem HTML.
Die Blog-Uebersicht hatte gar keine Beschreibung, die Blog-Titel waren 76 bis
93 Zeichen lang und wurden allesamt gekuerzt.

## Stand 22.09.2026 — Beschreibungen fast fertig, Titel offen

**Beschreibungen: 28 von 34 exakt.** Offen sind fuenf, einer davon ein
Tippfehler, der live steht. **Titel: 11 von 34** — die 23 uebrigen stehen mit
Soll und Ist in [24-meta-titel-restliste.md](24-meta-titel-restliste.md).

Der Kasten *Suchmaschineneintrag bearbeiten* hat zwei Felder. Das untere
(Beschreibung) ist leer und faellt auf, das obere (Seitentitel) ist vorbelegt
und sieht aus, als waere es richtig. Genau deshalb sind die Titel
liegengeblieben — beim naechsten Mal beide Felder pruefen.

## Frueherer Stand — 6 von 34

Live nachgemessen: Der Text unten wurde Zeichen fuer Zeichen mit dem
verglichen, was der Shop ausliefert.

**Drin:**

- [x] `/`  *(laengere Fassung mit Versandhinweis — Absicht, nicht reparieren)*
- [x] `/blogs/news`
- [x] `/pages/funktionsweise`
- [x] `/pages/melyla-anti-falten-kissen`
- [x] `/products/anti-falten-kissen`
- [x] `/products/melyla-anti-falten-schlaf-bh`

**Offen — in dieser Reihenfolge abarbeiten:**

*Zuerst die Seiten und Kategorien, die im Menue stehen:*

- [ ] `/pages/warum-melyla`
- [ ] `/pages/kontakt`
- [ ] `/pages/ruckversand`
- [ ] `/pages/widerruf-formular`
- [ ] `/pages/falten-vermeiden`
- [ ] `/collections/anti-falten-produkte`
- [ ] `/collections/einfach-wechseln-unsere-kissenbezuge`
- [ ] `/collections/neue-produkte`

*Dann die restlichen Produkte:*

- [ ] `/products/2-x-melyla-anti-falten-bh`
- [ ] `/products/antifalten-set-kissen-bh`
- [ ] `/products/anti-falten-schlaf-maske`
- [ ] `/products/kissenbezug-fur-anti-falten-kissen-grau`
- [ ] `/products/satin-kissenbezug-fur-das-melyla-anti-falten-kissen`
- [ ] `/products/haar-gummie`
- [ ] `/products/abschminkschwamme`
- [ ] `/products/schwamm`

*Zuletzt die Blogbeitraege — die haben den kleinsten Hebel, sind aber die Haelfte der Arbeit:*

- [ ] `/blogs/news/wie-entstehen-falten-im-dekollete-uberhaupt`
- [ ] `/blogs/news/anti-falten-kissen-die-geheimwaffe-gegen-falten-im-schlaf`
- [ ] `/blogs/news/anti-falten-kissen-der-stille-helfer-nach-einer-schonheits-op`
- [ ] `/blogs/news/warum-sie-zeit-fur-die-eingewohnung-des-melyla-anti-falten-kissens-benotigen`
- [ ] `/blogs/news/neues-jahr-neue-vorsatze-warum-ein-anti-falten-kissen-jetzt-sinnvoll-ist`
- [ ] `/blogs/news/der-anti-falten-bh-fur-jede-altersklasse-und-viele-lebenssituationen-geeignet`
- [ ] `/blogs/news/der-perfekte-bh-brustvermessung-schnell-und-einfach`
- [ ] `/blogs/news/faltenreduktion-leicht-gemacht-ein-uberblick-uber-verschiedene-methoden`
- [ ] `/blogs/news/diy-anleitung-naturliche-maske-gegen-falten-im-dekollete-selbst-herstellen`
- [ ] `/blogs/news/tipps-zur-verbesserung-des-gesamterscheinungsbildes-ihrer-bruste`
- [ ] `/blogs/news/warum-wir-unsere-decollete-vor-der-sonne-schutzen-sollten`
- [ ] `/blogs/news/%F0%9F%92%A7-hyaluronsaure`

Gegenprobe, welche noch fehlen:

```bash
curl -s https://melyla.de/<pfad> | grep -o '<meta name="description" content="[^"]*"'
```
Ist die Beschreibung ueber 300 Zeichen lang, hat Shopify sie aus dem
Fliesstext gebaut — dann fehlt sie noch.

## Wo es eingetragen wird

Im Shopify-Admin bei jeder Seite, jedem Produkt, jeder Kategorie und jedem
Blogbeitrag ganz unten: **Suchmaschineneintrag bearbeiten**.

## Was beim Titel zu beachten ist

Das Theme haengt **„ – MELYLA" automatisch an**, ausser der Titel enthaelt das
Wort MELYLA bereits (`layout/theme.liquid`, Zeile 21). Die Spalte *ergibt*
zeigt, was am Ende wirklich in der Titelzeile steht. Alle Werte unten bleiben
unter 60 Zeichen, die Beschreibungen unter 155 — das ist der Bereich, den
Google normalerweise ungekuerzt anzeigt.

## Was bewusst nicht drinsteht

**Keine Bewertungszahlen.** Sie waeren verlockend, aber `bin/zahlen-pruefen.mjs`
prueft nur Vorlagen, Sektionen und Snippets im Theme — nicht die Felder im
Admin. Eine hier getippte 4,78 waere die einzige Zahl im Shop, die kein Pruefer
bewacht, und genau so sind die Zahlen schon dreimal von den Daten abgedriftet.
Die Sterne kommen seit dem 21.09. ohnehin ueber `aggregateRating` in die
Suchergebnisse, dort stimmen sie baulich.

**Kein „30 Naechte testen".** Der Widerspruch zur AGB-Ziffer 8 ist offen, siehe
[21-ki-inhalte.md](21-ki-inhalte.md). Was nicht geklaert ist, kommt nicht in
die Suchergebnisse.

**Kein „ueber 5.000 verkauft".** Der Beleg steht aus, siehe `STAND.md` unter
„Rechtlich, vor dem Livegang".

Begriffe und Zuordnung folgen [13-suchbegriffe.md](13-suchbegriffe.md): ein
Begriff je Seite, dort wo er ohnehin hingehoert.


## Startseite

### `/`

**Titel** (49 Zeichen getippt, ergibt 58)

```
Anti-Falten Schlaf BH & Kissen gegen Schlaffalten
```

**Beschreibung** (141 Zeichen)

```
Schlaffalten entstehen nachts durch Druck und Liegeposition. Der MELYLA Schlaf BH hält das Dekolleté glatt, das Kissen entlastet das Gesicht.
```

## Seiten

### `/pages/funktionsweise`

**Titel** (43 Zeichen getippt, ergibt 52)

```
Wie funktioniert der Anti-Falten Schlaf BH?
```

**Beschreibung** (139 Zeichen)

```
Der BH hält die Brüste nachts auseinander, damit die Haut im Dekolleté nicht zusammengeschoben wird. Aufbau, Wirkung und Anwendung erklärt.
```

### `/pages/melyla-anti-falten-kissen`

**Titel** (40 Zeichen getippt, ergibt 49)

```
Wie funktioniert das Anti-Falten Kissen?
```

**Beschreibung** (138 Zeichen)

```
Zwei Mulden statt einer glatten Fläche: Das Gesicht liegt frei, statt im Stoff zu versinken. Aufbau, Maße und Wirkung des Kissens erklärt.
```

### `/pages/falten-vermeiden`

**Titel** (53 Zeichen getippt, ergibt 53)

```
Wie entstehen Falten? Ursachen und was hilft | MELYLA
```

**Beschreibung** (138 Zeichen)

```
Mimikfalten, Schlaffalten, Lichtfalten: wie sie entstehen, woran du sie erkennst und was wirklich dagegen hilft — sortiert nach Beleglage.
```

### `/pages/warum-melyla`

**Titel** (43 Zeichen getippt, ergibt 43)

```
Warum MELYLA: die Idee hinter den Produkten
```

**Beschreibung** (140 Zeichen)

```
Ein Problem, das lange niemand ernst genommen hat: Falten, die im Schlaf entstehen. Wofür MELYLA steht und wie die Produkte entstanden sind.
```

### `/pages/kontakt`

**Titel** (7 Zeichen getippt, ergibt 16)

```
Kontakt
```

**Beschreibung** (117 Zeichen)

```
Fragen zu Produkten, Bestellung oder Rückgabe? So erreichst du MELYLA per E-Mail — wir melden uns kurzfristig zurück.
```

### `/pages/ruckversand`

**Titel** (24 Zeichen getippt, ergibt 33)

```
Rückversand und Rückgabe
```

**Beschreibung** (101 Zeichen)

```
Wie du einen Artikel an MELYLA zurücksendest: Ablauf, Adresse und was du dem Paket beilegen solltest.
```

### `/pages/widerruf-formular`

**Titel** (17 Zeichen getippt, ergibt 26)

```
Widerrufsformular
```

**Beschreibung** (84 Zeichen)

```
Das Formular zum Widerruf deiner Bestellung bei MELYLA — zum Ausfüllen und Absenden.
```

## Produkte

### `/products/melyla-anti-falten-schlaf-bh`

**Titel** (44 Zeichen getippt, ergibt 53)

```
Anti-Falten Schlaf BH gegen Dekolleté-Falten
```

**Beschreibung** (129 Zeichen)

```
Der Schlaf BH hält die Brüste nachts auseinander, damit im Dekolleté keine Knitterfalten entstehen. Auch für Seitenschläferinnen.
```

### `/products/anti-falten-kissen`

**Titel** (36 Zeichen getippt, ergibt 45)

```
Anti-Falten Kissen mit Gesichtsmulde
```

**Beschreibung** (124 Zeichen)

```
Das Kissen mit Aussparung: Die Wange liegt frei statt im Stoff. Gegen Kopfkissenfalten, für Seiten- und Rückenschläferinnen.
```

### `/products/2-x-melyla-anti-falten-bh`

**Titel** (47 Zeichen getippt, ergibt 47)

```
2× Anti-Falten Schlaf BH im Doppelpack | MELYLA
```

**Beschreibung** (127 Zeichen)

```
Zwei Schlaf BHs im Doppelpack — einer zum Tragen, einer zum Waschen. Gegen Schlaffalten im Dekolleté, in einer Größe für beide.
```

### `/products/antifalten-set-kissen-bh`

**Titel** (37 Zeichen getippt, ergibt 46)

```
Anti-Falten Set: Schlaf BH und Kissen
```

**Beschreibung** (96 Zeichen)

```
Schlaf BH und Anti-Falten Kissen zusammen im Set — für Dekolleté und Gesicht in derselben Nacht.
```

### `/products/anti-falten-schlaf-maske`

**Titel** (23 Zeichen getippt, ergibt 32)

```
Anti-Falten Schlafmaske
```

**Beschreibung** (109 Zeichen)

```
Die Schlafmaske dunkelt ab, ohne auf die Augenpartie zu drücken — für ruhigen Schlaf ohne Abdrücke am Morgen.
```

### `/products/kissenbezug-fur-anti-falten-kissen-grau`

**Titel** (44 Zeichen getippt, ergibt 53)

```
Kissenbezug für das Anti-Falten Kissen, Grau
```

**Beschreibung** (89 Zeichen)

```
Ersatzbezug in Grau für das MELYLA Anti-Falten Kissen — abnehmbar und bei 60 °C waschbar.
```

### `/products/satin-kissenbezug-fur-das-melyla-anti-falten-kissen`

**Titel** (29 Zeichen getippt, ergibt 38)

```
Satin Kissenbezug, Ivory Weiß
```

**Beschreibung** (113 Zeichen)

```
Satinbezug in Ivory Weiß für das MELYLA Anti-Falten Kissen — glatte Oberfläche, weniger Reibung an Haut und Haar.
```

### `/products/haar-gummie`

**Titel** (22 Zeichen getippt, ergibt 31)

```
Scrunchies im 4er-Pack
```

**Beschreibung** (94 Zeichen)

```
Vier weiche Scrunchies, die das Haar halten, ohne es zu knicken — auch für die Nacht geeignet.
```

### `/products/abschminkschwamme`

**Titel** (30 Zeichen getippt, ergibt 39)

```
ECO Abschminkpads im 10er-Pack
```

**Beschreibung** (94 Zeichen)

```
Waschbare Abschminkpads im 10er-Pack — wiederverwendbar statt Einweg, sanft zur Haut am Abend.
```

### `/products/schwamm`

**Titel** (21 Zeichen getippt, ergibt 30)

```
ECO Reinigungsschwamm
```

**Beschreibung** (92 Zeichen)

```
Reinigungsschwamm für die tägliche Gesichtsreinigung — sanft, waschbar und wiederverwendbar.
```

## Kategorien

### `/collections/anti-falten-produkte`

**Titel** (44 Zeichen getippt, ergibt 53)

```
Kundenlieblinge: die meistgekauften Produkte
```

**Beschreibung** (112 Zeichen)

```
Die MELYLA Produkte, die am häufigsten bestellt werden — Schlaf BH, Anti-Falten Kissen und das passende Zubehör.
```

### `/collections/einfach-wechseln-unsere-kissenbezuge`

**Titel** (39 Zeichen getippt, ergibt 48)

```
Kissenbezüge für das Anti-Falten Kissen
```

**Beschreibung** (98 Zeichen)

```
Passende Bezüge für das MELYLA Anti-Falten Kissen in Baumwolle und Satin — abnehmbar und waschbar.
```

### `/collections/neue-produkte`

**Titel** (41 Zeichen getippt, ergibt 50)

```
Zubehör: Schlafmaske, Haargummis und mehr
```

**Beschreibung** (106 Zeichen)

```
Schlafmaske, Scrunchies, Abschminkpads und Reinigungsschwamm — kleine Ergänzungen zur nächtlichen Routine.
```

## Blog

### `/blogs/news`

**Titel** (39 Zeichen getippt, ergibt 48)

```
Ratgeber: Falten, Schlaf und Hautpflege
```

**Beschreibung** (126 Zeichen)

```
Warum Falten im Schlaf entstehen, was dagegen hilft und wie du Dekolleté und Gesicht nachts schützt — die Beiträge von MELYLA.
```

### `/blogs/news/wie-entstehen-falten-im-dekollete-uberhaupt`

**Titel** (34 Zeichen getippt, ergibt 43)

```
Wie entstehen Falten im Dekolleté?
```

**Beschreibung** (122 Zeichen)

```
Schwerkraft, Liegeposition und dünne Haut: wie Falten zwischen den Brüsten entstehen und warum sie mit den Jahren bleiben.
```

### `/blogs/news/anti-falten-kissen-die-geheimwaffe-gegen-falten-im-schlaf`

**Titel** (44 Zeichen getippt, ergibt 53)

```
Anti-Falten Kissen: was es im Schlaf bewirkt
```

**Beschreibung** (134 Zeichen)

```
Acht Stunden Druck auf dieselbe Wange hinterlassen Spuren. Wie ein Anti-Falten Kissen das Gesicht entlastet und Schlaffalten vorbeugt.
```

### `/blogs/news/anti-falten-kissen-der-stille-helfer-nach-einer-schonheits-op`

**Titel** (43 Zeichen getippt, ergibt 52)

```
Anti-Falten Kissen nach einer Schönheits-OP
```

**Beschreibung** (136 Zeichen)

```
Nach einem Eingriff im Gesicht zählt jede Nacht. Warum die Schlafposition dabei mitspielt — und was ein Anti-Falten Kissen leisten kann.
```

### `/blogs/news/warum-sie-zeit-fur-die-eingewohnung-des-melyla-anti-falten-kissens-benotigen`

**Titel** (46 Zeichen getippt, ergibt 55)

```
Anti-Falten Kissen: die Eingewöhnung verstehen
```

**Beschreibung** (124 Zeichen)

```
Ein neues Kissen fühlt sich erst fremd an. Warum der Körper zwei bis vier Wochen braucht und woran du merkst, dass es passt.
```

### `/blogs/news/neues-jahr-neue-vorsatze-warum-ein-anti-falten-kissen-jetzt-sinnvoll-ist`

**Titel** (47 Zeichen getippt, ergibt 56)

```
Warum ein Anti-Falten Kissen jetzt sinnvoll ist
```

**Beschreibung** (135 Zeichen)

```
Gute Vorsätze scheitern am Aufwand. Was für die Haut nachts ohnehin passiert — und warum ein Anti-Falten Kissen wenig von dir verlangt.
```

### `/blogs/news/der-anti-falten-bh-fur-jede-altersklasse-und-viele-lebenssituationen-geeignet`

**Titel** (42 Zeichen getippt, ergibt 51)

```
Anti-Falten BH: für welches Alter er passt
```

**Beschreibung** (134 Zeichen)

```
Ob mit 30, 50 oder 70: Schlaffalten im Dekolleté entstehen in jedem Alter. Wann ein Anti-Falten Schlaf BH sinnvoll ist und wann nicht.
```

### `/blogs/news/der-perfekte-bh-brustvermessung-schnell-und-einfach`

**Titel** (47 Zeichen getippt, ergibt 56)

```
BH-Größe messen: Anleitung in wenigen Schritten
```

**Beschreibung** (116 Zeichen)

```
Unter- und Oberbrustweite messen, Größe ablesen, Sitz prüfen — eine einfache Anleitung, damit der BH wirklich passt.
```

### `/blogs/news/faltenreduktion-leicht-gemacht-ein-uberblick-uber-verschiedene-methoden`

**Titel** (40 Zeichen getippt, ergibt 49)

```
Faltenreduktion: welche Methoden es gibt
```

**Beschreibung** (122 Zeichen)

```
Creme, Massage, Behandlung, Vorbeugung: ein Überblick über die gängigen Wege gegen Falten — und wofür sich welcher eignet.
```

### `/blogs/news/diy-anleitung-naturliche-maske-gegen-falten-im-dekollete-selbst-herstellen`

**Titel** (42 Zeichen getippt, ergibt 51)

```
Maske gegen Dekolleté-Falten selbst machen
```

**Beschreibung** (108 Zeichen)

```
Eine natürliche Maske für das Dekolleté aus wenigen Zutaten — Anleitung, Anwendung und was sie leisten kann.
```

### `/blogs/news/tipps-zur-verbesserung-des-gesamterscheinungsbildes-ihrer-bruste`

**Titel** (44 Zeichen getippt, ergibt 53)

```
Dekolleté pflegen: was wirklich etwas bringt
```

**Beschreibung** (139 Zeichen)

```
Haltung, Pflege, Sonnenschutz und Schlafposition: was das Erscheinungsbild von Brust und Dekolleté beeinflusst — und was sich ändern lässt.
```

### `/blogs/news/warum-wir-unsere-decollete-vor-der-sonne-schutzen-sollten`

**Titel** (48 Zeichen getippt, ergibt 57)

```
Dekolleté vor der Sonne schützen: warum es zählt
```

**Beschreibung** (115 Zeichen)

```
Die Haut am Dekolleté ist dünn und bekommt viel Sonne ab. Was UV-Strahlung dort anrichtet und wie du gegensteuerst.
```

### `/blogs/news/%F0%9F%92%A7-hyaluronsaure`

**Titel** (45 Zeichen getippt, ergibt 54)

```
Hyaluronsäure: was sie kann, was nachts hilft
```

**Beschreibung** (132 Zeichen)

```
Hyaluronsäure polstert die Haut von außen. Gegen Falten, die durch die Liegeposition entstehen, braucht es zusätzlich etwas anderes.
```

## Was der Emoji-Titel angeht

Der Blogbeitrag liegt unter `/blogs/news/%F0%9F%92%A7-hyaluronsaure` — der
Handle besteht aus einem Wassertropfen-Emoji. Die Adresse **bleibt, wie sie
ist**: der Beitrag ist indexiert, und eine Adresse zu aendern kostet die
Platzierung. Nur der Titel im Suchmaschineneintrag wird ersetzt.

## Danach

Wenn die Felder gefuellt sind, in der Search Console unter *URL-Pruefung* fuer
die wichtigsten Seiten *Indexierung beantragen*. Google uebernimmt neue
Beschreibungen sonst erst beim naechsten regulaeren Besuch, und das dauert
Tage bis Wochen.

Gegenprobe, ob ein Feld angekommen ist:

```bash
curl -s https://melyla.de/products/anti-falten-kissen \
  | grep -o '<meta name="description" content="[^"]*"'
```
