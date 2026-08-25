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
