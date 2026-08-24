# Entscheidungsvorlagen für den Termin am 12.08.2026

Fünf Vorlagen, jeweils mit Empfehlung. Sie sind so geschrieben, dass sie im Gespräch vorgelesen werden
können. Jede endet mit dem, was entschieden werden muss.

---

## A — Shop: Headless statt Theme-Bastelei

### Ausgangslage

Robin hat eine fertige, moderne Website gebaut. Der Versuch, sie als Shopify-Theme hochzuladen, ist
gescheitert (technische Gründe: [04-shopify-headless.md](04-shopify-headless.md)). Damit stehen zwei
Systeme nebeneinander: eine schöne Website ohne Kasse und ein funktionierender Shop, der schlecht aussieht.

### Vorschlag

**Die Website wird das Schaufenster, Shopify bleibt die Kasse.**

Die Next.js-Website läuft unter `melyla.de` und holt sich Produkte, Preise und Warenkorb live aus Shopify.
Wer auf „Kaufen" klickt, landet im **normalen, von Shopify gehosteten Checkout** — demselben, der heute
schon läuft.

### Jochens Sorge: „Funktionieren die Payment-Verbindungen dann noch richtig?"

Berechtigte Frage. Die Antwort ist eindeutig:

> **Wir fassen Zahlungen nicht an.** Es wird keine Zeile Zahlungslogik programmiert. Der Bezahlvorgang
> ist zu 100 % derselbe wie heute: Shop Pay, PayPal, Klarna, Kreditkarte, Betrugsprüfung, Steuerberechnung,
> Rechnungen, Gutscheine — alles bleibt bei Shopify und ändert sich um kein Detail.
>
> Wir tauschen nur das Schaufenster aus, nicht die Kasse.

Drei Punkte, die diese Sorge zusätzlich entschärfen:

1. **Der Shopify-Shop bleibt live**, erreichbar unter `shop.melyla.de`. Falls mit der neuen Website
   irgendetwas ist, wird der DNS-Eintrag zurückgedreht — in 10 Minuten ist der alte Zustand wieder da.
2. **Otto und Amazon sind überhaupt nicht betroffen.** Die laufen völlig unabhängig weiter.
3. **Die KI-Sichtbarkeit bei ChatGPT hängt am Shopify-Katalog, nicht am Theme** — sie ist durch den
   Umbau nicht gefährdet (siehe Vorlage D).

### Was es kostet, was es bringt

| | |
|---|---|
| Aufwand | ~2–3 Arbeitstage von Robin |
| Laufende Kosten | Vercel-Hosting kostenlos bis geringfügig; Shopify-Abo läuft unverändert weiter |
| Bringt | Eine Website, die auf dem Handy (62 % des Traffics!) tatsächlich verkauft; volle Freiheit bei Gestaltung, Content und Landingpages; Blog und Ratgeber-Inhalte für Suchmaschinen |
| **Ehrlicher Nachteil** | Shopify-Apps mit Storefront-Widgets (Bewertungs-Sterne, Upsell-Popups) funktionieren nicht mehr automatisch. Bewertungen müssen über die Schnittstelle eingebunden werden — Mehraufwand, aber lösbar |

### Alternative, falls Jochen zögert

Ein fertiges Premium-Theme kaufen (~250–350 € einmalig) und mit den MELYLA-Farben anpassen. Weniger
Technikrisiko, aber die gebaute Website landet im Müll und die Gestaltungsfreiheit bleibt begrenzt.

### Zu entscheiden

- [ ] Headless umsetzen? **Empfehlung: ja**
- [ ] Wenn ja: Termin für den Umzug — und wer schaltet das DNS um
- [ ] Was passiert mit dem alten Shopify-Theme (bleibt als Fallback live)

---

## B — Altes Kaltschaum-Kissen: raus aus dem Lager

### Ausgangslage

Das alte Kissen bindet Kapital und Lagerplatz, hat eine hohe Retourenquote und blockiert den Launch des
neuen italienischen Modells. Ein simpler Preissturz auf ~20 € funktioniert nicht: Bei jeder Retoure fallen
Rückversand, Prüfung und Wiederaufbereitung an. Bei 20 € Verkaufspreis kostet eine Retoure mehr, als zwei
verkaufte Kissen einbringen — **je mehr wir zum Ramschpreis verkaufen, desto mehr verlieren wir.**

