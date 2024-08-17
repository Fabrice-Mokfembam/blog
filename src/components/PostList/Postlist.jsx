import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Postlist.scss';

function Postlist({posts}) {

  return (
    <div className="post-list">
      {posts.slice(0,9).map(post => (
        <BlogCard 
          key={post.id}
          image={post.image}
          title={post.title}
          author={post.author}
          id={post.id}
        />
      ))}
    </div>
  );
}

export default Postlist;
