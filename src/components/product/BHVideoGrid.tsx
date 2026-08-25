import ScrollReveal from "@/components/ui/ScrollReveal";

const videos = [
  {
    src: "/images/products/bh-video-1.mp4",
    label: "Sanfte Nachtunterstützung",
  },
  {
    src: "/images/products/bh-video-2.mp4",
    label: "Hautschonender Komfort",
  },
  {
    src: "/images/products/bh-video-3.mp4",
    label: "Faltenfreies Dekolleté",
  },
];

export default function BHVideoGrid() {
  return (
    <section className="section-padding bg-melyla-navy">
      <div className="container-luxury">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-melyla-gold-deep text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              In Bewegung
            </p>
            <h2 className="font-serif text-[2rem] text-white text-balance">
              Der MELYLA Schlaf BH — erlebe ihn in Aktion
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {videos.map((video, i) => (
            <ScrollReveal key={video.src} delay={i * 100}>
              <div className="group relative rounded-2xl overflow-hidden shadow-[var(--shadow-luxury)]">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover aspect-video block"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
                  <p className="text-white text-sm font-medium">{video.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
