import { NextRequest, NextResponse } from "next/server";

interface SearchHistory {
  id: string;
  keyword: string;
  intent: string;
  createdAt: string;
}

const searchHistory: SearchHistory[] = [];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      history: searchHistory,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to load search history.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { keyword, intent } = body;

    if (!keyword || typeof keyword !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Keyword is required.",
        },
        {
          status: 400,
        }
      );
    }

    const newSearch: SearchHistory = {
      id: crypto.randomUUID(),
      keyword,
      intent: intent || "Unknown",
      createdAt: new Date().toISOString(),
    };

    searchHistory.unshift(newSearch);

    return NextResponse.json(
      {
        success: true,
        search: newSearch,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to save search history.",
      },
      {
        status: 500,
      }
    );
  }
}
