// pages/BlogDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../staticData/blogs";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div className="blog-details">
      <h1 className="blog-title">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-meta">
        <span><strong>Author:</strong> {blog.author}</span> | 
        <span><strong>Date:</strong> {blog.date}</span>
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetails;
