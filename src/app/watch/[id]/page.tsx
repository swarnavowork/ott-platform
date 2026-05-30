"use client";

import { use } from "react";
import Link from "next/link";
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
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Movie Not Found
      </div>
    );
  }

  return (
    <main className="bg-black min-h-screen">
      <iframe
        src={movie.trailer}
        title={movie.title}
        className="w-full h-screen"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <div className="p-10 text-white">
        <h1 className="text-4xl font-bold mb-4">
          {movie.title}
        </h1>

        <Link
          href="/"
          className="bg-red-500 px-6 py-3 rounded-xl"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}