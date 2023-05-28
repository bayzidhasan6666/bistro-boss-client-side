import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from 'react-icons/fa';

import '@smastrom/react-rating/style.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  });
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={'What our client say'}
        heading={'Testimonials'}
      ></SectionTitle>
      <div>
        {' '}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review, index) => (
            <SwiperSlide key={review._id}>
              <div className="text-center w-3/4 mx-auto space-y-3">
                <Rating
                  className="flex mx-auto"
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className='className=" w-16 h-16 mx-auto '></FaQuoteLeft>
                <p>{review.details}</p>
                <p className="text-xl uppercase font-serif italic">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
