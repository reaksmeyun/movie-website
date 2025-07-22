const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Romance', 'Horror'];

export default function GenresSection() {
  return (
    <section className="py-8 px-6 max-w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">🔥 Popular Genres</h2>
      <div className="flex flex-wrap gap-3">
        {genres.map((genre, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-gray-700 rounded-full text-sm cursor-pointer hover:bg-blue-600 transition"
          >
            {genre}
          </span>
        ))}
      </div>
    </section>
  );
}
