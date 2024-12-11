import { useEffect } from 'react';
import { useBreadcrumb } from './breadcrumb-context';

type BreadcrumbItem = {
  segment: string; // Segment dari URL
  title: string;   // Title dari API
};

async function fetchBreadcrumbData(segments: string[]): Promise<BreadcrumbItem[]> {
  return Promise.all(
    segments.map(async (segment, index) => {
      const isNumeric = !isNaN(Number(segment));

      // Handle segments with dynamic API paths
      if (isNumeric) {
        const prevSegment = segments[index - 1];
        const prevPrevSegment = segments[index - 3];

        if (prevSegment === "course") {
          try {
            const response = await fetch(`/api/course/${segment}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch /course/${segment}`);
            }
            const json = await response.json();
            return { segment, title: json.title || segment };
          } catch (error) {
            console.error(`Error fetching course title for /course/${segment}:`, error);
            return { segment, title: segment }; // Fallback to segment
          }
        }

        if (prevSegment === "material" && prevPrevSegment === "course") {
          const courseId = segments[index - 2];
          try {
            const response = await fetch(`/api/course/${courseId}/material/${segment}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch /course/${courseId}/material/${segment}`);
            }
            const json = await response.json();
            return { segment, title: json.title || segment };
          } catch (error) {
            console.error(`Error fetching material title for /course/${courseId}/material/${segment}:`, error);
            return { segment, title: segment }; // Fallback to segment
          }
        }

      }

      // Default capitalization for non-numeric segments
      return { segment, title: segment.charAt(0).toUpperCase() + segment.slice(1) };
    })
  );
}

export const BreadcrumbFetcher = ({ segments }: { segments: string[] }) => {
  const { setBreadcrumbData } = useBreadcrumb();

  useEffect(() => {
    fetchBreadcrumbData(segments).then(setBreadcrumbData);
  }, [segments, setBreadcrumbData]);

  return null; // Tidak merender apa pun
};
