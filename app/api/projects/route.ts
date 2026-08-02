import { NextRequest, NextResponse } from "next/server";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

const projects: Project[] = [];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      projects,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch projects.",
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

    const { name, description } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Project name is required.",
        },
        {
          status: 400,
        }
      );
    }

    const newProject: Project = {
      id: crypto.randomUUID(),
      name,
      description: description || "",
      createdAt: new Date().toISOString(),
    };

    projects.push(newProject);

    return NextResponse.json(
      {
        success: true,
        project: newProject,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to create project.",
      },
      {
        status: 500,
      }
    );
  }
}
