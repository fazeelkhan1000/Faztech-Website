import React, { useState } from "react";

import jsonData from "../ServiceBadgesHeroSection";

export const HeroSection = () => {
  const [badgeData] = useState(jsonData);

  function breakStringWithSpaces(inputString) {
    const words = inputString.split(" ");
    return words;
  }

  return (
    <div className="main-flex-div">
      <div>
        <span style={{letterSpacing: "0.30rem", fontWeight: "500"}}>SERVICES</span>
      </div>
      <div className="main-tag-div">
        <h1 className="main-tag">Software Development We Offer</h1>
        <div className="flex-div">
        <span className="services-span">pecialize in providing comprehensive software development services that cater to your 
          specific needs. From mapping out effective strategies to crafting tailored solutions, we excel in elevating your product experience.</span>
        </div>
      </div>
    <div className="flex-div">
    <div className="main-hero-section">
        {badgeData.map((badge, index) => {
          return (
            <div className="col-md-2 col-xs-6" key={index}>
              <div className={`service-badges badge-${index}`}>
                <div className="image-div">
                  <img
                    height="120px"
                    width="120px"
                    src={badge.image}
                    alt="uiuximage"
                  />
                </div>
                <div className="service-text">
                  {breakStringWithSpaces(badge.name).map((word, wordIndex) => (
                    <div key={wordIndex}>{word}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};
