import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold mb-2">My Blog</h2>
            <p className="text-gray-400">
              Your go-to source for the latest news and updates.
            </p>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <ul>
              <li className="mb-2">Email: info@myblog.com</li>
              <li className="mb-2">Phone: +123 456 7890</li>
              <li className="mb-2">Address: 123 Blog St, Blog City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
