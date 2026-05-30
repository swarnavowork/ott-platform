"use client";

import Link from "next/link";

export default function MovieCard({ movie }: any) {
  return (
    <Link href={`/watch/${movie.slug}`}>

      <div className="group relative w-full max-w-[520px] h-[280px] md:h-[300px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03]">

        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-3xl shadow-2xl">
            ▶
          </div>
        </div>

        {movie.premium && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
            PREMIUM
          </div>
        )}

        <div className="absolute bottom-5 left-5">
          <h2 className="font-bold text-2xl md:text-3xl text-white">
            {movie.title}
          </h2>

          <p className="text-gray-300 mt-1">
            ⭐ {movie.rating}
          </p>
        </div>

      </div>

    </Link>
  );
}