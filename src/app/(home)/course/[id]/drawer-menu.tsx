"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu } from 'lucide-react'
import { Prisma } from "@prisma/client";
import Link from "next/link";

type CourseTitle = Prisma.CourseGetPayload<{
  select: {
    id: true,
    title: true,
    description: true,
    chapters: {
      select: {
        title: true,
        materials: {
          select: {
            id: true,
            title: true
          }
        }
      }
    }
  }
}>

export function DrawerMenu({ id, title, description, chapters }: CourseTitle) {
  const [open, setOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="fixed top-[.8rem] right-14">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Open course material menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className={isMobile ? "h-[85%]" : "w-[400px] right-0 left-auto"}>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Accordion type="single" collapsible className="w-full">
            {chapters.map((chapter, index) => (
              <AccordionItem key={index} value={chapter.title}>
                <AccordionTrigger>{chapter.title}</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {chapter.materials.map((material, index) => (
                      <li key={index}>
                        <Link href={`/course/${id}/material/${material.id}`}>
                          {material.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
