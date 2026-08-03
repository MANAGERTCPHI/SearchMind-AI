export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "AI Keyword Research",
    description:
      "Generate high-value keyword ideas using artificial intelligence.",
    icon: "Search",
  },
  {
    title: "Search Intent Analysis",
    description:
      "Automatically classify keywords by user intent.",
    icon: "Target",
  },
  {
    title: "Keyword Clustering",
    description:
      "Group related keywords into optimized topic clusters.",
    icon: "Layers",
  },
  {
    title: "Content Briefs",
    description:
      "Create SEO-ready content outlines powered by AI.",
    icon: "FileText",
  },
  {
    title: "Project Management",
    description:
      "Organize keyword research into reusable projects.",
    icon: "FolderKanban",
  },
  {
    title: "Export Reports",
    description:
      "Export keyword research results in multiple formats.",
    icon: "Download",
  },
];
