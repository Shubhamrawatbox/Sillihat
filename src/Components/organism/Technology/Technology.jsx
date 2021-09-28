import React from "react";
import Heading from "../../atom/heading/Heading";

import PhotoTechnology from "../../molecule/photo-technology/PhotoTechnology";
import "./Technology.scss";

const Technology = () => {
  return (
    <section className="technology">
      <Heading prop="Technology" Headsizes="head-medium" />
      <PhotoTechnology />
    </section>
  );
};

export default Technology;
