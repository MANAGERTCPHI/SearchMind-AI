import { NextRequest, NextResponse } from "next/server";

interface ExportRequest {
  format: "csv" | "json";
  keywords: string[];
  fileName?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ExportRequest;

    const {
      format,
      keywords,
      fileName = "searchmind-keywords",
    } = body;

    if (!format || !keywords || !Array.isArray(keywords)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format and keywords are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (format === "json") {
      return NextResponse.json({
        success: true,
        fileName: `${fileName}.json`,
        data: keywords,
      });
    }

    if (format === "csv") {
      const csvContent = [
        "Keyword",
        ...keywords,
      ].join("\n");

      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="${fileName}.csv"`,
        },
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Unsupported export format.",
      },
      {
        status: 400,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Export failed.",
      },
      {
        status: 500,
      }
    );
  }
}
