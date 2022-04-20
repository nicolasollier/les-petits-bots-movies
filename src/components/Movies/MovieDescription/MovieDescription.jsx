import React from "react";
import Card from "../../UI/Card/Card";

//Components
import EditIcon from "../../UI/EditIcon/EditIcon";

//Custom classes
import classes from "./MovieDescription.module.css";

const MovieDescription = ({ movieDescription }) => {
  return (
    <Card>
      <EditIcon />
      <span className={classes.subheading}>Description</span>
      <p className={classes.movieDescription}>#{movieDescription}</p>
    </Card>
  );
};

export default MovieDescription;
