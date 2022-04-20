import React from "react";

//Custom classes
import classes from "./FormControl.module.css";

const FormControl = ({
  label,
  inputPlaceholder,
  inputValue,
  onInputChange,
  hasError,
}) => {
  return (
    <div className={classes["form-control"]}>
      <label>{label}</label>
      <input
        className={
          !hasError ? classes["name-input"] : classes["name-input-failed"]
        }
        type="text"
        placeholder={inputPlaceholder || "Please type here..."}
        value={inputValue}
        onChange={onInputChange}
      />
      {hasError && (
        <p className={classes["error-message"]}>
          This input should not be empty and greater than 256 characters!
        </p>
      )}
    </div>
  );
};

export default FormControl;
