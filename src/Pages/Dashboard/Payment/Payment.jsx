import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Payment History| Bistro Boss</title>
      </Helmet>
      <SectionTitle
        heading="Payment"
        subHeading="---Process---"
      ></SectionTitle>
      <label
        htmlFor="my-drawer-2"
        className="btn border-none hover:bg-teal-600 bg-teal-500 text-white rounded-none mb-5  w-fit mx-auto flex drawer-button lg:hidden"
      >
        Open Menu
      </label>
      <h1>Payment</h1>
    </div>
  );
};

export default Payment;
