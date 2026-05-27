export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: number;
}
