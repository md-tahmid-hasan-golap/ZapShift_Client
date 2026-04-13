import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabData = {
    Story:
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it’s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    Mission:
      "Our mission is to revolutionize the logistics industry in Bangladesh by providing seamless, tech-driven delivery solutions. We aim to empower local businesses and individuals with a reliable network that bridges the gap between distance and time.",
    Success:
      "With thousands of successful deliveries and a growing network of merchants, our success lies in the trust of our clients. We take pride in our 99% on-time delivery rate and our ability to reach every corner of the 64 districts.",
    "Team & Others":
      "Our team consists of dedicated logistics experts, tech innovators, and support staff working 24/7 to ensure your peace of mind. Together, we are building ZapShift into the most efficient courier ecosystem.",
  };

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
        <div className="p-8 md:p-16">
          {/* Header Section */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0e4b4f] mb-6">
              About Us
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </div>

          <hr className="border-gray-100 mb-10" />

          {/* Tabs Menu */}
          <div className="flex flex-wrap gap-6 md:gap-12 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xl font-semibold transition-all duration-300 relative pb-2 ${
                  activeTab === tab
                    ? "text-[#8cb42e] scale-110"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8cb42e] animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Dynamic Content Section */}
          <div className="min-h-[200px] animate-fade-in">
            <p className="text-gray-600 text-lg md:text-xl leading-[1.8] max-w-5xl">
              {tabData[activeTab]}
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animation Style */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
