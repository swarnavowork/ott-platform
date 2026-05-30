"use client";

import Link from "next/link";
import { movies } from "@/src/data/movies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <section className="h-screen">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
        className="h-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-screen">

              {/* BRIGHTER IMAGE */}
              <img
                src={movie.banner}
                alt={movie.title}
                className="absolute inset-0 w-full h-full object-cover brightness-110"
              />

              {/* LIGHT OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* LEFT GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />

              {/* BOTTOM FADE */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />

              {/* CONTENT */}
              <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 max-w-3xl z-20">

                <span className="text-red-500 font-bold tracking-[4px] text-lg">
                  NEOSTREAM ORIGINAL
                </span>

                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mt-4 mb-6 leading-none drop-shadow-2xl">
                  {movie.title}
                </h1>

                <div className="flex gap-5 mb-6 text-lg md:text-xl text-gray-100">
                  <span>⭐ {movie.rating}</span>
                  <span>{movie.year}</span>
                  <span>{movie.language}</span>

                  <span className="border border-white/30 px-3 rounded">
                    HD
                  </span>
                </div>

                <p className="text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                  {movie.description}
                </p>

                <div className="flex gap-5">

                  <Link
                    href={`/watch/${movie.slug}`}
                    className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-bold text-lg"
                  >
                    ▶ Watch Now
                  </Link>

                  <Link
                    href={`/movies/${movie.slug}`}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-10 py-4 rounded-xl text-lg"
                  >
                    More Info
                  </Link>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}