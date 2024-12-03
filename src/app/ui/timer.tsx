import React, { useEffect, useState } from "react";

export function Timer({ initialTime }: { initialTime: number }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute top-[100px] left-4 z-20">
            <span className="text-xl font-semibold text-blue-600">
                Time: {timeLeft}s
            </span>
        </div>
    );
}
