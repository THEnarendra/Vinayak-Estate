// pages/BlogPage.js
import React from "react";
import blogs from "../../staticData/blogs";
import { Link } from "react-router-dom";
import "./BlogPage.css";

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1>Our Latest <span style={{ color: "#6200ea" }}>Blogs</span></h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          
          {/* Make the title clickable */}
          <Link to={`/blog/${blog.slug}`} className="blog-title-link">
            <h2>{blog.title}</h2>
          </Link>

          {/* Display first 120 characters + "..." */}
          <div className="blog-content">
            <div
              dangerouslySetInnerHTML={{
                __html: blog.content.substring(0, 120) + "...",
              }}
            />
          </div>

          <p className="blog-meta">
            <strong>Author:</strong> {blog.author} | <strong>Date:</strong> {blog.date}
          </p>

          {/* Read More Button */}
          <Link to={`/blog/${blog.slug}`} className="read-more-button">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
