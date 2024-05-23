import React from "react";
import axios from "axios";

const AuthorDelete = ({ authorId, onDelete }) => {
  const handleDelete = async () => {
    try {
      // Send a DELETE request to the backend API to delete the author
      await axios.delete(`http://localhost:5050/api/author/${authorId}`);
      
      onDelete(authorId);
    } catch (error) {
  
      console.error("Error deleting author:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
    >
      Delete
    </button>
  );
};

export default AuthorDelete;
