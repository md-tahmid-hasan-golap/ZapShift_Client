import React from "react";
import Banner from "./Banner";
import Works from "./Works";
import Services from "./Services";
import Brands from "./Brands";
import LiveParcel from "./LiveParcel";
import Customer from "./Customer";
import FaqQuestion from "./FaqQuestion";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <Brands></Brands>
      <LiveParcel></LiveParcel>
      <Customer></Customer>
      <FaqQuestion></FaqQuestion>
    </div>
  );
};

export default Home;
