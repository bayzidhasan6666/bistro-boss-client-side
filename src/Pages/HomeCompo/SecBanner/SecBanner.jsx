import React from 'react';
import './SecBanner.css';

const SecBanner = () => {
  return (
    <div className="bg-image h-[500px] bg-fixed flex justify-center items-center">
      <div className="text-center w-3/5 p-16 bg-white">
        <h1 className="text-3xl uppercase font-serif">Bistro Boss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default SecBanner;
