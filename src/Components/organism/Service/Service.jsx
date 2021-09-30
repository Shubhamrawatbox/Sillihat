import React from "react";
import Heading from "../../atom/heading/Heading";
import Paragraph from "../../atom/paragraph/Paragraph";
import Card from "../../molecule/cards/Card";

import "./Service.scss";


const Service = () => {
  
  return (
    <>
      <section className="service" id="service">
        <div className="service-content">
          <Heading prop="What We Offer." />
          <Paragraph
            prop="We provide end to end Software Development lifecycle from
requirements gathering to final product launch and everything in between."
            bold="para-none"
          />
        </div>
        <div className="about-service">
          <Card/>
        </div>
      </section>
    </>
  );
};

export default Service;
