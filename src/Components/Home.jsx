import React from "react";
import Banner from "./Banner";
import Works from "./Works";
import Services from "./Services";
import Brands from "./Brands";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <Brands></Brands>
    </div>
  );
};

export default Home;
