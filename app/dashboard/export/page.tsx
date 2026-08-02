import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const exportFormats = [
  {
    name: "CSV",
    description: "Export keyword data as CSV.",
  },
  {
    name: "Excel",
    description: "Export keyword data as Excel (.xlsx).",
  },
  {
    name: "PDF",
    description: "Generate a professional PDF report.",
  },
];

export default function ExportPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar title="Export Center" />

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Export Center
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Download keyword research, reports, and project data.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {exportFormats.map((format) => (
              <Card key={format.name}>
                <CardHeader>
                  <CardTitle>{format.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    {format.description}
                  </p>

                  <Button className="w-full">
                    Export {format.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
