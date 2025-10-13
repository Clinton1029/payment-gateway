"use client";

import Link from "next/link";
import { ArrowRight, CreditCard, ShieldCheck, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="text-center px-6 py-24 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Seamless Payments for the{" "}
            <span className="text-yellow-300">Modern World</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-100 mb-10 leading-relaxed">
            Experience next-generation payment technology designed for businesses and individuals
            who value speed, simplicity, and security — all in one place.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/(auth)/register"
              className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition"
            >
              Get Started
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-700 transition"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 -mt-10 relative z-10">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="bg-indigo-100 w-12 h-12 flex items-center justify-center rounded-full mb-5">
            <ShieldCheck className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Bank-Grade Security
          </h3>
          <p className="text-gray-600">
            Built on strong encryption and PCI DSS compliance to keep every transaction safe.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="bg-indigo-100 w-12 h-12 flex items-center justify-center rounded-full mb-5">
            <Zap className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Lightning-Fast Transactions
          </h3>
          <p className="text-gray-600">
            Process payments in seconds with real-time updates and minimal latency.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="bg-indigo-100 w-12 h-12 flex items-center justify-center rounded-full mb-5">
            <CreditCard className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Flexible Payment Options
          </h3>
          <p className="text-gray-600">
            Accept credit cards, digital wallets, and bank transfers effortlessly.
          </p>
        </div>
      </section>

      {/* CTA Section (Blends into Footer) */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 text-white text-center py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Seamless Payments?
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Join thousands of businesses already using PayFlex to manage transactions effortlessly.
          </p>
          <Link
            href="/(auth)/register"
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition inline-flex items-center gap-2 shadow-md"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
