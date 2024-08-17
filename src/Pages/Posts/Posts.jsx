import React from 'react'
import Search from '../../components/Search/Search'
import Category from '../../components/Category/Category'
import BlogCard from '../../components/BlogCard/BlogCard';
import Footer from '../../components/Footer/Footer';



function Posts({blogs}) {

  return (
    <div>
      <Search />
      <Category/>
      <div className="post-list">
      {blogs.slice(0,9).map(post => (
        <BlogCard 
          key={post.id}
          image={post.image}
          title={post.title}
          author={post.author}
          id={post.id}
        />
      ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Posts