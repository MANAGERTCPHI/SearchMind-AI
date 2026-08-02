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

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const keyword = savedKeywords.find(
      (item) => item.id === params.id
    );

    if (!keyword) {
      return NextResponse.json(
        {
          success: false,
          message: "Saved keyword not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      keyword,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch saved keyword.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const body = await request.json();

    const keywordIndex = savedKeywords.findIndex(
      (item) => item.id === params.id
    );

    if (keywordIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Saved keyword not found.",
        },
        {
          status: 404,
        }
      );
    }

    savedKeywords[keywordIndex] = {
      ...savedKeywords[keywordIndex],
      ...body,
    };

    return NextResponse.json({
      success: true,
      keyword: savedKeywords[keywordIndex],
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to update saved keyword.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const keywordIndex = savedKeywords.findIndex(
      (item) => item.id === params.id
    );

    if (keywordIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Saved keyword not found.",
        },
        {
          status: 404,
        }
      );
    }

    const deletedKeyword = savedKeywords.splice(
      keywordIndex,
      1
    )[0];

    return NextResponse.json({
      success: true,
      keyword: deletedKeyword,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete saved keyword.",
      },
      {
        status: 500,
      }
    );
  }
        }
