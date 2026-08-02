export const siteConfig = {
  // Application
  name: "SearchMind AI",
  shortName: "SearchMind",
  version: "1.0.0",

  // Company
  company: "SearchMind AI",

  // URLs
  url: "https://searchmind-ai.vercel.app",
  baseUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  // SEO
  title: "SearchMind AI | AI-Powered SEO Keyword Research",
  description:
    "Discover high-value SEO keywords, analyze search intent, cluster topics, and generate content strategies with AI.",

  keywords: [
    "SEO",
    "Keyword Research",
    "AI SEO",
    "Search Intent",
    "Content Strategy",
    "SERP Analysis",
    "SearchMind AI",
  ],

  // Branding
  logo: "/logo.svg",
  favicon: "/favicon.ico",
  ogImage: "/og-image.png",

  // Contact
  email: "support@searchmind.ai",

  // Socials
  links: {
    github: "https://github.com/YOUR_GITHUB_USERNAME/SearchMind-AI",
    twitter: "https://x.com/searchmindai",
    linkedin: "https://linkedin.com/company/searchmind-ai",
  },

  // Navigation
  navigation: [
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
    { title: "Dashboard", href: "/dashboard" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
