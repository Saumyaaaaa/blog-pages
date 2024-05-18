import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-800  shadow-lg">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">MyApp</div>
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
        <div
          className={`md:flex ${isNavOpen ? "block" : "hidden"} md:space-x-6`}
        >
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
            to="/profile"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Profile
          </Link>
          <Link
            to="/create"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Create Post
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;