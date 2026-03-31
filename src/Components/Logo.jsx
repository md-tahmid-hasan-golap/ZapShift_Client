import React from "react";
import logo from "../../src/assets/banner/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-0 group cursor-pointer">
      {/* Logo Image - Zero gap/padding */}
      <img
        className="w-10 h-10 md:w-14 md:h-14 lg:w-16 object-contain block transform group-hover:scale-105 transition-transform duration-300"
        src={logo}
        alt="ZapShift Logo"
      />

      {/* Brand Name - Attached directly to the logo */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-none">
        Zap<span className="text-blue-600">Shift</span>
      </h2>
    </div>
  );
};

export default Logo;
