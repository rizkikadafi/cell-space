import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialCourse: Prisma.CourseCreateInput[] = [
  {
    title: 'Course 1',
    description: 'This is the first course',
  },
  {
    title: 'Course 2',
    description: 'This is the second course',
  },
  {
    title: 'Course 3',
    description: 'This is the third course',
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const module of initialCourse) {
    const newCourse = await prisma.course.create({
      data: module,
    })
    console.log(`Created course with id: ${newCourse.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
