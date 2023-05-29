import React from 'react';
import { Outlet } from 'react-router-dom';
import ActiveLink from '../../Components/ActiveLink/ActiveLink';
import {
  FaBookmark,
  FaCalendar,
  FaCss3,
  FaHome,
  FaPhone,
  FaShoppingBasket,
  FaShoppingCart,
  FaVoicemail,
  FaWallet,
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useCart from '../../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <>
      <Helmet>
        <title>Dashboard | Bistro Boss</title>
      </Helmet>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <SectionTitle
            subHeading={'---My Cart---'}
            heading={'Wanna Add More?'}
          ></SectionTitle>
          <label
            htmlFor="my-drawer-2"
            className="btn border-none hover:bg-[#aa7b34] bg-[#D1A054] text-black rounded-none mb-5 w-fit mx-auto flex drawer-button lg:hidden"
          >
            Open Menu
          </label>

          {/* Outlet */}
          <Outlet></Outlet>
          {/* Outlet */}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#D1A054] text-black">
            <li>
              <ActiveLink to={`/dashboard/userHome`}>
                {' '}
                <FaHome></FaHome>User Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to={'/dashboard/myCart'}>
                {' '}
                <FaShoppingCart></FaShoppingCart>My Cart
                <span className="badge bg-white border-none text-yellow-600">+{cart?.length || 0}</span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to={`/dashboard/reservations`}>
                {' '}
                <FaCalendar></FaCalendar>Reservations
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to={`/dashboard/payment`}>
                {' '}
                <FaWallet></FaWallet>Payment History
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to={`/dashboard/bookings`}>
                {' '}
                <FaBookmark></FaBookmark>My Bookings
              </ActiveLink>
            </li>
            <div className="divider"></div>
            <li>
              <ActiveLink to={`/`}>
                {' '}
                <FaHome></FaHome>Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to={`/menu`}>
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                Menu
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to={`/order/dessert`}>
                {' '}
                <FaShoppingBasket></FaShoppingBasket>Shop
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to={`/contact`}>
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                Contact
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
