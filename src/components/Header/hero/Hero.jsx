import React from 'react';
import './Hero.scss';
import {useNavigate} from 'react-router-dom'

function Hero() {
  const routeTo = useNavigate()

  function toPostList(){
    routeTo('/blogs')
  }
  return (
    <div className="hero">
      <h1 className="hero-text">
        Discover the stories that inspire,<br />
        educate, and entertain.<br />
        Your journey begins here.
      </h1>
      <button className="browse-button" onClick={toPostList}>Browse Blogs</button>
    </div>
  );
}

export default Hero;
