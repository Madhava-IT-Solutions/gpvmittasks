
// components/Blog.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const Blog = () => {
  const { categoryName } = useParams();

  
  return (
    <div>
      <h2 className='blogh2'>{categoryName.replace(/-/g, ' ')}</h2>
      <BlogDetails category={categoryName.replace(/-/g, ' ')} />
    </div>
  );
};

export default Blog;