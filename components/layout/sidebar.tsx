"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Keyword Research", href: "/dashboard/keywords" },
  { name: "Projects", href: "/dashboard/projects" },
  { name: "Search History", href: "/dashboard/history" },
  { name: "Export Center", href: "/dashboard/export" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Settings", href: "/dashboard/settings" },
  { name: "Admin", href: "/admin" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white lg:block dark:border-gray-800 dark:bg-gray-950">
      <div className="p-6">
        <h2 className="text-xl font-bold">
          SearchMind AI
        </h2>

        <nav className="mt-8 flex flex-col gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-3 text-sm transition-colors",
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
