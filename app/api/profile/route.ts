import { NextRequest, NextResponse } from "next/server";

interface Profile {
  id: string;
  fullName: string;
  email: string;
  company?: string;
  avatarUrl?: string;
  createdAt: string;
}

let profile: Profile | null = null;

export async function GET() {
  try {
    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          message: "Profile not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      profile,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to retrieve profile.",
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
      fullName,
      email,
      company,
      avatarUrl,
    } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name and email are required.",
        },
        {
          status: 400,
        }
      );
    }

    profile = {
      id: crypto.randomUUID(),
      fullName,
      email,
      company: company || "",
      avatarUrl: avatarUrl || "",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        profile,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to create profile.",
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

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          message: "Profile not found.",
        },
        {
          status: 404,
        }
      );
    }

    profile = {
      ...profile,
      ...body,
    };

    return NextResponse.json({
      success: true,
      profile,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to update profile.",
      },
      {
        status: 500,
      }
    );
  }
}
