import React from 'react'
import Blog from './Blog/Blog'
import BlogCards from './Blog/BlogCards/BlogCards'
import HomeContent from './HomeContent/HomeContent'
import Navbar from './Navbar/Navbar'
import Trending from './Trending/Trending'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeContent/>
    <Trending/>
    <Blog/>
    </>
  )
}

export default Home