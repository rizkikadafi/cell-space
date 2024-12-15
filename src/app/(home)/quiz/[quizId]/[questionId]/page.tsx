import prisma from "@/lib/db";
import QuizSection from "../../quiz-section";
import { redirect } from "next/navigation";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ quizId: string; questionId: string }>;
}) {
  const { quizId, questionId } = await params;

  const question = await prisma.question.findUnique({
    where: { id: Number(questionId) },
    select: {
      text: true,
      options: {
        select: {
          id: true,
          text: true,
          isCorrect: true,
        },
      },
    },
  });

  const nextQuestion = await prisma.question.findFirst({
    where: {
      quizId: Number(quizId),
      id: {
        gt: Number(questionId),
      },
    },
    select: {
      id: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  if (!question) {
    return redirect("/quiz/quiz-result");
  }

  return (
    <div>

      <QuizSection
        questionText={question.text}
        choices={question.options.map((option) => ({
          id: option.id,
          text: option.text,
        }))}
        correctChoice={question.options.find((option) => option.isCorrect)?.id}
        initialTime={60}

        nextPage={nextQuestion ? `/quiz/${quizId}/${nextQuestion.id}` : "/quiz/quiz-result"}
      />
    </div>
  );
}
