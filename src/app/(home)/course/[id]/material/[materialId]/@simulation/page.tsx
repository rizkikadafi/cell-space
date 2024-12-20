"use client";

import { useEffect, useState } from "react";
import Spline, { SplineEvent } from "@splinetool/react-spline";

import { usePathname } from 'next/navigation';
import { LoadingFitContent } from "@/components/ui/loading";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function SimulationPage() {
  const [description, setDescription] = useState<string>(
    "Klik pada objek untuk melihat penjelasan."
  );
  const [title, setTitle] = useState<string>("");

  const [isLoading, setIsLoading] = useState(true);
  const [sceneUrl, setSceneUrl] = useState<string>("");
  const [objectDescriptions, setObjectDescriptions] = useState<Record<string, string>>({});

  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const materialId = Number(segments[segments.length - 1]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchMaterialData() {
      try {
        const response = await fetch(`/api/simulation/${materialId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch simulation data");
        }

        const data = await response.json();
        const { title, simulation, content } = data;

        setTitle(title);
        setSceneUrl(`/3d-assets/scenes/course/${simulation.scene}`);
        setObjectDescriptions(JSON.parse(content));
      } catch (error) {
        console.error("Error fetching material data:", error);
        setDescription("Gagal memuat data simulasi.");
      }
    }

    fetchMaterialData();
  }, [materialId]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  function onSplineMouseDown(e: SplineEvent) {
    if (e.target && e.target.name) {
      const objectName = e.target.name;
      const objectDescription = objectDescriptions[objectName] || "Deskripsi tidak ditemukan.";
      setDescription(objectDescription);
    }
  }

  return (
    <div className='h-full'>
      <div className="flex gap-2 box-border h-full">
        <div className="relative border-2 border-border w-3/5 h-full">
          {isLoading && <LoadingFitContent content="Loading Simulation..." />}
          <Spline
            scene={sceneUrl}
            onSplineMouseDown={onSplineMouseDown}
            onLoad={handleLoad}
          />
        </div>
        <div className="w-2/5 h-full flex flex-col">
          <h1 className="text-xl font-bold mb-3">{title}</h1>
          <ScrollArea className="h-full p-2 box-border border-2 border-border">
            {description}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

