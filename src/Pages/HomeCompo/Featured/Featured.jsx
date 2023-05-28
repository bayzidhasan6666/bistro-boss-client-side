import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './Featured.css';
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
  return (
    <div className="mb-16 h-[500px] bg-fixed  featured-item">
      <SectionTitle
        subHeading={'---Check it out---'}
        heading={'Featured Item'}
      ></SectionTitle>
      <div className="md:flex justify-center items-center  bg-opacity-30 gap-6 ">
        <div>
          <img src={featuredImg} alt="" className="w-80 h-auto" />
        </div>
        <div className="w-96 space-y-1">
          <p className="font-semibold text-white">May 23, 2023</p>
          <h1 className="text-xl font-semibold text-white">
            WHERE CAN I GET SOME?
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-y-4 border-white border-shadow-xl rounded-lg bg-none px-3 py-1 font-semibold hover:bg-white transition-all hover:text-black text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
