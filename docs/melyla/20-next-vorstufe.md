# Die Next.js-Vorstufe — was sie war und was aus ihr wurde

Gelöscht am 18.09.2026. Dieses Dokument hält fest, was in `src/` stand, wo jeder
Inhalt heute lebt und was vor dem Löschen geprüft wurde. Damit die Frage
„Stand da nicht mal was?" einmal und nicht jedes halbe Jahr beantwortet ist.

## Was es war

Eine vollständige Next.js-Website: Startseite, Produktseiten, Funnel,
Funktionsweise, Blog, vier Rechtsseiten. Gebaut im Mai 2026, zuletzt inhaltlich
angefasst am **25.08.2026**, insgesamt zwei Commits. Nie veröffentlicht — kein
`vercel.json`, kein Deployment, keine Domain zeigte darauf. `melyla.de` lief die
ganze Zeit auf Shopify.

Seit dem 19.08. stand sie in `STAND.md` unter „Nicht mehr aktiv" und diente nur
noch als visuelle Vorlage. Was aus ihr zu übernehmen war, ist im Liquid-Theme
angekommen.

**Warum jetzt weg:** 479 MB `node_modules`, veraltete Bewertungszahlen
(4.79 / 52 Bewertungen) in 49 Dateien, und eine `AGENTS.md`, die jeden
KI-Agenten auf `node_modules/next/dist/docs/` schickte statt auf das Theme.

## Vor dem Löschen geprüft

| Inhalt | Wo er heute lebt | Geprüft am 18.09.2026 |
|---|---|---|
| Rechtstexte (Impressum, AGB, Widerruf, Datenschutz) | Shopify-Richtlinienseiten | `/policies/legal-notice`, `/terms-of-service`, `/refund-policy`, `/privacy-policy` — alle HTTP 200. Das Impressum live ist **vollständiger** als die Fassung in `src/`: es trägt zusätzlich USt-IdNr. DE 343104871, Telefon und E-Mail |
| Fünf Blogartikel | Shop-Blog `/blogs/news/…` | Alle fünf live. **Aber:** dort in der alten Sie-Form von 2024. Die Neufassungen in Du-Form aus `src/lib/blog.ts` sind nie veröffentlicht worden und liegen jetzt in [19-blogtexte.md](19-blogtexte.md) |
| Produkttexte | `shopify-einfuegen/produktbeschreibung-*.html` und die Shopify-Produkte | Übertragen, siehe unten zur Materialangabe |
| FAQ | `sections/melyla-funnel-faq.liquid` und die Produktvorlagen | Acht Fragen, im Theme ausformuliert |
| Sieben Bewertungszitate | nirgends — **bewusst** | Das waren die erfundenen Beispielstimmen, am 25.08. entfernt. Die echten 79 liegen in `snippets/melyla-bewertungen-daten.liquid` |
| Bilder unter `public/` | bleiben liegen | `shopify-theme/preview/serve.mjs` serviert daraus die lokale Theme-Vorschau auf Port 4010, mit 17 fest verdrahteten Pfaden |

## Zwei Dinge, die mit der Datei fast verschwunden wären

### Die Faserzusammensetzung des BH war vertauscht — geklärt

`src/lib/products.ts` sagte:

```
95 % Baumwolle, 5 % Elasthan — OEKO-TEX® zertifiziert
```

Die Shopify-Produktbeschreibung und das Theme sagten:

```
Material: 82 % Elastan, 18 % Nylon
```

Beides war falsch. **Richtig ist (Robin, 18.09.2026):**

```
Obermaterial: 90 % Polyamid, 10 % Elasthan
```

Die Live-Angabe war für sich genommen schon unplausibel — ein Gewirk mit 82 %
Elasthan gibt es praktisch nicht; üblich ist genau das umgekehrte Verhältnis.
Die beiden Zahlen waren vertauscht und zusätzlich falsch gerundet.

