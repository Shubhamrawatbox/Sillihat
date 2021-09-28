import React from "react";
import './Heading.scss';

const Heading = ({ prop, Headsizes, Headcolors,after,headalign }) => {
  const HeadingSize = ["head-Big", "head-medium", "head-small"];
  const HeadColor = ["head-black", "head-white"];
  const After=['whiteAfter','blackAfter'];
  const HeadAlign=['center','left'];
  const checkHeadSize = HeadingSize.includes(Headsizes)
    ? Headsizes
    : HeadingSize[0];
  const checkHeadcolor = HeadColor.includes(Headcolors)
    ? Headcolors
    : HeadColor[0];
    const checkAfter=After.includes(after) ? after : After[0];
    const checkAlign=HeadAlign.includes(headalign) ? headalign : HeadAlign[0];
  return (
    <>
      <div className={`head ${checkHeadSize} ${checkHeadcolor} ${checkAfter} ${checkAlign}`}>
        <h2>{prop}</h2>
      </div>
    </>
  );
};

export default Heading;
