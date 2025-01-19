import React from "react";
import Banner from "./Banner";
import About from "./About";
import Packages from "./Packages";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner></Banner>
      <About></About>
      <Packages></Packages>
    </div>
  );
};

export default Home;
