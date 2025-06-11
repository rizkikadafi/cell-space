import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CellSpace",
  description: "Cell Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
