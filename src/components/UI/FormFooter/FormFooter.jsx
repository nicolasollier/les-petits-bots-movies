import React from "react";

//Custom classes
import classes from "./FormFooter.module.css";

const FormFooter = (props) => {
  return <div className={classes["form-footer"]}>{props.children}</div>;
};

export default FormFooter;
