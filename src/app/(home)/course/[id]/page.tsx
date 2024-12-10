import prisma from "@/lib/db"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const courseId = (await params).id

  const course = await prisma.course.findUnique(
    {
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
                title: true,
              },
            },
          },
        }
      },
      where: {
        id: Number(courseId),
      },
    },
  )

  return (
    <div>
      <h1 className="text-lg font-bold">{course?.title}</h1>
      <p className="text-sm">{course?.description}</p>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {course?.chapters.map((chapter, index) => (
            <AccordionItem key={index} value={chapter.title}>
              <AccordionTrigger>
                <h2 className="text-md font-semibold">{`${index + 1}. ${chapter.title}`}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  {chapter.materials.map((material, index) => (
                    <li key={index} className="my-2">
                      <Link href={`/course/${course.id}/material/${material.id}`}>
                        {material.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
