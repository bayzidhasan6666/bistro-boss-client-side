import React from 'react';
import { Parallax } from 'react-parallax';
const SharedCover = ({ bgImg, title, description, subtitle }) => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bgImg}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[600px]">
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md text-white">
              <h1 className="mb-5 font-serif text-5xl uppercase font-semibold">
                {title}
              </h1>
              <h1 className="uppercase font-serif text-sm">{subtitle}</h1>
              <p className="mb-5">{description}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default SharedCover;
