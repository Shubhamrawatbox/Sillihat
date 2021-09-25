import React from "react";
import './Heading.scss';

const Heading = ({ prop, Headsizes, Headcolors }) => {
  const HeadingSize = ["head-Big", "head-medium", "head-small"];
  const HeadColor = ["head-black", "head-white"];
  const checkHeadSize = HeadingSize.includes(Headsizes)
    ? Headsizes
    : "head-Big";
  const checkHeadcolor = HeadColor.includes(Headcolors)
    ? Headcolors
    : "head-black";
  return (
    <>
      <div className={`head ${checkHeadSize} ${checkHeadcolor}`}>
        <h2>{prop}</h2>
      </div>
    </>
  );
};

export default Heading;
