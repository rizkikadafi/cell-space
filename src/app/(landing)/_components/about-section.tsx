// src/app/about-section.tsx

import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";

export default function AboutSection() {
  const images = [
    { src: "/about1.jpeg", alt: "about1" },
    { src: "/about2.jpeg", alt: "about2" },
    { src: "/about3.jpeg", alt: "about3" },
  ];

  return (
    <section id="about" className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Tentang CellSpace
        </SectionTitle>
        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="prose prose-invert max-w-none text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p className="mb-6">
              CellSpace adalah platform revolusioner yang dirancang untuk mengubah cara Anda belajar dan memahami biologi sel. Kami percaya bahwa konsep ilmiah yang kompleks dapat diakses dan dinikmati oleh semua orang melalui visualisasi yang kaya dan interaksi yang mendalam.
            </p>
            <p className="mb-6">
              Misi kami adalah menyediakan alat pembelajaran yang tidak hanya informatif tetapi juga menginspirasi rasa ingin tahu. Dengan CellSpace, Anda akan diajak menjelajahi dunia mikroskopis sel melalui simulasi 3D yang akurat dan menarik, didukung oleh materi pembelajaran komprehensif dan kuis interaktif untuk menguji pemahaman Anda.
            </p>
          </div>
          {/* Stacked Image Cards Section */}
          <div className="relative w-full max-w-md mx-auto md:max-w-sm h-64 sm:h-72 md:h-80 lg:h-96">
            {images.map((image, index) => (
              <Card
                key={index}
                className={`absolute w-full h-full overflow-hidden rounded-lg shadow-xl border-2 border-card transform transition-all duration-500 ease-out
                  ${index === 0 ? 'z-30 rotate-[-6deg] hover:rotate-[-4deg] hover:scale-105' : ''}
                  ${index === 1 ? 'z-20 rotate-[4deg] scale-95 hover:rotate-[4deg] hover:scale-100' : ''}
                  ${index === 2 ? 'z-10 rotate-[6deg] scale-90 hover:rotate-[4deg] hover:scale-95' : ''}
                  hover:z-40 
                `}
                // Atur offset agar terlihat bertumpuk dan sedikit berbeda
                style={{
                  top: `${index * 30}px`, // Sedikit offset vertikal untuk setiap kartu
                  left: `${index * 40}px`, // Sedikit offset horizontal
                  //maxWidth: 'calc(100% - ' + (images.length - 1 - index) * 20 + 'px)' // Membuat kartu belakang lebih kecil
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md" // Pastikan gambar juga rounded jika cardnya rounded
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
