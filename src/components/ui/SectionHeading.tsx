import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center max-w-2xl mx-auto" : "text-left max-w-xl",
        className
      )}
    >
      {eyebrow && (
        <p className="text-melyla-gold text-xs tracking-[0.2em] uppercase font-sans font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-[2.25rem] leading-tight text-balance",
          light ? "text-white" : "text-melyla-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-melyla-muted" : "text-melyla-muted"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className="flex items-center gap-3 mt-6" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
        <span className="flex-1 max-w-[60px] h-px bg-gradient-to-r from-transparent to-melyla-gold" />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <rect x="5.5" y="0" width="1" height="12" fill="#CA8A04" />
          <rect x="0" y="5.5" width="12" height="1" fill="#CA8A04" />
        </svg>
        <span className="flex-1 max-w-[60px] h-px bg-gradient-to-l from-transparent to-melyla-gold" />
      </div>
    </div>
  );
}
