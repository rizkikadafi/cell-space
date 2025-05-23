'use client';

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import Logo from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const links: { title: string; href: string }[] = [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'About', href: '#about' },
  { title: 'Service', href: '#service' },
  { title: 'Contact', href: '#footer' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="py-3 px-3 md:px-8 fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-14 items-center justify-center">
        <div className="w-full hidden md:flex md:justify-between items-center">
          <Link className="flex items-center space-x-2" href="/">
            <Logo />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
        <div className="flex justify-between w-full items-center md:hidden">
          <Logo />
          <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <MobileLink href="/" className="flex items-center" onOpenChange={setIsOpen}>
                  <Logo />
                </MobileLink>
                <Separator className="my-4" />
                <div className="flex flex-col space-y-3">
                  {links.map((link) => (
                    <MobileLink key={link.href} href={link.href} onOpenChange={setIsOpen}>
                      {link.title}
                    </MobileLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
