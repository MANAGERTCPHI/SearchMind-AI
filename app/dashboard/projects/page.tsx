import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    name: "SEO Campaign",
    keywords: 42,
    status: "Active",
  },
  {
    id: 2,
    name: "Blog Content",
    keywords: 28,
    status: "Planning",
  },
  {
    id: 3,
    name: "E-commerce Store",
    keywords: 96,
    status: "Completed",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar title="Projects" />

        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                SEO Projects
              </h1>

              <p className="text-gray-500 dark:text-gray-400">
                Organize keyword research into projects.
              </p>
            </div>

            <Button>
              New Project
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>
                    {project.name}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    {project.keywords} saved keywords
                  </p>

                  <Badge>
                    {project.status}
                  </Badge>

                  <div className="mt-6">
                    <Button className="w-full">
                      Open Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
