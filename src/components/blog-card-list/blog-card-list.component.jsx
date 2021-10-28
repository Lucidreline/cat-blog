import React from "react";
import BlogCard from "../blog-card/blog-card.component";

export const BlogCardList = ({ blogPosts }) => {
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
  return (
    <div>
      {blogPosts.map(({ _id, ...rest }) => (
        <BlogCard key={_id} {...rest} />
      ))}
      <BlogCard title="test title" textBody="this is a fake blog ok? ok." />
      <BlogCard
        title="test title2"
        textBody="This is another fake blog ok jeez."
      />
    </div>
  );
};
