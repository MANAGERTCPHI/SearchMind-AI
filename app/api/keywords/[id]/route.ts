import { NextRequest, NextResponse } from "next/server";

interface KeywordRecord {
  id: string;
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  competition: number;
  intent: string;
}

const keywordRecords: KeywordRecord[] = [];

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
    const keyword = keywordRecords.find(
      (item) => item.id === params.id
    );

    if (!keyword) {
      return NextResponse.json(
        {
          success: false,
          message: "Keyword record not found.",
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
        message: "Unable to fetch keyword.",
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

    const keywordIndex = keywordRecords.findIndex(
      (item) => item.id === params.id
    );

    if (keywordIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Keyword record not found.",
        },
        {
          status: 404,
        }
      );
    }

    keywordRecords[keywordIndex] = {
      ...keywordRecords[keywordIndex],
      ...body,
    };

    return NextResponse.json({
      success: true,
      keyword: keywordRecords[keywordIndex],
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to update keyword.",
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
    const keywordIndex = keywordRecords.findIndex(
      (item) => item.id === params.id
    );

    if (keywordIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Keyword record not found.",
        },
        {
          status: 404,
        }
      );
    }

    const deletedKeyword = keywordRecords.splice(
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
        message: "Unable to delete keyword.",
      },
      {
        status: 500,
      }
    );
  }
}
