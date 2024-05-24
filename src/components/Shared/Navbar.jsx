import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            MyApp
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
          >
            {isNavOpen ? (
              <RxCross1 className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Navbar Items for Larger Screens */}
        <div className="hidden md:flex md:space-x-6 md:items-center">
          <Link
            to="/"
            className={`text-white ${
              location.pathname === "/" ? "hover:text-gray-300" : ""
            } transition duration-300`}
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Blogs
          </Link>
          <Link
            to="/authors"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Authors
          </Link>
          <Link
            to="/blog/comment"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Comment
          </Link>
          <Link
            to="/signup"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Sign Up
          </Link>
         
          <Link
            to="/author/create"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Create Author
          </Link>
        </div>
        {/* Responsive Navbar */}
        {isNavOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <button
                onClick={handleToggle}
                className="absolute top-0 right-0 m-2 text-gray-800 focus:outline-none"
              >
                <RxCross1 className="w-6 h-6" />
              </button>
              <div className="flex flex-col md:flex-row md:space-x-6">
                <Link
                  to="/"
                  className={`text-gray-800 block md:text-white hover:text-gray-300 transition duration-300 py-2`}
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  className="text-gray-800 md:text-white hover:text-gray-300 transition duration-300 py-2"
                >
                  Blogs
                </Link>
                <Link
                  to="/authors"
                  className="text-gray-800 md:text-white hover:text-gray-300 transition duration-300 py-2"
                >
                  Authors
                </Link>
                <Link
                  to="/blog/comment"
                  className="text-gray-800 md:text-white hover:text-gray-300 transition duration-300 py-2"
                >
                  Comment
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-800 md:text-white hover:text-gray-300 transition duration-300 py-2"
                >
                  Sign Up
                </Link>
               
                <Link
                  to="/author/create"
                  className="text-gray-800 md:text-white hover:text-gray-300 transition duration-300 py-2"
                >
                  Create Author
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
