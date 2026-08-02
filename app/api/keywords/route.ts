import { NextRequest, NextResponse } from "next/server";

interface KeywordResult {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  competition: number;
  intent: string;
}

export async function POST(request: NextRequest) {
  try {
    const { keyword } = await request.json();

    if (!keyword || typeof keyword !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Keyword is required.",
        },
        { status: 400 }
      );
    }

    // Placeholder response.
    // Replace with a real keyword provider later.
    const results: KeywordResult[] = [
      {
        keyword,
        searchVolume: 12500,
        difficulty: 42,
        cpc: 1.84,
        competition: 0.61,
        intent: "Commercial",
      },
      {
        keyword: `${keyword} tools`,
        searchVolume: 8100,
        difficulty: 36,
        cpc: 1.42,
        competition: 0.47,
        intent: "Commercial",
      },
      {
        keyword: `best ${keyword}`,
        searchVolume: 5400,
        difficulty: 31,
        cpc: 2.05,
        competition: 0.53,
        intent: "Informational",
      },
    ];

    return NextResponse.json({
      success: true,
      keyword,
      results,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
