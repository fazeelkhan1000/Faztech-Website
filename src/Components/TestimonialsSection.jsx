import React, { useState, useEffect } from "react";
import testimonialData from "../TestimonialsData"
import 'animate.css';
export const TestimonialsSection = () => {
  const [slides, setSlides] = useState([]);
  const [visibleSlides, setVisibleSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Your dynamic slide data (replace with your own data)
    let slideData = testimonialData
    setSlides(slideData);
    setVisibleSlides(slideData.slice(0, 3));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  useEffect(() => {
    const updatedVisibleSlides = [];
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      updatedVisibleSlides.push(slides[i % slides.length]);
    }
    setVisibleSlides(updatedVisibleSlides);
  }, [currentIndex, slides]);

  return (
    <div className="main-flex-div">
      <div className="main-testimonial-div">
        {visibleSlides.map((slide, index) => (
          <div
            key={index}
            className={`flex-div width-400 ${index === 1 ? "active " : "inactive"} `}
          >
            <div className="circular-image">
              <div className="inner-circle">
                <img style={{borderRadius: "50%"}} src={slide?.image} height="90px" width="90px" alt="" />
              </div>
            </div>
            <div className="testimonial-card">
            <div style={{marginTop: "50px"}}>
            <p>{slide?.testimonial}</p>
              <h3>{slide?.owner}</h3>
              <span>{slide?.ownerDesig}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
