import { movies } from "@/src/data/movies";
import Link from "next/link";

export default async function WatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const movie = movies.find(
    (m) => m.slug === slug
  );

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#07111F] text-white flex items-center justify-center text-3xl font-bold">
        Movie Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#07111F] min-h-screen text-white">

      {/* VIDEO PLAYER */}
      <section className="w-full">

        <iframe
          src={movie.trailer}
          title={movie.title}
          allowFullScreen
          className="w-full h-[250px] md:h-[500px] lg:h-[85vh]"
        />

      </section>

      {/* DETAILS */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-10">

        <div className="flex flex-col lg:flex-row gap-10">

          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full md:w-[350px] h-[220px] md:h-[500px] object-cover rounded-3xl"
          />

          <div>

            <p className="text-red-500 text-lg mb-3">
              {movie.category}
            </p>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              {movie.title}
            </h1>

            <div className="flex flex-wrap gap-5 text-gray-300 mb-6">

              <span>⭐ {movie.rating}</span>

              <span>{movie.year}</span>

              <span>{movie.language}</span>

              <span>{movie.duration}</span>

              <span className="border border-white/30 px-3 rounded">
                HD
              </span>

            </div>

            <p className="text-lg text-gray-300 leading-8 max-w-3xl">
              {movie.description}
            </p>

            <div className="flex gap-4 mt-10">

              <Link
                href="/"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold"
              >
                Back Home
              </Link>

              <Link
                href="/movies"
                className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl"
              >
                All Movies
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}