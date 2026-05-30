import MovieCard from "./MovieCard";
import { movies } from "@/src/data/movies";

export default function MovieRow() {
  return (
    <section className="px-10 py-12">

  <h2 className="text-3xl font-bold mb-6">
    Trending Now
  </h2>

  <div className="flex gap-5 overflow-x-auto scrollbar-hide">
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