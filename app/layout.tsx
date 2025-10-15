// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionProviderWrapper from "@/app/providers/SessionProviderWrapper";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "A modern finance tracking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-gray-50 text-gray-900"
        suppressHydrationWarning={true}
      >
        <SessionProviderWrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
