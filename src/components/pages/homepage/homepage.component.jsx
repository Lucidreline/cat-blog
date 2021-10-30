import axios from "axios";
import React, { useState, useEffect } from "react";
import { BlogCardList } from "../../blog-card-list/blog-card-list.component";
import { SERVER_URL } from "../../../config";

export const HomePage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogPostResults = await axios(`${SERVER_URL}/posts`);
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
