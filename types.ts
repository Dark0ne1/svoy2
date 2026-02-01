export interface NavItem {
  id: string;
  label: string;
  icon: any;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}