import {
  LayoutDashboard,
  FolderKanban,
  Search,
  History,
  Download,
  User,
  Settings,
  BarChart3,
} from "lucide-react";

export interface DashboardNavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const dashboardNavigation: DashboardNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Keyword Research",
    href: "/dashboard/keywords",
    icon: Search,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Export",
    href: "/dashboard/export",
    icon: Download,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
