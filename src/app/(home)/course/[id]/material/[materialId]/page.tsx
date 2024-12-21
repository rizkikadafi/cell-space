import prisma from "@/lib/db";
import { ScrollArea } from "@/components/ui/scroll-area";
import MarkdownContent from "@/components/ui/react-markdown";
import { JsonObject } from "@prisma/client/runtime/library";

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



  const contentToRender = (material.content as JsonObject).main as string;

  return (
    <ScrollArea className="h-full w-full box-border">
      <div className="max-w-none">
        <MarkdownContent content={contentToRender} />
      </div>
    </ScrollArea>
  );
}


