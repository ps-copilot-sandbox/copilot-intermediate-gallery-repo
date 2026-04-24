import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Camera } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo Gallery & Portfolio",
  description: "A curated collection of photographs and creative works showcasing a personal portfolio.",
};

const classNames = {
  navLink: "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {/* Navigation Header */}
        <header className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Camera className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Portfolio Gallery
                </h1>
              </Link>
              <nav className="flex items-center gap-6">
                <Link href="/gallery" className="nav-link">
                  Gallery
                </Link>
                <Link href="/upload" className="nav-link">
                  Upload
                </Link>
                <Link href="/admin" className="btn-primary">
                  Admin
                </Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
        {/* Create a footer for this section. It should contain the logo and copyright information. */}
        <footer className="border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-12">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-blue-600" />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                &copy; {new Date().getFullYear()} Portfolio Gallery. All rights reserved.
              </span>
            </div>
            <nav
              aria-label="Footer navigation"
              className="flex items-center gap-4"
            >
              <Link href="/privacy" className={classNames.navLink}> 
                Privacy Policy
              </Link>
              <Link href="/terms" className={classNames.navLink}>
                Terms of Service
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
