# Bildbriefing: eine Frau, ein BH, drei Bilder

**Stand 21.09.2026.** Für die Lösung-Passage auf der Startseite
(`melyla-funnel-loesung`, Abschnitt `loesung`). Ziel: dieselbe Frau in allen
drei Bildern, im **echten** MELYLA-BH, und es soll aussehen wie fotografiert.

Die bisherigen drei Bilder bleiben, bis die neuen da sind. Sie heißen
`Woman_lying_in_bed_2K_…`, `MELYLA_BH_Cream-Schwarz_Lifestyle_Frau-Yoga-…`
und `Women_in_Bed_Anti-Wrinkle_Bra.png`.

---

## 1 · Warum die jetzigen Bilder nach KI aussehen

Nicht „irgendwie generisch" — es sind vier benennbare Fehler, und drei davon
sind Prompt-Fehler, die sich abstellen lassen.

| Was man sieht | Warum es verrät |
|---|---|
| Das Cremetöpfchen trägt **„AURUM"** | Erfundene Marke. Higgsfield setzt Beschriftungen auf alles, was nach Produkt aussieht — steht seit `12-bildbriefing-mechanik.md` im Briefing und ist am 19.09. schon einmal passiert |
| Gleichmäßiger Schleier über dem ganzen Bild | Kein Licht hat eine Richtung. Echte Fotos haben eine Quelle und einen Abfall |
| Porenlose, gleichfarbige Haut | Beauty-Retusche ohne Fotografen. Echte Haut hat Poren, Rötungen, Textur |
| Der Schriftzug auf dem BH | Frei erfunden. Euer Produkt trägt ein gewebtes Etikett — zu sehen auf `public/images/products/bh-cream-frontal.webp` |

Der vierte Punkt ist der teuerste: **Das ist nicht euer BH.** Solange das
Modell ihn jedes Mal neu erfindet, zeigt die Lösung-Passage ein Produkt, das
es nicht gibt.

---

## 2 · Der Weg: Elements, nicht Soul

Higgsfield kennt zwei Verfahren für „immer dieselbe Person".

**Soul** trainiert eine Identität aus 5–20 Fotos. Sehr gesichtstreu — aber
**pro Bild ist nur eine Referenz erlaubt.** Der echte BH käme nicht mit, das
Modell würde ihn weiter erfinden. Genau der Fehler von oben.

**Elements** speichert Referenzen, die sich **kombinieren** lassen: eine für
die Frau, eine für den BH, beide im selben Prompt. Das ist der einzige Weg,
bei dem sie tatsächlich euer Produkt trägt.

→ **Elements.** Modell dazu: **Nano Banana Pro** (`nano_banana_pro`). Es
nimmt mehrere Referenzen und hält Produktdetails am besten. Soul V2 kann
Elements nicht verwenden.

---

## 3 · Schritt A — den BH als Referenz sichern

In Higgsfield: **Elements → Create**, hochladen:

```
public/images/products/bh-cream-frontal.webp
```

Das ist ein echtes Studiofoto, frontal, ganzer BH, Etikett lesbar, Cremecups
auf schwarzem Rahmen mit Racerback. Name des Elements:

```
melyla-bh
```

Wer zusätzlich die Rückenpartie braucht, legt ein zweites an aus
`bh-detail-racerback.jpg`. Für die drei Bilder unten reicht das erste.

---

## 4 · Schritt B — die Frau erzeugen und festschreiben

Vier Anläufe, dann eine auswählen. **Erst die ausgewählte** wird als Element
gesichert — danach ist das Gesicht gesetzt und darf nicht mehr wechseln.

Format 4:3 quer. Modell: Nano Banana Pro.

