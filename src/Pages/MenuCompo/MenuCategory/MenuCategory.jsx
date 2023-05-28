import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../../SharedCompo/MenuItem/MenuItem';
import SharedCover from '../../../Components/SharedCover/SharedCover';

const MenuCategory = ({ items, description, subtitle, title, coverImg }) => {
  return (
    <div className="my-20">
      {title && (
        <SharedCover
          bgImg={coverImg}
          title={title}
          subtitle={subtitle}
          description={description}
        ></SharedCover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-3 mb-16">
        {' '}
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className=" border-b-4 border-slate-500 px-3 py-2 rounded-lg flex mx-auto font-serif capitalize  transition-all">
          ORDER YOUR FAVORITE FOOD
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
