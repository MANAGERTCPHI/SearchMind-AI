import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const keywords = [
  {
    keyword: "seo tools",
    volume: 54000,
    difficulty: 48,
    intent: "Commercial",
  },
  {
    keyword: "keyword research",
    volume: 33100,
    difficulty: 55,
    intent: "Informational",
  },
  {
    keyword: "ai seo",
    volume: 14800,
    difficulty: 39,
    intent: "Commercial",
  },
];

export default function KeywordsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar title="Keyword Research" />

        <main className="flex-1 p-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Keyword Research</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row">
                <Input
                  placeholder="Enter a keyword..."
                  className="flex-1"
                />

                <Button>
                  Analyze
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Keyword Results</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left">Keyword</th>
                      <th className="text-left">Search Volume</th>
                      <th className="text-left">Difficulty</th>
                      <th className="text-left">Intent</th>
                    </tr>
                  </thead>

                  <tbody>
                    {keywords.map((item) => (
                      <tr
                        key={item.keyword}
                        className="border-b"
                      >
                        <td className="py-4">
                          {item.keyword}
                        </td>

                        <td>{item.volume.toLocaleString()}</td>

                        <td>{item.difficulty}</td>

                        <td>
                          <Badge>
                            {item.intent}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
