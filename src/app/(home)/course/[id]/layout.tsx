import prisma from "@/lib/db";
import { DrawerMenu } from "./drawer-menu";

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: Promise<{ id: string }>
}) {
  const courseId = (await params).id

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

  return (
    <>
      <DrawerMenu id={course.id} title={course.title} description={course.description} chapters={course.chapters} />
      {children}
    </>
  );
}
