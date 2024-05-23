import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IoCreateOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";

const CommentPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Welcome to Our Comment Page
      </h1>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <TableContainer>
          <Table sx={{ backgroundColor: "white" }}>
            <TableHead>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className="hover:bg-gray-50 transition-colors duration-150">
                <TableCell>Create a New Comment</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <Link
                      to="/blog/comment/create"
                      className="text-2xl bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors"
                    >
                      <IoCreateOutline />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50 transition-colors duration-150">
                <TableCell>Comment Details</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <Link
                      to="/blog/comment/detail"
                      className="text-2xl bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors"
                    >
                      <TbListDetails />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default CommentPage;
