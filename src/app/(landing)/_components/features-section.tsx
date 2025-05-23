import FeatureCard from "@/components/ui/feature-card";
import SectionTitle from "@/components/ui/section-title";
import { Cuboid, BookOpenText, CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Cuboid />,
      title: "Pembelajaran 3D",
      description: "Visualisasikan struktur sel secara detail dan interaktif untuk pemahaman yang lebih mendalam.",
    },
    {
      icon: <BookOpenText />,
      title: "Materi Lengkap",
      description: "Akses modul pembelajaran biologi sel yang disusun secara komprehensif dan mudah dipahami.",
    },
    {
      icon: <CheckCircle />,
      title: "Kuis Interaktif",
      description: "Uji pemahaman Anda melalui berbagai kuis menarik yang dirancang untuk memperkuat ingatan.",
    },
  ];
  return (
    <section id="service" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Fitur Utama
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>)
}
