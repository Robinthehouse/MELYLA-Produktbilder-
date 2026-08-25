import Image from "next/image";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  age?: number;
  location?: string;
  rating: number;
  productName?: string;
  imageSrc?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  age,
  location,
  rating,
  productName,
  imageSrc,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-melyla-rose rounded-2xl p-7 flex flex-col gap-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-none bg-melyla-cream-warm">
          {imageSrc ? (
            <Image src={imageSrc} alt={name} fill className="object-cover" sizes="48px" />
          ) : (
            <span className="w-full h-full flex items-center justify-center font-serif text-lg text-melyla-gold-deep">
              {name[0]}
            </span>
          )}
        </div>
        <div>
          <p className="font-sans font-semibold text-melyla-navy text-sm">
            {name}{age ? `, ${age}` : ""}
          </p>
          {location && <p className="text-melyla-muted text-xs mt-0.5">{location}</p>}
        </div>
      </div>
      <StarRating rating={rating} size={15} />
      <blockquote className="text-melyla-navy text-base leading-relaxed italic font-serif">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {productName && (
        <p className="text-melyla-gold-deep text-xs mt-auto font-medium">{productName}</p>
      )}
    </div>
  );
}
