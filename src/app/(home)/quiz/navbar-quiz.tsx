'use client';

import * as React from "react";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import { ModeToggle } from '@/components/ui/mode-toggle';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import clsx from "clsx";

export function Navbar() {
  return (
    <header className="py-3 px-3 md:px-8 fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-14 items-center justify-between">
        <Link
          href="/"
          className={clsx(navigationMenuTriggerStyle(), "text-lg md:text-xl font-semibold")}
        >
          Exit
        </Link>

        <Link className="flex items-center space-x-2" href="/">
          <Logo />
        </Link>

        <ModeToggle />
      </div>
    </header>
  );
}
