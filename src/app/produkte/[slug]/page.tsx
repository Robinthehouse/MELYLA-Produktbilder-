import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug } from "@/lib/products";
import ProductHero from "@/components/product/ProductHero";
import ProductDetails from "@/components/product/ProductDetails";
import KissenFeatures from "@/components/product/KissenFeatures";
import KissenVideoGrid from "@/components/product/KissenVideoGrid";
import BHVideoGrid from "@/components/product/BHVideoGrid";
import BHFeatures from "@/components/product/BHFeatures";
import RelatedProducts from "@/components/product/RelatedProducts";
import TrustBadges from "@/components/home/TrustBadges";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import FaqAccordion from "@/components/funktionsweise/FaqAccordion";
import ProblemSection from "@/components/funnel/ProblemSection";
import WhyItFailsSection from "@/components/funnel/WhyItFailsSection";
import SolutionSection from "@/components/funnel/SolutionSection";
import ReviewsSection from "@/components/funnel/ReviewsSection";
import SizeGuideSection from "@/components/funnel/SizeGuideSection";
import OfferSection from "@/components/funnel/OfferSection";
import GuaranteeCta from "@/components/funnel/GuaranteeCta";
import StickyAddToCart from "@/components/funnel/StickyAddToCart";
import { faqs } from "@/lib/funnel-bh";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Produkt, das den vollständigen Verkaufsfunnel bekommt (74 % des Umsatzes). */
const FUNNEL_SLUG = "anti-falten-schlaf-bh";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  /*
   * Funnel-Reihenfolge nach PAS: erst das Problem sichtbar machen, dann die
   * bisherigen Lösungsversuche entkräften, dann das Produkt als Antwort
   * einführen — Beweise, Einwände und Angebot folgen. Siehe docs/melyla.
   */
  if (slug === FUNNEL_SLUG) {
    return (
      <>
        <ProductHero product={product} />
        <TrustBadges />
        <ProblemSection />
        <WhyItFailsSection />
        <SolutionSection />
        <BeforeAfterSection />
        <BHVideoGrid />
        <BHFeatures />
        <ProductDetails product={product} />
        <ReviewsSection rating={product.rating} reviewCount={product.reviewCount} />
        <SizeGuideSection />
        <OfferSection />

        <section className="section-padding bg-melyla-cream">
          <div className="container-luxury max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-melyla-gold-deep text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Häufige Fragen
              </p>
              <h2 className="font-serif text-[2.25rem] text-melyla-navy">
                Was Kundinnen vor dem Kauf wissen wollen
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        <GuaranteeCta />
        <RelatedProducts currentSlug={slug} />
        <StickyAddToCart product={product} />
      </>
    );
  }

  return (
    <>
      <ProductHero product={product} />
      {slug === "anti-falten-kissen" && <KissenVideoGrid />}
      <ProductDetails product={product} />
      {slug === "anti-falten-kissen" && <KissenFeatures />}
      <RelatedProducts currentSlug={slug} />
    </>
  );
}
