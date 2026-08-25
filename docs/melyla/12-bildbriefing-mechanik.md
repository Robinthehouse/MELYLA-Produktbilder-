# Bildbriefing: Die Mechanik zeigen

Stand 25.08.2026. Drei Videos, drei Standbilder. Ziel: **In fünfzehn Sekunden verstehen, was
nachts passiert und was das Produkt daran ändert** — ohne einen Satz zu lesen.

## Warum Bewegtbild und nicht noch ein Foto

Das Problem ist eine *Bewegung*: Man dreht sich auf die Seite, und dabei schiebt sich Haut
zusammen. Ein Standbild zeigt das Ergebnis, aber nicht die Ursache. Wer die Drehung sieht,
versteht den Mechanismus sofort — und braucht die Erklärung darunter nicht mehr.

Die bestehenden sechs Motive aus `08-bildbriefing-funnel.md` zeigen den *Zustand*. Diese hier
zeigen den *Vorgang*. Sie ersetzen die alten nicht, sie ergänzen sie.

---

## Der wichtigste Hinweis vorweg

**Keine Schrift ins Bild generieren.** Higgsfield setzt erfundene Marken, Wasserzeichen und
Beschriftungen auf alles, was nach Produkt aussieht — das hat schon beim letzten Briefing die
Hälfte der Ergebnisse unbrauchbar gemacht.

Die Erklärtexte („ca. 5 kg Kopfgewicht", „hier faltet die Haut") kommen **als Textebene in die
Sektion**, nicht ins Bild. Vorteile: gestochen scharf auf jedem Display, im Theme-Editor
änderbar, kein Nachgenerieren wenn eine Zahl sich ändert.

In **jeden** Prompt gehört deshalb:

```
no text, no watermark, no logo, no label, no brand name, no lettering
```

---

## Format und Stil (gilt für alle Motive)

| Vorgabe | Wert |
|---|---|
| Videos | 9:16 hochkant, 5–8 Sekunden, ohne Ton |
| Standbilder | 4:3 quer, mind. 1600 × 1200 px, `.webp` Qualität ~82 |
| Licht | weiches Morgenlicht vom Fenster, keine harten Schatten |
| Farbwelt | warme Neutraltöne, Creme, Leinen — passend zu `#FAF7FF` / `#F2E8F8` |
| Modelalter | 40–60, echte Haut, **keine Retusche der Falten** |
| Tonalität | ruhig und sachlich, **niemals** Scham oder Defizit inszenieren |
| Modell | Higgsfield `soul_2`, 2K |

**Dieselbe Darstellerin in V1 und V2.** Sonst ist der Vergleich wertlos — und irreführend.

---

## Die drei Videos

Higgsfield arbeitet am zuverlässigsten mit **Startbild plus Bewegungsanweisung**. Deshalb steht
zu jedem Video beides.

### V1 — Ohne BH: die Haut schiebt sich zusammen

Der Kern des ganzen Funnels. Das ist das Video, das Robin beschrieben hat.

**Startbild**

> Woman in her late 40s lying on her back in bed, cream linen sheets, wearing a simple
> light-colored camisole with a wide neckline. Soft morning light from a window on the left.
> Camera positioned above and slightly to the side, framing chest and shoulders. Face relaxed,
> eyes closed, partially out of frame at the top. Natural unretouched skin with visible
> texture. Warm neutral color palette, editorial beauty photography, shallow depth of field,
> vertical 9:16. no text, no watermark, no logo, no label, no brand name, no lettering

**Bewegung**

> She slowly rolls from her back onto her side toward the camera. As she turns, the chest
> shifts and the skin of the décolleté visibly compresses and creases into vertical folds. Slow,
> natural sleeping movement. Camera stays completely still. 6 seconds.

Textebene in der Sektion: **„So liegt die Haut sechs bis acht Stunden."**

### V2 — Mit BH: die Haut bleibt glatt

Gleiche Person, gleiche Kamera, gleiche Bewegung. Nur der BH ist neu.

**Startbild**

> Same woman, same bed, same camera angle and lighting as before, now wearing a soft
> nude-colored sleep bra with a wide comfortable band and no underwire. Lying on her back,
> relaxed. Natural unretouched skin, warm neutral tones, vertical 9:16. no text, no watermark,
> no logo, no label, no brand name, no lettering

