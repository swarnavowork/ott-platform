"use client";

import MovieCard from "../movies/MovieCard";
import { movies } from "@/src/data/movies";

interface Props {
  title: string;
}

export default function CategoryRow({
  title,
}: Props) {
  return (
    <section className="px-8 py-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <button className="text-red-500 hover:text-red-400">
          View All
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}