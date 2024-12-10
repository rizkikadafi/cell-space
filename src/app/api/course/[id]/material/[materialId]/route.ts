import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string, materialId: string }> }

) {
  const courseId = Number((await params).id);
  const materialId = Number((await params).materialId);

  const material = await prisma.material.findFirst({
    where: {
      id: materialId,
      chapter: {
        courseId: courseId,
      },
    },
    select: { title: true },
  });

  if (!material) {
    return NextResponse.json({ error: "Material not found" }, { status: 404 });
  }

  return NextResponse.json(material);
}