**Bewegung**

> She slowly rolls from her back onto her side toward the camera, exactly the same movement as
> before. The bra holds the chest gently in place — the skin of the décolleté stays smooth, no
> folds appear. Slow, natural sleeping movement. Camera stays completely still. 6 seconds.

Textebene: **„Mit dem Schlaf BH bleibt sie, wo sie hingehört."**

### V3 — Das Kissen: die Wange liegt frei

**Startbild**

> Close side view of a contoured memory foam pillow in a white cotton cover on a bed, with a
> visible recess cut into the side. A woman in her 50s is lowering her head toward it, seen
> from the side, hair loosely falling. Soft morning window light, warm neutral bedroom, cream
> and linen tones. Natural skin texture, vertical 9:16. no text, no watermark, no logo, no
> label, no brand name, no lettering

**Bewegung**

> Her head settles into the pillow's side recess. The cheek and jaw come to rest inside the
> cutout without being pressed flat — the skin of the face stays relaxed and uncompressed.
> Very slow, calm settling motion. Camera stays completely still. 6 seconds.

Textebene: **„Der Druck geht ins Kissen. Nicht in die Haut."**

---

## Die drei Standbilder

Auf dem Handy spielt nicht jedes Video automatisch ab, und bei aktiviertem Datensparmodus gar
keins. Jedes Video braucht deshalb ein Standbild, das dieselbe Aussage allein trägt.

| # | Datei | Inhalt |
|---|---|---|
| **B1** | `public/images/mechanik/drehung-ohne.webp` | Der Moment aus V1, in dem die Falte am deutlichsten ist |
| **B2** | `public/images/mechanik/drehung-mit.webp` | Derselbe Moment aus V2, Haut glatt |
| **B3** | `public/images/mechanik/kissen-mulde.webp` | Kopf liegt in der Mulde, Wange frei |

Am einfachsten als Einzelbild aus dem fertigen Video ziehen — dann stimmen Person, Licht und
Bildausschnitt garantiert überein.

**B1 und B2 müssen exakt dieselbe Einstellung haben.** Unterschiedliche Kamerawinkel oder
Lichtstimmungen machen aus einem Vergleich eine Behauptung.

---

## Ablauf

1. V1 generieren, Ergebnis prüfen: keine Schrift, keine Wasserzeichen, Falte wirklich sichtbar
2. Aus V1 das Startbild für V2 ableiten (gleiche Person!) und V2 generieren
3. V3 generieren
4. Aus jedem Video ein Standbild ziehen, auf 4:3 zuschneiden, als `.webp` speichern
5. In Shopify unter *Inhalte → Dateien* hochladen
6. Im Theme-Editor im Abschnitt **MELYLA Video-Karussell** je Kachel Video und Standbild wählen

Das Theme kann Bilder nicht per Push mitbringen — Schritt 5 und 6 gehen nur im Admin.

---

## Offene Punkte

- **V1 und V2 müssen dieselbe Frau zeigen.** Sonst ist der Vergleich unglaubwürdig und
  wettbewerbsrechtlich angreifbar.
- **Kein Behandlungsergebnis suggerieren.** Die Videos zeigen, was *im Moment des Liegens*
  passiert — nicht, dass Falten verschwinden. Das ist der entscheidende Unterschied zwischen
  einer zulässigen Mechanik-Darstellung und einer belegpflichtigen Wirkaussage.
- **Kennzeichnung KI-generierter Inhalte** bei Anzeigen auf Meta und Google prüfen — dort gelten
  eigene Vorgaben, unabhängig davon, was im Shop steht.

---

# Teil 2: Die vier Schleifen der Problem-Sektion

Stand 25.08.2026. Ersetzen die vier Standbilder in der Problem-Sektion auf der Startseite.

## Was hier anders ist als bei den drei Videos oben

Die Mechanik-Videos oben **erzählen** etwas: Eine Bewegung beginnt und endet woanders. Diese
vier hier **laufen endlos**. Eine gerichtete Bewegung kann das nicht — beim Sprung vom letzten
zum ersten Bild zuckt es sichtbar.

