// export default function Navbar() {
//   return (
//     <header className="bg-gray-900 text-white p-2 flex items-center justify-between">
//       <h1 className="text-base font-bold">🎬 MovieHub AI</h1>

//       <div className="flex space-x-3">
//         <input
//           type="text"
//           placeholder="Search movies..."
//           className="px-3 py-1 rounded bg-gray-800 focus:outline-none text-sm"
//         />
//         <select className="px-3 py-1 rounded bg-gray-800 text-sm">
//           <option>All Genres</option>
//           <option>Action</option>
//           <option>Drama</option>
//           <option>Comedy</option>
//           <option>Sci-Fi</option>
//         </select>
//       </div>
//     </header>
//   );
// }

export default function Navbar() {
  return (
    <nav className="max-w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Left - Logo */}
      <div className="text-lg font-bold select-none">🎬 MovieHybrid AI</div>

      {/* Center - Links */}
      <ul className="hidden md:flex space-x-6 font-medium text-sm">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Genres</li>
        <li className="hover:text-blue-500 cursor-pointer">Profile</li>
      </ul>

      {/* Right - Search Input (visible on md+) */}
      <input
        type="text"
        placeholder="Search movies..."
        className="hidden md:block px-3 py-1 rounded bg-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
       <select className="px-3 py-1 rounded bg-gray-800 text-sm">
//           <option>All Genres</option>
//           <option>Action</option>
//           <option>Drama</option>
//           <option>Comedy</option>
//           <option>Sci-Fi</option>
//         </select>
    </nav>
  );
}
