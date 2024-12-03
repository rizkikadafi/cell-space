import { Navbar } from "@/app/ui/navbar-quiz";
import QuizSection from "@/app/ui/quiz-section";

const choices = [
  { id: 1, text: "Answer 1" },
  { id: 2, text: "Answer 2" },
  { id: 3, text: "Answer 3" },
  { id: 4, text: "Answer 4" },
];

export default function Quiz1Page() {
  return (
    <>
      <Navbar />
      <QuizSection
        questionText="What is the answer?"
        choices={choices}
        scene="/scene1.splinecode"
        initialTime={60}
        nextPage="../quiz2"
      />
    </>
  );
}
