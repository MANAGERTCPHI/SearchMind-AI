import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const history = [
  {
    id: 1,
    keyword: "best seo tools",
    date: "2026-08-02",
    status: "Completed",
  },
  {
    id: 2,
    keyword: "ai keyword research",
    date: "2026-08-01",
    status: "Completed",
  },
  {
    id: 3,
    keyword: "content marketing",
    date: "2026-07-31",
    status: "Completed",
  },
];

export default function HistoryPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar title="Search History" />

        <main className="flex-1 p-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Searches</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left">Keyword</th>
                      <th className="text-left">Date</th>
                      <th className="text-left">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {history.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b"
                      >
                        <td className="py-4">
                          {item.keyword}
                        </td>

                        <td>{item.date}</td>

                        <td>
                          <Badge variant="success">
                            {item.status}
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
