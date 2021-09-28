import React from "react";

import Banner from "./components/organism/Banner/Banner";
import Clients from "./components/organism/Clients/Clients";
import FirstSection from "./components/organism/FirstSection/FirstSection";

import Navbar from "./components/organism/Navbar/Navbar";
import Payment from "./components/organism/Payment/Payment";
import Project from "./components/organism/Project/Project";
import Service from "./components/organism/Service/Service";
import Team from "./components/organism/Team/Team";
import Technology from "./components/organism/Technology/Technology";
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
      <Technology/>
      <Team/>
      <Clients/>
    </>
  );
};

export default App;
