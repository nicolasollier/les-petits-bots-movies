import React from "react";

//Custom classes
import classes from "./EditIcon.module.css";

const EditIcon = () => {
  return (
    <svg
      className={classes["edit-icn"]}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4237 2.58579C16.6427 1.80474 15.3764 1.80474 14.5953 2.58579L7.00952 10.1716V13H9.83794L17.4237 5.41421C18.2048 4.63316 18.2048 3.36683 17.4237 2.58579Z"
        fill="#111827"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.00952 6C2.00952 4.89543 2.90495 4 4.00952 4H8.00952C8.5618 4 9.00952 4.44772 9.00952 5C9.00952 5.55228 8.5618 6 8.00952 6H4.00952V16H14.0095V12C14.0095 11.4477 14.4572 11 15.0095 11C15.5618 11 16.0095 11.4477 16.0095 12V16C16.0095 17.1046 15.1141 18 14.0095 18H4.00952C2.90495 18 2.00952 17.1046 2.00952 16V6Z"
        fill="#111827"
      />
    </svg>
  );
};

export default EditIcon;
