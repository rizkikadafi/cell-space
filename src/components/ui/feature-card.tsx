// src/components/ui/feature-card.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; //
import { LucideProps } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={`flex flex-col items-center text-center p-6 ${className}`}>
      <div className="mb-4 text-primary">
        {React.cloneElement(icon, { size: 48 })}
      </div>
      <CardHeader className="p-0 mb-2">
        <CardTitle className="text-xl sm:text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardDescription className="text-sm sm:text-base text-muted-foreground">
        {description}
      </CardDescription>
    </Card>
  );
}
