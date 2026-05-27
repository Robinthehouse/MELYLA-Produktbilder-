import { getRelatedProducts } from "@/lib/products";
import ProductCard from "@/components/shared/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface RelatedProductsProps {
  currentSlug: string;
}

export default function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const related = getRelatedProducts(currentSlug, 3);
  if (related.length === 0) return null;

  return (
    <section className="section-padding bg-melyla-cream-warm">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Passend dazu"
          title="Das könnte dir auch gefallen"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
