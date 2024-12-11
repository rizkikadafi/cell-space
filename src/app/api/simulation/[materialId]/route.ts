import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ materialId: string }> }
) {
  try {
    const { materialId } = await params;

    if (!materialId || isNaN(Number(materialId))) {
      return NextResponse.json(
        { error: "Invalid materialId" },
        { status: 400 }
      );
    }

    const material = await prisma.material.findUnique({
      where: { id: Number(materialId) },
      select: {
        content: true,
        simulation: true, // Ambil data simulation terkait
      },
    });

    if (!material || !material.simulation || !material.content) {
      return NextResponse.json(
        { error: "Simulation not found for this material" },
        { status: 404 }
      );
    }

    return NextResponse.json(material);
  } catch (error) {
    console.error("Error fetching simulation:", error);
    return NextResponse.json({ error: `Error: ${error}` }, { status: 500 });
  }
}

