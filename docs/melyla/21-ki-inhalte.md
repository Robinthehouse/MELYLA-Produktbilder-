# KI-erzeugte Bilder — Hinweis in den AGB und im Shop

Stand 18.09.2026. Robins Anliegen: Viele Bilder im Shop sind mit KI erstellt,
das soll in den AGB stehen.

**Kurz vorweg, damit die Erwartung stimmt:** Ein Satz in den AGB ist der
richtige Baustein, aber er wirkt nicht rückwirkend als Freibrief. Er stellt klar,
*woher die Bilder stammen* und *was verbindlich geschuldet ist*. Was er **nicht**
kann: eine Abbildung zulässig machen, die ein Ergebnis zeigt, das das Produkt so
nicht liefert. Dazu unten mehr unter „Was ein Hinweis nicht abdeckt".

Ich bin kein Anwalt. Der Text unten ist als Entwurf gedacht — wenn ohnehin
jemand über die AGB schaut, gehört er mit dazu.

---

## 1 · Neuer Absatz in den AGB

Einzusetzen unter **„2. Vertragsschluss"** als neuer Absatz **(5)**. Dort steht
er richtig, weil es um das geht, was vertraglich geschuldet ist — und die
Nummerierung der übrigen Abschnitte bleibt unangetastet.

> **(5)** Die Abbildungen in unserem Online-Shop dienen der Veranschaulichung.
> Ein Teil dieser Bilder — insbesondere Stimmungs- und Lifestyle-Aufnahmen sowie
> Illustrationen — wurde ganz oder teilweise mit Hilfe künstlicher Intelligenz
> erstellt oder bearbeitet; sie zeigen insoweit keine realen Personen.
> Verbindlich für die Eigenschaften der Ware sind die Angaben in der jeweiligen
> Produktbeschreibung.

**Warum der Satz so kurz ist.** Der naheliegende Zusatz — „handelsübliche
Abweichungen stellen keinen Mangel dar" — wäre gegenüber Verbrauchern
wirkungslos. Seit der Reform des Kaufrechts 2022 muss eine Abweichung von der
üblichen Beschaffenheit **eigens und ausdrücklich** vereinbart werden
(§ 476 Abs. 1 Satz 2 BGB); eine pauschale AGB-Klausel genügt dafür nicht. Ein
Satz, der ohnehin nicht trägt, schadet mehr als er nützt.

**Formulierungen, die ich bewusst nicht genommen habe:**

- *„… und dokumentieren keine tatsächlichen Anwendungsergebnisse."* Das wäre
  ehrlich — stünde aber im direkten Widerspruch zum Vorher-Nachher-Regler auf
  der Startseite, der „Sichtbare Veränderung nach 4 Wochen" verspricht. Zwei
  Aussagen auf derselben Website, die sich gegenseitig aufheben, sind schlechter
  als eine klare Entscheidung. Siehe Abschnitt 3.
- *„Alle Bilder wurden mit KI erstellt."* Stimmt nicht — Produktfotos,
  Presseausschnitt und Unboxing sind echt. Eine zu weite Angabe ist auch eine
  falsche.

## 2 · Sichtbarer Hinweis im Shop — am 18.09. eingebaut

In den AGB liest den Satz kaum jemand, und genau darauf kommt es beim
KI-Transparenzgebot an: Der Hinweis muss dort stehen, wo die Bilder begegnen.

Im Fußbereich steht deshalb jetzt ein vierter Block **„Transparenz"**:

> Einzelne Abbildungen auf dieser Website wurden mit Hilfe künstlicher
> Intelligenz erstellt oder bearbeitet.

Technisch: `sections/footer-group.json`, Block `transparenz` vom Typ *Text*.
Über den Editor jederzeit änder- oder abschaltbar.

**Hintergrund:** Die KI-Verordnung der EU (Verordnung 2024/1689) verlangt in
Artikel 50 Absatz 4, dass künstlich erzeugte oder manipulierte Bild-, Ton- und
Videoinhalte als solche offengelegt werden. Die Transparenzpflichten gelten seit
dem **2. August 2026**, sind also in Kraft. Gemeint sind vor allem Inhalte, die
echt wirken sollen — und genau das trifft auf fotorealistische Aufnahmen von
Menschen zu.

### Nachtrag 21.09. — der Hinweis hängt jetzt am Bild, nicht nur im Fußbereich

Für den Fußzeilen-Block gilt derselbe Einwand wie für die AGB: Wer oben ein
Vollbild sieht, hat unten noch nicht gelesen. Die IT-Recht-Kanzlei formuliert
die Anforderung als **„spätestens bei erster Wahrnehmung"** und **„vom übrigen
Inhalt abgesetzt"**; die Wettbewerbszentrale empfiehlt in ihrem Leitfaden vom
Februar 2026, im Zweifel zu kennzeichnen.

