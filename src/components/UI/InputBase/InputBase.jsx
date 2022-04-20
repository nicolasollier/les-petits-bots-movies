import React from "react";

//Custom classes
import classes from "./InputBase.module.css";

const InputBase = (props) => {
  return (
    <>
      <input
        className={
          !props.hasError ? classes["input"] : classes["input-hasError"]
        }
        type="text"
        placeholder={props.inputPlaceholder || "Please type here..."}
        value={props.inputValue}
        onChange={props.onInputChange}
      />
      {props.hasError && (
        <p className={classes["error-message"]}>
          This input should not be empty or contains more than 256 characters!
        </p>
      )}
    </>
  );
};

export default InputBase;
