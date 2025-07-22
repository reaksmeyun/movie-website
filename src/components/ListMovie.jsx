  const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Avatar",
    year: 2009,
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    id: 6,
    title: "Oppenheimer",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
  },
  {
    id: 7,
    title: "Dune: Part One",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    id: 8,
    title: "Everything Everywhere All at Once",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
  },
  {
    id: 9,
    title: "The Batman",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
  },
  {
    id: 10,
    title: "Top Gun: Maverick",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  },
  {
    id: 11,
    title: "Joker",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 12,
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  },
  {
    id: 13,
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
  },
  {
    id: 14,
    title: "Shang-Chi and the Legend of the Ten Rings",
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  },
  {
    id: 15,
    title: "The Super Mario Bros. Movie",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  },
  {
    id: 16,
    title: "Frozen II",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
  },
  {
    id: 17,
    title: "The Flash",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
  },
  {
    id: 18,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
  },
  {
    id: 19,
    title: "Dungeons & Dragons: Honor Among Thieves",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg",
  },
  {
    id: 20,
    title: "John Wick: Chapter 4",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  }
  ]

export function ListMovie() {
  return (
    <section className="py-8 px-6  max-w-full mx-auto">
     <h2 className="text-2xl font-bold mb-4">🎥 Featured Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold">{movie.title}</h3>
              <p className="text-xs text-gray-400">{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
