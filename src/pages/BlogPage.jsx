import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import DeleteIcon from "@mui/icons-material/Delete";
import { GoCommentDiscussion } from "react-icons/go";

const BlogPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Welcome to Our Blog
      </h1>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                Create a New Blog
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm">
                <div className="flex justify-center">
                  <Link
                    to="/blog/create"
                    className="text-2xl bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors"
                  >
                    <IoCreateOutline />
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                Comment on a Blog
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm">
                <div className="flex justify-center">
                  <Link
                    to="/blog/comment/create"
                    className="bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
                  >
                    <IconButton aria-label="comment" size="large">
                      <GoCommentDiscussion fontSize="inherit" className="text-white" />
                    </IconButton>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                Delete Blog
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm">
                <div className="flex justify-center">
                  <Link
                    to="/blog/delete"
                    className="bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-colors"
                  >
                    <IconButton aria-label="delete" size="large">
                      <DeleteIcon fontSize="inherit" className="text-white" />
                    </IconButton>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogPage;
