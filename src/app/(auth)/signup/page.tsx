"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Link from "next/link";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSignup =
    async () => {
      try {
        setLoading(true);

        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        await updateProfile(
          userCredential.user,
          {
            displayName: name,
          }
        );

        router.push("/");
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

  return (
    <main className="min-h-screen bg-[#07111F] flex items-center justify-center text-white px-5">
      <div className="bg-[#0F172A] p-10 rounded-3xl w-full max-w-md border border-white/10">
        <h1 className="text-5xl font-bold mb-2">
          Create Account
        </h1>

        <p className="text-gray-400 mb-8">
          Join NeoStream
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full h-14 px-5 rounded-xl bg-white/10 mb-5 outline-none"
        />

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
          onClick={handleSignup}
          disabled={loading}
          className="w-full h-14 bg-red-500 rounded-xl font-bold hover:bg-red-600 transition"
        >
          {loading
            ? "Creating..."
            : "Create Account"}
        </button>

        <p className="text-center text-gray-400 mt-7">
          Already have account?{" "}
          <Link
            href="/login"
            className="text-red-500"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}