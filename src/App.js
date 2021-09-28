import React from "react";

import Banner from "./Components/organism/Banner/Banner";
import Clients from "./Components/organism/Clients/Clients";
import FirstSection from "./Components/organism/FirstSection/FirstSection";

import Navbar from "./Components/organism/Navbar/Navbar";
import Payment from "./Components/organism/Payment/Payment";
import Project from "./Components/organism/Project/Project";
import Service from "./Components/organism/Service/Service";
import Team from "./Components/organism/Team/Team";
import Technology from "./Components/organism/Technology/Technology";
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
