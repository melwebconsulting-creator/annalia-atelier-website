export type NailCategory = 'all' | 'french' | 'minimalist' | 'chrome' | 'custom-3d';

export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  estimatedPrice: string;
  priceValue: number;
  duration: string;
  description: string;
  features: string[];
  recommendedFor: string;
  isAddOn?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: NailCategory;
  categoryLabel: string;
  image: string;
  shape: string;
  length: string;
  technique: string;
  description: string;
  featured?: boolean;
}

export interface BrandPartner {
  name: string;
  description: string;
  badge: string;
  link: string;
  code?: string;
  perk: string;
}

export interface StudioPolicy {
  title: string;
  summary: string;
  details: string;
}

export interface BookingInquiry {
  fullName: string;
  email: string;
  instagram: string;
  serviceId: string;
  nailLength: string;
  nailShape: string;
  currentNailState: string;
  preferredDate: string;
  preferredTime: string;
  artDescription: string;
  inspirationImageName?: string;
}
