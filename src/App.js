import React from "react";

import Banner from "./Components/organism/Banner/Banner";
import FirstSection from "./Components/organism/FirstSection/FirstSection";

import Navbar from "./Components/organism/Navbar/Navbar";
import "./Sass/Global.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstSection />
    </>
  );
};

export default App;
