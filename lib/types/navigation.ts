import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface SidebarNavItem extends NavItem {
  items?: SidebarNavItem[];
}

export interface MainNavItem extends NavItem {}
