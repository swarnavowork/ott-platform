"use client";

import Link from "next/link";

export default function MovieCard({ movie }: any) {
  return (
    <Link
      href={`/watch/${movie.slug}`}
      className="flex-shrink-0"
    >
      <div
        className="
        relative
        w-[170px]
        sm:w-[190px]
        md:w-[320px]
        h-[260px]
        md:h-[320px]
        rounded-3xl
        overflow-hidden
        group
        cursor-pointer
        transition-all
        duration-500
        md:hover:scale-[1.04]
        md:hover:shadow-[0_0_35px_rgba(239,68,68,0.25)]
        "
      >
        {/* THUMBNAIL */}
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          md:group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* PLAY BUTTON - DESKTOP ONLY */}
        <div
          className="
          hidden
          md:flex
          absolute
          inset-0
          items-center
          justify-center
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          "
        >
          <div
            className="
            w-16
            h-16
            rounded-full
            bg-red-600
            flex
            items-center
            justify-center
            text-white
            text-2xl
            shadow-2xl
            border
            border-white/20
            transition-all
            duration-300
            group-hover:scale-110
            "
          >
            ▶
          </div>
        </div>


        {/* PREMIUM BADGE */}
        {movie.premium && (
          <div
            className="
            absolute
            top-3
            right-3
            bg-yellow-400
            text-black
            text-[10px]
            md:text-xs
            px-3
            py-1
            rounded-full
            font-bold
            "
          >
            PREMIUM
          </div>
        )}

        {/* CONTENT */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3
            className="
            text-white
            font-bold
            text-xl
            md:text-3xl
            leading-tight
            "
          >
            {movie.title}
          </h3>

          <p
            className="
            text-yellow-400
            mt-1
            text-sm
            md:text-lg
            font-semibold
            "
          >
            ⭐ {movie.rating}
          </p>
        </div>
      </div>
    </Link>
  );
}