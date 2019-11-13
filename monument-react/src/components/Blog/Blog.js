import React from 'react';
import Header from './Header/Header';
import Article from './Article/Article';
import Sidebar from './Sidebar/Sidebar';
import Comment from './Comment/Comment';

import './Blog.css';

const Blog = () => {
  return (
    <>
      <Header />
      <div className="wrap grid-wrapper">
        <Article />
        <Sidebar />
      </div>
      <Comment />
    </>
  )
};

export default Blog;
