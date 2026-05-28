import { movies } from "@/src/data/movies";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function MovieDetailsPage({
  params,
}: Props) {
  const movie = movies.find(
    (m) => m.slug === params.slug
  );

  if (!movie) {
    return (
      <div className="text-white p-10">
        Movie not found
      </div>
    );
  }

  return (
    <main className="bg-[#07111F] min-h-screen text-white">
      <section className="relative h-[80vh]">
        <img
          src={movie.banner}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="absolute bottom-20 left-10 max-w-2xl">
          <p className="text-red-500 mb-3">
            {movie.category}
          </p>

          <h1 className="text-7xl font-bold mb-6">
            {movie.title}
          </h1>

          <div className="flex gap-5 text-gray-300 mb-5">
            <span>{movie.year}</span>

            <span>{movie.language}</span>

            <span>⭐ {movie.rating}</span>

            <span>{movie.duration}</span>
          </div>

          <p className="text-lg text-gray-300 leading-8">
            {movie.description}
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              href={`/watch/${movie.id}`}
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl text-lg font-bold"
            >
              ▶ Watch Now
            </Link>

            <button className="bg-white/20 px-8 py-4 rounded-xl">
              + My List
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}