"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row lg:px-8">
        <div>
          <h3 className="text-lg font-bold">
            SearchMind AI
          </h3>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            AI-powered SEO keyword research platform.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year} SearchMind AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
