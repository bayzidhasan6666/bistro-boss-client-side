import React, { useState } from 'react';
import orderCover from '../../../assets//order/order-banner.jpg';
import SharedCover from '../../../Components/SharedCover/SharedCover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['Dessert', 'Pizza', 'Salad', 'Soup', 'Drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === 'dessert');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const drinks = menu.filter((item) => item.category === 'drinks');

  return (
    <div className="my-10">
      <Helmet>
        <title>Food Order | Bistro Boss</title>
      </Helmet>
      <SharedCover
        bgImg={orderCover}
        title={'Food Order'}
        subtitle={'Would You like To Order A Dish?'}
      ></SharedCover>
      <Tabs defaultIndex={0} onSelect={(index) => setTabIndex(index)}>
        <TabList className="my-10 flex font-serif justify-center">
          {categories.map((category) => (
            <Tab key={category}>{category}</Tab>
          ))}
        </TabList>
        <div className="px-2 sm:px-4 md:px-6">
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {desserts.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Order;
