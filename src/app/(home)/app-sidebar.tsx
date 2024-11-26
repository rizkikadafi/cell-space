import * as React from "react"
import Logo from "@/components/ui/logo"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggle"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Course",
      url: "/course",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <ModeToggle />
        </div>
        <Separator />
      </SidebarHeader>
      <SidebarContent className="gap-0 px-2">
        <SidebarMenu>
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>{item.title}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
