import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Studio — Build in Public",
  description:
    "A builder platform for developers who want to build in public. Create projects, share updates, and track development progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-950 text-green-100 min-h-screen`}
      >
        <header className="sticky top-0 z-50 bg-green-950/90 backdrop-blur-md border-b border-green-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                    D
                  </div>
                  <span className="font-bold text-lg text-green-50">Dev Studio</span>
                </Link>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-green-300">
                <Link href="#features" className="hover:text-green-100 transition-colors">
                  Features
                </Link>
                <Link href="#how-it-works" className="hover:text-green-100 transition-colors">
                  How It Works
                </Link>
                <Link href="#discover" className="hover:text-green-100 transition-colors">
                  Discover
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-500 transition-colors active:scale-95"
                >
                  Dashboard
                </Link>
              </nav>
              <div className="flex md:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

function MobileNav() {
  return (
    <div className="relative">
      <details className="group">
        <summary className="list-none p-2 rounded-lg hover:bg-green-900 transition-colors cursor-pointer flex items-center">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-green-800 bg-green-900/95 backdrop-blur-md p-2 shadow-xl">
          <nav className="flex flex-col gap-1 text-sm">
            <Link href="#features" className="rounded-lg px-3 py-2 text-green-200 hover:bg-green-800/50 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="rounded-lg px-3 py-2 text-green-200 hover:bg-green-800/50 transition-colors">
              How It Works
            </Link>
            <Link href="#discover" className="rounded-lg px-3 py-2 text-green-200 hover:bg-green-800/50 transition-colors">
              Discover
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg px-3 py-2 bg-green-600 text-white text-center hover:bg-green-500 transition-colors active:scale-95"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </details>
    </div>
  );
}
