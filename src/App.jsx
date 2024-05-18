import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage"; 
import BlogDetailPage from "./pages/BlogDetailPage"; 
import "./index.css";
import AuthorPage from "./components/Author/AuthorPage";
import ProfilePage from "./pages/ProfilePage";
import BlogCreate from "./components/Blog/BlogCreate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blogs" element={<BlogCreate />} />
          <Route path="blogs/:id" element={<BlogDetailPage />} />
          <Route path="/authors" element={<AuthorPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
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
