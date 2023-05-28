import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedCover from '../../../Components/SharedCover/SharedCover';
import menuBgImg from '../../../assets/menu/banner3.jpg';
import dessertBg from '../../../assets/menu/dessert-bg.jpeg';
import saladBg from '../../../assets/menu/salad-bg.jpg';
import soupBg from '../../../assets/menu/soup-bg.jpg';
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import drinkBg from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const OurMenu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === 'dessert');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const offered = menu.filter((item) => item.category === 'offered');
  const drinks = menu.filter((item) => item.category === 'drink');
  return (
    <div>
      {/* Page Title */}
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      {/* main cover */}
      <SharedCover
        bgImg={menuBgImg}
        title={'Our Menu'}
        subtitle={'Would You Like To Try A Dish?'}
      ></SharedCover>
      {/* section title */}
      <SectionTitle
        subHeading={`Don't Miss`}
        heading={`Today's Offer`}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={'Dessert'}
        description={
          'Indulge in our heavenly desserts and satisfy your sweet tooth. Our desserts are meticulously crafted using the finest ingredients and bursting with flavors that will leave you craving for more.'
        }
        coverImg={dessertBg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={'Pizza'}
        description={
          'Experience the ultimate delight with our delicious and flavorful pizzas. Prepared with love and topped with premium ingredients, our pizzas are a perfect blend of traditional and innovative flavors that will tantalize your taste buds.'
        }
        coverImg={pizzaBg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title={'Salad'}
        description={
          'Enjoy our fresh and nutritious salads made with the finest ingredients. Our salads are packed with vibrant flavors, crisp vegetables, and homemade dressings, providing a healthy and satisfying meal option for you to relish.'
        }
        coverImg={saladBg}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soup}
        title={'Soup'}
        description={
          'Warm up with our comforting and flavorful soups prepared with love. Our soups are crafted with a harmonious blend of wholesome ingredients, aromatic spices, and simmered to perfection, offering a soothing and delightful dining experience.'
        }
        coverImg={soupBg}
      ></MenuCategory>
      {/* drink menu items */}
      <MenuCategory
        items={drinks}
        title={'Drinks'}
        description={
          'Warm up with our comforting and flavorful Drink prepared with love. Our soups are crafted with a harmonious blend of wholesome ingredients, aromatic spices, and simmered to perfection, offering a soothing and delightful dining experience.'
        }
        coverImg={drinkBg}
      ></MenuCategory>
    </div>
  );
};

export default OurMenu;
