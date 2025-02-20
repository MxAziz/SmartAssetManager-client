import React from "react";
import Banner from "./Banner";
import About from "./About";
import Packages from "./Packages";
import { Helmet } from "react-helmet";
import Features from "./Features";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet><title>Home - SmartAssetManager</title></Helmet>
      <Banner></Banner>
      <About></About>
      <Packages></Packages>
      <Features></Features>
    </div>
  );
};

export default Home;
