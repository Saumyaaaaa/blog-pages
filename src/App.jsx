import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import "./index.css";

import ProfilePage from "./pages/ProfilePage";
import BlogCreate from "./components/Blog/BlogCreate";
import BlogDelete from "./components/Blog/BlogDelete";
import SignUpPage from "./pages/SignUpPage";
import BlogEdit from "./components/Blog/BlogEdit";
import AuthorCreate from "./components/Author/AuthorCreate";
import AuthorPage from "./pages/AuthorPage";
import AuthorDetail from "./components/Author/AuthorDetail";
import AuthorEdit from "./components/Author/AuthorEdit";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/create" element={<BlogCreate />} />
          <Route path="/blog/delete" element={<BlogDelete />} />
          <Route path="/blog/edit/:id" element={<BlogEdit />} />

          <Route path="blogs/:id" element={<BlogDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          <Route path="/authors" element={<AuthorPage />} />
          <Route path="/author/create" element={<AuthorCreate />} />
          <Route path="/author/:id" element={<AuthorDetail />} />
          <Route path="/author/edit/:id" element={<AuthorEdit />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
