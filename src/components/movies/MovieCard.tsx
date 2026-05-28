interface Movie {
  id: number;
  title: string;
  thumbnail: string;
  rating: number;
  language: string;
  premium: boolean;
}

interface Props {
  movie: Movie;
}

export default function MovieCard({
  movie,
}: Props) {
  return (
    <div className="relative min-w-[280px] h-[420px] rounded-3xl overflow-hidden group cursor-pointer transition duration-500 hover:scale-105">

      {/* IMAGE */}
      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* PREMIUM BADGE */}
      {movie.premium && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
          PREMIUM
        </div>
      )}

      {/* PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="w-20 h-20 rounded-full bg-red-500/90 backdrop-blur-md flex items-center justify-center text-3xl shadow-2xl">
          ▶
        </div>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <h3 className="text-3xl font-bold mb-2">
          {movie.title}
        </h3>

        <div className="flex items-center gap-4 text-gray-300 text-sm">
          <span>
            ⭐ {movie.rating}
          </span>

          <span>
            {movie.language}
          </span>
        </div>
      </div>
    </div>
  );
}