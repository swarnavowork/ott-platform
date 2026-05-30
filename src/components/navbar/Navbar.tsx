"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "@/src/lib/firebase";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] =
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

  const handleLogout = async () => {
    await signOut(auth);
    setOpen(false);
    setMobileMenu(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="flex items-center justify-between px-4 md:px-12 py-4">

        {/* Logo */}
        <h1 className="text-2xl md:text-5xl font-black tracking-[3px] text-red-500">
          NEOSTREAM
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-lg font-medium">

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
                    user?.displayName || "User"
                  )}&background=ff0000&color=fff`
                }
                alt="profile"
                referrerPolicy="no-referrer"
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
                      alt="profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />

                    <div>
                      <h2 className="font-bold text-lg">
                        {user?.displayName}
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
                    className="w-full h-12 bg-red-600 hover:bg-red-700 rounded-xl font-bold"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <Link
              href="/login"
              className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-xl"
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col gap-5 p-6 text-lg">

            <Link
              href="/"
              onClick={() =>
                setMobileMenu(false)
              }
            >
              Home
            </Link>

            <Link
              href="/movies"
              onClick={() =>
                setMobileMenu(false)
              }
            >
              Movies
            </Link>

            <Link
              href="/subscription"
              onClick={() =>
                setMobileMenu(false)
              }
            >
              Premium
            </Link>

            {user ? (
              <button
                onClick={
                  handleLogout
                }
                className="bg-red-600 py-3 rounded-xl font-bold"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="bg-red-600 py-3 rounded-xl text-center font-bold"
              >
                Login
              </Link>
            )}

          </div>

        </div>
      )}

    </nav>
  );
}
