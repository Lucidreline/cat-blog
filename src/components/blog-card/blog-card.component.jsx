import React from "react"

import "./blog-card.styles.scss"

const BlogCard = ({title, textBody}) => {
  return (
    <article className='blog-card'>
      <div className='card-img'></div>
      <div className='card-info'>
        <div className='content-and-author'>
          <div className='content'>
            <h3 className='blog-card-title'>{title}</h3>
            <p className='blog-card-content-preview'>
              {textBody}
            </p>
          </div>
          <div className='author-container'>
            <span className='author'>by Manny</span>
          </div>
        </div>
        <div className='likes-and-share'>
          <div className='share-btn-container'>
            <div className='share-btn'></div>
          </div>
          <div className='likes-btn-container'>
            <span className='likes-counter'>5</span>
            <div className='likes-btn'></div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
