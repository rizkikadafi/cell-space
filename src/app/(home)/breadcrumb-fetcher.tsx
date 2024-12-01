import { useEffect } from 'react';
import { useBreadcrumb } from './breadcrumb-context';

type BreadcrumbItem = {
  segment: string; // Segment dari URL
  title: string;   // Title dari API
};

async function fetchBreadcrumbData(segments: string[]): Promise<BreadcrumbItem[]> {
  const data = await Promise.all(
    segments.map(async (segment, index) => {
      const isNumeric = !isNaN(Number(segment));
      const type = isNumeric ? segments[index - 1] : undefined;

      if (type) {
        const response = await fetch(`/api/${type}/${segment}`);
        const json = await response.json();
        return { segment, title: json.title || segment };
      } else {
        return { segment, title: segment.charAt(0).toUpperCase() + segment.slice(1) };
      }
    })
  );
  return data;
}

export const BreadcrumbFetcher = ({ segments }: { segments: string[] }) => {
  const { setBreadcrumbData } = useBreadcrumb();

  useEffect(() => {
    fetchBreadcrumbData(segments).then(setBreadcrumbData);
  }, [segments, setBreadcrumbData]);

  return null; // Tidak merender apa pun
};
