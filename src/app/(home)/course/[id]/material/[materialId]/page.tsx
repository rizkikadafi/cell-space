import prisma from "@/lib/db";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function MaterialPage({
  params,
}: {
  params: Promise<{ id: string; materialId: string }>;
}) {
  const { id: courseId, materialId } = await params;

  if (materialId == undefined) {
    return <p>Material is Empty</p>;
  }

  const material = await prisma.material.findUnique({
    where: { id: Number(materialId) },
    select: {
      title: true,
      type: true,
      content: true,
      chapter: {
        select: {
          courseId: true, // Validasi bahwa material milik course ini
        },
      },
    },
  });

  if (!material || material.chapter.courseId !== Number(courseId)) {
    return <p>Material not found or does not belong to this course.</p>;
  }



  return (
    <ScrollArea className="h-full box-border">
      <h1 className="font-medium text-lg">{material.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: material.content }} />
    </ScrollArea>
  );
}


