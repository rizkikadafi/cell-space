"use client"

import { AppSidebar } from "./app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import DynamicBreadcrumbs from "./breadcrumbs";
import { BreadcrumbProvider } from './breadcrumb-context';
import { BreadcrumbFetcher } from './breadcrumb-fetcher';
import { usePathname } from 'next/navigation';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <BreadcrumbProvider>
            <BreadcrumbFetcher segments={segments} />
            <DynamicBreadcrumbs />
          </BreadcrumbProvider>
        </header>
        <div className="py-3 px-5 relative">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
