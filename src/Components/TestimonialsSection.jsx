import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import testimonialData from "../TestimonialsData";

SwiperCore.use([]);

export const TestimonialsSection = () => {
  const [slides, setSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0); // Initial slide index
  const swiperRef = useRef(null);

  useEffect(() => {
    let slideData = testimonialData;
    setSlides(slideData);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [slides]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  }, [slideIndex]);

  const handleSlideChangeTransitionStart = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      const { slides } = swiperInstance;
      const isLastSlide = swiperInstance.activeIndex === slides.length - 1;

      if (isLastSlide) {
        swiperInstance.setTransition(0);
        swiperInstance.slideTo(0);
        setTimeout(() => {
          swiperInstance.setTransition(300);
        }, 0);
      }
    }
  };

  return (
    <section style={{ padding: "100px 0px", backgroundColor: "#333333" }}>
      <div className="main-testimonial-div">
        <Swiper
          ref={swiperRef}
          initialSlide={0}
          slidesPerView={3}
          loop={false}
          loopedSlides={slides.length}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
        >
          {slides.map((slide, index) => (
            <SwiperSlide style={{display: "flex", justifyContent: "center"}} key={index} >
                <div className="circular-image">
                <div className="inner-circle">
                  <img
                    style={{ borderRadius: "50%" }}
                    src={slide?.image}
                    height="90px"
                    width="90px"
                    alt=""
                  />
                </div>
              </div>
              <div className="testimonial-card">
                <div style={{ marginTop: "50px" }}>
                  <p>{slide?.testimonial}</p>
                  <h3>{slide?.owner}</h3>
                  <span className="designation-title">{slide?.ownerDesig}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
