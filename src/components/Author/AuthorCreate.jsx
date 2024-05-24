import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AuthorCreate = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Define the mutation function
  const createAuthorMutation = useMutation(
    async (newAuthor) => {
      const response = await axios.post(
        "http://localhost:5050/api/author",
        newAuthor
      );
      return response.data;
    },
    {
      onSuccess: () => {
        toast.success("Author created successfully!", { autoClose: 5000 });
        setFullName("");
        setEmail("");
        // Navigate to /authors after 5 seconds
        setTimeout(() => {
          navigate("/authors");
        }, 1000);
      },
      onError: (error) => {
        toast.error("Failed to create author: " + error.message, {
          autoClose: 3000,
        });
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthorMutation.mutate({ fullName, email });
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Create a New Author</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Author
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthorCreate;
