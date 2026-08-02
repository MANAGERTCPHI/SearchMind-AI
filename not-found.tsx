import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section
        className="max-w-md text-center"
        aria-labelledby="not-found-title"
      >
        <SearchX
          className="mx-auto mb-6 h-16 w-16 text-primary"
          aria-hidden="true"
        />

        <h1
          id="not-found-title"
          className="text-4xl font-bold tracking-tight"
        >
          Page Not Found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist
          or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}
