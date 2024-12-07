"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const router = useRouter();
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const storedChoices = localStorage.getItem("correctChoice");
    if (storedChoices) {
      const correctChoice = JSON.parse(storedChoices);
      setTotalQuestions(correctChoice.length);
      setCorrectCount(correctChoice.filter((isCorrect: boolean) => isCorrect).length);
    } else {
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("correctChoice");
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black-100 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Quiz Results</h1>
        <p className="text-xl">
          You answered {correctCount} out of {totalQuestions} questions correctly.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-6 py-2 bg-blue-600 text-black rounded-lg"
        >
          Back to Quiz
        </button>
      </div>
    </section>
  );
}
