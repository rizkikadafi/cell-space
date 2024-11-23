"use client"

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import Loading from "@/app/loading";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="relative overflow-hidden h-screen">
      <div className="flex relative z-10 items-center overflow-hidden h-full pt-20">
        <div className="container mx-auto px-6 flex items-center relative h-full py-5">
          <div className="lg:w-2/5 flex flex-col relative z-20 mt-16">
            <span className="w-20 h-2 bg-foreground mb-5">
            </span>
            <h1 className="mb-3 font-bebas-neue uppercase text-6xl sm:text-8xl flex flex-col leading-none text-foreground">
              Cell <span className="text-5xl sm:text-7xl">Space</span>
            </h1>
            <p className="text-sm sm:text-base text-foreground">
              Platform pembelajaran Biologi Sel yang dirancang untuk memberikan pengalaman belajar yang interaktif dan menyenangkan melalui materi dan simulasi 3D.
            </p>
            <div className="flex mt-8">
              <Link href="/dashboard" className={`${buttonVariants({ variant: "default", size: "lg" })} mr-3`}>
                Get started
              </Link>
              <a href="#" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Read more
              </a>
            </div>
          </div>
          <div className="absolute md:relative md:w-3/5 w-full md:h-full h-4/5 left-14 mb-36 md:mb-0">
            {isLoading && <Loading />}
            <Spline
              scene="/scene.splinecode"
              onLoad={handleLoad}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
