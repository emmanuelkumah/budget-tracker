import React from "react";
import "./Button.css";

//Style all the buttons
const STYLES = ["btn--primary", "btn--outline"];
//Style all button size
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
//button colors
const COLOR = ["primary", "blue", "red"];

//define button component
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  //check button style
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  //check if the button size includes the props
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor)
    ? buttonColor
    : COLOR[null];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
