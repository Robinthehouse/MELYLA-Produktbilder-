import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<string, string> = {
  primary: "bg-melyla-gold-deep text-white hover:bg-melyla-gold-deeper",
  ghost: "border border-melyla-stone text-melyla-navy hover:bg-melyla-cream-warm",
  outline: "border border-melyla-gold-deep text-melyla-gold-deep hover:bg-melyla-gold-deep hover:text-white",
};

const sizes: Record<string, string> = {
  sm: "text-sm px-5 py-2.5 min-h-[40px]",
  md: "text-sm px-7 py-3.5 min-h-[44px]",
  lg: "text-base px-9 py-4 min-h-[52px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
