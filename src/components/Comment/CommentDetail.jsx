import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CommentDetail = () => {
  const [comments, setComments] = useState([]);

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
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <Grid container spacing={2}>
      {comments.map((comment) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={comment._id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Author Name: {comment.name}
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
              <Link
                to={`/blog/comment/edit/${comment._id}`}
                style={{ textDecoration: "none" }}
              >
                <Button size="small" color="primary">
                  Edit
                </Button>
              </Link>
              <Button
                size="small"
                color="primary"
                onClick={() => handleDelete(comment._id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentDetail;
