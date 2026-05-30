"use client";

import { useState } from "react";
import Link from "next/link";

import {
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase";

export default function ForgotPasswordPage() {
  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleReset = async () => {
    try {
      setLoading(true);

      await sendPasswordResetEmail(
        auth,
        email
      );

      setMessage(
        "Password reset link sent to your email."
      );
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#07111F] flex items-center justify-center px-5 text-white">

      <div className="w-full max-w-md bg-[#0F172A] p-10 rounded-3xl border border-white/10">

        <h1 className="text-4xl font-bold mb-2">
          Forgot Password
        </h1>

        <p className="text-gray-400 mb-8">
          Enter your email and we'll send a reset link.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full h-14 px-5 rounded-xl bg-white/10 mb-5 outline-none border border-white/10"
        />

        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full h-14 bg-red-600 hover:bg-red-700 rounded-xl font-bold transition"
        >
          {loading
            ? "Sending..."
            : "Send Reset Link"}
        </button>

        {message && (
          <p className="mt-5 text-center text-sm text-green-400">
            {message}
          </p>
        )}

        <div className="text-center mt-8">
          <Link
            href="/login"
            className="text-red-500 hover:text-red-400"
          >
            ← Back to Login
          </Link>
        </div>

      </div>

    </main>
  );
}