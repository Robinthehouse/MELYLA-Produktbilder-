import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/shared/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BestsellerGrid() {
  return (
    <section className="section-padding bg-melyla-cream">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Unsere Produkte"
          title="Die Kundenlieblinge"
          subtitle="Jedes Produkt entwickelt, um dich sanft und effektiv beim Anti-Aging zu unterstützen."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/produkte/anti-falten-schlaf-bh"
            className="inline-flex items-center gap-2 text-melyla-navy font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-[var(--shadow-cta)] hover:shadow-[0_8px_36px_rgba(201,151,62,0.55)] hover:scale-105 cursor-pointer min-h-[44px]"
            style={{ backgroundColor: "#C9973E" }}
          >
            Jetzt kaufen
          </Link>
        </div>
      </div>
    </section>
  );
}