```
Editorial portrait photograph of a woman in her mid-thirties, sitting on the
edge of an unmade bed in a bright bedroom, early morning. She is looking down
and slightly away from the camera, not at the lens. Relaxed posture, one
shoulder lower than the other.

Unretouched skin with visible pores and texture, faint fine lines at the
corners of the eyes, a little natural redness on the cheeks and chest. No
makeup beyond a trace of concealer. Hair loosely tied, a few strands out of
place, not styled.

Single source of soft daylight from a window on the left, clear falloff into
shadow on the right side of the frame. Warm neutral palette, cream and linen,
matte finish, fine film grain.

Shot on a 50mm lens at f/2, shallow but not dreamy depth of field, slight
imperfection in focus. Documentary feeling, not advertising.
```

Ans Ende **jedes** Prompts gehört der Negativblock aus Abschnitt 6.

Ist eine gewählt: **Elements → Create** mit genau diesem Bild, Name

```
melyla-model
```

Der Name ist eine Dateibezeichnung, nichts weiter. **Er darf nie auf der
Seite auftauchen** — sobald ein Vorname an einem dieser Bilder steht, ist es
eine erfundene Verbraucherbewertung nach UWG Anhang Nr. 23. Siehe
[21-ki-inhalte.md](21-ki-inhalte.md).

---

## 5 · Schritt C — die drei Bilder

Beide Elements in jedem Prompt. In der Oberfläche wählt man sie aus, dann
setzt Higgsfield `@melyla-model` und `@melyla-bh` selbst ein.

Alle drei: **4:3 quer, mindestens 1600 × 1200.**

### Bild 1 — „Er trennt, statt zu drücken"

Zeigt die Mechanik: der Mittelsteg liegt zwischen den Brüsten.

```
@melyla-model asleep on her side in bed at night, wearing @melyla-bh exactly
as shown in the reference: cream cups, black frame, racerback. The centre
panel of the bra sits between the breasts and holds them apart. Head resting
on a pillow, eyes closed, one hand near her face.

Warm low lamplight from a bedside lamp behind her, the rest of the room
falling into shadow. Linen bedding, creased, slept in. No objects on the
nightstand.

Unretouched skin, visible pores, natural shine where the light hits. Shot on
a 35mm lens, handheld, faint grain. Looks like a photograph taken in a real
bedroom, not a set.
```

**Kein Nachttisch-Stillleben.** Das Cremetöpfchen im jetzigen Bild ist genau
die Stelle, an der die erfundene Marke entstanden ist.

### Bild 2 — „Du spürst ihn nach zwei Nächten nicht mehr"

Zeigt den Tragekomfort: Racerback, flache Nähte, kein Haken im Rücken.

```
@melyla-model seen from behind, sitting on the edge of a bed in the morning,
wearing @melyla-bh exactly as shown in the reference. The racerback cut and
the flat seams across her upper back are clearly visible. She is turned
three-quarters away, reaching for something out of frame.

Daylight from a window on the left, soft and directional, shadows on the
right. Warm neutral bedroom, linen, matte finish.

Unretouched skin on the back and shoulders, visible texture, a mole or two,
no smoothing. Shot on an 85mm lens at f/2.8, fine film grain.
```

### Bild 3 — „Und morgens siehst du den Unterschied"

**Hier ist die Grenze.** Das Bild zeigt: keine frischen Abdrücke am Morgen.
Es zeigt **nicht** straffere oder geglättete Haut. Der Unterschied steht
wörtlich in `12-bildbriefing-mechanik.md`:

> „Dieses Video zeigt glatte Haut ohne frische Abdrücke — nicht ‚gestraffte'
> Haut und keinen Vorher-Nachher-Effekt. Eine sichtbare Hautveränderung zu
> suggerieren wäre eine belegpflichtige Wirkaussage."

```
@melyla-model standing at a bedroom window in the morning, just woken up,
wearing @melyla-bh exactly as shown in the reference. She is looking out of
the window, away from the camera. Calm, unposed, mid-movement.

The skin across the chest is even and free of fresh sleep creases — ordinary
morning skin, not smoothed or lifted. Fine lines around the eyes and on the
neck are visible and unretouched.

Bright indirect daylight from the front left, gentle falloff. Warm neutral
palette, cream, linen, matte finish, fine film grain. Shot on a 50mm lens,
documentary feeling.
```

