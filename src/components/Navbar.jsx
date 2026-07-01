import { FaShoppingCart, FaSearch, FaBookOpen } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaBookOpen className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold text-gray-900">
            Learn<span className="text-blue-600">Sphere</span>
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <li className="text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent outline-none px-2 w-48"
            />
          </div>

          <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-600" />

          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            Login
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;