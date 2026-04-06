import React from "react";
import location from "../../src/assets/banner/location-merchant.png";

const Customer = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-[1.2]">
            Merchant and Customer Satisfaction{" "}
            <br className="hidden lg:block" /> is Our First Priority
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            We offer the lowest delivery charge with the highest value along
            with
            <span className="font-semibold text-blue-600"> 100% safety</span> of
            your product. ZapShift courier delivers your parcels in every corner
            of Bangladesh right on time.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-[#CAEB66] hover:bg-[#b8d955] text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
              Become a Merchant
            </button>
            <button className="w-full sm:w-auto border-2 border-[#CAEB66] text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-[#CAEB66] transition-all transform hover:scale-105">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative group">
            {/* Background Decor (Optional) */}
            <div className="absolute -inset-4 bg-[#CAEB66] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>

            <img
              src={location}
              alt="Merchant Location"
              className="relative w-full h-auto object-contain drop-shadow-2xl animate-pulse-slow transform group-hover:translate-y-[-10px] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
