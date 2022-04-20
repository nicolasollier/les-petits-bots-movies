import React from "react";

//Custom Classes
import classes from "./InputTextArea.module.css";

const InputTextArea = (props) => {
  return (
    <>
      <textarea
        className={
          !props.hasError ? classes["text-area"] : classes["text-area-hasError"]
        }
        type="text"
        placeholder={props.inputPlaceholder || "Please type here..."}
        value={props.inputValue}
        onChange={props.onInputChange}
      />
      <span className={classes["charlimit"]}>
        {props.inputValue.length} / 2000
      </span>
      {props.hasError && (
        <p className={classes["error-message"]}>
          This input should not be empty and greater than 2000 characters!
        </p>
      )}
    </>
  );
};

export default InputTextArea;
