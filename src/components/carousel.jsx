import React, { useState, useEffect } from 'react';
import designers from "../data/designers.json"
import DesignerCard from './designerSection.jsx';
import '../styles/carousel.css';
import '../styles/designers.css'


function DesignerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  );


  // Handle window resize
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying || !isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % designers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, isMobile, designers.length]);

  function goToSlide(index) {
    setCurrentIndex((index + designers.length) % designers.length);
    setIsPlaying(true);
  }

  function nextSlide() {
    setCurrentIndex(prev => (prev + 1) % designers.length);
    setIsPlaying(true);
  }

  function prevSlide() {
    setCurrentIndex(prev => (prev - 1 + designers.length) % designers.length);
    setIsPlaying(true);
  }

  function toggleAutoPlay() {
    setIsPlaying(!isPlaying);
  }

  const offsetPercentage = isMobile ? currentIndex * 100 : 0;

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div
          role="region"
          aria-label="Designer carousel"
          aria-live="polite"
          className={`carousel ${isMobile ? 'carousel--mobile' : 'carousel--desktop'}`}
          style={{
            transform: isMobile ? `translateX(-${offsetPercentage}%)` : 'none',
          }}
        >
          {designers.map(({ title, text, images, soMe1, soMe2 }, index) => (
            <div
              key={index}
              className="carousel-slide"
              aria-hidden={isMobile && index !== currentIndex}
            >
              <DesignerCard
                title={title}
                text={text}
                images={images}
                soMe1={soMe1}
                soMe2={soMe2}
              />
            </div>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="carousel-controls">
          <button
            onClick={prevSlide}
            aria-label="Previous designer"
            className="carousel-button"
          >
            ← Previous
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
            Next →
          </button>
        </div>
      )}

      {isMobile && (
        <>
          <div className="carousel-status" aria-live="polite" aria-atomic="true">
            Showing designer {currentIndex + 1} of {designers.length}
          </div>

          <button
            onClick={toggleAutoPlay}
            aria-label={isPlaying ? 'Pause carousel auto-advance' : 'Play carousel auto-advance'}
            className="play-pause-button"
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
        </>
      )}
    </div>
  );
}

export default DesignerCarousel;