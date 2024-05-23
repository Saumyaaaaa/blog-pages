import React from "react";
import { useParams } from "react-router-dom";
import CommentCreate from "../components/Comment/CommentCreate";

const BlogDetailPage = () => {
  // Extract the 'id' parameter from the URL using useParams
  const { id } = useParams();

  return (
    <>
      <div>BlogDetailPage</div>
      {/* Pass the 'id' parameter to the CommentCreate component */}
      <CommentCreate blogId={id} />
    </>
  );
};

export default BlogDetailPage;
