import React from "react";

import "./blog-card.styles.scss";
// [
//   {
//     _id: string,
//     authorUsername: string,
//     usersLiked: string[],
//     author: string,
//     textBody: string,
//     title: string,
//     imageUrl: string,
//     __v: 0,
//   },
// ];

const BlogCard = ({
  title,
  textBody,
  authorUsername,
  imageUrl,
  usersLiked,
}) => {
  return (
    <article className="blog-card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      ></div>
      <div className="card-info">
        <div className="content-and-author">
          <div className="content">
            <h3 className="blog-card-title">{title}</h3>
            <p className="blog-card-content-preview">{textBody}</p>
          </div>
          <div className="author-container">
            <span className="author">{authorUsername}</span>
          </div>
        </div>
        <div className="likes-and-share">
          <div className="share-btn-container">
            <div className="share-btn"></div>
          </div>
          <div className="likes-btn-container">
            <span className="likes-counter">{usersLiked.length}</span>
            <div className="likes-btn"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
