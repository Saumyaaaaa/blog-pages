import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from React Router
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, CardMedia } from "@mui/material";

const CommentDetail = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/comment");
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(`http://localhost:5050/api/comment/${commentId}`);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );
      navigate("/blog/comment/detail"); // Navigate to /blog/comment/detail after deletion
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {comments.map((comment) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={comment._id}>
          <Link
            to={`/blog/comment/edit/${comment._id}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              sx={{
                maxWidth: 345,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/public/pic.png" // Replace with actual photo URL
                  alt="Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Commenter : {comment.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {comment.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Comment: {comment.comment}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Blog ID: {comment.blogId}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Created At: {new Date(comment.createdAt).toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Updated At: {new Date(comment.updatedAt).toLocaleString()}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleDelete(comment._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentDetail;
