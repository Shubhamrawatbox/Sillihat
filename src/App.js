import React from "react";

import Banner from "./Components/organism/Banner/Banner";
import FirstSection from "./Components/organism/FirstSection/FirstSection";

import Navbar from "./Components/organism/Navbar/Navbar";
import Payment from "./Components/organism/Payment/Payment";
import Project from "./Components/organism/Project/Project";
import Service from "./Components/organism/Service/Service";
import "./Sass/Global.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstSection />
      <Project />
      <Service/>
      <Payment/>
    </>
  );
};

export default App;
