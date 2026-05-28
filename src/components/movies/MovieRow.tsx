import MovieCard from "./MovieCard";
import { movies } from "@/src/data/movies";

export default function MovieRow() {
  return (
    <section className="px-10 py-14">

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">
          Trending Now
        </h1>

        <button className="text-red-500 text-lg">
          View All
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
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