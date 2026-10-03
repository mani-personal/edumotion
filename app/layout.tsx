import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { BookOpen, LogIn, ShieldAlert } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGen Study Portal",
  description: "Modern study material platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7404029572310772"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-indigo-600">
              <BookOpen className="w-8 h-8" />
              <span>EduMotion</span>
            </Link>
            <div className="flex gap-4">
              <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
                <LogIn className="w-4 h-4" /> Student Login
              </Link>
              <Link href="/admin/login" className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
                <ShieldAlert className="w-4 h-4" /> Admin
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
