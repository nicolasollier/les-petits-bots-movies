import React from "react";

//Custom classes
import classes from "./FormControl.module.css";

const FormControl = ({ label, placeholder }) => {
  return (
    <div className={classes["form-control"]}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder || "Please type here..."} />
    </div>
  );
};

export default FormControl;
