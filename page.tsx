import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ChartNoAxesCombined,
  Search,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section
        aria-labelledby="hero-heading"
        className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <div className="mb-8 flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm text-muted-foreground">
          <Sparkles
            className="h-4 w-4 text-primary"
            aria-hidden="true"
          />

          <span>
            AI-powered SEO keyword research platform
          </span>
        </div>

        <h1
          id="hero-heading"
          className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Find High-Value Keywords with{" "}
          <span className="gradient-text">
            AI
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
          SearchMind AI helps you discover profitable
          keywords, understand search intent, and
          create better SEO strategies using
          intelligent data analysis.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            Start Free

            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition hover:bg-muted"
          >
            View Dashboard
          </Link>
        </div>

        <div className="mt-16 grid w-full max-w-4xl gap-6 sm:grid-cols-3">
          <FeatureCard
            icon={Search}
            title="Keyword Discovery"
            description="Find keyword opportunities with AI-powered analysis."
          />

          <FeatureCard
            icon={Brain}
            title="Search Intent"
            description="Understand what users are searching for."
          />

          <FeatureCard
            icon={ChartNoAxesCombined}
            title="SEO Analytics"
            description="Track performance and growth opportunities."
          />
        </div>
      </section>
    </main>
  );
}


function FeatureCard({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border bg-card p-6 text-left shadow-sm">
      <Icon
        className="mb-4 h-8 w-8 text-primary"
        aria-hidden="true"
      />

      <h2 className="mb-2 font-semibold">
        {title}
      </h2>

      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
