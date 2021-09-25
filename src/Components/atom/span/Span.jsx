import React from "react";
import "./Span.scss";

const Span = ({ props, headsize, headweight }) => {
  const Size = ["font-primary", "font-secondary", "font-third"];
  const Weight = ["weight-primary", "weight-secondary"];
  const checkSize = Size.includes(headsize) ? headsize : Size[0];
  const checkWeight = Weight.includes(headweight) ? headweight : Weight[0];
  return (
    <>
      <span className={`${checkSize} ${checkWeight}`}>{props}</span>
    </>
  );
};


export default Span;