### Die Zahlen sind jetzt da (Stand 17.08.2026)

| | Wert | Quelle |
|---|---|---|
| Lagerbestand | ~400 Stück | Interview 12.08. |
| Einkaufspreis | 12,00 € | Interview 12.08. |
| **Retourenquote (Kissen, Otto, 2 Jahre exakt)** | **45,3 %** | Otto-Vergleichsanalyse, nachgereicht 17.08. |
| Häufigster Retourengrund | „unbequem" | Interview 12.08. |
| Gebundenes Kapital | 400 × 12 € = 4.800 € | errechnet |

Die reale Retourenquote (45,3 %) liegt noch höher als in der ersten Grobrechnung angenommen — das
Kissen ist damit noch klarer der Problemfall, nicht der Zufallsausreißer.

**Rechenlogik:**

```
Deckungsbeitrag pro Verkauf = VK − EK − Versand − (Retourenquote × Retourenkosten)
```

| | Einzelverkauf 49,50 € | Ramsch 20 € | Bundle „Duo" 89 € |
|---|---|---|---|
| Verkaufspreis | 49,50 € | 20,00 € | 89,00 € |
| EK | −12,00 € | −12,00 € | −19,80 € (Kissen 12 € + BH 7,80 €) |
| Versand *(geschätzt, von Jochen zu bestätigen)* | −5,00 € | −5,00 € | −5,00 € |
| Retourenkosten *(geschätzt: EK + Hin-/Rückversand ≈ 20 €)* bei 45,3 % Quote | −9,06 € | −9,06 € | −4,00 € *(Annahme: Bundle senkt Retourenquote auf ~20 %, unbewiesene Hypothese)* |
| **Deckungsbeitrag** | **23,44 €** | **−6,06 €** | **60,20 €** |

**Zwei Zahlen in dieser Tabelle sind noch Schätzungen und offene Punkte an Jochen:** die Retourenkosten
pro Stück (Rückversand + Prüfung + ggf. Verlust) und ob ein Bundle die Retourenquote tatsächlich senkt —
das ist bisher eine plausible Annahme, keine gemessene Größe. Trotzdem bleibt die Kernaussage robust:
**Beim Ramschpreis ist jeder Verkauf ein Verlustgeschäft**, bei 45,3 % Retourenquote sogar deutlicher als
ursprünglich angenommen.

### Konkreter Bundle-Vorschlag: „Duo" statt „Schlaf-Set"

Von den zwei ursprünglich angedachten Varianten wird **„Duo" (Kissen + Anti-Falten-BH)** empfohlen,
nicht „Schlaf-Set" (Kissen + Satin-Bezug + Schlafmaske):

- **Der EK des Duos ist vollständig bekannt** (12 € + 7,80 € = 19,80 €) — die Kalkulation steht sofort.
  Für Satin-Bezug und Schlafmaske fehlen die Einkaufspreise noch, das Set bliebe bis dahin eine Schätzung.
- **Der BH ist das nachweislich stärkste Produkt** (74 % des Gesamtumsatzes, Otto-Conversion 6,4 %).
  Ihn ins Bundle zu nehmen, zieht Käuferinnen an, die dem BH bereits vertrauen, mit ins Kissen hinein —
  umgekehrt lernt eine Kissen-Käuferin den BH kennen.
- **Vorschlag Preis: 89 €** (statt Kissen 49,50 € + BH 49,50 € = 99 € einzeln) — 10 € Rabatt gegenüber
  Einzelkauf ist für die Kundin sichtbar attraktiv, senkt aber den Deckungsbeitrag gegenüber Einzelverkauf
  kaum, wie die Tabelle oben zeigt.

