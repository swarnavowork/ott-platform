"use client";

import Link from "next/link";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase";

import {
  loginWithGoogle,
} from "@/src/services/authService";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin =
    async () => {
      try {
        setLoading(true);

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        router.push("/");
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

  const handleGoogleLogin =
    async () => {
      await loginWithGoogle();

      router.push("/");
    };

  return (
    <main className="min-h-screen bg-[#07111F] flex items-center justify-center text-white px-5">
      <div className="bg-[#0F172A] p-10 rounded-3xl w-full max-w-md border border-white/10">
        <h1 className="text-5xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-8">
          Login to NeoStream
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full h-14 px-5 rounded-xl bg-white/10 mb-5 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full h-14 px-5 rounded-xl bg-white/10 mb-5 outline-none"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full h-14 bg-red-500 rounded-xl font-bold hover:bg-red-600 transition"
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

        <div className="flex items-center gap-3 my-7">
          <div className="flex-1 h-[1px] bg-white/20" />

          <span className="text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-white/20" />
        </div>

        <button
          onClick={
            handleGoogleLogin
          }
          className="w-full h-14 bg-white text-black rounded-xl font-bold"
        >
          Continue with Google
        </button>

        <p className="text-gray-400 mt-7 text-center">
          Don’t have account?{" "}
          <Link
            href="/signup"
            className="text-red-500"
          >
            Signup
          </Link>
        </p>
      </div>
    </main>
  );
}