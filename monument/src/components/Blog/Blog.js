import React from 'react'
import Header from  './Header/Header'
import Article from './Article/Article'
import Sidebar from './Sidebar/Sidebar'


import './Blog.css'


const Blog = () => {
  return (
    <div>
      <Header />
      <div className="wrap grid-wrapper">
      <Article />
      <Sidebar />
    </div>

    </div>
  );
};


export default Blog;