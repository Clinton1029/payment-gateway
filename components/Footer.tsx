"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">PayFlex</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Seamless, secure, and smart payments made for the modern era.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link href="/(auth)/login" className="hover:text-indigo-400 transition">Login</Link></li>
            <li><Link href="/(auth)/register" className="hover:text-indigo-400 transition">Register</Link></li>
            <li><Link href="/dashboard" className="hover:text-indigo-400 transition">Dashboard</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-indigo-400"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-indigo-400"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-indigo-400"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-indigo-400"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PayFlex. All rights reserved.
      </div>
    </footer>
  );
}
