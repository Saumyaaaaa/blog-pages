import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Our Blog
      </h1>
      <div className="flex justify-center">
        <Link
          to="/blog/create"
          className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          Create a New Blog
        </Link>
      </div>
      <div className="mt-8 text-center text-gray-700">
        Don't have an account yet?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
