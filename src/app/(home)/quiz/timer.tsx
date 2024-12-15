import React, { useEffect, useState } from "react";

interface TimerProps {
  initialTime: number;
  onTimerEnd: () => void; // Callback when timer ends
}

export function Timer({ initialTime, onTimerEnd }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          onTimerEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimerEnd]);

  return (
    <div className="absolute top-[100px] left-4 z-20">
      <span className="text-xl font-semibold text-blue-600">
        Time: {timeLeft}s
      </span>
    </div>
  );
}
