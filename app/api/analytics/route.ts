import { NextResponse } from "next/server";

interface AnalyticsData {
  totalSearches: number;
  savedKeywords: number;
  totalProjects: number;
  exports: number;
  growthRate: number;
}

export async function GET() {
  try {
    // Placeholder analytics data.
    // Replace with Supabase queries later.

    const analytics: AnalyticsData = {
      totalSearches: 245,
      savedKeywords: 86,
      totalProjects: 12,
      exports: 34,
      growthRate: 18.5,
    };

    return NextResponse.json({
      success: true,
      analytics,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to load analytics data.",
      },
      {
        status: 500,
      }
    );
  }
}
