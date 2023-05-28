import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../SharedCompo/MenuItem/MenuItem';
import { Link } from 'react-router-dom';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === 'popular');


  return (
    <div>
      <section>
        <SectionTitle
          subHeading={'---Popular Items---'}
          heading={'From Our Menu'}
        />
      </section>
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-16">
        {' '}
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/menu`}>
        <button className=" border-b-4 border-slate-500 px-3 py-2 rounded-lg flex mx-auto font-serif   transition-all">
          View Full Menu
        </button>
      </Link>
    </div>
  );
};

export default PopularMenu;
