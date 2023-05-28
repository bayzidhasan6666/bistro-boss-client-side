import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // Import the desired effect style
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={'---From 11:00am to 10:00pm---'}
        heading={'Order Online'}
      />

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt=""
            className="w-full h-auto hover:shadow-2xl transition-all"
          />
          <h1 className="text-2xl uppercase font-[Garamond] text-center -mt-16 font-extralight text-white bg-black bg-opacity-50">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt=""
            className="w-full h-auto hover:shadow-2xl transition-all"
          />
          <h1 className="text-2xl uppercase font-[Garamond] text-center -mt-16 font-extralight text-white bg-black bg-opacity-50">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt=""
            className="w-full h-auto hover:shadow-2xl transition-all"
          />
          <h1 className="text-2xl uppercase font-[Garamond] text-center -mt-16 font-extralight text-white bg-black bg-opacity-50">
            Desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt=""
            className="w-full h-auto hover:shadow-2xl transition-all"
          />
          <h1 className="text-2xl uppercase font-[Garamond] text-center -mt-16 font-extralight text-white bg-black bg-opacity-50">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5}
            alt=""
            className="w-full h-auto hover:shadow-2xl transition-all"
          />
          <h1 className="text-2xl uppercase font-[Garamond] text-center -mt-16 font-extralight text-white bg-black bg-opacity-50">
            Salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
