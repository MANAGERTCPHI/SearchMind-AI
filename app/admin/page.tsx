import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Users",
    value: "2,184",
    status: "Growing",
  },
  {
    title: "Active Subscriptions",
    value: "486",
    status: "Premium",
  },
  {
    title: "Monthly Searches",
    value: "1,240,521",
    status: "Healthy",
  },
  {
    title: "Server Status",
    value: "99.98%",
    status: "Online",
  },
];

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar title="Admin Dashboard" />

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Monitor platform performance, users, subscriptions, and system health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="text-3xl font-bold">
                    {item.value}
                  </div>

                  <Badge
                    className="mt-3"
                    variant="success"
                  >
                    {item.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Platform Overview</CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>• User management</li>
                <li>• Subscription monitoring</li>
                <li>• Keyword usage analytics</li>
                <li>• API usage statistics</li>
                <li>• System health monitoring</li>
                <li>• Audit logs</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
