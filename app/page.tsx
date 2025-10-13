"use client";

import Link from "next/link";
import { ArrowRight, CreditCard, ShieldCheck, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="pt-24 bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="text-center px-6 py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Seamless Payments for the <span className="text-yellow-300">Modern World</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-100 mb-10">
          PayFlex empowers businesses and individuals with secure, lightning-fast transactions.
          Simplify your payments with one trusted platform.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/(auth)/register"
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            Get Started
          </Link>
          <Link
            href="/(auth)/login"
            className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-700 transition"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <div className="bg-indigo-100 w-12 h-12 flex items-center justify-center rounded-full mb-5">
            <ShieldCheck className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure Transactions</h3>
          <p className="text-gray-600">
            We use bank-grade encryption and compliance standards to keep your data and money safe.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <div className="bg-indigo-100 w-12 h-12 flex items-center justify-center rounded-full mb-5">
            <Zap className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Instant Payments</h3>
          <p className="text-gray-600">
            Send and receive payments instantly, with real-time confirmations and zero delays.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
          <div className="bg-indigo-100 w-12 h-12 flex items-center justify-center rounded-full mb-5">
            <CreditCard className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Multiple Payment Options</h3>
          <p className="text-gray-600">
            Accept and manage payments via cards, wallets, and bank transfers in one dashboard.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Seamless Payments?
        </h2>
        <p className="text-indigo-200 mb-8">
          Join thousands of users who trust PayFlex for their financial transactions.
        </p>
        <Link
          href="/(auth)/register"
          className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition inline-flex items-center gap-2"
        >
          Get Started Now <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
