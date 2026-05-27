import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tipps und Wissen rund um Anti-Aging, Schlafpflege und Hautgesundheit.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-melyla-cream-warm to-melyla-cream">
        <div className="container-luxury text-center max-w-2xl mx-auto">
          <p className="text-melyla-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">
            Wissen & Tipps
          </p>
          <h1 className="font-serif text-[3rem] text-melyla-navy mb-4">
            Der MELYLA Blog
          </h1>
          <p className="text-melyla-muted text-lg">
            Alles über Schlaf, Hautpflege und Anti-Aging — von Experten für dich.
          </p>
        </div>
      </section>

      <section className="section-padding bg-melyla-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5 relative bg-melyla-cream-warm transition-shadow duration-300 group-hover:shadow-[var(--shadow-luxury)]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-melyla-gold text-xs tracking-widest uppercase font-semibold">
                    {post.category}
                  </span>
                  <span className="text-melyla-border">·</span>
                  <span className="text-melyla-muted text-xs">{post.readTime} Min. Lesezeit</span>
                </div>
                <h2 className="font-serif text-xl text-melyla-navy mb-2 leading-snug group-hover:text-melyla-gold transition-colors duration-200 text-balance">
                  {post.title}
                </h2>
                <p className="text-melyla-muted text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-melyla-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Weiterlesen <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
