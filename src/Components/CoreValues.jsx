import React from 'react';
import valuesData from "../CoreValues";

export const CoreValues = () => {
  return (
    <section className='sect-padd'>
              <h1 className='core-heading'>OUR CORE VALUES</h1>
      <div className='flex-div'>
        <div className=''>
        </div>
        <div className='grid-container'>
          {valuesData.map((coreVal, index) => {
            return (
              <div className={`values-card values-card-${index}`} key={index}>
                <div className='overlay'>
                  <h2>{coreVal.title}</h2>
                  <p>{coreVal.description}</p>
                </div>
                <div className='content'>
              <div style={{padding: "40px 0px"}}>
              <div className='val-img-div'>
                    <img height="200px" src={coreVal.image} alt="" />
                  </div>
                  <span className='values-title'>{coreVal.title}</span>
              </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
