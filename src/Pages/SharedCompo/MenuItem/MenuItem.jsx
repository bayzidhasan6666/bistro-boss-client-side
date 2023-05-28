import React from 'react';

const MenuItem = ({ item }) => {
  const { name, recipe, image, category, price } = item;

  return (
    <>
      <div className="flex  items-center space-x-2">
        <img
          style={{ borderRadius: '0 200px 200px 200px' }}
          className="w-[120px] h-[104px] border"
          src={
            'https://img-aws.ehowcdn.com/700x/www.onlyinyourstate.com/wp-content/uploads/2018/06/odette-7.jpg'
          }
          alt=""
        />
        <div>
          <h3 className="text-lg uppercase font-serif">{name}--------</h3>
          <p className="text-sm">{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </>
  );
};

export default MenuItem;
