"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppSidebar } from "./app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const formatSegment = (segment: string) => {
    const segmentMap: { [key: string]: string } = {
      dashboard: "Dashboard",
      course: "Course",
    };
    return segmentMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return (
      <span key={href}>
        <Link href={href}>
          {formatSegment(segment)}
        </Link>
        {index < segments.length - 1 && <span className="mx-2">/</span>}
      </span>
    );
  });

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h3 className="font-semibold">{breadcrumbs}</h3>
        </header>
        <div className="py-3 px-5">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
