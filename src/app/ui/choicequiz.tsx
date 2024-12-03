import React from "react";
import { Card } from "@/components/ui/card";

interface Choice {
    id: number;
    text: string;
}

export function Choices({
    choices,
    selectedChoice,
    onSelect,
}: {
    choices: Choice[];
    selectedChoice: number | null;
    onSelect: (id: number) => void;
}) {
    return (
        <div className="grid grid-cols-1 gap-6 px-6 max-w-3xl w-full">
            {choices.map((choice) => (
                <Card
                    key={choice.id}
                    className={`cursor-pointer flex items-center justify-between px-6 py-4 text-xl font-medium transition-all duration-200 shadow-lg rounded-lg ${
                        selectedChoice === choice.id
                            ? "bg-blue-500 text-white"
                            : "bg-white/70 text-gray-800 hover:bg-blue-100"
                    }`}
                    onClick={() => onSelect(choice.id)}
                >
                    {choice.text}
                </Card>
            ))}
        </div>
    );
}
