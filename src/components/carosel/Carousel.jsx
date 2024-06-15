// CustomCarousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  "src/components/carosel/carousel1.png",
  "src/components/carosel/carousel2.png",
  "src/components/carosel/carousel3.png"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 700);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setFade(true);
    }, 500);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 500);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="carousel-control prev">‹</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`carousel-image ${fade ? 'fade-in' : 'fade-out'}`}
      />
      <button onClick={handleNext} className="carousel-control next">›</button>
    </div>
  );
};


export default Carousel;
