import React from "react";
// Swiper components ebong modules import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles import (Essential)
import "swiper/css";

import brands1 from "../../src/assets/brands/amazon.png";
import brands2 from "../../src/assets/brands/amazon_vector.png";
import brands3 from "../../src/assets/brands/casio.png";
import brands4 from "../../src/assets/brands/moonstar.png";
import brands5 from "../../src/assets/brands/randstad.png";
import brands6 from "../../src/assets/brands/star.png";
import brands7 from "../../src/assets/brands/start_people.png";

const Brands = () => {
  const brands = [
    brands1,
    brands2,
    brands3,
    brands4,
    brands5,
    brands6,
    brands7,
    // Logo gulo double kore dile loop aro smooth mone hoy
    brands1,
    brands2,
    brands3,
    brands4,
    brands5,
    brands6,
    brands7,
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-800 mb-10">
          We've helped thousands of sales teams
        </h2>

        <Swiper
          slidesPerView={2} // Mobile-e 2ta dekhabe
          spaceBetween={30}
          loop={true} // Infinite loop
          speed={3000} // Speed (jekhane continuous scroll mone hobe)
          autoplay={{
            delay: 0, // 0 delay mane thambbe na, choltei thakbe
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Tablet-e 4ta
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // Desktop-e 6ta
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper flex items-center"
        >
          {brands.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center h-20">
                <img
                  src={brand}
                  alt={`brand-${index}`}
                  className="max-h-full max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
