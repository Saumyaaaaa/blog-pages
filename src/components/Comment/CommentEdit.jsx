import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, CircularProgress } from "@mui/material";

const CommentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState({ name: "", email: "", comment: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/api/comment/${id}`
        );
        console.log("Fetched comment:", response.data); // Log fetched comment
        setComment(response.data);
      } catch (err) {
        setError("Failed to fetch comment");
      } finally {
        setLoading(false);
      }
    };

    fetchComment();
  }, [id]);

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting comment:", comment); // Log data before submitting
    try {
      const response = await axios.put(
        `http://localhost:5050/api/comment/${id}`,
        comment
      );
      console.log("Response from server:", response.data); // Log server response
      navigate("/blog/comment/detail");
    } catch (err) {
      console.error("Error updating comment:", err);
      setError("Failed to update comment");
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={comment.name || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={comment.email || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Comment"
        name="comment"
        value={comment.comment || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default CommentEdit;
