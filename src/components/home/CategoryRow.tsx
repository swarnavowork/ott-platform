"use client";

import Link from "next/link";
import MovieCard from "../movies/MovieCard";
import { movies } from "@/src/data/movies";

export default function CategoryRow({
  title,
}: {
  title: string;
}) {
  const filteredMovies = movies.filter(
    (movie) => movie.category === title
  );

  return (
    <section className="px-4 md:px-10 py-12">

      <div className="flex justify-between items-center mb-6">

        
        <h2 className="text-3xl md:text-5xl font-bold">
            {title}
        </h2>

        <Link
          href={`/category/${encodeURIComponent(title)}`}
          className="text-red-500 font-semibold"
        >
          View All →
        </Link>

      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">

        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
}