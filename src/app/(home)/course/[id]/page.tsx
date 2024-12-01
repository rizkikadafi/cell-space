import prisma from "@/lib/db"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const coursId = (await params).id

  const course = await prisma.course.findUnique(
    {
      where: {
        id: Number(coursId),
      },
    },
  )

  return (
    <div>
      <h1>{course?.title}</h1>
      <p>{course?.description}</p>
    </div>
  )
}
