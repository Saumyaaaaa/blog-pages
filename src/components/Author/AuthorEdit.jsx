import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const AuthorEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [author, setAuthor] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    fetchAuthor();
  }, [id]);

  const fetchAuthor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/author/${id}`
      );
      setAuthor(response.data);
      setFormData({
        fullName: response.data.fullName,
        email: response.data.email,
      });
    } catch (error) {
      console.error("Error fetching author:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5050/api/author/${id}`, formData);
      console.log("Author updated successfully");
      toast.success("Author updated successfully!", { autoClose: 3000 });
      setTimeout(() => {
        navigate("/authors"); // Redirect to the homepage after the toast notification closes
      }, 1000);
    } catch (error) {
      console.error("Error updating author:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Edit Author</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          Update Author
        </button>
      </form>
      <ToastContainer /> {/* Toast container */}
    </div>
  );
};

export default AuthorEdit;
