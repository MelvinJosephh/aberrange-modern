'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";
import Image from "next/image"; // Importing Image from next/image
import styles from "@/styles/pages/blogs.module.scss";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  author: { name: string };
  permalink: string;
  featuredImage: string | null;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/blogs");
      const blogsData: Blog[] = response.data.map((blog: Blog) => ({
        _id: blog._id,
        title: blog.title,
        excerpt: blog.excerpt,
        publishDate: blog.publishDate,
        author: blog.author,
        permalink: blog.permalink,
        featuredImage: blog.featuredImage,
      }));

      localStorage.setItem("blogs", JSON.stringify(blogsData));
      localStorage.setItem("blogsTimestamp", new Date().getTime().toString());

      setBlogs(blogsData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const blogsCache = localStorage.getItem("blogs");
    const blogsTimestamp = localStorage.getItem("blogsTimestamp");

    if (blogsCache && blogsTimestamp) {
      const currentTime = new Date().getTime();
      const oneHour = 60 * 60 * 1000;

      if (currentTime - parseInt(blogsTimestamp) < oneHour) {
        try {
          setBlogs(JSON.parse(blogsCache));
          setLoading(false);
          return;
        } catch {
          localStorage.removeItem("blogs");
          localStorage.removeItem("blogsTimestamp");
        }
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.blog}>
      <div className="container topMargin">
        <div className="heading">
          <h3>LATEST BLOG</h3>
          <h1>Read Inspirational Stories Every Week</h1>
        </div>
        <div className={`${styles.contain} grid topMargin`}>
          {blogs.map((blog) => (
            <div className={`${styles.box}`} key={blog._id}>
              <div className={styles.img}>
                {blog.featuredImage ? (
                  // If featuredImage is base64 encoded, we use it directly, otherwise use an external URL
                  <Image
                    src={blog.featuredImage.startsWith('data:image') ? `data:image/jpeg;base64,${blog.featuredImage}` : blog.featuredImage}
                    alt={blog.title}
                    width={500}  // Specify width for optimization
                    height={300} // Specify height for optimization
                    layout="responsive"  // This makes it responsive
                    loading="lazy"  // Enable lazy loading
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <div className={styles.text}>
                <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <p>By: {blog.author.name}</p>
                <Link href={`/blogs/${blog.permalink}`}>
                  <a>
                    Read More <KeyboardDoubleArrowRightIcon className={styles.icon} />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
