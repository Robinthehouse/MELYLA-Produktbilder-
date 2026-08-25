import Link from "next/link";
import Image from "next/image";
import { getLatestPosts } from "@/lib/blog";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const posts = getLatestPosts(3);

  return (
    <section className="section-padding bg-melyla-cream">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Wissen & Tipps"
          title="Aus unserem Blog"
          subtitle="Alles über Schlaf, Hautpflege und Anti-Aging — von Experten für dich."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5 transition-shadow duration-300 group-hover:shadow-[var(--shadow-luxury)] relative bg-melyla-cream-warm">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="text-melyla-gold-deep text-xs tracking-widest uppercase font-semibold">
                {post.category}
              </span>
              <h3 className="font-serif text-xl text-melyla-navy mt-2 mb-2 leading-snug group-hover:text-melyla-gold-deep transition-colors duration-200 text-balance">
                {post.title}
              </h3>
              <p className="text-melyla-muted text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-melyla-gold-deep text-sm font-medium group-hover:gap-2 transition-all duration-200">
                Weiterlesen <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
