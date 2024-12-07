"use client";

import { useState, useEffect } from "react";
import { Timer } from "../ui/timer";
import { Choices } from "../ui/choicequiz";
import { useRouter } from "next/navigation";
import Spline from "@splinetool/react-spline";

interface QuizSectionProps {
  questionText: string;
  choices: { id: number; text: string }[];
  correctChoice?: number;
  scene: string;
  initialTime: number;
  nextPage: string;
}

export default function QuizSection({
  questionText,
  choices,
  correctChoice,
  scene,
  initialTime,
  nextPage,
}: QuizSectionProps) {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
  }, [scene]);

  const handleLoad = () => {
    setIsLoading(false);
  };

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
    }, 100);
  };

  const handleTimerEnd = () => {
    handleNext();
  };

  return (
    <section className="relative overflow-hidden h-screen pt-16">
      <Timer initialTime={initialTime} onTimerEnd={handleTimerEnd} />
      <div className="flex flex-col items-center justify-center h-full space-y-6z">
        {isLoading && <div>Loading Scene...</div>}
        <Spline
          scene="/scene.splinecode"
          onLoad={handleLoad}
          style={{
            transform: "scale(0.5) translateY(-50px)",
          }}
        />
        <div className="text-center px-4">
          <p className="text-2xl font-semibold text-white">{questionText}</p>
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
        {isCorrect !== null && (
          <div className={`mt-4 text-lg ${isCorrect ? "text-green-500" : "text-red-500"}`}>
            {isCorrect ? "Correct!" : "Incorrect, try again!"}
          </div>
        )}
      </div>
    </section>
  );
}
