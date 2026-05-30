import { movies } from "@/src/data/movies";
import MovieCard from "@/src/components/movies/MovieCard";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    name: string;
  }>;
}) {
  const { name } = await params;

  const category = decodeURIComponent(name);

  const filteredMovies = movies.filter(
    (movie) => movie.category === category
  );

  return (
    <main className="min-h-screen bg-[#07111F] text-white px-6 md:px-10 lg:px-14 py-32">

      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        {category}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">

        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </main>
  );
}