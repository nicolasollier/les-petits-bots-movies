import React from "react";

//Custom classes
import classes from "./FormControl.module.css";

const FormControl = (props) => {
  return (
    <div className={classes["form-control"]}>
      <label>{props.label}</label>
      {props.children}
    </div>
  );
};

export default FormControl;
