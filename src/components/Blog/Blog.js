import React from 'react';
import './Blog.css'
import WaitingImage from '../images/waiting.png'
import Navbar from '../Navbar/Navbar';
const Blog = () => {
    return (
        <>
        <Navbar />
        <div className='blog-container'>
          <img  src={WaitingImage} alt="" />
          <h1>Coming soon..</h1>
        </div>
        </>
    );
};

export default Blog;