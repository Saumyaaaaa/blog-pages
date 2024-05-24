import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import Layout from "./components/Shared/Layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import "./index.css";
import BlogCreate from "./components/Blog/BlogCreate";
import BlogDelete from "./components/Blog/BlogDelete";
import SignUpPage from "./pages/SignUpPage";
import BlogEdit from "./components/Blog/BlogEdit";
import AuthorCreate from "./components/Author/AuthorCreate";
import AuthorPage from "./pages/AuthorPage";
import AuthorDetail from "./components/Author/AuthorDetail";
import AuthorEdit from "./components/Author/AuthorEdit";
import CommentCreate from "./components/Comment/CommentCreate";
import BlogComments from "./pages/CommentPage";
import CommentDetail from "./components/Comment/CommentDetail";
import CommentPage from "./pages/CommentPage";
import CommentEdit from "./components/Comment/CommentEdit";
import queryClient from "../queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog/create" element={<BlogCreate />} />
            <Route path="/blog/delete" element={<BlogDelete />} />
            <Route path="/blog/edit/:id" element={<BlogEdit />} />
            <Route path="blogs/:id" element={<BlogDetailPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/authors" element={<AuthorPage />} />
            <Route path="/author/create" element={<AuthorCreate />} />
            <Route path="/author/:id" element={<AuthorDetail />} />
            <Route path="/author/edit/:id" element={<AuthorEdit />} />
            <Route path="/blog/comment" element={<CommentPage />} />
            <Route path="/blog/comment/create" element={<CommentCreate />} />
            <Route path="/blog/comment/detail" element={<CommentDetail />} />
            <Route path="/blog/comments/:id" element={<BlogComments />} />
            <Route path="/blog/comment/edit/:id" element={<CommentEdit />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
