import type { Metadata } from "next";
import { siteConfig } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.company,
    },
  ],

  creator: siteConfig.company,

  publisher: siteConfig.company,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};
