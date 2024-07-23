import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import '../../App.css';
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

  // Updated dummy data for the blogs
  const blogs = [
    {
      title: 'Exploring React: The Fundamentals',
      excerpt: 'Dive into the world of React with this comprehensive guide. Learn the basics of React, including components, state management, and the virtual DOM. This post provides a solid foundation for anyone new to React and offers practical examples to get you started.',
      date: 'July 20, 2024',
      image: reactImage,
    },
    {
      title: 'Harnessing the Power of Next.js',
      excerpt: 'Next.js offers powerful features for building server-rendered React applications. This post explores its key features, including static site generation, server-side rendering, and API routes. Discover how Next.js can enhance your web development workflow and improve performance.',
      date: 'July 21, 2024',
      image: nextImage,
    },
    {
      title: 'Java: A Comprehensive Overview',
      excerpt: 'Java remains one of the most popular programming languages in the world. In this blog post, we cover Java’s key features, its evolution over the years, and why it continues to be a valuable tool for developers. Explore Java’s rich ecosystem and its applications in modern development.',
      date: 'July 22, 2024',
      image: javaImage,
    },
    {
      title: 'Getting Started with Python',
      excerpt: 'Python is known for its simplicity and readability. This post provides an introduction to Python, covering basic syntax, data structures, and key libraries. Whether you’re a beginner or looking to brush up on your Python skills, this guide offers valuable insights and practical tips.',
      date: 'July 23, 2024',
      image: pythonImage,
    },
    // Add more blog posts if needed
  ];

  return (
    <div className="p-6">
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
