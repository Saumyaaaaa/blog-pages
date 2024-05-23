import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthorDelete from "./AuthorDelete"; // Import the AuthorDelete component

const AuthorDetail = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/author");
      setAuthors(response.data);
    } catch (error) {
      toast.error("Error fetching authors: " + error.message, {
        autoClose: 3000,
      });
    }
  };

  const handleDeleteAuthor = async (authorId) => {
    // Filter out the deleted author from the author list
    setAuthors(authors.filter((author) => author._id !== authorId));
    toast.success("Author deleted successfully", { autoClose: 3000 });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Authors</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((author) => (
          <div
            key={author._id}
            className="border rounded-lg shadow-md p-6 bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{author.fullName}</h2>
              <p className="text-gray-700 mb-4">{author.email}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link
                to={`/author/${author._id}`}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-600 transition-colors"
              >
                View Details
              </Link>
              <Link
                to={`/author/edit/${author._id}`}
                
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
              >
                Edit
              </Link>
              <AuthorDelete
                authorId={author._id}
                onDelete={handleDeleteAuthor}
              />
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthorDetail;
