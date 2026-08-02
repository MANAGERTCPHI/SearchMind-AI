"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          SearchMind AI
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Sign In
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
