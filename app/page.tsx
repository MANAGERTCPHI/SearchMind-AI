import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SearchMind AI - SEO Keyword Research Platform",
  description:
    "AI-powered SEO keyword research SaaS to discover high-ranking keywords and grow your traffic.",
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Rank Faster with <span className="text-gray-400">SearchMind AI</span>
        </h1>

        <p className="text-gray-400 text-lg">
          Discover profitable keywords, analyze competition, and dominate SEO
          with AI-powered insights.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:opacity-80 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-900 transition">
            Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURES ================= */
function Features() {
  return (
    <section className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold">Powerful SEO Tools</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Keyword Discovery"
            desc="Find high-volume, low-competition keywords instantly."
          />
          <FeatureCard
            title="AI Analysis"
            desc="Get smart insights and ranking strategies powered by AI."
          />
          <FeatureCard
            title="Competitor Research"
            desc="Analyze competitors and uncover their best keywords."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border border-gray-800 rounded-xl bg-gray-950">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

/* ================= CTA ================= */
function CTA() {
  return (
    <section className="py-20 px-6 text-center border-t border-gray-800">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">
          Start Growing Your Traffic Today 🚀
        </h2>

        <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:opacity-80 transition">
          Create Free Account
        </button>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
      <p>© {new Date().getFullYear()} SearchMind AI. All rights reserved.</p>
    </footer>
  );
        }
