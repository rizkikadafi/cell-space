"use client"

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

  const getTitle = () => {
    switch (pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/course":
        return "Course";
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h3 className="font-semibold">{getTitle()}</h3>
        </header>
        <div className="py-3 px-5">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
