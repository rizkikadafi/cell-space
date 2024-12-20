import { ScrollArea } from "@/components/ui/scroll-area"

export default async function QuizLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <ScrollArea className="h-full box-border">
      {children}
    </ScrollArea>
  );
}
