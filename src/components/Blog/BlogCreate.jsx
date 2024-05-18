import { useState } from "react";
import axios from "axios";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [coAuthorId, setCoAuthorId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
        setSuccess("Blog created successfully!");
        setTitle("");
        setContent("");
        setAuthorId("");
        setCoAuthorId("");
        setError("");
      }
    } catch (error) {
      setError("Failed to create blog. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Create a New Blog</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}
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
    </div>
  );
};

export default BlogCreate;
