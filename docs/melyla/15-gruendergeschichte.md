# Die Gründergeschichte

Stand 25.08.2026. Steht auf der Seite *Warum MELYLA*, im Baustein
`shopify-einfuegen/warum-melyla.html`.

## Was ersetzt wurde

Vorher stand dort ein Satz über den Gründer „neben Hauptjob und kleinem Kind". Robin wollte
statt der Person eine erzählte Geschichte.

## Was erzählt wird — und woher es stammt

| Aussage auf der Seite | Grundlage |
|---|---|
| Unsere Gründerin kennt sich mit Haut, Wirkstoffen und Pflege aus | Robin, 25.08.2026 |
| Ihr fiel das Problem morgens im Spiegel auf | Robin, 25.08.2026 |
| Sie suchte und fand nichts für diese Stelle | Robin, 25.08.2026 |
| 2022, in Deutschland, selbst entworfen statt eingekauft | `00-briefing.md` |
| Vier Größen nach Unterbrustumfang, flache Nähte, kein Bügel | Produktdaten |
| Aus dem BH wurden Kissen, Maske, Haargummis, Schwamm, Abschminkpads | Sortiment im Shop |

**Umfang:** 226 Wörter. Sie wird kurz angesprochen, dann geht es um die Erfindung und darum,
wie das Sortiment gewachsen ist — so, wie Robin es vorgegeben hat.

## Drei Regeln, die dieser Text einhält

**Keine Namen.** Weder die Gründerin noch ihr Partner werden genannt. Sie hat der Geschichte
zugestimmt, möchte aber anonym bleiben. „Unsere Gründerin" ohne Namen ist zulässig und üblich.

**Kein Berufstitel.** Auf der Seite steht „kennt sich mit Haut aus" — nicht „Kosmetikerin",
„Dermatologin" oder „Expertin". Ein Berufstitel wäre eine Fachkunde-Angabe und müsste belegbar
sein.

**Keine erfundenen Jahreszahlen.** Im ganzen Text steht genau eine: 2022. Dass Kissen und Maske
später dazukamen, wird ohne Datum erzählt.

> **Warum das wichtig ist:** Eine erfundene Gründergeschichte, die als echt dargestellt wird,
> ist eine Irreführung nach § 5 UWG — dort ausdrücklich als Angabe über „die Person des
> Unternehmers" genannt und abmahnfähig. Diese Geschichte ist deshalb komplett wahr, nur
> anonym erzählt.

## Bilder

Die Gründerin bleibt anonym. **Deshalb darf neben der Geschichte kein Porträt stehen** — ein
Gesicht dort würde als „das ist sie" gelesen und wäre genau die Irreführung, die wir vermeiden.

Die vier Motive zeigen deshalb Szenen, keine Hauptperson. Format 4:3 quer, `.webp`, warmes
Morgenlicht, warme Neutraltöne, wie im Bildbriefing der anderen Motive. In **jeden** Prompt
gehört `no text, no watermark, no logo, no label`.

**G1 — bei „Der Morgen, an dem es auffiel"**

> Bathroom mirror in soft morning light, reflecting a woman's décolleté and shoulders only —
> head cropped out of frame above. Fine vertical lines visible on the skin, natural unretouched
> texture. Warm neutral bathroom in cream tones, quiet everyday atmosphere. Editorial lifestyle
> photography, horizontal 4:3.
> no text, no watermark, no logo, no label

**G2 — bei „Dagegen gibt es nichts?"**

> Bathroom shelf with a dozen skincare jars, serum bottles and tubes, arranged as in real daily
> use, soft window light from the side. No person in frame. Warm cream and beige tones, shallow
> depth of field, editorial still life photography, horizontal 4:3.
> no text, no watermark, no logo, no label

**G3 — bei „Also selbst entworfen"**

> Work table with soft nude-coloured jersey fabric, paper pattern pieces, measuring tape,
> scissors and a few hand-written notes, seen from above. Daylight from the left. No person in
> frame. Warm neutral palette, editorial still life photography, horizontal 4:3.
> no text, no watermark, no logo, no label

**G4 — bei „Aus einem Produkt wurde eine ganze Nacht"**

> Bedside table at night with a small lamp, a folded soft sleep bra, a sleep mask, a scrunchie
> and a contoured pillow visible on the bed behind. Warm low light, calm bedtime atmosphere.
> No person in frame. Cream and linen tones, editorial still life photography, horizontal 4:3.
> no text, no watermark, no logo, no label

### Einsetzen

Im HTML stehen an den vier Stellen Kommentare wie `<!-- Bildplatz 01: … -->`. Shopify entfernt
Kommentare beim Speichern möglicherweise — such deshalb im Zweifel nach der Überschrift des
jeweiligen Abschnitts und setze davor oder danach ein:

```html
<img src="BILD-URL" alt="BESCHREIBUNG"
     style="flex:1 1 260px;min-width:240px;width:100%;height:auto;display:block;border-radius:14px;">
```

Die Abschnitte sind als flexible Reihen gebaut — ein Bild rutscht dadurch von selbst neben den
Text und auf dem Handy darunter.

## Was Robin tun muss

1. `warum-melyla.html` in die Seite *Warum MELYLA* einsetzen (Inhaltsfeld → `</>`)
2. **Die Gründerin gegenlesen lassen.** Sie soll bestätigen, dass sie sich darin wiedererkennt —
   das ist der eigentliche Beleg dafür, dass die Geschichte stimmt
3. Bilder erzeugen und einsetzen, wenn gewünscht — die Seite trägt sich auch ohne
