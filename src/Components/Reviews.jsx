import React, { use } from "react";
// 1. Autoplay module import kora holo
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Reviews = ({ reviewsPromise }) => {
  const ReviewsData = use(reviewsPromise);

  return (
    <div className="text-center py-10">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
        What our customers are <span className="text-blue-600">saying</span>
      </h2>

      {/* Divider Line */}
      <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6 mt-4"></div>

      {/* Description */}
      <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-4 mb-10">
        Enhance posture, mobility, and well-being effortlessly with{" "}
        <span className="font-semibold text-gray-900">Posture Pro</span>.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // Responsive slidesPerView (Mobile-e 1ta, Desktop-e 3ta jeno ekter niche arekta overlap thake)
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        // 2. Autoplay thik kora holo
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // 3. Modules array-te Autoplay add kora holo
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper !pb-12"
      >
        {ReviewsData.map((item) => (
          // Card gulor responsive width jeno coverflow effect-ta sundor lage
          <SwiperSlide key={item.id} className="max-w-[320px] md:max-w-[450px]">
            <ReviewsCard Reviews={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
