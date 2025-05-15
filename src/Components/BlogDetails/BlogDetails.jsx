import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowLeft, FiCalendar, FiUser, FiShare2 } from "react-icons/fi";
import { Helmet } from "react-helmet";
import blogs from "../../staticData/blogs";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((blog) => blog.slug === slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.metaDesc || blog.content.substring(0, 100),
        url: window.location.href
      });
    } else {
      // Fallback for desktop
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`;
      window.open(shareUrl, '_blank');
    }
  };

  if (!blog) {
    return (
      <Container className="not-found-container text-center py-5">
        <h2>Blog post not found!</h2>
        <Link to="/blog" className="back-button mt-3">
          Return to Blog
        </Link>
      </Container>
    );
  }

  return (
    <Container fluid className="blog-details-container px-lg-5 px-md-3 px-2">
      <Helmet>
        <title>{blog.title} | Vinayak Estate</title>
        <meta name="description" content={blog.metaDesc || blog.content.replace(/<[^>]*>?/gm, '').substring(0, 160)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDesc || blog.content.replace(/<[^>]*>?/gm, '').substring(0, 160)} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Row className="justify-content-center">
        <Col lg={8} className="mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
              <li className="breadcrumb-item active">{blog.title}</li>
            </ol>
          </nav>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={8} className="blog-content-wrapper">
          <div className="blog-header text-center mb-5">
            <h1 className="blog-title" itemProp="headline">{blog.title}</h1>
            <div className="blog-meta d-flex justify-content-center align-items-center">
              <span className="me-3">
                <FiUser className="me-2" />
                <span itemProp="author">{blog.author}</span>
              </span>
              <span>
                <FiCalendar className="me-2" />
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <button 
                onClick={handleShare}
                className="ms-3 btn btn-sm btn-outline-secondary"
                aria-label="Share this article"
              >
                <FiShare2 className="me-1" /> Share
              </button>
            </div>
          </div>

          <div className="featured-image-container mb-5">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="featured-image"
              loading="lazy"
            />
          </div>

          <article 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
            itemProp="articleBody"
          />

          <div className="blog-footer mt-5 pt-4 border-top">
            <Link to="/blog" className="back-button">
              <FiArrowLeft className="me-2" />
              Back to Blog
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetails;