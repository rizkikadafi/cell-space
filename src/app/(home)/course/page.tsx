import { Suspense } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"
import prisma from "@/lib/db"
import { CardLoading } from "@/components/ui/loading"


export default async function Course() {
  const courses = await prisma.course.findMany(
    {
      select: {
        id: true,
        title: true,
        description: true,
      },
    }
  )

  return (
    <ScrollArea className="h-full box-border">
      <div className="grid md:grid-cols-3 gap-5">
        {courses.map((course) => {
          return (
            <Suspense fallback={<CardLoading />} key={course.id}>
              <Card className="rounded-md overflow-hidden" key={course.id}>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src="/module-thumb.png"
                    alt={course.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </AspectRatio>
                <CardHeader className="relative">
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={`/course/${course.id}`} className={`${buttonVariants({ variant: "default", size: "lg" })} w-full`}>
                    Start Learning
                  </Link>
                </CardFooter>
              </Card>
            </Suspense>
          )
        })}
      </div>
    </ScrollArea>
  )
}
