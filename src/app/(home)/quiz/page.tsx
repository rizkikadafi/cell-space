import { Suspense } from 'react'
import Image from "next/image"
import Link from "next/link"
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
  const quizzes = await prisma.quiz.findMany(
    {
      select: {
        id: true,
        title: true,
        description: true,
      },
    }
  )

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {quizzes.map((quiz) => {
        return (
          <Suspense fallback={<CardLoading />} key={quiz.id}>
            <Card className="rounded-md overflow-hidden" key={quiz.id}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/module-thumb.png"
                  alt={quiz.title}
                  fill
                  className="object-cover rounded-md"
                />
              </AspectRatio>
              <CardHeader className="relative">
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`quiz/${quiz.id}`} className={`${buttonVariants({ variant: "default", size: "lg" })} w-full`}>
                  Start Quiz
                </Link>
              </CardFooter>
            </Card>
          </Suspense>
        )
      })}
    </div>
  )
}

