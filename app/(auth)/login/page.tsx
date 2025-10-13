"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff} from "lucide-react";
import { SiGoogle } from "react-icons/si";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Login failed");
      } else {
        // Example: store token and redirect - adjust to your auth flow
        if (data.token) localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const startGoogleOAuth = () => {
    // Backend should handle the OAuth redirect flow at /api/auth/google
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1 text-center">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Sign in to access your PayFlex dashboard
          </p>

          {/* Google OAuth */}
          <button
            onClick={startGoogleOAuth}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border hover:shadow-md transition mb-4"
            aria-label="Sign in with Google"
          >
            <SiGoogle size={18} />
            <span className="text-sm font-medium">Continue with Google</span>
          </button>

          <div className="flex items-center gap-3 my-3">
            <span className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Error */}
          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md p-2 mb-3">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm text-gray-600">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="you@company.com"
                required
              />
            </label>

            <label className="block relative">
              <span className="text-sm text-gray-600">Password</span>
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="absolute right-3 top-[40px] text-gray-500"
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>
              <Link href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="text-center mt-5 text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link href="/(auth)/register" className="text-indigo-600 hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