Warum Bundles grundsätzlich die Retourenquote senken können: Wer ein Set kauft, kauft eine Idee
(„besser schlafen"), nicht ein Einzelprodukt mit exakter Erwartung. Wer zwei Teile behält, schickt seltener
alles zurück. Das ist aber eine Hypothese — sie sollte nach den ersten 4–6 Wochen mit echten
Retourenzahlen überprüft werden, bevor man sich darauf verlässt.

*Vorteil:* Marge bleibt erhalten, bekanntes Produkt (BH) stützt das unbekanntere. *Nachteil:* dauert
länger als B2B, und der Abverkauf hängt weiter am Traffic — den wir gerade auf dem eigenen Shop nicht
haben. Otto/Amazon-Listings für das Bundle sind daher wichtiger als der eigene Shop, solange der noch
nicht umgebaut ist.

### Erweiterung (17.08.2026): Das „Super-Bundle" — Duo plus Restposten-Zubehör

Robin hat die Bundle-Idee erweitert: **BH + Kissen + alle vier fast unverkäuflichen Zubehörartikel**
(Schlafmaske, Scrunchie, Reinigungsschwamm, Abschminkpads) in einer Box, **verkauft ausschließlich über
die eigene Website** (nicht über Amazon/Otto — dort zu kompliziert/teuer). Details, Positionierung und
Kampagnenplan dazu stehen vollständig in
[07-goto-market-kampagnenplan.md](07-goto-market-kampagnenplan.md).

**Wertanker-Rechnung:**

| Bestandteil | Einzelpreis |
|---|---|
| BH | 49,50 € |
| Kissen | 49,50 € |
| Schlafmaske | 10,00 € |
| Scrunchie 4er-Pack | 4,40 € |
| Reinigungsschwamm | 14,40 € |
| Abschminkpads 10er-Pack | 6,80 € |
| **Gesamtwert** | **134,60 €** |

Arbeitspreis-Vorschlag: **99 €**. Die Einkaufspreise der vier Zubehörartikel sind noch unbekannt
(offener Punkt an Jochen) — die Deckungsbeitragsrechnung dazu wird nachgetragen, sobald sie vorliegen.
Bis dahin ist 99 € ein Arbeitspreis, kein finaler.

**„Duo" (89 €, oben) bleibt als einfachere Variante bestehen** — falls die Zubehör-Einkaufspreise die
Marge des Super-Bundles zu stark drücken, oder für Kundinnen, die kein Zubehör wollen. Das Super-Bundle
ist keine Ablösung des Duo, sondern die größere, zeitlich limitierte Ausbaustufe (siehe Positionierungs-
Frage „wirkt das billig?" — beantwortet in `07-goto-market-kampagnenplan.md`, Abschnitt 2).

### Option 2 — B2B / Restposten

Palettenweise abgeben an:

- Restpostenhändler (Restposten.de, B2B-Marktplätze, Palettenhändler)
- Kosmetik- und Beautystudios, Wellness-Hotels, Physiotherapien
- Otto-Sale oder eBay als Restposten-Listing

Realistisch sind 25–40 % vom Einkaufspreis. Klingt schmerzhaft — aber:

> **Der eigentliche Gewinn ist nicht der Erlös, sondern das Ende des Retourenrisikos.** Beim B2B-Verkauf
> kommt kein einziges Kissen zurück. Bei jedem Stück, das über den Shop rausgeht, kommt jedes vierte
> zurück und kostet zweimal Geld.

*Vorteil:* Kapital und Lagerplatz sofort frei, Weg frei für das neue Kissen. *Nachteil:* wenig Erlös.

### Empfehlung: beides, in dieser Reihenfolge

1. **Sofort:** Einzelverkauf des alten Kissens im Shop beenden. Es gibt es nur noch im Bundle.
2. **Parallel:** Zwei bis drei Restpostenhändler anschreiben und ein Angebot für die Gesamtmenge einholen —
   unverbindlich, kostet nichts außer drei E-Mails.
3. **Nach 6 Wochen entscheiden:** Was über Bundles abfließt, ist gute Marge. Der Rest geht als Palette raus.
4. **Harte Deadline setzen:** Am Tag des Launch des neuen Kissens ist das alte aus dem Shop verschwunden —
   egal, wieviel noch liegt. Zwei Anti-Falten-Kissen nebeneinander verwirren die Kundin und beschädigen
   die Bewertungen des besseren Produkts.

### Zu entscheiden

- [ ] Einzelverkauf beenden, nur noch Bundle? **Empfehlung: ja, sofort**
- [ ] Restpostenanfragen rausschicken? **Empfehlung: ja, diese Woche** — wer schreibt sie?
- [ ] Stichtag, an dem das alte Kissen aus dem Shop verschwindet: ______

---

## C — Zielgruppe: eine Hypothese, 90 Tage, dann Auswertung

### Ausgangslage

Bisher wurde angenommen: 50–60 Jahre, hat Geld, hat Zeit, hat das Problem. Robin zweifelt und nennt eine
zweite Möglichkeit: Frauen nach einer Brust-OP.

### Der wichtigste Punkt: Wir müssen nicht raten

**Die Antwort liegt in den Otto- und Amazon-Rezensionen** und wurde noch nie ausgewertet. Dort steht,
wer kauft, warum gekauft wird und in welchen Worten die Kundinnen über ihr Problem sprechen. Diese
Formulierungen sind gleichzeitig die besten Werbetexte, die wir bekommen können — geschenkt, von echten
Kundinnen.

**Aufgabe vor der Entscheidung:** Alle Rezensionen von Otto und Amazon exportieren, Robin wertet sie aus.
Das dauert einen Abend und ersetzt jede Diskussion.

### Die drei Hypothesen und was sie jeweils bedeuten

| Hypothese | Wenn sie stimmt, dann… |
|---|---|
| **A: 50–65, Beauty & Zeit** | Kanal: Facebook, Pinterest, E-Mail, Ratgeber-Inhalte über Google. Ton: hochwertig, respektvoll, kein Jugendwahn. Zahlart Rechnung ist Pflicht (siehe Checkout-Abbruch!) |
| **B: 30–45, präventiv** | Kanal: Instagram und TikTok. Ton: „Beauty-Sleep", Routine, Selbstfürsorge. Reels funktionieren. Niedrigerer Warenkorbwert, mehr Volumen |
| **C: Nach Brust-OP / medizinisch** | Kanal: Kliniken, Ärztinnen, Foren, Google-Suche mit hoher Kaufabsicht. Ton: sachlich, seriös. **Achtung: strenge rechtliche Grenzen bei Werbeaussagen** (HWG). Sehr hohe Zahlungsbereitschaft, kleiner Markt |

### Empfehlung

**Hauptzielgruppe A, Nebenspur C.** Begründung: A trägt bereits heute den Umsatz — die Wiederkäuferrate
von 11,76 % kommt von echten Kundinnen dieser Gruppe. C ist attraktiv, aber juristisch heikel und braucht
Multiplikatoren (Ärzte, Kliniken), also lange Vorlaufzeit. B ist die teuerste Spur, weil sie ohne
Werbebudget kaum Reichweite bekommt.

**Aber:** Erst die Rezensionen auswerten, dann festlegen. Wenn dort auffällig oft OP, Klinik oder Narbe
auftaucht, dreht sich die Empfehlung.

### Zu entscheiden

- [ ] Rezensionen exportieren und auswerten — bis wann, durch wen?
- [ ] Welche Hypothese wird die nächsten 90 Tage bedient: ______
- [ ] Wann wird gegengeprüft (Vorschlag: nach 90 Tagen)

---

## D — KI-Sichtbarkeit: der Vorsprung, den kaum jemand hat

### Ausgangslage — das ist die beste Nachricht des Termins

**ChatGPT empfiehlt MELYLA bereits von sich aus.** In einer Kaufberatung zu Anti-Falten-Schlaf-BHs
erscheint MELYLA als Nr. 2 der drei Favoriten, mit Preis, Bild und Link — direkt neben den Wettbewerbern
La Decollette und L'UNĒ. Ohne dass jemand etwas dafür getan hat.

Shopifys Agentic Storefronts sind aktiv: 8 Produkte synchronisiert, Richtlinien grün, ChatGPT, Copilot
und Shop angebunden. In 30 Tagen wurden 2 Käufer:innen weitergeleitet.

Immer mehr Menschen fragen inzwischen einen KI-Assistenten statt eine Suchmaschine. Wer dort empfohlen
wird, gewinnt — und MELYLA wird bereits empfohlen. **Das ist ein Startvorteil, den man nicht kaufen kann.**

### Das Problem, das die Daten zeigen

Die Suchanfragen, über die MELYLA im Shopify-Katalog gefunden wird, sehen so aus:

- „satinzucht bh schlaff für fettlose fettleibigkeit"
- „hagebutte schlaftranke melasse"

Das ist kaputtes Maschinen-Deutsch. Die **sinnvollen** Anfragen sind englisch:

- „breathable sleep bra for smooth neckline"
- „luxury hair ties for frizz"
- „MELYLA hair accessories"

Übersetzt: Die KI-Systeme verstehen unsere Produkte nur halb, weil die Produktdaten dünn und rein
deutsch sind. Sie empfehlen trotzdem — mit besseren Daten würden sie deutlich häufiger empfehlen.

### Maßnahmen (Aufwand gering, Wirkung hoch)

1. **Englische Produkttitel und -beschreibungen in Shopify pflegen.** Die relevanten Anfragen sind englisch.
2. **Produktdaten anreichern:** Material, Größentabelle, Schlafposition (Seiten-/Rückenschläferin),
   Anwendungsfall, Pflegehinweise, Zertifikate. Agenten empfehlen, was sie strukturiert verstehen —
   Marketingprosa hilft ihnen nicht, Fakten schon.
3. **Crawler-Signatur in Shopify anlegen** (unter Onlineshop → Crawler access). Laut Screenshot existiert
   noch keine — damit können vertrauenswürdige KI-Tools den Shop sauber auslesen.
4. **Bewertungen wichtiger nehmen.** Das Kissen zeigt „(0 Bewertungen)" auf der Produktseite. KI-Systeme
   und Menschen gewichten Bewertungen stark. Otto- und Amazon-Bewertungen in den Shop übernehmen,
   soweit rechtlich zulässig, und aktiv um neue bitten.

### Wichtig für die Shop-Entscheidung (Vorlage A)

Diese KI-Sichtbarkeit hängt **am Shopify-Produktkatalog, nicht am Theme.** Der Umbau auf die neue Website
gefährdet sie nicht — im Gegenteil: Bessere Produktdaten helfen beiden Seiten gleichzeitig.

### Zu entscheiden

- [ ] Produktdaten aufwerten (deutsch + englisch) — Robin übernimmt?
- [ ] Bewertungen von Otto/Amazon in den Shop übernehmen?
- [ ] Crawler-Signatur anlegen?

---

## E — Rollen & Entlastung: Jochen bekommt Zeit zurück

### Ausgangslage

Jochen hat Hauptjob, Airbnbs und ein einjähriges Kind. Er will Aufgaben abgeben und trotzdem den Überblick
behalten. Das sind zwei verschiedene Dinge — und beide sind erfüllbar.

### Vorschlag zur Aufteilung

| Bereich | Wer |
|---|---|
| Einkauf, Lieferanten, Produktentwicklung | **Jochen** |
| Buchhaltung, Steuern, Recht | **Jochen** |
| Website, Shop, Technik | **Robin** |
| Content: Instagram, TikTok, Reels, Blog | **Robin** (vollständig, inkl. Erstellung) |
| Auswertung und Reporting | **Robin** (automatisiert) |
| Preise, Sortiment, Budget über X € | **gemeinsam** |

### Was Robin automatisiert, damit Jochen nichts kontrollieren muss

1. **Wöchentlicher Zahlen-Report**, automatisch, jeden Montag: Umsatz aller Kanäle, Bestellungen,
   Retourenquote, Lagerbestand. Jochen liest 30 Sekunden und weiß Bescheid.
2. **Retourengrund-Auswertung** automatisiert statt händisch — die Grundlage jeder Produktentscheidung.
3. **Content-Produktion mit KI:** Reels, Bilder, Texte. Das Material liegt bereits im Projekt
   (Produktvideos, Lifestyle-Aufnahmen). Jochen muss dafür nichts tun und nichts freigeben, außer er will.
4. **Lagerbestands-Warnung**, bevor etwas ausverkauft ist.

### Der wichtigste Punkt: Entscheidungsfreiheit klären

Damit Robin nicht bei jeder Kleinigkeit nachfragen muss und Jochen trotzdem nicht das Gefühl hat, die
Kontrolle zu verlieren — für jeden Bereich vorab festlegen:

| Bereich | Robin entscheidet allein? |
|---|---|
| Website-Änderungen | ja / nein |
| Content und Posts | ja / nein |
| Preise und Rabatte | ja / nein / bis ____ € |
| Werbebudget | bis ____ € pro Monat |
| Neue Produkte ins Sortiment | ja / nein |

### Zu entscheiden

- [ ] Aufteilung wie vorgeschlagen? Anpassungen: ______
- [ ] Welche 3–5 Zahlen will Jochen wöchentlich sehen: ______
- [ ] Entscheidungsfreiheiten wie oben festgelegt
- [ ] Fester Termin-Rhythmus (Vorschlag: 20 Min. alle zwei Wochen)
