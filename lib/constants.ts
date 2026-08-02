export const APP_NAME = "SearchMind AI";

export const APP_DESCRIPTION =
  "AI-powered SEO keyword research platform built with Next.js 15.";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const APP_VERSION = "1.0.0";

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Keyword Research",
    href: "/dashboard/keywords",
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
  },
  {
    title: "History",
    href: "/dashboard/history",
  },
  {
    title: "Export Center",
    href: "/dashboard/export",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
};

export const DEFAULT_KEYWORD_LIMIT = 50;

export const MAX_PROJECTS_FREE = 5;

export const MAX_EXPORTS_FREE = 10;

export const SEO_DEFAULTS = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: [
    "SEO",
    "Keyword Research",
    "AI SEO",
    "SearchMind AI",
    "Content Marketing",
    "Google SEO",
  ],
};
