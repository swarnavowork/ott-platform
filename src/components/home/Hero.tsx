"use client";

import { movies } from "@/src/data/movies";

export default function Hero() {
  const movie = movies[0];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={movie.banner}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* EXTRA GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="absolute top-1/2 -translate-y-1/2 left-12 max-w-2xl z-10">
        <p className="text-red-500 text-2xl mb-4 font-semibold">
          NeoStream Exclusive
        </p>

        <h1 className="text-8xl font-extrabold leading-none mb-6">
          {movie.title}
        </h1>

        <div className="flex items-center gap-5 text-lg text-gray-200 mb-6">
          <span>{movie.year}</span>

          <span>{movie.language}</span>

          <span className="text-yellow-400">
            ⭐ {movie.rating}
          </span>

          <span className="border border-white/30 px-3 py-1 rounded-lg text-sm">
            HD
          </span>
        </div>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          {movie.description}
        </p>

        <div className="flex gap-5">
          <button className="bg-red-500 hover:bg-red-600 transition px-10 py-5 rounded-2xl text-xl font-bold">
            ▶ Watch Now
          </button>

          <button className="bg-white/20 hover:bg-white/30 transition px-10 py-5 rounded-2xl text-xl font-semibold backdrop-blur-md">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
