import { NextRequest, NextResponse } from "next/server";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

const projects: Project[] = [];

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
    const project = projects.find(
      (item) => item.id === params.id
    );

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      project,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch project.",
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

    const projectIndex = projects.findIndex(
      (item) => item.id === params.id
    );

    if (projectIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found.",
        },
        {
          status: 404,
        }
      );
    }

    projects[projectIndex] = {
      ...projects[projectIndex],
      ...body,
    };

    return NextResponse.json({
      success: true,
      project: projects[projectIndex],
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to update project.",
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
    const projectIndex = projects.findIndex(
      (item) => item.id === params.id
    );

    if (projectIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found.",
        },
        {
          status: 404,
        }
      );
    }

    const deletedProject = projects.splice(
      projectIndex,
      1
    )[0];

    return NextResponse.json({
      success: true,
      project: deletedProject,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete project.",
      },
      {
        status: 500,
      }
    );
  }
        }
