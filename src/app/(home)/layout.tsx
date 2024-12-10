"use client"

import { AppSidebar } from "./app-sidebar"
import { Separator } from "@/components/ui/separator"
import { UserButton } from "@clerk/nextjs"
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
        <header className="flex sticky top-0 bg-background h-16 shrink-0 justify-between items-center border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbProvider>
              <BreadcrumbFetcher segments={segments} />
              <DynamicBreadcrumbs />
            </BreadcrumbProvider>
          </div>
          <div>
            <UserButton />
          </div>
        </header>
        <div className="py-3 px-5">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
