"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { LoadingFull } from "@/components/ui/loading";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      requestIdleCallback(() => setShouldRender(true));
    } else {
      setShouldRender(true);
    }
  }, []);

  const handleLoad = () => setIsLoading(false);

  return (
    <section className="relative overflow-hidden h-screen">
      <div className="flex relative z-10 items-center overflow-hidden h-full pt-20">
        <div className="flex items-center justify-between relative h-full py-5">
          {/* Left Content */}
          <div className="lg:w-2/5 flex flex-col relative z-20 mt-16">
            <span className="w-20 h-2 bg-foreground mb-5" />
            <h1 className="mb-3 font-bebas-neue uppercase text-6xl sm:text-8xl flex flex-col leading-none text-foreground">
              Cell <span className="text-5xl sm:text-7xl">Space</span>
            </h1>
            <p className="text-sm sm:text-base text-foreground">
              Platform pembelajaran Biologi Sel yang dirancang untuk memberikan pengalaman belajar yang interaktif dan menyenangkan melalui materi dan simulasi 3D.
            </p>
            <div className="flex mt-8">
              <a href="/dashboard" className={`${buttonVariants({ variant: "default", size: "lg" })} mr-3`}>
                Get started
              </a>
              <a href="#about" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Read more
              </a>
            </div>
          </div>

          {/* 3D Section */}
          <div className="absolute md:relative md:w-3/5 w-full md:h-full h-4/5 left-10 mb-36 md:mb-0">
            {isLoading && (
              <div className="hidden md:block">
                <LoadingFull />
              </div>
            )}
            {shouldRender && (
              <Spline
                scene="/3d-assets/scenes/public/hero.splinecode"
                onLoad={handleLoad}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
