"use client"

import { useState } from "react";
import Navigation from "@/app/ui/navigation"
import HeroSection from "@/app/ui/hero-section"
import Loading from "@/app/loading"

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // const handleLoad = () => {
  //   setIsLoading(false);
  // };
  return (
    <>
      <Navigation />
      <HeroSection />
    </>
  );
}
