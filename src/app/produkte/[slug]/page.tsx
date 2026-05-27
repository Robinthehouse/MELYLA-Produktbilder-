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
import TestimonialsSection from "@/components/home/TestimonialsSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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

  return (
    <>
      <ProductHero product={product} />
      {slug === "anti-falten-kissen" && <KissenVideoGrid />}
      {slug === "anti-falten-schlaf-bh" && <BHVideoGrid />}
      <ProductDetails product={product} />
      {slug === "anti-falten-kissen" && <KissenFeatures />}
      {slug === "anti-falten-schlaf-bh" && <BHFeatures />}
      <TestimonialsSection />
      <RelatedProducts currentSlug={slug} />
    </>
  );
}
