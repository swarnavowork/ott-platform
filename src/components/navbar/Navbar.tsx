"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/src/lib/firebase";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl md:text-5xl font-black tracking-[4px] text-red-500">
            NEOSTREAM
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg">

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
                  )}`
                }
                alt="profile"
                referrerPolicy="no-referrer"
                onClick={() => setOpen(!open)}
                className="w-12 h-12 rounded-full cursor-pointer border-2 border-white object-cover"
              />

              {open && (
                <div className="absolute right-0 top-16 w-72 bg-[#0F172A] rounded-3xl p-5 border border-white/10 shadow-2xl">

                  <div className="mb-5">
                    <h3 className="font-bold">
                      {user?.displayName}
                    </h3>

                    <p className="text-sm text-gray-400 break-all">
                      {user?.email}
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-bold transition"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          ) : (
            <Link
              href="/login"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl transition"
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile Hamburger */}
       <button
  className="md:hidden text-3xl text-white"
  onClick={() => {
    console.log("clicked");
    setMobileMenu(!mobileMenu);
  }}
>
  {mobileMenu ? <FaTimes /> : <FaBars />}
</button>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#07111F] border-t border-white/10">

          <div className="flex flex-col p-6 space-y-5 text-lg">

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </Link>

            <Link
              href="/movies"
              onClick={() => setMobileMenu(false)}
            >
              Movies
            </Link>

            <Link
              href="/subscription"
              onClick={() => setMobileMenu(false)}
            >
              Premium
            </Link>

            {user ? (
              <>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold">
                    {user?.displayName}
                  </p>

                  <p className="text-sm text-gray-400">
                    {user?.email}
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  className="bg-red-600 py-3 rounded-xl font-bold"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-red-600 py-3 rounded-xl text-center font-bold"
                onClick={() => setMobileMenu(false)}
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