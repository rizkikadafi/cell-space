import Link from "next/link";
import prisma from "@/lib/db"
import { buttonVariants } from "@/components/ui/button";

export default async function QuizPage({
  params
}: {
  params: Promise<{ quizId: string }>
}) {

  const quizId = (await params).quizId

  const quiz = await prisma.quiz.findUnique({
    select: {
      id: true,
      title: true,
      description: true,
      questions: {
        select: {
          id: true,
        },
        orderBy: {
          id: "asc",
        },
      },
    },
    where: {
      id: Number(quizId),
    },
  });

  if (!quiz) {
    return <p>Quiz not found.</p>;
  }

  const firstQuestionId = quiz.questions[0]?.id;


  return (
    <>
      <h1>{quiz?.title}</h1>
      <p>{quiz?.description}</p>

      {firstQuestionId && (
        <Link
          href={`/quiz/${quiz.id}/${firstQuestionId}`}
          className={`${buttonVariants({ variant: "default", size: "lg" })} w-full`}
        >
          Start Quiz
        </Link>
      )}
    </>
  );
}
