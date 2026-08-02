"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function ErrorPage({
  error,
  reset
}: ErrorPageProps) {
  useEffect(() => {
    console.error(
      "Application error:",
      error
    );
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section
        className="max-w-md text-center"
        aria-labelledby="error-title"
      >
        <AlertTriangle
          className="mx-auto mb-6 h-16 w-16 text-destructive"
          aria-hidden="true"
        />

        <h1
          id="error-title"
          className="text-3xl font-bold tracking-tight"
        >
          Something went wrong
        </h1>

        <p className="mt-4 text-muted-foreground">
          We encountered an unexpected error while
          loading SearchMind AI.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
        >
          Try Again
        </button>
      </section>
    </main>
  );
}
