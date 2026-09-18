# Bildbriefing: Funnel-Sektionen BH-Produktseite

Stand 19.08.2026. Gehört zum Funnel-Umbau der Seite `/produkte/anti-falten-schlaf-bh`.

## Status: erledigt (19.08.2026)

Alle sechs Motive sind mit **Higgsfield (Modell `soul_2`, 4:3, 2K)** erzeugt und liegen unter
`public/images/problem/` als `.webp` (1600 × 1200). Die alten Platzhalter liegen als Sicherung in
`public/images/problem/_platzhalter-alt/`.

Von zwölf erzeugten Bildern wurden sechs ausgewählt. Aussortiert wurden Varianten mit
**erfundenen Marken- und Wasserzeichen** — Higgsfield setzt gern Text auf Cremetiegel und
Bademäntel. Wer nachgeneriert: „no text, no watermark, no logo, no label" ausdrücklich in den
Prompt schreiben und das Ergebnis prüfen.

**Noch offen:** In Shopify müssen die Dateien unter *Inhalte → Dateien* hochgeladen und im
Theme-Editor je Kachel ausgewählt werden. Das Theme kann Bilder nicht per Push mitbringen.

---

## Ursprüngliches Briefing

## Warum diese Bilder der wichtigste Hebel sind

Der Shop konvertiert mit 1,02 %, der Abbruch passiert vor dem Warenkorb (26.769 Sitzungen →
542 Add-to-Cart). Die Seite hat bisher nie gezeigt, *was das Problem überhaupt ist* — sie
startete direkt mit der Lösung. Die Problem-Sektion schließt genau diese Lücke. Solange dort
Platzhalter stehen, ist der Umbau nur zur Hälfte wirksam: **Text allein erzeugt keine
Betroffenheit, Bilder tun es.**

## Format & Stil (gilt für alle Motive)

| Vorgabe | Wert |
|---|---|
| Seitenverhältnis | 4:3 (quer) |
| Auflösung | mind. 1200 × 900 px |
| Dateiformat | `.webp`, Qualität ~82 |
| Lichtstimmung | weiches, natürliches Morgen- oder Fensterlicht |
| Farbwelt | warme Neutraltöne, Creme, Leinen — passend zu `#FAF7FF` / `#F2E8F8` |
| Modelalter | 40–60 Jahre, echte Haut, keine Retusche der Falten |
| Tonalität | ruhig und respektvoll, **niemals** Scham oder Defizit inszenieren |

**Wichtig:** Keine Gesichter in Nahaufnahme bei den Problem-Motiven. Es geht um das Dekolleté
und um Wiedererkennung, nicht um eine identifizierbare Person mit einem "Makel".

## Die sechs Motive

### P1 — `public/images/problem/seitenlage.webp`
Zeigt die Ursache: Kompression in Seitenlage.

> Woman in her early 50s asleep on her side in a bed with cream linen sheets, photographed
> from above at a slight angle, soft morning light from a window. Focus on the décolleté area
> where the chest is visibly compressed and the skin creased. Face partially out of frame or
> softly out of focus. Natural unretouched skin, warm neutral color palette, editorial beauty
> photography, shallow depth of field.

### P2 — `public/images/problem/laengsfalten.webp`
Das Ergebnis in der Nahaufnahme. **Kein Gesicht.**

> Close-up macro photograph of the décolleté skin of a woman in her 50s, showing fine vertical
> lines running between the collarbone and chest. Neutral soft daylight from the side, no
> makeup, no retouching, visible natural skin texture. Cropped so no face is visible. Warm
> neutral tones, clinical yet respectful editorial style.

### P3 — `public/images/problem/sonne.webp`
Der verstärkende Faktor.

> Woman in her 50s sitting outdoors on a terrace in direct afternoon sunlight, wearing a
> V-neck top, sunlight falling directly onto her décolleté. Shot from the side, face turned
> away or cropped. Visible sun exposure on the chest area, natural skin texture. Warm golden
> light, lifestyle editorial photography.

### P4 — `public/images/problem/spiegel.webp`
Der Moment der Selbstwahrnehmung — die emotionale Brücke.

> Woman in her early 50s standing in a bright bathroom, looking down at her own décolleté in
> the mirror, one hand lightly touching her chest. Thoughtful, calm expression — not sad or
> ashamed. Soft diffused morning light, warm neutral bathroom, cream tones. Editorial
> lifestyle photography, shot from behind over her shoulder so the mirror shows her.

### S1 — `public/images/problem/creme-fail.webp`
Für die Sektion "Warum bisher nichts geholfen hat".

> Elegant jar of face cream on a nightstand next to a folded linen cloth, soft morning light,
> a woman's hand in the background applying cream to her décolleté, slightly out of focus.
> Warm cream and lavender tones, minimal styling, editorial beauty still life, 4:3.

### S2 — `public/images/problem/morgens-glatt.webp`
Das Gegenstück zu P2 — Kontrastbild im Lösungsteil. **Gleiche Kameraeinstellung wie P2**,
damit der Unterschied lesbar wird.

> Close-up of a woman's décolleté in the morning, skin smooth and relaxed, wearing a soft
> nude-colored sleep bra with a wide comfortable band. Soft natural morning light, no
> retouching, natural skin texture. Cropped so no face is visible. Same framing and lighting
> as the "vertical lines" close-up for direct comparison. Warm neutral tones.

## Ablauf

1. Motive generieren (Higgsfield, Midjourney o. ä.) oder fotografieren.
2. Auf 4:3 zuschneiden, als `.webp` exportieren.
3. Dateien unter exakt denselben Namen in `public/images/problem/` ablegen.
4. Im Shopify-Editor die BH-Seite öffnen und das Bild im Abschnitt prüfen. Lokal geht es auch über die Theme-Vorschau: `cd shopify-theme/preview && npm start` (Port 4010).

## Offene Punkte

- **Bildrechte klären**, falls KI-generierte Personen verwendet werden — für Werbeanzeigen auf
  Meta/Google gelten zusätzliche Anforderungen an die Kennzeichnung.
- P2 und S2 müssen von derselben Person und in derselben Einstellung stammen, sonst wirkt der
  Vergleich unglaubwürdig und wäre irreführend.
- Bei KI-Bildern gilt: Sie dürfen **kein Behandlungsergebnis suggerieren**, das es so nicht
  gibt. Der Vorher-Nachher-Slider auf der Seite steht ohnehin unter Vorbehalt (siehe
  Claim-Prüfung im Funnel-Umbau).
