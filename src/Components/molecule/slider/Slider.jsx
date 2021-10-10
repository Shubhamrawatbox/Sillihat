import React, { useEffect, useState } from "react";
import { SliderData } from "../../Data/sliderdata";
import "./Slider.scss";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Slider = ({ slides }) => {
  const [current, setcurrent] = useState(0);
  const length = slides.length;
  const rightfunction = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };
  const leftfunction = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setcurrent(current === length - 1 ? 0 : current + 1);
  //   }, 3000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // });
  return (
    <div className="sliders">
      <RiArrowRightSLine className="arrow rightarrow" onClick={rightfunction} />
      <RiArrowLeftSLine className="arrow leftarrow" onClick={leftfunction} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={current === index ? `slide active ${slide.id}` : "slide"}
          >
            <div className="content">
              <div className="inner-content">
                <h1>{slide.heading}</h1>
                <p>{slide.para}</p>
              </div>
            </div>
            <img src={slide.image} alt="travel" key={index} className="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
