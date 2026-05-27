import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

export default function StarRating({
  rating,
  max = 5,
  size = 16,
  className,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} von ${max} Sternen`}>
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        const id = `star-grad-${i}-${rating}`;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 16 16" fill="none">
            <defs>
              <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${fill * 100}%`} stopColor="#CA8A04" />
                <stop offset={`${fill * 100}%`} stopColor="#D6D3D1" />
              </linearGradient>
            </defs>
            <path
              d="M8 1.5l1.854 3.756 4.146.602-3 2.924.708 4.127L8 10.75l-3.708 1.959.708-4.127-3-2.924 4.146-.602z"
              fill={`url(#${id})`}
            />
          </svg>
        );
      })}
    </div>
  );
}
