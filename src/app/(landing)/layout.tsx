"use client"

import { Navbar } from "./_components/navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        {children}
      </div>
    </>
  );
}
