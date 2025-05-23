// src/app/benefits-section.tsx

import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import { Brain, Lightbulb, Puzzle, Award, TrendingUp } from "lucide-react";

interface BenefitItemProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1 text-primary bg-primary/10 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Brain size={24} />,
      title: "Pemahaman Mendalam",
      description: "Visualisasi 3D mengubah konsep abstrak sel menjadi konkret dan mudah dipahami.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Belajar Menyenangkan",
      description: "Jelajahi dunia sel dengan cara yang imersif dan interaktif, jauh dari metode hafalan monoton.",
    },
    {
      icon: <Puzzle size={24} />, // Mengganti ikon sebelumnya dengan yang lebih relevan
      title: "Fleksibilitas Belajar",
      description: "Akses materi dan simulasi kapan saja, di mana saja, sesuai dengan ritme belajar Anda.",
    },
    {
      icon: <Award size={24} />, // Mengganti ikon sebelumnya
      title: "Persiapan Ujian Optimal",
      description: "Materi terstruktur dan kuis membantu Anda memantapkan pemahaman untuk menghadapi evaluasi.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Tingkatkan Minat Sains",
      description: "Tumbuhkan rasa ingin tahu dan kecintaan pada biologi melalui pengalaman belajar yang inovatif.",
    },
  ];

  return (
    <section id="benefit" className="bg-muted/50 text-foreground rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Manfaat Belajar dengan CellSpace
        </SectionTitle>
        <div className="mt-12 grid md:grid-cols-2 gap-x-8 gap-y-10 items-center">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>

          <div className="relative w-full max-w-md mx-auto md:max-w-lg aspect-[4/3] mt-8 md:mt-0">
            <Image
              src="/benefit.jpeg"
              alt="Manfaat Belajar dengan CellSpace"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
