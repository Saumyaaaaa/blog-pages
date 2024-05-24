import React from "react";
import axios from "axios";
import { useMutation } from "react-query";

const AuthorDelete = ({ authorId, onDelete }) => {
  // Define the mutation function
  const deleteAuthorMutation = useMutation(
    async () => {
      // Send a DELETE request to the backend API to delete the author
      await axios.delete(`http://localhost:5050/api/author/${authorId}`);
    },
    {
      onSuccess: () => {
        // Call the onDelete callback to update the UI after successful deletion
        onDelete(authorId);
      },
      onError: (error) => {
        console.error("Error deleting author:", error);
      },
    }
  );

  const handleDelete = () => {
    // Execute the deleteAuthorMutation
    deleteAuthorMutation.mutate();
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
