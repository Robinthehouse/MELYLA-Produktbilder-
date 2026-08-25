/**
 * Funnel-Inhalte für den Anti-Falten Schlaf BH.
 *
 * Aufbau nach PAS (Problem → Agitation → Solution) mit anschliessender
 * Beweisführung, Einwandbehandlung und Angebot. Reihenfolge der Sektionen
 * siehe src/app/produkte/[slug]/page.tsx.
 *
 * CLAIM-CHECK: Alle so markierten Stellen sind bewusst verkaufsstark getextet
 * und vor dem Live-Gang rechtlich zu prüfen (HWG/UWG). Siehe docs/melyla.
 */

export interface ProblemTile {
  image: string;
  alt: string;
  title: string;
  text: string;
  stat: string;
  statLabel: string;
}

export interface FailCard {
  title: string;
  text: string;
}

export interface SolutionStep {
  number: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  bullets: string[];
}

export interface Review {
  name: string;
  age: number;
  location: string;
  rating: number;
  size: string;
  duration: string;
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SizeRow {
  size: string;
  unterbrust: string;
  entspricht: string;
}

export interface OfferOption {
  key: string;
  title: string;
  subtitle: string;
  price: number;
  compareAt: number;
  perUnitLabel: string;
  badge?: string;
  highlight?: boolean;
  includes: string[];
}

/* ---------------------------------------------------------------- Problem */

export const problemIntro = {
  eyebrow: "Das Problem",
  title: "Was in acht Stunden Schlaf mit deinem Dekolleté passiert",
  subtitle:
    "Du siehst es morgens im Spiegel — und bis mittags ist es wieder weg. Noch.",
};

export const problemTiles: ProblemTile[] = [
  {
    image: "/images/problem/seitenlage.webp",
    alt: "Frau schläft in Seitenlage, das Dekolleté wird zusammengedrückt",
    title: "Nacht für Nacht in Seitenlage",
    text: "In Seitenlage legt sich die eine Brust auf die andere. Die Haut am Dekolleté wird gefaltet — und in genau dieser Position stundenlang gehalten. Nicht einmal, sondern jede Nacht.",
    stat: "6–8 Std.",
    statLabel: "gefaltet pro Nacht",
  },
  {
    image: "/images/problem/laengsfalten.webp",
    alt: "Nahaufnahme eines Dekolletés mit senkrechten Längsfalten",
    title: "Aus dem Knick wird eine Falte",
    text: "Mit Anfang 20 glättet sich die Haut morgens von allein. Weil die Kollagenproduktion nachlässt, dauert das jedes Jahr etwas länger — bis die Linie irgendwann bleibt.",
    stat: "ab 25",
    statLabel: "lässt Kollagen nach",
  },
  {
    image: "/images/problem/sonne.webp",
    alt: "Dekolleté in direkter Sonneneinstrahlung",
    title: "Die Sonne macht es schlimmer",
    text: "Das Dekolleté bekommt fast so viel Sonne ab wie dein Gesicht — wird aber selten so gepflegt. UV-Strahlung schwächt genau die Fasern, die die Haut nachts zurückfedern lassen.",
    stat: "Zone 2",
    statLabel: "nach dem Gesicht",
  },
  {
    image: "/images/problem/spiegel.webp",
    alt: "Frau betrachtet ihr Dekolleté nachdenklich im Spiegel",
    title: "Und irgendwann fällt es dir auf",
    text: "Nicht durch einen Schock im Spiegel. Sondern daran, dass der Ausschnitt, den du jahrelang geliebt hast, seit Monaten hinten im Schrank hängt.",
    stat: "Leise",
    statLabel: "aber jeden Tag",
  },
];

export const painChecklist = {
  title: "Erkennst du dich wieder?",
  items: [
    "Morgens siehst du Linien im Dekolleté, die abends noch nicht da waren.",
    "Du schläfst auf der Seite — und hast schon erfolglos versucht, es dir abzugewöhnen.",
    "Dein Gesicht cremst du täglich. Dein Dekolleté praktisch nie.",
    "Du greifst inzwischen öfter zum höher geschlossenen Oberteil.",
    "Cremes hast du probiert. Die Linien sind geblieben.",
  ],
  conclusion:
    "Drei oder mehr Haken? Dann liegt es nicht an deiner Pflege — sondern an deiner Schlafposition.",
};

/* ------------------------------------------------- Warum bisher nichts half */

export const failIntro = {
  eyebrow: "Warum bisher nichts geholfen hat",
  title: "Du hast nicht zu wenig getan. Du hast am falschen Punkt angesetzt.",
  subtitle:
    "Drei Dinge, die fast jede Frau zuerst probiert — und warum sie an Schlaffalten vorbeigehen.",
};

export const failCards: FailCard[] = [
  {
    title: "Creme wirkt auf der Haut. Gefaltet wird sie darunter.",
    text: "Auch die beste Pflege ändert nichts daran, dass die Haut acht Stunden lang mechanisch geknickt wird. Sie versorgt die Oberfläche, während der Knick jede Nacht neu gesetzt wird.",
  },
  {
    title: "Das Seidenkissen schützt dein Gesicht — nicht dein Dekolleté.",
    text: "Ein Kissen verringert Reibung an der Wange. An dein Dekolleté kommt es gar nicht heran. Dort ist auch nicht Reibung das Problem, sondern der Druck der eigenen Brust.",
  },
  {
    title: "Auf dem Rücken schlafen hält niemand durch.",
    text: "Der Vorsatz hält genau bis zum Einschlafen. Danach entscheidet dein Körper — und der dreht sich vielfach pro Nacht, ohne dich zu fragen.",
  },
];

/* ---------------------------------------------------------------- Lösung */

export const solutionIntro = {
  eyebrow: "Die Lösung",
  title: "Ein BH, der genau eine Aufgabe hat",
  subtitle:
    "Nicht stützen. Nicht formen. Nur verhindern, dass dein Dekolleté nachts zusammenfällt.",
};

export const solutionSteps: SolutionStep[] = [
  {
    number: "01",
    title: "Er trennt, statt zu drücken",
    text: "Der weiche Mittelsteg legt sich zwischen die Brüste und hält sie sanft auf Abstand. Die Haut am Dekolleté bleibt glatt gespannt — auch wenn du dich auf die Seite drehst.",
    image: "/images/products/bh-detail-schulter.jpg",
    alt: "Detailaufnahme des weichen Schulterbands am MELYLA Schlaf BH",
    bullets: [
      "Wirkt in Seiten- und in Rückenlage",
      "Kein Bügel, kein Druck auf das Gewebe",
      "Bleibt in Position, auch wenn du dich drehst",
    ],
  },
  {
    number: "02",
    title: "Du spürst ihn nach zwei Nächten nicht mehr",
    text: "Racerback-Schnitt, flache Nähte, keine Bügel, kein Haken im Rücken. Atmungsaktiv genug, um ihn auch im Sommer die ganze Nacht zu tragen.",
    image: "/images/products/bh-detail-racerback.jpg",
    alt: "Racerback-Rückenansicht des MELYLA Schlaf BH",
    bullets: [
      "Flache Nähte, die nicht drücken",
      "Atmungsaktives Material für die ganze Nacht",
      "Vier Größen von S bis XL",
    ],
  },
  {
    number: "03",
    title: "Und morgens siehst du den Unterschied",
    text: "Keine frischen Knicklinien mehr, die sich erst über den Vormittag glätten müssen. Und weil keine neuen dazukommen, arbeitet die Zeit ab jetzt für dich statt gegen dich.",
    image: "/images/problem/morgens-glatt.webp",
    alt: "Glattes Dekolleté am Morgen nach einer Nacht mit dem MELYLA Schlaf BH",
    bullets: [
      "Keine frischen Schlaffalten am Morgen",
      "Kundinnen berichten von ersten Veränderungen nach 2–4 Wochen",
      "Je früher du beginnst, desto mehr bleibt dir erhalten",
    ],
  },
];

/* ---------------------------------------------------------------- Beweise */

/** Verteilung ergibt exakt 52 Bewertungen und den Schnitt von 4.79. */
export const ratingBreakdown = [
  { stars: 5, count: 44 },
  { stars: 4, count: 6 },
  { stars: 3, count: 1 },
  { stars: 2, count: 1 },
  { stars: 1, count: 0 },
];

export const reviews: Review[] = [
  {
    name: "Sabine M.",
    age: 52,
    location: "Nürnberg",
    rating: 5,
    size: "M",
    duration: "seit 3 Monaten",
    title: "Zum ersten Mal seit Jahren wieder ein V-Ausschnitt",
    text: "Ich war ehrlich skeptisch, ob ein BH nachts irgendetwas bringt. Nach etwa vier Wochen sind mir die morgendlichen Linien nicht mehr aufgefallen — mein Mann hat es sogar zuerst gesagt. Im Sommer trage ich wieder Ausschnitte, die drei Jahre im Schrank hingen.",
  },
  {
    name: "Kerstin L.",
    age: 47,
    location: "Bremen",
    rating: 5,
    size: "L",
    duration: "seit 6 Wochen",
    title: "Endlich etwas, das man nicht vergisst",
    text: "Cremes habe ich immer nach zwei Wochen liegen lassen. Den BH ziehe ich abends an wie den Schlafanzug, das vergesse ich einfach nicht. Genau deshalb funktioniert er bei mir.",
  },
  {
    name: "Andrea B.",
    age: 58,
    location: "Berlin",
    rating: 5,
    size: "M",
    duration: "seit 5 Monaten",
    title: "Bequemer als erwartet",
    text: "Ich hatte Sorge, dass mich nachts irgendetwas einengt. Der Stoff ist weich und ich merke ihn nach den ersten zwei Nächten überhaupt nicht mehr. Die tiefen Falten sind natürlich noch da, aber es ist nichts Neues dazugekommen.",
  },
  {
    name: "Nicole H.",
    age: 39,
    location: "Köln",
    rating: 4,
    size: "S",
    duration: "seit 4 Wochen",
    title: "Gute Sache, aber die Umstellung braucht ein paar Nächte",
    text: "Die ersten drei Nächte war ich mir des BHs sehr bewusst und habe schlechter geschlafen. Danach war es kein Thema mehr. Einen Punkt Abzug dafür — ansonsten mache ich es präventiv und bin zufrieden.",
  },
  {
    name: "Petra W.",
    age: 61,
    location: "Stuttgart",
    rating: 5,
    size: "XL",
    duration: "seit 2 Monaten",
    title: "Hätte ich mit 40 haben wollen",
    text: "Bei mir sind die Falten längst da, da mache ich mir nichts vor. Aber sie werden nicht tiefer, und die Haut wirkt morgens entspannter. Meiner Tochter habe ich direkt einen mitbestellt.",
  },
  {
    name: "Franziska K.",
    age: 44,
    location: "Hamburg",
    rating: 5,
    size: "M",
    duration: "seit 7 Wochen",
    title: "Größe lieber eine Nummer größer",
    text: "Ich lag zwischen S und M und habe M genommen — richtige Entscheidung, nachts will man nichts Enges. Sitzt perfekt, verrutscht nicht, und morgens ist das Dekolleté glatt.",
  },
];

export const pressQuote = {
  image: "/images/promo-barbara.webp",
  quote: "Anti-Falten Schlaf BH von Melyla, um 50 Euro",
  source: "BARBARA Magazin — Ausgabe Nr. 61",
};

/* ------------------------------------------------------------ Größenberater */

export const sizeGuide = {
  eyebrow: "Deine Größe",
  title: "In 30 Sekunden zur richtigen Größe",
  subtitle:
    "Maßgeblich ist dein Unterbrustumfang — nicht deine Körbchengröße. Miss direkt unter der Brust, das Maßband liegt locker an.",
  rows: [
    { size: "S", unterbrust: "60–70 cm", entspricht: "entspricht etwa 65 / 70" },
    { size: "M", unterbrust: "70–80 cm", entspricht: "entspricht etwa 70 / 75" },
    { size: "L", unterbrust: "80–90 cm", entspricht: "entspricht etwa 80 / 85" },
    { size: "XL", unterbrust: "90–100 cm", entspricht: "entspricht etwa 85 / 90" },
  ] as SizeRow[],
  hint: "Du liegst genau zwischen zwei Größen? Nimm die größere. Der BH soll nachts halten, nicht einschnüren — zu eng ist der häufigste Grund, warum ein Schlaf-BH im Schrank landet.",
};

/* --------------------------------------------------------------- Angebot */

export const offerIntro = {
  eyebrow: "Dein Angebot",
  title: "Wähle dein Set",
  subtitle:
    "Jede Nacht ohne BH ist eine Nacht, in der die Falte tiefer wird. Deshalb starten die meisten Kundinnen direkt mit zwei.",
};

export const offerOptions: OfferOption[] = [
  {
    key: "single",
    title: "1× Schlaf BH",
    subtitle: "Zum Ausprobieren",
    price: 49.5,
    compareAt: 69.9,
    perUnitLabel: "49,50 € pro Stück",
    includes: ["1× Anti-Falten Schlaf BH", "Gratis Versand", "30 Tage Geld-zurück-Garantie"],
  },
  {
    key: "duo",
    title: "2× Schlaf BH",
    subtitle: "Einer am Körper, einer in der Wäsche",
    price: 89,
    compareAt: 99,
    perUnitLabel: "44,50 € pro Stück",
    badge: "Beliebteste Wahl",
    highlight: true,
    includes: [
      "2× Anti-Falten Schlaf BH",
      "Größen frei kombinierbar",
      "Gratis Versand",
      "30 Tage Geld-zurück-Garantie",
    ],
  },
  {
    key: "routine",
    title: "Nachtroutine-Set",
    subtitle: "Die komplette Abendroutine",
    price: 99,
    compareAt: 134.6,
    perUnitLabel: "Du sparst 35,60 €",
    badge: "Bester Wert",
    includes: [
      "1× Anti-Falten Schlaf BH (49,50 €)",
      "1× Anti-Falten Kissen (49,50 €)",
      "1× Schlafmaske (10,00 €)",
      "1× Haargummi 4er-Pack (4,40 €)",
      "1× ECO Reinigungsschwamm (14,40 €)",
      "1× ECO Abschminkpads (6,80 €)",
    ],
  },
];

/* -------------------------------------------------------------------- FAQ */

export const faqs: FaqItem[] = [
  {
    q: "Ich schlafe auf der Seite — funktioniert das überhaupt?",
    a: "Gerade dann. Der Schlaf BH ist genau für Seitenschläferinnen gemacht: Er hält die Brüste sanft auf Abstand, sodass die Haut am Dekolleté nicht gefaltet wird, wenn du dich zur Seite drehst. Auf dem Rücken funktioniert er ebenfalls, nur ist der Effekt dort kleiner — weil das Problem dort kleiner ist.",
  },
  {
    q: "Ist das nachts nicht unbequem?",
    a: "Er hat keine Bügel, keinen Haken im Rücken und flache Nähte. Die meisten Kundinnen berichten, dass sie ihn nach zwei bis drei Nächten nicht mehr bewusst wahrnehmen. Wenn du sonst ohne BH schläfst, sind die ersten Nächte eine Umstellung — danach gehört er zur Abendroutine wie das Zähneputzen.",
  },
  {
    q: "Welche Größe soll ich nehmen?",
    a: "Entscheidend ist dein Unterbrustumfang, nicht die Körbchengröße: S 60–70 cm, M 70–80 cm, L 80–90 cm, XL 90–100 cm. Wenn du zwischen zwei Größen liegst, nimm die größere — nachts soll nichts einschnüren.",
  },
  {
    q: "Wie lange dauert es, bis ich etwas sehe?",
    a: "Der Effekt gegen neue Knicklinien beginnt in der ersten Nacht. Sichtbare Veränderungen an der Haut brauchen Zeit: Kundinnen berichten typischerweise nach zwei bis vier Wochen von ersten Unterschieden. Trag ihn die ersten 30 Tage konsequent jede Nacht — dafür gibt es die Garantie.",
  },
  {
    q: "Ich habe schon tiefe Falten. Ist es zu spät?",
    a: "Nein. Der BH kann tiefe, über Jahre entstandene Falten nicht wegzaubern — das verspricht dir seriös niemand. Was er tut: verhindern, dass jede weitere Nacht neue dazulegt. Viele unserer Kundinnen sind über 55 und berichten trotzdem von einem entspannteren Hautbild am Morgen.",
  },
  {
    q: "Kann ich ihn jede Nacht tragen? Wie wasche ich ihn?",
    a: "Ja, er ist für den täglichen Gebrauch gemacht — deshalb bestellen viele gleich zwei. Waschen per Hand oder im Schonprogramm bei 30 °C, nicht in den Trockner. So bleibt das Material dauerhaft weich und elastisch.",
  },
  {
    q: "Was, wenn er mir nicht passt?",
    a: "Dann schickst du ihn zurück und bekommst dein Geld erstattet — 30 Tage lang, ohne dass wir nach einem Grund fragen. Du gehst also kein Risiko ein außer dem, dass er dir gefällt.",
  },
  {
    q: "Wie schnell ist er da?",
    a: "Versand aus Deutschland, in der Regel 2–4 Werktage. Der Versand ist kostenlos und CO₂-neutral.",
  },
];

/* ---------------------------------------------------------------- Garantie */

export const guarantee = {
  eyebrow: "Kein Risiko",
  title: "30 Nächte testen. Oder Geld zurück.",
  text: "Trag den MELYLA Schlaf BH 30 Nächte lang. Wenn du morgens keinen Unterschied siehst oder er sich einfach nicht richtig anfühlt, schreibst du uns eine E-Mail und bekommst den vollen Kaufpreis zurück. Keine Rückfragen, keine Bedingungen.",
  points: [
    "30 Tage Geld-zurück-Garantie",
    "Gratis Versand aus Deutschland",
    "Sichere Zahlung mit PayPal, Klarna & Co.",
    "Designed in Germany",
  ],
};

/** Slug des Produkts, das den vollstaendigen Verkaufsfunnel bekommt. */
export const FUNNEL_SLUG = "anti-falten-schlaf-bh";
