import React from "react";
import blogs from "../../staticData/blogs";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./BlogPage.css";

const BlogPage = () => {
  // Create excerpt by stripping HTML and limiting words
  const createExcerpt = (html, wordCount = 25) => {
    const text = html.replace(/<[^>]*>?/gm, '');
    return text.split(' ').slice(0, wordCount).join(' ') + '...';
  };

  return (
    <Container fluid className="blog-container px-lg-5 px-md-3 px-2">
      <Helmet>
        <title>Real Estate Blog | Vinayak Estate</title>
        <meta name="description" content="Latest insights on real estate trends, home buying tips, and property investment advice in India." />
        <meta property="og:title" content="Real Estate Blog | Vinayak Estate" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center">
          <h1 className="section-heading mb-4">
            Our Latest <span className="text-primary">Blogs</span>
          </h1>
          <p className="section-subtitle">
            Discover insights, tips, and news about real estate and property trends
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {blogs.map((blog) => (
          <Col key={blog.id} lg={4} md={6} className="mb-4">
            <article className="blog-card h-100" itemScope itemType="http://schema.org/BlogPosting">
              <div className="blog-image-container">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="blog-image"
                  loading="lazy"
                  itemProp="image"
                />
                <div className="blog-date-badge">
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  <meta itemProp="datePublished" content={new Date(blog.date).toISOString()} />
                </div>
              </div>
              
              <div className="blog-content p-3">
                <Link to={`/blog/${blog.slug}`} className="blog-title-link" itemProp="url">
                  <h3 className="blog-title" itemProp="headline">{blog.title}</h3>
                </Link>

                <div className="blog-excerpt" itemProp="description">
                  {createExcerpt(blog.content)}
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="blog-author" itemProp="author" itemType="http://schema.org/Person">
                    <i className="bi bi-person-fill me-2"></i>
                    <span itemProp="name">{blog.author}</span>
                  </span>
                  <Link 
                    to={`/blog/${blog.slug}`} 
                    className="read-more-button"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </article>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;