import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
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
    <main className="min-h-screen bg-[#07111F] text-white px-4 md:px-10 lg:px-14 py-24 md:py-32">

      {/* Back Button */}
      <div className="mb-8">

        <Link
          href="/"
          className="
          inline-flex
          items-center
          gap-2
          bg-white/10
          hover:bg-white/20
          border
          border-white/10
          px-4
          py-3
          rounded-xl
          transition
          "
        >
          <FaArrowLeft />
          Back
        </Link>

      </div>

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black">
          {category}
        </h1>

        <p className="text-gray-400 mt-3">
          {filteredMovies.length} Shows Available
        </p>

      </div>

      {/* Movies Grid */}
      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-4
        md:gap-6
        justify-items-center
        "
      >
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredMovies.length === 0 && (
        <div className="text-center py-24">

          <h2 className="text-3xl font-bold mb-4">
            No Shows Found
          </h2>

          <p className="text-gray-400 mb-8">
            No content available in this category.
          </p>

          <Link
            href="/"
            className="
            bg-red-600
            hover:bg-red-700
            px-6
            py-3
            rounded-xl
            font-semibold
            transition
            "
          >
            Go Home
          </Link>

        </div>
      )}

    </main>
  );
}