import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewsCard = ({ Reviews }) => {
  const { review, ratings, userName, user_photoURL } = Reviews;

  return (
    <div className="h-full p-4">
      <div className="flex flex-col h-full bg-white p-6 md:p-10 rounded-[30px] shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300">
        {/* Top Section: Quote & Ratings */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-teal-50 rounded-2xl group-hover:bg-[#a0dfe5] transition-colors duration-300">
            <FaQuoteLeft className="text-[#55989e] text-2xl md:text-3xl transform group-hover:rotate-12 transition-transform" />
          </div>
          {/* Dynamic Ratings */}
          <div className="flex gap-1 pt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${i < ratings ? "text-yellow-400" : "text-gray-200"}`}
              />
            ))}
          </div>
        </div>

        {/* Quote Text: Expands to push profile to bottom */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
          {review}
        </p>

        {/* Dashed Separator */}
        <div className="border-t-[1.5px] border-dashed border-[#55989e] opacity-30 mb-8"></div>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#a0dfe5] shadow-inner bg-[#0e4b4f]">
              {user_photoURL ? (
                <img
                  src={user_photoURL}
                  alt={userName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white text-xl font-bold">
                  {userName?.charAt(0)}
                </div>
              )}
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          <div className="overflow-hidden">
            <h4 className="text-lg md:text-xl font-bold text-[#0e4b4f] truncate">
              {userName}
            </h4>
            <p className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
              Verified Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
