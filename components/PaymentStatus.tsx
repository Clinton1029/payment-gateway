"use client";

import { useEffect, useState } from "react";

interface PaymentStatusProps {
  status: "success" | "pending" | "failed";
}

export default function PaymentStatus({ status }: PaymentStatusProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "success") {
      setMessage("✅ Payment Successful! Thank you for your transaction.");
    } else if (status === "pending") {
      setMessage("⏳ Payment is pending verification...");
    } else {
      setMessage("❌ Payment Failed. Please try again.");
    }
  }, [status]);

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
      <h2
        className={`text-2xl font-bold mb-4 ${
          status === "success"
            ? "text-green-600"
            : status === "pending"
            ? "text-yellow-500"
            : "text-red-600"
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </h2>
      <p className="text-gray-700 mb-6">{message}</p>

      <a
        href="/dashboard"
        className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Go to Dashboard
      </a>
    </div>
  );
}
