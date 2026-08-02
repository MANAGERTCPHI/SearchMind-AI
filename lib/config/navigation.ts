export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const dashboardNav: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
  },
  {
    title: "Keywords",
    href: "/dashboard/keywords",
  },
  {
    title: "History",
    href: "/dashboard/history",
  },
  {
    title: "Export",
    href: "/dashboard/export",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
];
