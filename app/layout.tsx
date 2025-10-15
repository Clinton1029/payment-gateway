// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "A modern finance tracking app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        suppressHydrationWarning prevents React from throwing
        a hydration error if browser extensions (e.g. Grammarly)
        modify the HTML attributes before hydration.
      */}
      <body
        className="bg-gray-50 text-gray-900"
        suppressHydrationWarning={true}
      >
        {/* Wrap the main layout content */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