Deshalb beschreibt jeder dieser Prompts eine Bewegung, die **dort endet, wo sie beginnt**:
ein Atemzug, wandernde Blätterschatten, eine Hand, die sich hebt und wieder sinkt. Der Rest
des Bildes steht vollkommen still, die Kamera sowieso.

**Weniger Bewegung ist hier besser.** Diese Videos laufen im Hintergrund einer Textkarte. Sie
sollen Leben andeuten, nicht die Aufmerksamkeit vom Text wegziehen.

| Vorgabe | Wert |
|---|---|
| Seitenverhältnis | **4:3 quer** — die Kartenfläche ist fest 4:3 |
| Länge | 3–5 Sekunden |
| Ton | keiner, die Videos laufen stumm |
| Erstes und letztes Bild | identisch, sonst ist der Übergang sichtbar |
| Format | **MP4**, nicht GIF — ein GIF derselben Länge ist zwanzigmal so groß und kann nur 256 Farben, was bei Hauttönen sichtbar streift |
| Modell | Higgsfield `soul_2`, 2K |

Es gilt weiter alles aus Teil 1: weiches Morgenlicht, warme Neutraltöne, Modelalter 40–60,
echte unretuschierte Haut, ruhige Tonalität. Und in **jedem** Prompt:

```
no text, no watermark, no logo, no label, no brand name, no lettering
```

> **Warum das hier besonders zählt:** Auf Karte 1 steht gerade ein Canva-Grafik-GIF mit
> „Falsches Kissen" ins Bild eingebrannt. Es zeigt außerdem ein Kissenproblem, während der
> Kartentext vom Dekolleté handelt. Genau das soll S1 ersetzen.

---

## S1 — „Nacht für Nacht in Seitenlage"

Kennzahl auf der Karte: **6–8 Std. · gefaltet pro Nacht**

**Startbild**

> Woman in her late 40s asleep on her side in bed with cream linen sheets, photographed from
> above at a slight angle. Soft morning light from a window. Framing centred on the décolleté,
> where the chest is compressed and the skin creased into vertical folds. Face softly out of
> focus at the edge of the frame. Natural unretouched skin with visible texture, warm neutral
> color palette, editorial beauty photography, shallow depth of field, horizontal 4:3.
> no text, no watermark, no logo, no label, no brand name, no lettering

**Bewegung**

> Only quiet breathing. The chest rises and falls once, very slowly, and returns exactly to the
> starting position. The creased skin of the décolleté stays creased throughout. Nothing else
> moves. Camera completely static. Seamless loop, first and last frame identical. 4 seconds.

---

## S2 — „Aus dem Knick wird eine Falte"

Kennzahl: **ab 25 · lässt Kollagen nach**. **Kein Gesicht im Bild.**

**Startbild**

> Close-up macro photograph of the décolleté skin of a woman in her 50s, showing fine vertical
> lines running between the collarbone and chest. Soft neutral daylight from the side, no
> makeup, no retouching, visible natural skin texture and fine hairs. Cropped so no face is
> visible. Warm neutral tones, clinical yet respectful editorial style, horizontal 4:3.
> no text, no watermark, no logo, no label, no brand name, no lettering

**Bewegung**

> Almost imperceptible movement: one slow shallow breath, and the daylight shifts very slightly
> as if a cloud passes, then returns. The vertical lines in the skin remain unchanged and in
> focus the whole time. Camera completely static. Seamless loop, first and last frame identical.
> 4 seconds.

---

## S3 — „Die Sonne macht es schlimmer"

Kennzahl: **Zone 2 · nach dem Gesicht**

**Startbild**

> Woman in her 50s sitting outdoors on a terrace in direct afternoon sunlight, wearing an open
> V-neck linen shirt, sunlight falling directly onto her décolleté. Shot from the side, face
> turned away and partly cropped. Visible sun exposure and natural skin texture on the chest.
> Warm golden light, dappled shade from a tree at the edge of the frame, lifestyle editorial
> photography, horizontal 4:3.
> no text, no watermark, no logo, no label, no brand name, no lettering

**Bewegung**

> Dappled leaf shadows drift slowly across her décolleté as the tree moves in a light breeze,
> and the linen collar shifts a few millimetres. She stays completely still. The shadow pattern
> returns to where it started. Camera completely static. Seamless loop, first and last frame
> identical. 5 seconds.

