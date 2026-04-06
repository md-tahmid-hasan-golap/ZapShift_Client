import React from "react";
import liveTraking from "../../src/assets/banner/live-tracking.png";
import safeDelavery from "../../src/assets/banner/safe-delivery.png";

const LiveParcel = () => {
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: liveTraking,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safeDelavery,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: safeDelavery, // Ekhane call center-er alada icon thakle bhalo hoy
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="space-y-20 md:space-y-32">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-lime-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative rounded-2xl shadow-xl w-full max-w-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
                {feature.title}
              </h2>
              <div className="w-16 h-1.5 bg-blue-600 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-2">
                {feature.desc}
              </p>
              <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-200">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveParcel;
