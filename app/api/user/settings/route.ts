import { NextRequest, NextResponse } from "next/server";

interface UserSettings {
  userId: string;
  theme: "light" | "dark" | "system";
  emailNotifications: boolean;
  weeklyReports: boolean;
  createdAt: string;
  updatedAt: string;
}

let settings: UserSettings | null = null;

export async function GET() {
  try {
    if (!settings) {
      return NextResponse.json(
        {
          success: false,
          message: "User settings not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      settings,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to load settings.",
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
      userId,
      theme,
      emailNotifications,
      weeklyReports,
    } = body;

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "User ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    settings = {
      userId,
      theme: theme || "system",
      emailNotifications:
        emailNotifications ?? true,
      weeklyReports:
        weeklyReports ?? true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        settings,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to create settings.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();

    if (!settings) {
      return NextResponse.json(
        {
          success: false,
          message: "Settings not found.",
        },
        {
          status: 404,
        }
      );
    }

    settings = {
      ...settings,
      ...body,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      settings,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to update settings.",
      },
      {
        status: 500,
      }
    );
  }
          }
