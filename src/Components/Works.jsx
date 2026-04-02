import React from "react";
import bookingIcon from "../../src/assets/banner/bookingIcon.png";

const Works = () => {
  // Data array banano hoyeche code clean rakhar jonno
  const workSteps = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Secure Packaging",
      desc: "We ensure your parcels are handled with care and packed securely for the journey.",
    },
    {
      id: 3,
      title: "Real-time Tracking",
      desc: "Track your shipment at every step of the way with our advanced tracking system.",
    },
    {
      id: 4,
      title: "Fastest Delivery",
      desc: "Our optimized routes guarantee the quickest delivery time for your convenience.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          How it <span className="text-blue-600">Works</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {workSteps.map((step) => (
          <div
            key={step.id}
            className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center"
          >
            {/* Icon Container */}
            <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={bookingIcon}
                alt={step.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
