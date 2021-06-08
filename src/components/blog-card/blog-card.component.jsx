import React from 'react';

import './blog-card.styles.scss'

const BlogCard = () => {
  return (
    <article className='blog-card'>
      <div className="card-img"></div>
      <div className="card-info">
        <div className="content-and-author">
          <div className="content">
            <h2 className="blog-card-title">ipsum dolor sit</h2>
            <p className="blog-card-content-preview">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, est laudantium necessitatibus.
            </p>
          </div>
          <div className="author-container"> 
            <p className="author">by Manny</p>
          </div>
        </div>
        <div className="likes-and-share">
          <div className="share-btn-container">
            <div className="share-btn"></div>
          </div>
          <div className="likes-btn-container">
            <span className="likes-counter">5</span>
            <div className="likes-btn"></div>
          </div>
        </div>
      </div>
    </article>
  );
};



export default BlogCard;