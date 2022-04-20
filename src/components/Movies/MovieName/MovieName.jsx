import React, { useState } from "react";
import Card from "../../UI/Card/Card";

//Components
import EditIcon from "../../UI/EditIcon/EditIcon";

//Custom classes
import classes from "./MovieName.module.css";

const MovieName = ({ movieName }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Card>
      <EditIcon />
      {console.log(isEditable)}
      <span className={classes.subheading}>Titre</span>
      <p className={classes.movieName}>#{movieName}</p>
    </Card>
  );
};

export default MovieName;
