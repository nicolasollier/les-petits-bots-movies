import React from "react";

//Custom classes
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes["form-button"]}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
