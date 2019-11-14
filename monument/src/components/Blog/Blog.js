import React from 'react'
import Header from  './Header/Header'
import Article from './Article/Article'
import Sidebar from './Sidebar/Sidebar'
import Comment from './Comment/Comment'

import './Blog.css'


const Blog = () => {
  return (
    <div>
      <Header />
      <div className="wrap grid-wrapper">
      <Article />
      <Sidebar />
      <Comment />
    </div>

    </div>
  );
};


export default Blog;