import axios from "axios";
import React, { useState, useEffect } from "react";
import { BlogCardList } from "../../blog-card-list/blog-card-list.component";

export const HomePage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogPostResults = await axios("http://149.28.93.112:3000/posts");
      // [
      //   {
      //     _id: string,
      //     authorUsername: string,
      //     author: string,
      //     textBody: string,
      //     title: string,
      //     imageUrl: string,
      //     __v: 0,
      //   },
      // ];

      setBlogPosts(blogPostResults.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <BlogCardList blogPosts={blogPosts} />
    </>
  );
};
