import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authImg from "../../src/assets/banner/authImage.png";

const AuthLayouts = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="pt-5">
        {" "}
        <Logo></Logo>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div>
          <Outlet></Outlet>
        </div>

        <div>
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
