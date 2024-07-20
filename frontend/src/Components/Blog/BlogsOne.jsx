import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles

const { Meta } = Card;

const BlogCard = ({ title, excerpt, date }) => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src="https://via.placeholder.com/300" // Placeholder image
      />
    }
    className="blog-card"
  >
    <Meta
      title={title}
      description={
        <>
          <p>{excerpt}</p>
          <span className="text-gray-500">{date}</span>
        </>
      }
    />
  </Card>
);

const BlogsOne = () => {
  // Dummy data for the blogs
  const blogs = [
    {
      title: 'Blog Post 1',
      excerpt: 'This is a brief excerpt from the first blog post. It provides a summary of the content.',
      date: 'July 20, 2024',
    },
    {
      title: 'Blog Post 2',
      excerpt: 'This is a brief excerpt from the second blog post. It provides a summary of the content.',
      date: 'July 21, 2024',
    },
    {
      title: 'Blog Post 3',
      excerpt: 'This is a brief excerpt from the third blog post. It provides a summary of the content.',
      date: 'July 22, 2024',
    },
    {
      title: 'Blog Post 4',
      excerpt: 'This is a brief excerpt from the fourth blog post. It provides a summary of the content.',
      date: 'July 23, 2024',
    },
    // Add more blog posts if needed
  ];

  return (
    <div className="p-6  ">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Page</h1>
      <Row gutter={[16, 24]}>
        {blogs.map((blog, index) => (
          <Col
            xs={24} // Full width on extra small screens
            sm={12} // Half width on small screens
            md={8}  // One-third width on medium screens
            lg={6}  // One-fourth width on large screens
            key={index}
          >
            <BlogCard
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogsOne;
