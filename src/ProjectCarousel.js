import React, { useEffect, useRef, useState } from 'react';
import "./ProjectCarousel.css"; // CSS below
const videos = [
  {
    url: "https://www.youtube.com/embed/7YIT357ewy0",
    title: "E-Commerce Web App"
  },
  {
    url: "https://www.youtube.com/embed/gJXEuH8qVBQ",
    title: "Full-stack Face Recognition"
  },
  {
    url: "https://www.youtube.com/embed/vKGfhtifGCQ",
    title: " TO-DO List App"
  }
];


const ProjectCarousel = () => {
const containerRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      index = (index + 1) % videos.length;
      containerRef.current.scrollTo({
        left: index * 320,
        behavior: 'smooth'
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-carousel-container">
      <div className="video-carousel" ref={containerRef}>
        {videos.map((video, i) => (
          <div className="video-card" key={i}>
            <iframe
              src={`${video.url}?autoplay=0&mute=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  ); 
};

export default ProjectCarousel;
