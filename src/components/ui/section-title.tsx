// src/components/ui/section-title.tsx

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <div className={`relative mb-8 text-center ${className}`}>
      <h2 className="mb-3 font-bebas-neue text-3xl sm:text-4xl leading-none text-foreground">
        {children}
      </h2>
      <div className="flex justify-center">
        <span className="w-20 h-1 bg-foreground"></span>
      </div>
    </div>
  );
}
