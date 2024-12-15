import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialCourse: Prisma.CourseCreateInput[] = [
  {
    title: 'Pengenalan Sel',
    description: 'Module yang membahas tentang sel',
    chapters: {
      create: [
        {
          title: 'Pengenalan Sel',
          materials: {
            create: [
              {
                title: 'Apa itu Sel?',
                type: 'text',
                content: 'Sel adalah unit terkecil dari makhluk hidup...',
              },
              {
                title: 'Struktur Sel',
                type: 'simulation',
                content: '{"nucleus": "Ini adalah Nucleus", "nucleolus": "Ini adalah Nucleolus", "mitocondria": "Ini adalah Mitokondria"}',
                simulation: {
                  create: {
                    scene: "sims1.splinecode"
                  }
                }

              },
            ],
          },
        },
      ],
    },
  },
]

const initialQuizzes: Prisma.QuizCreateInput[] = [
  {
    title: "Quiz: Struktur Sel",
    description: "Tes pemahaman tentang struktur sel",
    questions: {
      create: [
        {
          text: "Apa organel yang merupakan pusat kendali sel?",
          type: "multipleChoice",
          options: {
            create: [
              { text: "Nukleus", isCorrect: true },
              { text: "Mitokondria", isCorrect: false },
              { text: "Ribosom", isCorrect: false },
              { text: "Kloroplas", isCorrect: false },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`)
  for (const module of initialCourse) {
    const newCourse = await prisma.course.create({
      data: module,
    })
    console.log(`Created course with id: ${newCourse.id}`)
  }
  for (const quiz of initialQuizzes) {
    const newQuiz = await prisma.quiz.create({
      data: quiz,
    })
    console.log(`Created quiz with id: ${newQuiz.id}`)
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
