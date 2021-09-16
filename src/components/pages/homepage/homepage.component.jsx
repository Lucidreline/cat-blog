import axios from 'axios';
import React, {useState, useEffect} from 'react'
import BlogCard from '../../blog-card/blog-card.component'

export const HomePage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const blogPostResults = await axios('http://localhost:3000/posts')

    blogPostResults.data.forEach(async (post) => {
      const username = await axios (`http://localhost:3000/users/${post.author}`)
      post.authorUsername = username.data.userName
    })

    setBlogPosts(blogPostResults.data)
  }
  fetchData()
  }, [])
  return (
    <>
      {blogPosts.map(({_id,...props}) => (
        <BlogCard key={_id} {...props}/>
      ))}
    </>
  )
}
