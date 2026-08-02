import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar title="Dashboard" />

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Welcome to SearchMind AI
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Monitor keyword research, projects, and SEO performance from one dashboard.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Searches</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="text-3xl font-bold">1,284</div>
                <Badge className="mt-3" variant="success">
                  +12% this month
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="text-3xl font-bold">18</div>
                <Badge className="mt-3">
                  Active
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Saved Keywords</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="text-3xl font-bold">746</div>
                <Badge
                  className="mt-3"
                  variant="secondary"
                >
                  Library
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO Score</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="text-3xl font-bold">
                  94%
                </div>

                <Badge
                  className="mt-3"
                  variant="success"
                >
                  Excellent
                </Badge>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
