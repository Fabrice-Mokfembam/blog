import React from 'react';
import './BlogCard.scss';
import { useNavigate } from 'react-router-dom';

function BlogCard({ image, title, author ,id}) {
  const authorInitials = author.split(' ').map(name => name[0]).join('');

    const routeTo = useNavigate();

  function routoBlogDetail() {
    console.log(id)
    routeTo(`/blogdetail/${id}`)
  }
  return (
    <div className="blog-card" onClick={routoBlogDetail}>
      <div className="blog-card__image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="blog-card__content">
        <h3 className="blog-card__title">{title}</h3>
        <div className="blog-card__author">
          <div className="blog-card__author-initials">{authorInitials}</div>
          <span className="blog-card__author-name">{author}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
