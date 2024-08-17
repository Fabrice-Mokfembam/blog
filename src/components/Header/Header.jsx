import React, { useState, useEffect } from 'react';
import Navbar from './nav/Navbar';
import Hero from './hero/Hero';
import './Header.scss';
import { CR1, CR2, CR3 } from '../../assets/images';


const images = [CR1, CR2, CR3];

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <header className="header">
      <Navbar />
      <div
        className="header-slide"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <Hero />
      </div>
    </header>
  );
}

export default Header;
