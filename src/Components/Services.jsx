import React from "react";
// React Icons theke icons import
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineGpsFixed } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbCubeSend } from "react-icons/tb";

const Services = () => {
  const serviceSteps = [
    {
      id: 1,
      icon: TbTruckDelivery,
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
      textColor: "text-gray-800",
    },
    {
      id: 2,
      icon: MdOutlineGpsFixed,
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      textColor: "text-gray-900",
    },
    {
      id: 3,
      icon: RiSecurePaymentLine,
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      textColor: "text-gray-800",
    },
    {
      id: 4,
      icon: BsCashStack,
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      textColor: "text-gray-800",
    },
    {
      id: 5,
      icon: HiOutlineBuildingOffice2,
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
      textColor: "text-gray-800",
    },
    {
      id: 6,
      icon: TbCubeSend,
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      textColor: "text-gray-800",
    },
  ];

  return (
    <section className="bg-[#0e2c2f] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed  p-4 rounded-xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceSteps.map((step) => (
            <div
              key={step.id}
              className={`p-8 rounded-2xl shadow-lg text-center transition-all duration-300 group ${step.id === 2 ? "bg-[#bfe660]" : "bg-white hover:bg-gray-100 hover:shadow-2xl"}`}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-[1.5px] border-dashed border-blue-400">
                {React.createElement(step.icon, {
                  className: "text-[#ed6c6a] text-4xl",
                })}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-4 ${step.textColor}`}>
                {step.title}
              </h3>
              <p
                className={`text-sm md:text-base leading-relaxed ${step.id === 2 ? "text-gray-800" : "text-gray-600"}`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
