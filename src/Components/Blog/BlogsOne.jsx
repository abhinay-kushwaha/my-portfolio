import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import '../../App.css'
import 'antd/dist/reset.css'; 
import reactImage from "../../assets/react.jpeg";
import nextImage from "../../assets/nextJs.png";
import javaImage from "../../assets/java.png";
import pythonImage from "../../assets/python.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Meta } = Card;

const BlogCard = ({ title, excerpt, date, image }) => (
  <Card
    hoverable
    cover={
      <img 
        alt="logo" 
        src={image} 
        className="w-full h-48 object-cover" // Tailwind classes for width and height
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
  useEffect(() => {
    AOS.init();
}, []);
  // Dummy data for the blogs
  const blogs = [
    {
      title: 'Blog Post 1',
      excerpt: 'This is a brief excerpt from the first blog post. It provides a summary of the content.',
      date: 'July 20, 2024',
      image: reactImage,
    },
    {
      title: 'Blog Post 2',
      excerpt: 'This is a brief excerpt from the second blog post. It provides a summary of the content.',
      date: 'July 21, 2024',
      image: nextImage,
    },
    {
      title: 'Blog Post 3',
      excerpt: 'This is a brief excerpt from the third blog post. It provides a summary of the content.',
      date: 'July 22, 2024',
      image: javaImage,
    },
    {
      title: 'Blog Post 4',
      excerpt: 'This is a brief excerpt from the fourth blog post. It provides a summary of the content.',
      date: 'July 23, 2024',
      image: pythonImage,
    },
    // Add more blog posts if needed
  ];

  return (
    <div data-aos="zoom-in-up" className="p-6">
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
              image={blog.image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogsOne;
