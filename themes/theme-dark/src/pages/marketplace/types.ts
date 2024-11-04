export enum ChargeType {
  USAGE = "usage",
  ONEOFF = "oneoff",
  DAILY = "daily",
  MONTHLY = "monthly",
  ANNUALLY = "annually"
}

export interface IProduct {
  id: string;
  name: string;
  vendor: string;
  website: string;
  logoUrl: string;
  description: string;
  price: number;
  chargeType: ChargeType;
  serviceUrl: string;
  serviceEndingUrl?: string;
  category: string;
  integrationPoints: string[];
  sellerAddress: string;
  products?: string[];  // References to other product IDs
  followOrder?: boolean;  // true for Product Flow, false for Product Bundle
  discount?: number;
  isFeatured?: boolean;
  installCount: number;  // installation/purchase count for "Most popular" sorting
  releaseDate: Date;    // for "Latest" sorting
  version?: string;
  banners?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type PurchasedProduct = IProduct & {
  status: 'active' | 'deleted';
  unread: boolean;
}

export interface SearchProductsParams {
  page: number;
  pageSize: number;
  category?: string;
  search?: string;
  freeOnly?: boolean;
  sortBy?: 'popular' | 'latest';
  installedOnly?: boolean;
}

export const CATEGORIES = [
  'Most popular',
  'Free',
  'Latest',
  'Security',
  'Payment',
  'Compliance',
  'Social',
  'Branding',
  'Added',
] as const;

export type Category = typeof CATEGORIES[number];
