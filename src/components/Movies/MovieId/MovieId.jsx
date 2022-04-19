import React from "react";
import Card from "../../UI/Card/Card";

//Custom classes
import classes from "./MovieId.module.css";

const MovieId = ({ movieId }) => {
  return (
    <Card>
      <span className={classes.subheading}>ID</span>
      <p className={classes.movieId}>#{movieId}</p>
    </Card>
  );
};

export default MovieId;
