export default function HeroSection() {
  return (
    <section className="bg-gray-800 text-white max-w-full mx-auto text-center py-16 px-6">
      <h1 className="text-3xl font-bold mb-3">🎬 MovieHybrid AI</h1>
      <p className="text-gray-400 mb-6 text-lg max-w-xl mx-auto">
        Discover movies you'll love.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold transition">
          Explore
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded font-semibold transition">
          Chat with AI
        </button>
      </div>
    </section>
  );
}
