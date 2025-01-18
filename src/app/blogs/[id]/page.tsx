'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // Next.js's hook for route params
import styles from '@/styles/pages/full-blog.module.scss';

// Define Blog type
interface Author {
  name: string;
}

interface Blog {
  _id: string;
  title: string;
  publishDate: string;
  author: Author;
  content: string; // Assuming content is HTML
}

const FullBlog: React.FC = () => {
  const router = useRouter(); // Get route params
  const { permalink } = router.query; // permalink from URL
  const [blog, setBlog] = useState<Blog | null>(null); // Set state with Blog or null
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch blog post data
  const fetchBlog = async () => {
    if (!permalink) return; // If permalink is not available, return early

    try {
      setLoading(true);
      const cachedBlog = localStorage.getItem(`blog-${permalink}`);

      if (cachedBlog) {
        setBlog(JSON.parse(cachedBlog));
        setLoading(false);
      } else {
        const response = await axios.get(`http://localhost:5000/api/blogs/${permalink}`);
        setBlog(response.data);
        localStorage.setItem(`blog-${permalink}`, JSON.stringify(response.data));
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to fetch the full blog.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch blog data when permalink changes
  useEffect(() => {
    fetchBlog();
  }, [permalink]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.fullBlog}>
      <div className="container topMargin">
        {blog ? (
          <div>
            <h1>{blog.title}</h1>
            <p>{new Date(blog.publishDate).toLocaleDateString()}</p>
            <p>By: {blog.author.name}</p>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} /> {/* Assuming content is HTML */}
          </div>
        ) : (
          <p>Blog not found.</p>
        )}
      </div>
    </section>
  );
};

export default FullBlog;
