"use client";

import { useState } from "react";
import { Timer } from "./timer";
import { Choices } from "./choicequiz";
import { useRouter } from "next/navigation";

interface QuizSectionProps {
  questionText: string;
  choices: { id: number; text: string }[];
  correctChoice?: number;
  initialTime: number;
  nextPage: string;
}

export default function QuizSection({
  questionText,
  choices,
  correctChoice,
  initialTime,
  nextPage,
}: QuizSectionProps) {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const router = useRouter();


  const updateCorrectAnswers = (isCorrect: boolean) => {
    const correctAnswers = JSON.parse(localStorage.getItem("correctChoice") || "[]");
    correctAnswers.push(isCorrect);
    localStorage.setItem("correctChoice", JSON.stringify(correctAnswers));
  };

  const handleCorrect = () => {
    if (selectedChoice !== null) {

      const isAnswerCorrect = selectedChoice === correctChoice;
      setIsCorrect(isAnswerCorrect);
      updateCorrectAnswers(isAnswerCorrect);
      return isAnswerCorrect;
    }
    return false;
  };


  const handleNext = () => {
    handleCorrect();
    setTimeout(() => {
      if (nextPage) {
        router.push(nextPage);
      }
    }, 1000);
  };

  const handleTimerEnd = () => {
    handleNext();
  };

  return (
    <section className="relative overflow-hidden h-full pt-16">
      <Timer initialTime={initialTime} onTimerEnd={handleTimerEnd} />
      {isCorrect !== null && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-10 p-8`}
        >
          <div className={`${isCorrect ? "bg-green-400" : "bg-red-400"} text-white text-xl font-bold px-6 py-3 rounded-lg shadow-lg`}>
            {isCorrect ? "Correct!" : "Incorrect, try again!"}
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="text-center px-4 pb-3">
          <p className="text-2xl font-semibold text-foreground">{questionText}</p>
        </div>
        <Choices
          choices={choices}
          selectedChoice={selectedChoice}
          onSelect={setSelectedChoice}
        />
        <div>
          <button
            className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg"
            disabled={!selectedChoice}
            onClick={handleNext}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
