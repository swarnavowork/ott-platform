"use client";

import { use } from "react";
import Link from "next/link";
import { FaArrowLeft, FaStar, FaPlay } from "react-icons/fa";
import { movies } from "@/src/data/movies";

export default function WatchPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

  const movie = movies.find(
    (m) => m.slug === id
  );

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#07111F] text-white flex items-center justify-center text-2xl">
        Movie Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#07111F] text-white">

      {/* BACK BUTTON */}
      <Link
        href="/"
        className="
        fixed
        top-20
        left-4
        z-50
        w-12
        h-12
        rounded-full
        bg-black/70
        backdrop-blur-md
        border
        border-white/10
        flex
        items-center
        justify-center
        hover:bg-red-600
        transition
        "
      >
        <FaArrowLeft />
      </Link>

      {/* VIDEO SECTION */}
      <section className="w-full">

        <div className="relative">

          <iframe
            src={movie.trailer}
            title={movie.title}
            className="
            w-full
            h-[250px]
            sm:h-[350px]
            md:h-[500px]
            lg:h-[700px]
            "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-10">

        {/* PREMIUM BADGE */}
        {movie.premium && (
          <span className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm mb-6">
            PREMIUM CONTENT
          </span>
        )}

        {/* TITLE */}
        <h1 className="text-3xl md:text-6xl font-black mb-5">
          {movie.title}
        </h1>

        {/* META */}
        <div className="flex flex-wrap items-center gap-5 text-gray-300 mb-8">

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{movie.rating}</span>
          </div>

          <span>HD Quality</span>

          <span>NeoStream Original</span>

        </div>

        {/* DESCRIPTION */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">

          <h2 className="text-2xl font-bold mb-4">
            About This Content
          </h2>

          <p className="text-gray-300 leading-8 text-base md:text-lg">
            Watch {movie.title} exclusively on NeoStream.
            Enjoy premium educational, wellness,
            motivational and success-oriented content
            designed to help you grow personally and
            professionally.
          </p>

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <a
            href={movie.trailer}
            target="_blank"
            className="
            bg-red-600
            hover:bg-red-700
            px-8
            py-4
            rounded-2xl
            font-bold
            flex
            items-center
            justify-center
            gap-3
            transition
            "
          >
            <FaPlay />
            Watch Fullscreen
          </a>

          <Link
            href="/"
            className="
            bg-white/10
            hover:bg-white/20
            px-8
            py-4
            rounded-2xl
            font-bold
            text-center
            transition
            "
          >
            Browse More Content
          </Link>

        </div>

      </section>

    </main>
  );
}