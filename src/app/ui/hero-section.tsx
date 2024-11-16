"use client"

import { useEffect, useState } from "react";
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
    <section className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <div className="bg-white dark:bg-gray-800 flex relative z-10 items-center overflow-hidden h-full pt-20">
        <div className="container mx-auto px-6 flex items-center relative h-full py-5">
          <div className="lg:w-2/5 flex flex-col relative z-20 mt-16">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-5">
            </span>
            <h1 className="mb-3 font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Cell <span className="text-5xl sm:text-7xl">Space</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
              Platform pembelajaran Biologi Sel yang dirancang untuk memberikan pengalaman belajar yang interaktif dan menyenangkan melalui materi dan simulasi 3D.
            </p>
            <div className="flex mt-8">
              <Link href="/dashboard" className="uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400">
                Get started
              </Link>
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 dark:text-white hover:bg-blue-500 hover:text-white text-md">
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
