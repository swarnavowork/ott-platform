import { movies } from "@/src/data/movies";
import MovieCard from "@/src/components/movies/MovieCard";

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white px-4 md:px-10 py-28">
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black">
          All Movies
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Explore all NeoStream content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </main>
  );
}