Zwei Sektionen können den Hinweis deshalb jetzt selbst tragen — jeweils über
ein Häkchen **„KI-Hinweis"** und ein Textfeld daneben (Vorgabe
„KI-generiertes Bild"):

| Sektion | Wo der Hinweis sitzt |
|---|---|
| *MELYLA Hero* | unten rechts über dem Hintergrundbild, nur bei „Bild als Hintergrund" |
| *MELYLA Video-Karussell* | oben rechts auf jeder Kachel, die ein Bild trägt |

Beide sind als kleine Pille auf `rgba(61, 38, 69, 0.86)` gesetzt — feste
dunkle Fläche statt Textschatten, damit der Kontrast auf hellen wie dunklen
Motiven derselbe bleibt. Im Karussell hängt der Hinweis zusätzlich per
`aria-describedby` am Bild, damit ihn auch ein Screenreader mitnimmt; das
verlangt die Kanzlei ausdrücklich („alternativ beschreibbar").

**Das Häkchen ist nicht vorbelegt.** Es gehört gesetzt, sobald ein Bild einen
fotorealistischen Menschen zeigt, der mit KI erzeugt wurde. Ein Produktfoto
oder eine Grafik braucht es nicht.

Der Fußzeilen-Block bleibt daneben stehen. Er deckt die Bilder ab, die keine
eigene Kennzeichnung tragen.

## 3 · Was ein Hinweis nicht abdeckt

Drei Stellen im Shop trägt der Satz aus Abschnitt 1 **nicht**. Sie sind keine
Frage der Kennzeichnung, sondern der Aussage.

### Der Vorher-Nachher-Regler

Auf Startseite und Set-Seite, Bilder `Vorher.jpg` und `Nachher.jpg`. Es ist
**dasselbe Foto**: gleiche Haare, gleiche Kette, gleiche Strickjacke, gleiche
Haltung — im zweiten Bild ist die Haut geglättet und ein BH hinzugefügt.
Darüber steht „Sichtbare Veränderung nach 4 Wochen" und „zeigt messbare
Ergebnisse".

Das ist eine Angabe über ein Anwendungsergebnis. Ob sie zutrifft, hängt nicht
daran, ob darunter „mit KI erstellt" steht — sondern daran, ob das Ergebnis so
erzielt wurde. Ein retuschiertes Vorher-Nachher-Paar ohne dokumentierten
Anwendungsfall ist nach § 5 UWG angreifbar, und „messbare Ergebnisse" ist eine
Messung behauptet, die es nicht gibt.

**Drei Wege, absteigend nach Aufwand:**

1. **Echte Bilder beschaffen.** Zwei Kundinnen, gleiches Licht, gleicher
   Ausschnitt, Einwilligung schriftlich, Zeitraum dokumentiert. Das wäre der
   stärkste Abschnitt der ganzen Seite.
2. **Zur Illustration umdeuten.** Aussage entschärfen („So entstehen
   Schlaffalten — und so liegt die Haut ohne Druck"), „messbare Ergebnisse"
   streichen, sichtbar als Illustration kennzeichnen. Dann zeigt der Regler die
   *Mechanik*, nicht ein *Ergebnis*.
3. **Abschnitt abschalten.** Auf der BH-Seite ist er bereits deaktiviert.

### Die vier Kundenfotos in „MELYLA Kundenstimmen"

Sandra, Petra, Melanie und Kerstin tragen Porträtfotos aus dem Dateinamen-Muster
`Frau_35_Jahre__heic.webp`. Die Bilder zeigen keine realen Kundinnen. Robin hat
am 18.09. entschieden, dass die Stimmen bleiben (siehe
[17-bewertungen.md](17-bewertungen.md)) — dann ist das eine bewusste Entscheidung
und hier nur der Vollständigkeit halber vermerkt.

### Wirkaussagen allgemein

„Beugt Schlaffalten vor" ist belegbar mechanisch. „Glättet" oder „strafft" wäre
es nicht — deshalb steht es seit dem 25.08. nicht mehr im Theme. Das bleibt
unabhängig von der Bildherkunft.

### Die Lifestyle-Aufnahmen vom 21.09. — und wo sie nicht hindürfen

Drei neue Motive aus Higgsfield liegen in `public/images/lifestyle/`:

| Datei | Motiv |
|---|---|
| `MELYLA_Lifestyle_Editorial_Frau-Satin-Dekollete_3x4.webp` | Satinbluse, Kinn angeschnitten, warme Neutraltöne |
| `MELYLA_Lifestyle_Editorial_Frau-Weisses-Top-Spiegel_3x4.webp` | weißes Top, Spiegelaufnahme, Torso |
| `MELYLA_Lifestyle_Portrait_Frau-Kamerablick-Schwarz_3x4.webp` | Porträt mit Blick in die Kamera |

Das dritte Motiv weicht bewusst vom Bildbriefing ab — dort stehen „keine
Model-Blicke direkt in Kamera" und Zielgruppe Anfang 40. Robin hat es am
21.09. trotzdem freigegeben. **Daran hängt eine Auflage, und die ist nicht
Geschmack, sondern § 5 UWG:**

> Makellos glatte, junge Haut darf nicht in Sichtweite einer Wirkaussage oder
> des Vorher-Nachher-Reglers stehen. Sonst liest sie sich als Ergebnis, das
> das Produkt nicht liefert — und genau das deckt der KI-Hinweis nicht ab.

Deshalb sitzt der Lifestyle-Streifen auf der Startseite **hinter dem Angebot
und den Stimmen**, nicht in der Nähe des Reglers auf Position 12.

Und: **kein Name, kein Zitat, keine Sterne an diesen Bildern.** Sobald ein
Vorname oder ein Erfahrungsbericht danebensteht, ist es eine erfundene
Verbraucherbewertung — UWG Anhang Nr. 23, derselbe Punkt, der in
[17-bewertungen.md](17-bewertungen.md) für die vier Kundenfotos markiert ist.
Die Lifestyle-Bilder sind Stimmungsbilder, sonst nichts.

---

## 4 · Zwei Dinge in den AGB, die beim Lesen aufgefallen sind

Nicht Teil der Frage, aber sie stehen im selben Dokument und sind beide konkret.

### Die Rückgabegarantie widerspricht der Werbung

Der Shop wirbt an 25 Stellen mit **„30 Nächte testen, sonst Geld zurück"**.
Ziffer 8 Absatz 1 der AGB knüpft die freiwillige Rückgabegarantie aber daran,
dass die Ware **„vollständig und originalverpackt … in ungebrauchtem und
unbeschädigtem Zustand"** zurückkommt.

Wer den BH 30 Nächte trägt, erfüllt diese Bedingung nicht. Die Werbung
verspricht damit etwas, das die AGB ausschließen. Entweder die Klausel an das
Versprechen anpassen („auch bei Gebrauch im Rahmen des Probetragens") oder die
Werbeaussage ändern. Ersteres ist der Grund, warum das Versprechen wirkt.

### Die Widerrufsbelehrung nennt keine gültige E-Mail-Adresse

In Ziffer 7 steht als Kontakt: *„Melyla (Jülicher Str. 70c, Jochen@Melyla)"*.
`Jochen@Melyla` ist keine vollständige Adresse. Die Widerrufsbelehrung muss
Anschrift, Telefonnummer und E-Mail-Adresse korrekt enthalten; ist sie
fehlerhaft, verlängert sich die Widerrufsfrist nach § 356 Abs. 3 BGB auf bis zu
zwölf Monate und vierzehn Tage. Im Impressum steht die richtige Adresse
(`info@Melyla.de`) samt Telefonnummer — die gehört auch hierher.

Nebenbei: Die Abschnitte sind zweimal mit **8** nummeriert („Freiwillige
Rückgabegarantie" und „Transportschäden"), und in Ziffer 6 gibt es zwei
Absätze **(3)**.

---

## 5 · Was zu tun ist

| | Wo | Wer |
|---|---|---|
| Absatz (5) aus Abschnitt 1 einsetzen | Shopify-Admin → Richtlinien → AGB, unter „2. Vertragsschluss" | Robin |
| Fußzeilen-Hinweis | erledigt, im Theme | — |
| KI-Hinweis am Bild | erledigt, im Theme — Häkchen je Sektion setzen | Robin |
| Die drei Lifestyle-Bilder hochladen und im Editor wählen | Inhalte → Dateien, dann *MELYLA Lifestyle* einblenden | Robin |
| Vorher-Nachher entscheiden | Startseite und Set-Seite | Robin |
| Rückgabegarantie an „30 Nächte testen" angleichen | AGB Ziffer 8 (1) | Robin |
| E-Mail-Adresse in der Widerrufsbelehrung | AGB Ziffer 7 | Robin |

Die AGB liegen nicht im Theme, sondern im Shopify-Admin unter
**Einstellungen → Richtlinien → AGB**. Über GitHub kommt man dort nicht hin.
