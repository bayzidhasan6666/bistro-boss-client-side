import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Recommends = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) => {
        const recommendItems = data.filter(
          (item) => item.category === 'recommend'
        );
        setItems(recommendItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={'---Should Try---'}
        heading={'Chef Recommends'}
      ></SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item._id}
            className="text-center  space-y-3 mx-auto bg-[#F3F3F3]"
          >
            <img
              className="w-full"
              src={
                'https://www.marivalresidences.com/blog/media/uploads/2017/08/bistro3.png'
              }
              alt=""
            />
            <div className="p-5">
              {' '}
              <h2 className="text-xl font-serif">{item.name}</h2>
              <p>{item.recipe}</p>
              <button className="uppercase  text-sm font-serif text-[#BB8506] shadow-xl border-b-4 rounded-lg border-[#BB8506] px-3 py-2">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
