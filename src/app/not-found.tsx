import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-melyla-cream">
      <div className="text-center">
        <p className="font-serif text-8xl text-melyla-gold/20 font-bold">404</p>
        <h1 className="font-serif text-3xl text-melyla-navy mt-2 mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-melyla-muted mb-8 max-w-sm mx-auto">
          Diese Seite existiert leider nicht. Vielleicht findest du, was du suchst, auf unserer Startseite.
        </p>
        <Button href="/">Zurück zur Startseite</Button>
      </div>
    </section>
  );
}
