import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getLatestPosts } from "@/lib/blog";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel nicht gefunden" };
  return {
    title: `${post.title} – MELYLA Blog`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl text-melyla-navy mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-sans font-semibold text-melyla-navy text-lg mt-6 mb-2">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-melyla-navy text-sm mt-3">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.trim() !== "") {
      elements.push(
        <p key={i} className="text-melyla-stone leading-relaxed">
          {line}
        </p>
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getLatestPosts(3).filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-0 bg-melyla-cream">
        <div className="container-luxury max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-melyla-muted text-sm hover:text-melyla-gold-deep transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} /> Zurück zum Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-melyla-rose text-melyla-gold-deep text-xs font-semibold px-3 py-1.5 rounded-full border border-melyla-border">
              <Tag size={11} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-melyla-muted text-xs">
              <Clock size={12} />
              {post.readTime} Min. Lesezeit
            </span>
            <span className="text-melyla-muted text-xs">
              {new Date(post.date).toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-serif text-[2.5rem] lg:text-[3rem] text-melyla-navy leading-tight mb-6 text-balance">
            {post.title}
          </h1>
          <p className="text-melyla-stone text-lg leading-relaxed mb-10 border-l-4 border-melyla-gold pl-5">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Cover Image */}
      <div className="container-luxury max-w-3xl mb-12">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-[var(--shadow-luxury)]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <section className="pb-20 bg-melyla-cream">
        <div className="container-luxury max-w-2xl">
          <div className="space-y-5">
            {post.content ? renderContent(post.content) : (
              <p className="text-melyla-stone leading-relaxed">{post.excerpt}</p>
            )}
          </div>

          {/* CTA am Ende */}
          <div className="mt-16 bg-melyla-rose rounded-3xl p-8 text-center border border-melyla-border">
            <p className="text-melyla-gold-deep text-xs tracking-[0.2em] uppercase font-semibold mb-2">Jetzt ausprobieren</p>
            <h3 className="font-serif text-2xl text-melyla-navy mb-3">
              Bereit für bessere Haut?
            </h3>
            <p className="text-melyla-stone text-sm mb-6">30 Tage Geld-zurück-Garantie — kein Risiko.</p>
            <Button href="/produkte/anti-falten-schlaf-bh">
              Zum Anti-Falten Schlaf BH
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-melyla-cream-warm">
          <div className="container-luxury max-w-3xl">
            <p className="text-melyla-gold-deep text-xs tracking-[0.2em] uppercase font-semibold mb-2">Weiterlesen</p>
            <h2 className="font-serif text-2xl text-melyla-navy mb-8">Weitere Artikel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 shadow-[var(--shadow-card)]">
                    <Image src={p.coverImage} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-melyla-gold-deep text-xs font-semibold uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-serif text-lg text-melyla-navy mt-1 mb-2 leading-snug group-hover:text-melyla-gold-deep transition-colors duration-200">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-melyla-gold-deep text-sm font-medium group-hover:gap-2 transition-all duration-200">
                    Lesen <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
