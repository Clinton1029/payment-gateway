"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold text-indigo-600">PayFlex</h1>
      <ul className="hidden md:flex gap-6 text-gray-700">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/(auth)/login">Login</Link></li>
        <li><Link href="/(auth)/register">Register</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}
