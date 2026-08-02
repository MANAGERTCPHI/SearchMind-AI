import { NextRequest, NextResponse } from "next/server";

interface SavedKeyword {
  id: string;
  keyword: string;
  projectId?: string;
  difficulty: number;
  searchVolume: number;
  intent: string;
  createdAt: string;
}

const savedKeywords: SavedKeyword[] = [];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      keywords: savedKeywords,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to load saved keywords.",
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

    const {
      keyword,
      projectId,
      difficulty,
      searchVolume,
      intent,
    } = body;

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

    const newKeyword: SavedKeyword = {
      id: crypto.randomUUID(),
      keyword,
      projectId: projectId || "",
      difficulty: difficulty || 0,
      searchVolume: searchVolume || 0,
      intent: intent || "Unknown",
      createdAt: new Date().toISOString(),
    };

    savedKeywords.push(newKeyword);

    return NextResponse.json(
      {
        success: true,
        keyword: newKeyword,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to save keyword.",
      },
      {
        status: 500,
      }
    );
  }
}