---

## S4 — „Und irgendwann fällt es dir auf"

Kennzahl: **Leise · aber jeden Tag**. Der emotionale Anker der Sektion.

**Startbild**

> Woman in her early 50s standing in a bright bathroom, looking down at her own décolleté in
> the mirror, arms relaxed at her sides. Thoughtful, calm expression — not sad, not ashamed.
> Soft diffused morning light, warm neutral bathroom in cream tones. Shot from behind over her
> shoulder so the mirror shows her upper body. Editorial lifestyle photography, horizontal 4:3.
> no text, no watermark, no logo, no label, no brand name, no lettering

**Bewegung**

> Her right hand rises slowly and rests lightly on her collarbone, pauses for a moment, then
> lowers back to her side exactly as it started. Her gaze stays on her reflection. Nothing else
> moves. Camera completely static. Seamless loop, first and last frame identical. 5 seconds.

---

## Ablauf

1. Motive erzeugen, jedes Ergebnis prüfen: keine Schrift im Bild, Übergang vom letzten zum
   ersten Bild ohne Sprung
2. Auf 4:3 zuschneiden, als **MP4** exportieren, stumm, unter 1 MB je Datei
3. Aus jedem Video ein Einzelbild als `.webp` ziehen — das wird das Standbild
4. In Shopify unter *Inhalte → Dateien* hochladen, je Datei den Link kopieren
5. Im Theme-Editor, Abschnitt **MELYLA Problem**, je Karte:
   *Bild* = das Standbild, *Video-Link* = der kopierte Link

Ohne Video-Link bleibt die Karte beim Standbild — du kannst die vier also einzeln nachrüsten.

## Wie sich die Videos auf der Seite verhalten

- Sie starten erst, wenn die Karte ins Bild scrollt, und halten an, sobald sie es verlässt.
  Vier gleichzeitig laufende Videos wären auf dem Handy sonst spürbar.
- Wer im Betriebssystem **Bewegung reduzieren** eingestellt hat, sieht nur das Standbild.
- Bis das Video geladen ist, steht das Standbild — es gibt keinen leeren Kasten.

---

# Exportvorgaben für alle Videodateien

Gilt für beide Videosektionen. Zwei Regeln, die im laufenden Betrieb Ärger gemacht haben:

## MP4, niemals MOV

Das Unboxing lag als `.mov` auf dem CDN und wurde als `video/quicktime` ausgeliefert.

> **Chrome und Firefox spielen das nicht ab.** Beide kennen nur `video/mp4`, `video/webm` und
> `video/ogg`. Safari spielt es — deshalb fällt es beim Testen auf dem Mac nicht auf, während
> die Kachel auf Android leer bleibt.

Shopify wandelt Dateien aus *Inhalte → Dateien* **nicht** um. Was hochgeladen wird, wird
ausgeliefert.

**Umwandeln:** QuickTime öffnen → *Ablage → Exportieren als → 1080p*. Ergebnis ist eine `.mp4`
mit H.264. Kostenlos geht HandBrake, Preset *Web → Gmail Large 3 Minutes 720p30*.

## Unter 1 MB je Clip

Die drei Videos auf der BH-Seite wogen 7,9 + 6,0 + 3,7 MB — zusammen **17,6 MB**. Bei
automatischer Wiedergabe lädt jede Besucherin das mit.

| Vorgabe | Wert |
|---|---|
| Auflösung | 720 × 1280 reicht — die Kachel ist auf dem Handy rund 104 px breit |
| Bildrate | 30 fps |
| Länge | 3–8 Sekunden |
| Ton | für Schleifen keiner; bei Sprache im Clip bleibt der Ton drin |
| Zielgröße | **unter 1 MB** |

HandBrake mit *720p30* und Qualität RF 26 trifft das zuverlässig.

## Standbild nicht vergessen

Jede Kachel braucht ein Standbild. Es erscheint sofort, das Video lädt erst beim Hineinscrollen.
Ohne Standbild sieht man bis dahin eine leere Fläche. Am einfachsten ein Einzelbild aus dem
fertigen Video ziehen — dann stimmen Ausschnitt und Farben garantiert.