---

## 6 · Der Negativblock — an jeden Prompt

```
no text, no watermark, no logo, no label, no brand name, no lettering,
no jars, no bottles, no packaging, no cosmetic products in frame,
no plastic skin, no skin smoothing, no beauty glow, no airbrushing,
no ring light, no symmetrical studio lighting, no HDR,
no oversaturation, no cyan or blue tint,
no stock photo smile, no posed model look, no direct eye contact with camera
```

Die erste Zeile ist Pflicht und reicht trotzdem nicht: Am 19.09. wurde ein
fünftes Motiv wegen eines erfundenen Etiketts aussortiert, **obwohl `no label`
im Prompt stand.** Jedes Ergebnis muss angesehen werden.

**Wenn der NSFW-Filter abweist:** Nicht die Szene ändern, die Formulierung.
Am 19.09. lief derselbe Job durch, nachdem die Beschreibung der Dekolleté-Haut
neutral statt detailliert formuliert war.

---

## 7 · Nach dem Erzeugen

1. **Ansehen**, jedes einzelne: erfundene Schrift? Ist es wirklich euer BH —
   Cremecups, schwarzer Rahmen, Racerback, gewebtes Etikett? Sieht die Haut
   nach Haut aus?
2. **Umwandeln:** `cwebp -q 82 -resize 1600 0 <datei> -o <ziel>.webp`
3. **Benennen** nach dem Schema aus `public/images/products/`:
   `MELYLA_BH_Cream-Schwarz_Nutzungsshot_Frau-Seitenlage-Nacht_4x3.webp`
4. **Ablegen** in `public/images/products/` **und** hochladen unter
   *Inhalte → Dateien*. Es gibt keine Automatik dazwischen.
5. Im Editor in *MELYLA Lösung* als Bild 1, 2 und 3 auswählen.
6. **Alt-Texte setzen.** `step_1_image_alt` und `step_2_image_alt` sind
   derzeit leer, `step_3_image_alt` steht auf Englisch. Beschreiben, nicht
   versprechen: „Frau schläft auf der Seite im MELYLA Schlaf BH" — nicht
   „glattes Dekolleté nach vier Wochen".
7. **KI-Hinweis.** Die Lösung-Sektion hat noch kein Häkchen dafür; solange
   trägt der Fußzeilen-Block die Kennzeichnung. Kommt die Frau zusätzlich
   ins Hero oder ins Karussell, dort das Häkchen setzen —
   [21-ki-inhalte.md](21-ki-inhalte.md).

---

## 8 · Was danach möglich wird

Steht `melyla-model` einmal als Element, ist sie wiederverwendbar: fürs
Karussell, fürs Hero, für die Kissen-Seite, für Anzeigen. Das ist der
eigentliche Gewinn — nicht drei Bilder, sondern ein Gesicht, das die Marke
durchhält.

Für Anzeigen auf Meta und Google gelten **eigene** Kennzeichnungsvorgaben,
unabhängig von dem, was im Shop steht. Noch ungeprüft.

---

## 9 · Aus denselben Elements: die drei Clips

Nachgetragen 21.09.2026, nachdem die Lösung-Passage auf
`melyla-funnel-loesung-scroll` umgestellt wurde (siehe
[STAND.md](STAND.md)). Jedes Kapitel dieser Sektion kann einen Clip tragen,
der **dem Scrollen folgt** statt von selbst zu laufen.

**Der Kniff: nichts wird doppelt erzeugt.** Die drei Bilder aus Abschnitt 5
sind gleichzeitig die Vorschaubilder der Sektion **und** die Startbilder der
Clips. Wer Abschnitt 5 abgearbeitet hat, ist hier schon zur Hälfte fertig.

### Die Bewegung je Kapitel

