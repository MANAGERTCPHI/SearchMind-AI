"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  title?: string;
}

export function Navbar({
  title = "Dashboard",
}: NavbarProps) {
  return (
    <nav className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-950">
      <div>
        <h1 className="text-2xl font-bold">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/dashboard/profile">
          <Button variant="ghost">
            Profile
          </Button>
        </Link>

        <Link href="/dashboard/settings">
          <Button variant="outline">
            Settings
          </Button>
        </Link>

        <Button>
          Upgrade
        </Button>
      </div>
    </nav>
  );
}
