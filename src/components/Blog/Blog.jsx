import React from 'react'
import Footer from '../Footer/Footer'
import './Blog.css'
import BlogCards from './BlogCards/BlogCards'

const Blog = () => {

  return (
   <>
    <div id='Blog_ContainerBackground'>
     <h3 id='Blog_H3'>BLOG</h3>
        <div id='BlogBackground_Container'>
        <BlogCards/>
       </div>
    </div>
   </>
  )
}

export default Blog