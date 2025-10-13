"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wallet2, LogIn, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50 border-b border-gray-100 transition-all duration-300">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Wallet2 className="text-indigo-600 w-7 h-7 group-hover:rotate-12 transition-transform" />
          <h1 className="text-2xl font-extrabold text-indigo-600 tracking-tight group-hover:text-indigo-700 transition-colors">
            PayFlex
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#features"
              className="hover:text-indigo-600 transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="hover:text-indigo-600 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:text-indigo-600 flex items-center gap-1 transition-colors"
            >
              <LogIn size={18} /> Login
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-1 shadow-sm hover:shadow-md transition-all"
            >
              <UserPlus size={18} /> Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-indigo-600 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-md border-t border-gray-100"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
                >
                  <LogIn size={18} /> Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
                >
                  <UserPlus size={18} /> Sign Up
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
