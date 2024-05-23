import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BlogDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/blog`);
        console.log("Blog Data:", response.data);
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch blog details.", { autoClose: 3000 });
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/blog/${blogId}`
      );
      if (response.status === 200) {
        toast.success("Blog deleted successfully!", { autoClose: 3000 });
        // Remove the deleted blog from the UI
         setTimeout(() => {
           navigate("/"); // Redirect to the homepage after the toast notification closes
         }, 1000);
        setBlogs(blogs.filter((blog) => blog._id !== blogId));
      }
    } catch (error) {
      toast.error("Failed to delete blog. Please try again.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Delete Blog</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {blogs.map((blog) => (
              <Card key={blog._id} className="mb-4">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleDelete(blog._id)}
                    size="small"
                    color="error"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))}
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogDelete;
