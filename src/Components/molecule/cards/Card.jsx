import React from "react";
import Span from "../../atom/span/Span";
import { Carddata } from "../../Data/Carddata";

const Card = () => {
  return (
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
  );
};

export default Card;
