import React from "react";

//Custom classes
import classes from "./Input.module.css";

const Input = ({ label, placeholder }) => {
  return (
    <div className={classes.input}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder || "Please type here..."} />
    </div>
  );
};

export default Input;
