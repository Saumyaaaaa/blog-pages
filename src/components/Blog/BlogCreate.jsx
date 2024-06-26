import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [coAuthorId, setCoAuthorId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5050/api/blog", {
        title,
        content,
        authorId,
        co_AuthorId: coAuthorId,
      });
      if (response.status === 201) {
        setTitle("");
        setContent("");
        setAuthorId("");
        setCoAuthorId("");
        toast.success("Blog created successfully!", { autoClose: 3000 });
        setTimeout(() => {
          navigate("/"); // Redirect to the homepage after the toast notification closes
        }, 1000);
      } else {
        toast.error("An error occurred while creating the blog", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`, {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Create a New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows="6"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="authorId"
              className="block text-sm font-medium text-gray-700"
            >
              Author ID
            </label>
            <input
              type="text"
              id="authorId"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="coAuthorId"
              className="block text-sm font-medium text-gray-700"
            >
              Co-Author ID (Optional)
            </label>
            <input
              type="text"
              id="coAuthorId"
              value={coAuthorId}
              onChange={(e) => setCoAuthorId(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogCreate;
