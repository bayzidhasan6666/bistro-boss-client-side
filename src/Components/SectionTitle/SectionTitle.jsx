import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center space-y-2 my-10 w-fit mx-auto">
      <p className="italic text-teal-400">{subHeading}</p>
      <hr className="border" />
      <h1 className="text-3xl font-serif  uppercase">{heading}</h1>
      <hr className="border" />
    </div>
  );
};

export default SectionTitle;
