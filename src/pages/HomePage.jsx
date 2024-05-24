
import axios from "axios";
import { useQuery } from "react-query";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomePage = () => {
  const {
    data: blogs,
    isLoading,
    isError,
    refetch,
  } = useQuery("blogs", fetchBlogs);

  async function fetchBlogs() {
    const response = await axios.get("http://localhost:5050/api/blog");
    return response.data;
  }

  const handleLike = async (blogId) => {
    try {
      await axios.get(`http://localhost:5050/api/blog/likes/${blogId}`);
      refetch();
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };

  const handleDislike = async (blogId) => {
    try {
      await axios.get(`http://localhost:5050/api/blog/dislikes/${blogId}`);
      refetch();
    } catch (error) {
      console.error("Error disliking blog:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Our Blog
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-lg shadow-md p-6 bg-white flex flex-col justify-between transition duration-300 hover:scale-105"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <p className="text-gray-500 mb-4">Author: {blog.author}</p>
              <img
                src="pic.png"
                alt="blog title"
                className="w-full rounded-md mb-4"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors flex items-center"
                onClick={() => handleLike(blog._id)}
              >
                <AiOutlineLike className="mr-2" /> Like
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-colors flex items-center"
                onClick={() => handleDislike(blog._id)}
              >
                <AiOutlineDislike className="mr-2" /> Dislike
              </button>
              <Link
                to={`/blog/edit/${blog._id}`}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-600 transition-colors"
              >
                Edit
              </Link>
              <div className="text-gray-600">
                <span className="mr-4">Likes: {blog.likes_count}</span>
                <span>Views: {blog.view_count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
