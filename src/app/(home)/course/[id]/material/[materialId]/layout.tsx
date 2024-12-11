import prisma from "@/lib/db";
import { DrawerMenu } from "./drawer-menu";

export async function generateStaticParams() {
  const courses = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      chapters: {
        select: {
          title: true,
          materials: {
            select: {
              id: true,
              title: true
            }
          }
        }
      }
    },
  });

  return courses.map((course) => ({
    id: course.id.toString(),
    title: course.title,
    description: course.description,
    chapters: course.chapters
  }));
}

export default async function CourseLayout({
  children,
  simulation,
  params,
}: {
  children: React.ReactNode,
  simulation: React.ReactNode,
  params: Promise<{ id: string, materialId: string }>
}) {
  const courseId = (await params).id
  const materialId = (await params).materialId

  const course = await prisma.course.findUnique({
    where: {
      id: Number(courseId),
    },
    select: {
      id: true,
      title: true,
      description: true,
      chapters: {
        select: {
          title: true,
          materials: {
            select: {
              id: true,
              title: true
            }
          }
        }
      }
    }
  });


  if (!course) {
    return <div>Course not found</div>;
  }

  const currentMaterial = await prisma.material.findUnique({
    where: {
      id: Number(materialId),
    },
    select: {
      type: true,
    },
  });

  return (
    <>
      <DrawerMenu id={course.id} title={course.title} description={course.description} chapters={course.chapters} />

      {currentMaterial?.type === "simulation" ? simulation : children}
    </>
  );
}