| Kapitel | Bewegung | Ablauf in der Sektion |
|---|---|---|
| **01** Er trennt, statt zu drücken | Sie liegt auf dem Rücken und dreht sich auf die Seite. Der Mittelsteg hält die Brüste auf Abstand, die Haut am Dekolleté bleibt glatt | **Hin und zurück.** Runterscrollen dreht sie, hochscrollen dreht sie zurück — der Clip braucht nur die Hinbewegung |
| **02** Du spürst ihn nach zwei Nächten nicht mehr | Langsame Kamerafahrt über Racerback, flache Nähte, kein Haken, kein Bügel | Einmal durch |
| **03** Und morgens siehst du den Unterschied | Nacht wird Morgen, sie steht auf, geht ans Fenster, das Licht steigt | Einmal durch |

Weil der Clip mit dem Scroll läuft, trifft der zweite Häkchen-Punkt eines
Kapitels von selbst die Mitte des Clips und der dritte das Ende. Dafür braucht
es keine Einstellung — nur eine Aufnahme, deren Bewegung an den richtigen
Stellen sitzt.

### Erzeugen

Für Kapitel 01 zusätzlich ein **Endbild**: dieselbe Szene, sie liegt auf der
Seite. Als Referenz das Startbild mitgeben, damit Licht und Bettzeug stimmen.

Dann Bild zu Video, mit **Start- und Endbild**: `flux_3_video` oder
`seedance_2_5` nehmen beide beides, und genau das hält die Bewegung auf der
Bahn. Kapitel 02 und 03 brauchen nur ein Startbild plus Bewegungsanweisung.

```
4,5–5 Sekunden · 1080p · ohne Ton · 4:3 quer
```

Der Negativblock aus Abschnitt 6 gilt unverändert weiter.

**Die Grenze aus Abschnitt 5 gilt für Kapitel 03 erst recht.** Bewegtbild
verführt dazu, eine Veränderung zu *zeigen*. Der Clip zeigt den Morgen, nicht
die Haut: kein Straffen, kein Glätten, kein Vorher-Nachher. Nur: keine frischen
Abdrücke.

### Umwandeln — jedes Bild ein Keyframe

Ohne das kann der Browser beim Scrollen nicht an jede Stelle springen, und der
Clip steht still. Auf dem Rechner fällt das kaum auf, auf dem Handy sofort —
genau so ist das Startseiten-Video am 20.09. ausgefallen.

```bash
ffmpeg -i quelle.mp4 -an -vf "scale=960:-2:flags=lanczos" \
       -c:v libx264 -preset slow -crf 24 \
       -g 1 -keyint_min 1 -sc_threshold 0 \
       -pix_fmt yuv420p -movflags +faststart \
       exports/scroll-video/melyla-loesung-k1.mp4
```

Danach **nachmessen** — unter 2,5 MB je Datei bleiben:

```bash
ffprobe -v error -show_entries format=duration,size -of default=nw=1 datei.mp4
```

Ein Kachelformat reicht für Handy und Rechner. Zwei Fassungen wie beim
Startseiten-Video braucht es hier nicht, weil die Bühne eine Kachel ist und
kein randloses Bild.

### Einsetzen

1. Als **MP4** hochladen unter *Inhalte → Dateien*. Eine `.mov` ergibt über
   `melyla-video-original` eine tote Adresse.
2. Dort den Link kopieren und im Editor in **Video-Adresse** des Kapitels
   einsetzen — so wie kopiert. Den Rest macht die Sektion.
3. Das Bild desselben Kapitels **muss trotzdem gesetzt sein**: Zu einer Adresse
   kennt Shopify kein eigenes Vorschaubild, und ohne das bleibt die Fläche
   weiß, bis der Clip geladen ist.
4. Kapitel 01 auf **„Hin und zurück"** stellen, 02 und 03 auf „Einmal durch".
5. **KI-Hinweis anhaken.** Die Sektion hat das Häkchen, es setzt den Hinweis
   auf jedes Bild — Artikel 50 KI-Verordnung.
6. Auf einem echten iPhone in Safari wischen. Bewegt sich nichts, steht die
   umgerechnete Adresse im Feld statt der unveränderten.
