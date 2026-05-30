"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase";

export default function Navbar() {
  const [user, setUser] =
    useState<any>(null);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          console.log(
            "USER:",
            currentUser
          );

          console.log(
            "PHOTO URL:",
            currentUser?.photoURL
          );

          setUser(currentUser);
        }
      );

    return () => unsubscribe();
  }, []);

  const handleLogout =
    async () => {
      await signOut(auth);

      setOpen(false);
    };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="flex items-center justify-between px-6 md:px-12 py-5">

        <h1 className="text-4xl md:text-5xl font-black tracking-[3px] text-red-500 drop-shadow-lg">
          NEOSTREAM
        </h1>

        <div className="flex items-center gap-6 md:gap-12 text-base md:text-lg font-medium">

          <Link
            href="/"
            className="hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            href="/movies"
            className="hover:text-red-500 transition"
          >
            Movies
          </Link>

          <Link
            href="/subscription"
            className="hover:text-red-500 transition"
          >
            Premium
          </Link>

          {user ? (
            <div className="relative">

              <img
                src={
                  user?.photoURL ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user?.displayName ||
                    "User"
                  )}&background=ff0000&color=fff`
                }
                referrerPolicy="no-referrer"
                alt="profile"
                onClick={() =>
                  setOpen(!open)
                }
                className="w-14 h-14 rounded-full object-cover border-2 border-white cursor-pointer"
              />

              {open && (
                <div className="absolute right-0 top-16 w-80 bg-[#0F172A] border border-white/10 rounded-3xl p-5 shadow-2xl">

                  <div className="flex items-center gap-4 mb-5">

                    <img
                      src={
                        user?.photoURL ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user?.displayName ||
                          "User"
                        )}`
                      }
                      referrerPolicy="no-referrer"
                      alt="profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />

                    <div>
                      <h2 className="font-bold text-lg">
                        {
                          user?.displayName
                        }
                      </h2>

                      <p className="text-sm text-gray-400 break-all">
                        {user?.email}
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={
                      handleLogout
                    }
                    className="w-full h-12 bg-red-600 hover:bg-red-700 rounded-xl font-bold transition"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <Link
              href="/login"
              className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-xl shadow-lg transition"
            >
              Login
            </Link>
          )}

        </div>

      </div>

    </nav>
  );
}