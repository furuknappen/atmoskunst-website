import React, { useState, useEffect } from 'react';
import designers from "../data/designers.json"
import DesignerCard from './designerSection.jsx';
import '../styles/carousel.css';
import '../styles/designers.css'

function DesignerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying || designers.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % designers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, designers.length]);

  function goToSlide(index) {
    setCurrentIndex((index + designers.length) % designers.length);
    setIsPlaying(false);
  }

  function nextSlide() {
    setCurrentIndex(prev => (prev + 1) % designers.length);
    setIsPlaying(false);
  }

  function prevSlide() {
    setCurrentIndex(prev => (prev - 1 + designers.length) % designers.length);
    setIsPlaying(false);
  }

  function toggleAutoPlay() {
    setIsPlaying(!isPlaying);
  }

  const offsetPercentage = currentIndex * 100;

  if (designers.length === 0) {
    return <div className="carousel-wrapper"><p>No designers found.</p></div>;
  }

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        
        <button
          onClick={toggleAutoPlay}
          aria-label={isPlaying ? 'Pause carousel auto-advance' : 'Play carousel auto-advance'}
          className="play-pause-button"
        >
          {isPlaying ? '⏸ Pause' : '▶ Start'}
        </button>
        <div
          role="region"
          aria-label="Designer carousel"
          aria-live="polite"
          aria-atomic="false"
          className="carousel"
          style={{
            transform: `translateX(-${offsetPercentage}%)`,
          }}
        >
          {designers.map(({ title, text, images, soMe1, soMe2 }, index) => (
            <div key={index} className="carousel-slide">
              <DesignerCard key={index} title={title} text={text} images={images} soMe1={soMe1} soMe2={soMe2} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          onClick={prevSlide}
          aria-label="Previous designer"
          className="carousel-button"
        >
          ← Forrige
        </button>

        <div role="tablist" aria-label="Carousel pages" className="carousel-indicators">
          {designers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to designer ${index + 1}`}
              className={`indicator ${index === currentIndex ? 'indicator--active' : ''}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next designer"
          className="carousel-button"
        >
          Neste →
        </button>
      </div>

      <div className="carousel-status-controls">
        <div className="carousel-status" aria-live="polite" aria-atomic="true">
          Designer {currentIndex + 1} av {designers.length}
        </div>

      </div>
    </div>
  );
}

export default DesignerCarousel;