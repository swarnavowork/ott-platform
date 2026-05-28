"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

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
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between px-12 py-6">
        <h1 className="text-3xl font-bold text-red-500">
          NeoStream
        </h1>

        <div className="flex items-center gap-10">
          <button>
            Home
          </button>

          <button>
            Movies
          </button>

          <button>
            Premium
          </button>

          {user ? (
            <div className="relative">
             <img
  src={
    user.photoURL
      ? user.photoURL
      : `https://ui-avatars.com/api/?name=${user.displayName}&background=ff0000&color=fff`
  }
  onError={(e) => {
    e.currentTarget.src =
      `https://ui-avatars.com/api/?name=${user.displayName}&background=ff0000&color=fff`;
  }}
  alt="profile"
  onClick={() =>
    setOpen(!open)
  }
  className="w-14 h-14 object-cover rounded-full cursor-pointer border-2 border-white"
/>
              {open && (
                <div className="absolute right-4 top-14 w-72 bg-[#0F172A] border border-white/10 rounded-2xl p-5 shadow-2xl">
                  <div className="flex items-center gap-3 mb-5">
                    <img
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${user.displayName}`
                      }
                      alt="profile"
                      className="w-18 h-18 rounded-full object-cover"
                    />

                    <div>
                      <h2 className="font-bold text-lg">
                        {
                          user.displayName
                        }
                      </h2>

                      <p className="text-sm text-gray-400 break-all">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={
                      handleLogout
                    }
                    className="w-full h-12 bg-red-800 rounded-xl font-bold hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-red-800 px-5 py-2 rounded-xl font-bold hover:bg-red-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}