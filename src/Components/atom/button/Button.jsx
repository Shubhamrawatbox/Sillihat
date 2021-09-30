import React from "react";
import "./Button.scss";

const Button = ({ children, buttonsize }) => {
  const ButtonSize = ["btn-small", "btn-medium", "btn-big"];
  const checkButtonSize = ButtonSize.includes(buttonsize)
    ? buttonsize
    : ButtonSize[0];

  return <button className={`btn ${checkButtonSize}`}>{children}</button>;
};

export default Button;
