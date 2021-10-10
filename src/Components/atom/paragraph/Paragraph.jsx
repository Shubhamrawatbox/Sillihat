import React from "react";
import './paragraph.scss';

const Paragraph = ({ prop,bold,size,color,text }) => {
  const Bold = ["para-bold", "para-none"];
  const Size = ["para-big", "para-small"];
  const Color=['blackcolor','whitecolor','greycolor'];
  const Text=['aligncenter','alignleft'];
  const checkBold=Bold.includes(bold) ? bold : Bold[0];
  const checkSize=Size.includes(size) ? size : Size[0];
  const checkColor=Color.includes(color) ? color : Color[0];
  const checkText=Text.includes(text) ? text : Text[0];
  return (
    <div className="para">
      <p className={`${checkBold} ${checkSize} ${checkColor} ${checkText}`}>{prop}</p>
    </div>
  );
};

export default Paragraph;