**Richtiggestellt am 18.09.2026** an vier Stellen: `templates/product.melyla-bh.json`
(Merkmal 3), `sections/melyla-funnel-produktdetails.liquid` (Vorgabewert und
Kopfkommentar), `shopify-einfuegen/produktbeschreibung-bh.html` und
`shopify-einfuegen/produktbeschreibung-beauty-sleep-box.html`.

Geschrieben in den Bezeichnungen der EU-Textilkennzeichnungsverordnung
(Nr. 1007/2011, Anhang I): dort heißt die Faser **Polyamid** und **Elasthan** —
nicht „Polyamide" oder „Elastan". Die Zusammensetzung anzugeben ist Pflicht, und
sie muss stimmen.

**Noch offen:** Die **Shopify-Produktbeschreibung** des BHs trägt die alte Angabe
weiter. Sie steht im Shopify-Admin, nicht im Theme — dort muss sie von Hand
geändert werden. Das ist der Text, den Kundinnen heute lesen.

Die OEKO-TEX®-Angabe aus `src/` ist ersatzlos weg. Laut `STAND.md` liegen die
Zertifikate nicht vor; ohne Zertifikat darf das Siegel nicht genannt werden.

Die übrigen Angaben, falls sie gebraucht werden:

| Produkt | Material laut `src/lib/products.ts` |
|---|---|
| Anti-Falten Kissen | Memory-Foam-Kern, Kissenbezug aus 100 % Bio-Baumwolle |
| Anti-Falten Schlafmaske | Seide außen, weiches Schaumstoff-Futter |
| Scrunchie 4er-Pack | 88 % Polyester, 12 % Elasthan |
| ECO Reinigungsschwamm | Mikrofaser-Schwamm und Baumwolle |
| ECO Abschminkpads | 100 % Bio-Baumwolle, GOTS-zertifiziert |

Auch hier gilt: nur nennen, was belegt ist. „GOTS-zertifiziert" braucht ein
Zertifikat.

### Das „Nachtroutine-Set" zu 99,00 €

`src/lib/funnel-bh.ts` enthielt eine Angebotsvariante *Nachtroutine-Set* zu
99,00 € gegen 134,60 € (alle sechs Produkte je einmal). Der Konflikt mit der
Beauty Sleep Box zu 79,00 € ist in
[09-beauty-sleep-box.md](09-beauty-sleep-box.md) unter „Zwei offene Punkte"
beschrieben. Mit dem Löschen von `src/` ist der Konflikt **aufgelöst**: Es gibt
nur noch einen Preis, und die Box ist seit dem 15.09. ohnehin zurückgestellt.

### Die CLAIM-CHECK-Konvention

`src/lib/funnel-bh.ts` führte sie im Kopfkommentar ein: wirkungsbezogene
Aussagen markieren und vor dem Livegang gegen HWG und UWG prüfen. **Markiert
war in der Datei am Ende keine einzige Stelle** — die Konvention wurde nur
beschrieben, nicht angewendet. Angewendet wird sie in
[09-beauty-sleep-box.md](09-beauty-sleep-box.md); dort steht sie weiter.

## Was aus der Projektwurzel verschwunden ist

```
src/                  next.config.ts       next-env.d.ts
tsconfig.json         tsconfig.tsbuildinfo eslint.config.mjs
postcss.config.mjs    package.json         package-lock.json
node_modules/         AGENTS.md
public/{next,vercel,file,globe,window}.svg
```

`README.md` und `CLAUDE.md` sind nicht gelöscht, sondern neu geschrieben — sie
beschrieben vorher eine `create-next-app`-Vorlage.

**Geblieben:** `public/` (Theme-Vorschau), `.vscode/`, `docs/`, `exports/` und
die beiden Theme-Ordner. `shopify-theme/preview/` bringt eigene Abhängigkeiten
mit und ist von der Wurzel unabhängig; die drei Prüfer in `shopify-theme/bin/`
laufen mit blankem Node ohne jedes Paket.
