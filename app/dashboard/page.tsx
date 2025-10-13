"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Wallet,
  TrendingUp,
} from "lucide-react";
import PaymentForm from "@/components/PaymentForm";
import PaymentStatus from "@/components/PaymentStatus";

export default function DashboardPage() {
  const [userName] = useState("Clinton");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-24 pb-0">
      {/* Header Section */}
      <section className="w-full max-w-7xl px-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, <span className="text-indigo-600">{userName}</span> 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Here’s an overview of your latest transactions and account performance.
        </p>
      </section>

      {/* Stats Section */}
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-600 font-medium">Total Balance</h3>
            <Wallet className="text-indigo-600" size={22} />
          </div>
          <p className="text-3xl font-semibold text-gray-900">KES 120,450</p>
          <span className="text-green-500 flex items-center gap-1 text-sm mt-2">
            <ArrowUpRight size={14} /> +8.5% this month
          </span>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-600 font-medium">Payments Sent</h3>
            <CreditCard className="text-indigo-600" size={22} />
          </div>
          <p className="text-3xl font-semibold text-gray-900">KES 45,820</p>
          <span className="text-green-500 flex items-center gap-1 text-sm mt-2">
            <ArrowUpRight size={14} /> +5.2% this month
          </span>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-600 font-medium">Refunds</h3>
            <ArrowDownRight className="text-indigo-600" size={22} />
          </div>
          <p className="text-3xl font-semibold text-gray-900">KES 2,130</p>
          <span className="text-red-500 flex items-center gap-1 text-sm mt-2">
            <ArrowDownRight size={14} /> -1.4% this month
          </span>
        </div>
      </section>

      {/* Payment Form + Status */}
      <section className="w-full max-w-4xl mt-14 px-6">
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Make a Payment
          </h2>
          <PaymentForm />
          <div className="mt-8">
            <PaymentStatus status="pending" />
          </div>
        </div>
      </section>

      {/* Transactions Table */}
      <section className="w-full max-w-7xl mt-14 bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
          <button className="text-indigo-600 font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-gray-600 font-medium">Date</th>
                <th className="px-6 py-3 text-gray-600 font-medium">Description</th>
                <th className="px-6 py-3 text-gray-600 font-medium">Amount</th>
                <th className="px-6 py-3 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4">Oct 12, 2025</td>
                <td className="px-6 py-4">Payment to Jumia</td>
                <td className="px-6 py-4 text-gray-800 font-semibold">-KES 4,500</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    Successful
                  </span>
                </td>
              </tr>
              <tr className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4">Oct 10, 2025</td>
                <td className="px-6 py-4">Refund from Safaricom</td>
                <td className="px-6 py-4 text-gray-800 font-semibold">+KES 500</td>
                <td className="px-6 py-4">
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-medium">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4">Oct 8, 2025</td>
                <td className="px-6 py-4">Payment to Netflix</td>
                <td className="px-6 py-4 text-gray-800 font-semibold">-KES 1,200</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    Successful
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Insights Section */}
      <section className="w-full max-w-7xl mt-14 mb-0">
        <div className="bg-indigo-600 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Performance Insights</h2>
            <p className="text-indigo-200 max-w-md">
              Track your transactions, monitor growth, and optimize payment performance with PayFlex analytics.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition flex items-center gap-2">
            View Analytics <TrendingUp size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
