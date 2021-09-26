import React from "react";
import Heading from "../../atom/heading/Heading";
import Paragraph from "../../atom/paragraph/Paragraph";
import Span from "../../atom/span/Span";
import "./Service.scss";
import { Carddata } from "../../Data/Carddata";

const Service = () => {
  return (
    <>
      <section className="service">
        <div className="service-content">
          <Heading prop="What We Offer." />
          <Paragraph
            prop="We provide end to end Software Development lifecycle from
requirements gathering to final product launch and everything in between."
            bold="para-none"
          />
        </div>
        <div className="about-service">
          <div className="box">
            {Carddata.map((data, index) => {
              return (
                <div className="innerbox" key={index}>
                  <div className="icons">{data.image}</div>
                  <div className="title">
                    <Span props={data.title} headsize="font-third" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
