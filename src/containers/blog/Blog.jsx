import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 03, 2024" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 15, 2024" text="Decoding Algorithms: Unraveling the Complexity" />
        <Article imgUrl={blog03} date="Feb 11, 2024" text="Web Development Wonders: Trends Shaping the Future" />
        <Article imgUrl={blog04} date="Feb 17, 2024" text="Coding Chronicles: Tales from the Tech Trenches" />
        <Article imgUrl={blog05} date="March 07, 2024" text="AI Insights: Navigating the World of Artificial Intelligence" />
      </div>
    </div>
  </div>
);

export default Blog;
