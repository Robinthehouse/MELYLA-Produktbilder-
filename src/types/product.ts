export interface Product {
  slug: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice?: number;
  currency: string;
  description: string;
  longDescription: string;
  benefits: string[];
  materials?: string;
  care?: string;
  imageSrc: string;
  images: string[];
  category: "bh" | "kissen" | "accessoires";
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isSale?: boolean;
  sizes?: string[];
}
