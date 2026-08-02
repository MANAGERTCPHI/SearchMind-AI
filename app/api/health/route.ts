import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        status: "healthy",
        service: "SearchMind AI API",
        timestamp: new Date().toISOString(),
        environment:
          process.env.NODE_ENV || "development",
      },
      {
        status: 200,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        status: "unhealthy",
        message: "Service unavailable.",
      },
      {
        status: 503,
      }
    );
  }
}
