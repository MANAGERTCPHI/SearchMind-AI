export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  popular?: boolean;
  features: string[];
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started.",
    price: 0,
    buttonText: "Start Free",
    features: [
      "10 AI keyword searches/day",
      "Search intent analysis",
      "Keyword clustering",
      "1 Project",
      "Basic exports",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For freelancers and SEO professionals.",
    price: 29,
    popular: true,
    buttonText: "Start Pro",
    features: [
      "Unlimited keyword searches",
      "Advanced AI suggestions",
      "Unlimited projects",
      "Priority processing",
      "CSV & PDF export",
      "Analytics dashboard",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "For agencies and teams.",
    price: 99,
    buttonText: "Contact Sales",
    features: [
      "Everything in Pro",
      "Team workspaces",
      "API access",
      "Admin controls",
      "Usage analytics",
      "Priority support",
    ],
  },
];
