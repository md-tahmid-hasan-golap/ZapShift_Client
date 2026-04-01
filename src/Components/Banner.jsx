import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../src/assets/banner/banner1.png";
import banner2 from "../../src/assets/banner/banner2.png";
import banner3 from "../../src/assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-0">
      <Carousel
        className="my-5 rounded-xl overflow-hidden shadow-2xl"
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false} // Thumbnails bondho korar jonno
        interval={4000} // 4 second por por slide hobe
        transitionTime={800} // Slide transition-er smoothness
        stopOnHover={false} // Hover korleo jeno cholte thake
        swipeable={true} // Mobile swipe feature
        emulateTouch={true} // Mouse diyeo swipe kora jabe
      >
        {/* Banner 1 */}
        <div className="h-[250px] md:h-[450px] lg:h-[550px]">
          <img
            src={banner1}
            className="h-full w-full object-cover rounded-xl"
            alt="Banner 1"
          />
        </div>

        {/* Banner 2 */}
        <div className="h-[250px] md:h-[450px] lg:h-[550px]">
          <img
            src={banner2}
            className="h-full w-full object-cover rounded-xl"
            alt="Banner 2"
          />
        </div>

        {/* Banner 3 */}
        <div className="h-[250px] md:h-[450px] lg:h-[550px]">
          <img
            src={banner3}
            className="h-full w-full object-cover rounded-xl"
            alt="Banner 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
