import "./globals.css";
//import Navbar from "../components/Navbar";

export const metadata = {
  title: "PayFlex - Modern Payment Gateway",
  description: "A modern and secure payment gateway built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
       {/* <Navbar /> */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
