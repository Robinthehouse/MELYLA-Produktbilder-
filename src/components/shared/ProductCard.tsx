import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/produkte/${product.slug}`}
      className="group block cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-melyla-cream-warm aspect-[3/4] mb-4 transition-shadow duration-300 hover:shadow-[var(--shadow-luxury)]">
        {product.isBestseller && (
          <span className="absolute top-3 left-3 z-10 bg-melyla-gold text-white text-xs font-medium px-3 py-1 rounded-full">
            Bestseller
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 z-10 bg-melyla-navy text-white text-xs font-medium px-3 py-1 rounded-full">
            Sale
          </span>
        )}
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-melyla-cream-warm via-melyla-rose to-melyla-cream flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="font-serif text-4xl text-melyla-gold/30 select-none">M</span>
          </div>
        )}
      </div>

      <div className="px-1">
        <div className="flex items-center gap-2 mb-1">
          <StarRating rating={product.rating} size={13} />
          <span className="text-melyla-muted text-xs">({product.reviewCount})</span>
        </div>
        <h3 className="font-sans font-semibold text-melyla-navy text-sm leading-snug mb-1 group-hover:text-melyla-gold transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-melyla-navy font-medium text-base">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-melyla-muted text-sm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
