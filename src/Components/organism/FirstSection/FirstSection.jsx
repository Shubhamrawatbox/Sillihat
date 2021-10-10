import React from "react";
import Heading from "../../atom/heading/Heading";
import Paragraph from "../../atom/paragraph/Paragraph";
import "./Firstsection.scss";

const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="first-content">
        <Heading
          prop="We build Software Solutions for
        the Present and the Future."
        />
        <Paragraph
          prop="Our team with experience of building and maintaining some of the most complex software
will work shoulder to shoulder with your teams to build a and scalable product."
          bold="para-bold"
          size="para-small"
        />
      </div>
    </div>
  );
};

export default FirstSection;
