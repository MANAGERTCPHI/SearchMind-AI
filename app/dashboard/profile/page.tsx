import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar title="Profile" />

        <main className="flex-1 p-6">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
            </CardHeader>

            <CardContent>
              <form className="space-y-5">
                <Input
                  placeholder="Full Name"
                  defaultValue="John Doe"
                />

                <Input
                  type="email"
                  placeholder="Email"
                  defaultValue="john@example.com"
                />

                <Input
                  placeholder="Company"
                  defaultValue="SearchMind AI"
                />

                <Button type="submit">
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
