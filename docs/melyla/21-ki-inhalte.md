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
| Vorher-Nachher entscheiden | Startseite und Set-Seite | Robin |
| Rückgabegarantie an „30 Nächte testen" angleichen | AGB Ziffer 8 (1) | Robin |
| E-Mail-Adresse in der Widerrufsbelehrung | AGB Ziffer 7 | Robin |

Die AGB liegen nicht im Theme, sondern im Shopify-Admin unter
**Einstellungen → Richtlinien → AGB**. Über GitHub kommt man dort nicht hin.
